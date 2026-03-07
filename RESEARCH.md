# TsPipe: Research Report & Modernization Proposals

## 1. Current Implementation Analysis

Your library takes a clean, zero-dependency approach: **overloaded function signatures** (up to 12 steps) with direct nested invocation for sync (`f3(f2(f1(input)))`) and sequential `await` for async (`await f3(await f2(await f1(input)))`).

**What works well:**
- Zero runtime dependencies, tiny footprint
- Full type inference through the chain via generic overloads
- `Awaited<T>` usage in `pipeAsync` automatically unwraps promises between steps

**Pain points you identified:**
1. Separate `pipe` / `pipeAsync` — mixing sync and async in one chain is awkward
2. Performance concerns around deep chains vs Elixir's BEAM

---

## 2. The Sync/Async Problem — What Can Be Done

### 2a. Unified `pipe` with automatic async detection

The core idea: a single `pipe()` that checks at runtime whether any step returned a `Promise`, and switches to async mode on-the-fly. The type system would express this with conditional return types.

```typescript
type MaybeAsync<T> = T | Promise<T>;

// Simplified concept — if any step returns Promise, the whole pipe returns Promise
type PipeReturn<Fns extends Function[]> =
  HasAsyncStep<Fns> extends true ? Promise<LastReturn<Fns>> : LastReturn<Fns>;
```

**Implementation sketch:**

```typescript
function pipe(input, ...fns) {
  let result = input;
  for (const fn of fns) {
    if (result instanceof Promise) {
      // Once async, stay async
      result = result.then(fn);
    } else {
      result = fn(result);
      // If this step returned a Promise, subsequent steps chain off it
    }
  }
  return result;
}
```

**Tradeoff:** The return type becomes `T | Promise<T>`, which forces callers to handle both cases (or always `await`). This is the exact problem you noted in your code comment at `pipe.ts:132`:

> "I have played around with the idea of using Promise as a base... but the syntax is uglier and everything has to be awaited."

**Recommendation:** Keep the two-function approach (`pipe` / `pipeAsync`), but consider a third export — `pipeAuto` — that unifies them. Users who want the cleanest sync-only code keep using `pipe()`. Users who want "just make it work" use `pipeAuto()`. This avoids forcing the `await` tax on purely synchronous pipelines.

### 2b. TypeScript 6.0 & upcoming inference improvements

TypeScript 6.0 (released early 2026) improved **method syntax inference in generic contexts** — methods now resolve correctly regardless of property order. This helps libraries like yours where the compiler previously struggled with certain generic resolution patterns.

However, there is **no variadic generic pipe typing** — the overload-per-arity approach you're using remains the standard technique. Libraries like `fp-ts`, `Effect`, and `remeda` all do the same thing. This is not a limitation of your code; it's a limitation of TypeScript's type system.

**TypeScript 7.0** (native Go port, in development) promises dramatically faster type checking, which would reduce the DX cost of heavy overloads, but won't change the fundamental typing story.

---

## 3. The TC39 Pipe Operator — Where It Stands

### Current status: **Stage 2** (as of late 2025)

The TC39 committee chose **Hack-style pipes** over the F#-style that would be more natural for your library's pattern. The syntax uses a topic token (likely `^` or `%`, not yet finalized):

```javascript
// Hack-style pipe (TC39 Stage 2)
const result = input
  |> doSomething(^)
  |> transform(^, extraArg)
  |> console.log(^);
```

Compare with what Elixir does:

```elixir
# Elixir pipe — implicit first argument
result = input
  |> do_something()
  |> transform(extra_arg)
  |> IO.inspect()
```

**Key differences from your library's approach:**
- Hack pipes are **expression-based**, not function-composition-based. Each step is an arbitrary expression where `^` (the "topic token") represents the previous value
- This means you can do things like `value |> ^.foo |> ^[0]` — property access, indexing, etc., not just function calls
- No implicit first-argument threading like Elixir — you always write `^` explicitly

### Can you use it today?

Yes, via **Babel**:

```json
{
  "plugins": [
    ["@babel/plugin-proposal-pipeline-operator", {
      "proposal": "hack",
      "topicToken": "%"
    }]
  ]
}
```

### Should you rely on it?

**Not yet for production.** Stage 2 means the committee thinks the problem is worth solving, but the syntax and semantics can still change significantly. The topic token hasn't been finalized. TypeScript does **not** support pipe operator syntax natively, and there's no indication it will until TC39 reaches Stage 3+.

### Related: `Function.pipe` / `Function.flow` proposal

