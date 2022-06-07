# TsPipe

Simplify data transformations and debugging - ts-pipe is a type-safe implementation of a pipeline in TS.

**TsPipe is literally a thin wrapper around native JS promises. No 400 IQ code here.**

In simplest terms, you should use normal chaining when you can... But when you can't, instead of writing a separate function or defining local constants at every step, just pipe the value. You can save pipes into variables or return them from functions and as such compose them into other pipes.

The pipeline pattern is supposed to **visually streamline** the flow of data transformations. Its a tool, not a religion. Sometimes it works out, sometimes not.

## Usage Examples

**Naming arguments**

We're working with annonymous functions here. So our choice of `_` is completely randomly selected. In fact, we ourselves, personally often use `$` or `__` instead! Remember, the GOAL of pipelines is readability, so there are cases where the simplest solution is just to give the argument a real name!

```typescript
pipe(
  "1, 2, 3",
  (__) => waitForSeconds(__, 30),
  ($) => $.split(", "),
  (explodedList) => explodedList.map((i) => parseInt(i))
);
```

**I need more arguments, mom!**

The rule of thumb in functional languages is, that you don't. "A pipeline must always start with an atomic literal value." What you can do instead is bend the rules - pass an array or an object.

```typescript
pipe(
  {goals: 12, shots: 17}
  ({ goals, shots }) => shots / goals,
  ($) => $.toFixed(2),
  parseFloat
);
```

**Data transformations**

Use stdlib with slight transformations and returns where stdlib falls short. No reason to declare transient/inline single-use variables.

```typescript
pipe(
  "1, 2, 3",
  (_) => _.split(", "),
  (_) => _.map((i) => parseInt(i)),
  (_) => _.map((i) => i * 2),
  console_log,
  (_) => _.map((i) => i.toString()),
  (_) => {
    _.push("end");
    return _;
  },
  (_) => _.join("-")
);
```

**Auto-resolves promises**

Pipelines visualize data transformations, and as such, they enforce await on every single step. This means that you don't have to define async/await steps. You just await for the whole pipe, once.

```typescript
await pipe(
  "1, 2, 3",
  ($) => waitForSeconds($, 30),
  ($) => $.split(", ")
);

// ["1", "2", "3"]
```

**Downloading a file via Axios**
Break down the pyramids. Everything in the pipeline awaits one another, so any blocking operations will be resolved before taking the next step.

```typescript
await pipe(
  axios({
    url: "https://loremflickr.com/320/240/cat",
    method: "get",
    responseType: "stream",
  }),
  (resp) =>
    pipe(path.resolve("./cat.jpg"), fs.createWriteStream, resp.data.pipe)
);
```

**Pipes as promises**

The first thing pipelines do, is to create a promise from the literal data you provided. This means you can chain `then`'s onto them :), or await for them. All three statements below will pass tests.

```typescript
pipe(
  1,
  (_) => _ + 1,
  (_) => _ + 1
).then((_) => {
  expect(_).toBe(3);
});

pipe(
  1,
  (_) => _ + 1,
  (_) => _ + 1,
  (_) => expect(_).toBe(3)
);

const res = await pipe(
  1,
  (_) => _ + 1,
  (_) => _ + 1
);
expect(res).toBe(3);
```

**Long-haul vehicles**

Some pipes are just too long. The author of this package got tired of writing boilerplate to support pipes longer than 12 steps. But, all is not lost! You can open a PR! Or, just put your pipe inside of another pipe!

```typescript
pipe(
  1,
  (_) => _ + 1,
  (_) => _ + 1,
  (_) =>
    pipe(
      _,
      (_) => _ + 1,
      (_) => _ + 1,
      (_) => _ + 1
    ),
  (_) => _ + 1,
  (_) => _ + 1
);
```