There was a separate TC39 proposal ([`proposal-function-pipe-flow`](https://github.com/tc39/proposal-function-pipe-flow)) to standardize helper functions:

```javascript
const result = Function.pipe(input, f1, f2, f3);
const composed = Function.flow(f1, f2, f3);
```

This is essentially what your library already provides. However, **this proposal was rejected for Stage 1** at a July 2021 TC39 plenary, so it is unlikely to land as a native feature. That said, your API signature still aligns with what was proposed, and if the conversation ever reopens, your library would be well-positioned as a typed polyfill.

---

## 4. Performance: Tail Calls, Deep Chains, and Reality

### Does JavaScript have tail call optimization?

**Effectively, no.**

- **ES2015 spec** includes Proper Tail Calls (PTC)
- **Safari/JavaScriptCore** is the **only** engine that implements it (using a "ShadowChicken" algorithm for debug stack reconstruction)
- **V8 (Chrome, Node, Deno)** explicitly refused to implement it — citing debugging difficulty and performance neutrality
- **SpiderMonkey (Firefox)** also does not implement it
- A TC39 proposal for explicit syntactic tail calls (`continue` keyword) has stalled

### Does this actually matter for your library?

**No, and here's why:**

Your pipe implementation is **not recursive**. Elixir pipes aren't recursive either — the `|>` operator is a compile-time transformation that rewrites `a |> f()` into `f(a)`. There is no recursion, no growing call stack.

Your `pipe` function does the same thing — `f3(f2(f1(input)))` is **3 stack frames deep**, regardless of how many steps are in the chain. With 12 steps, you're 12 frames deep. That's nothing. JavaScript engines handle call stacks of thousands of frames without issue.

The concern about tail recursion would apply if you were implementing something like Elixir's `Enum.reduce` with deep recursion, but for pipe composition, **the performance characteristics are identical to Elixir's**. The BEAM's tail call optimization doesn't help here because pipes don't recurse.

### Actual performance considerations

1. **Your sync pipe is essentially zero-overhead.** `f3(f2(f1(input)))` compiles to exactly what you'd write by hand. V8's JIT compiler will inline small functions aggressively.

2. **Your async pipe has the inherent cost of `await`** — each `await` yields to the microtask queue. This is unavoidable for any async pipeline and is the same cost you'd pay writing the awaits by hand.

3. **The overload dispatch** (checking which `pipeN` to call) adds a trivial runtime cost on first invocation. V8's inline caches will optimize subsequent calls.

**Bottom line:** Your library's performance is production-ready. The pipe pattern in JS/TS does not have the stack-depth problems that recursive algorithms do.

---

## 5. Concrete Proposals for Modernization

### Proposal A: Unified pipe with `pipeAuto` (Low effort, high value)

Add a third export that accepts both sync and async steps:

```typescript
export function pipeAuto<A, R>(input: A, ...fns: Function[]): R | Promise<R> {
  let result: any = input;
  for (const fn of fns) {
    result = result instanceof Promise ? result.then(fn) : fn(result);
  }
  return result;
}
```

Type it with overloads similar to your existing ones but using conditional return types. Keep `pipe` and `pipeAsync` as the "precise" variants.

### Proposal B: Reduce boilerplate with code generation (Medium effort)

The 388-line `pipe.ts` and 444-line `pipeAsync.ts` are almost entirely mechanical overloads. Generate them from a template:

```typescript
// scripts/generate-overloads.ts
for (let i = 1; i <= 20; i++) {
  // Generate type signature
  // Generate implementation
}
```

This would let you raise the limit from 12 to 20+ steps trivially, and keep the code maintainable.

### Proposal C: Error handling with `pipeResult` (Medium effort, production-critical)

For production use, consider a variant that wraps each step in try/catch and returns a `Result<T, Error>` type:

```typescript
const result = pipeResult(
  rawInput,
  validate,       // might throw
  transform,      // might throw
  persist         // might throw
);
// result: { ok: true, value: T } | { ok: false, error: Error }
```

This is similar to Elixir's `with` construct and Railway-Oriented Programming. It's one of the most-requested features for production pipe usage.

### Proposal D: API alignment note

Your current signature `pipe(input, f1, f2, ...)` already matches the (rejected) TC39 `Function.pipe` proposal shape. If the conversation ever reopens in TC39, you'd be well-positioned. No action needed here — just worth noting your API is already the "standard" shape.

### Proposal E: Upgrade TypeScript and tooling (Low effort)

Your `package.json` pins TypeScript `^5.1.6` and ESLint `^8.44.0`. Consider:
- TypeScript 6.0 — better generic inference benefits your overloads
- ESLint 9.x — flat config, better performance
- Vitest over Jest — faster, native TypeScript support, no `ts-jest` needed

---

## 6. Summary & Recommendation

| Concern | Finding |
|---|---|
| Sync/async mixing | Keep separate `pipe`/`pipeAsync`; optionally add `pipeAuto` |
| Performance / TCO | **Non-issue.** Pipes aren't recursive. Your impl is zero-overhead. |
| TC39 pipe operator | Stage 2, Hack-style. Not ready for production. Don't wait for it. |
| TypeScript improvements | TS 6.0 helps generics but doesn't change the overload approach |
| 12-step limit | Use code generation to raise to 20+ |
| Production readiness | Add error handling (`pipeResult`) and you're there |

**The core approach you chose — typed overloads with direct function composition — is the right one.** It's what the best FP libraries in the TypeScript ecosystem use. The main gaps for production are error handling and the sync/async ergonomics, both of which are solvable without changing the architecture.
