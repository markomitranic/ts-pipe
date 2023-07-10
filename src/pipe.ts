type Overloads = {
  // 1
  <A, R1>(input: A, f1: (args: A) => R1): R1;
  // 2
  <A, R1, R2>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2
  ): R1 & R2 extends Promise<unknown> ? Promise<R2> : R2;
  // 3
  <A, R1, R2, R3>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3
  ): R1 & R2 & R3 extends Promise<unknown> ? Promise<R3> : R3;
  // 4
  <A, R1, R2, R3, R4>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3,
    f4: (args: R3) => R4
  ): R1 & R2 & R3 & R4 extends Promise<unknown> ? Promise<R4> : R4;
  // 5
  <A, R1, R2, R3, R4, R5>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3,
    f4: (args: R3) => R4,
    f5: (args: R4) => R5
  ): R1 & R2 & R3 & R4 & R5 extends Promise<unknown> ? Promise<R5> : R5;
  // 6
  <A, R1, R2, R3, R4, R5, R6>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3,
    f4: (args: R3) => R4,
    f5: (args: R4) => R5,
    f6: (args: R5) => R6
  ): R1 & R2 & R3 & R4 & R5 & R6 extends Promise<unknown> ? Promise<R6> : R6;
  // 7
  <A, R1, R2, R3, R4, R5, R6, R7>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3,
    f4: (args: R3) => R4,
    f5: (args: R4) => R5,
    f6: (args: R5) => R6,
    f7: (args: R6) => R7
  ): R1 & R2 & R3 & R4 & R5 & R6 & R7 extends Promise<unknown>
    ? Promise<R7>
    : R7;
  // 8
  <A, R1, R2, R3, R4, R5, R6, R7, R8>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3,
    f4: (args: R3) => R4,
    f5: (args: R4) => R5,
    f6: (args: R5) => R6,
    f7: (args: R6) => R7,
    f8: (args: R7) => R8
  ): R1 & R2 & R3 & R4 & R5 & R6 & R7 & R8 extends Promise<unknown>
    ? Promise<R8>
    : R8;
  // 9
  <A, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3,
    f4: (args: R3) => R4,
    f5: (args: R4) => R5,
    f6: (args: R5) => R6,
    f7: (args: R6) => R7,
    f8: (args: R7) => R8,
    f9: (args: R8) => R9
  ): R1 & R2 & R3 & R4 & R5 & R6 & R7 & R8 & R9 extends Promise<unknown>
    ? Promise<R9>
    : R9;
  // 10
  <A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3,
    f4: (args: R3) => R4,
    f5: (args: R4) => R5,
    f6: (args: R5) => R6,
    f7: (args: R6) => R7,
    f8: (args: R7) => R8,
    f9: (args: R8) => R9,
    f10: (args: R9) => R10
  ): R1 & R2 & R3 & R4 & R5 & R6 & R7 & R8 & R9 & R10 extends Promise<unknown>
    ? Promise<R10>
    : R10;
  // 11
  <A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3,
    f4: (args: R3) => R4,
    f5: (args: R4) => R5,
    f6: (args: R5) => R6,
    f7: (args: R6) => R7,
    f8: (args: R7) => R8,
    f9: (args: R8) => R9,
    f10: (args: R9) => R10,
    f11: (args: R10) => R11
  ): R1 &
    R2 &
    R3 &
    R4 &
    R5 &
    R6 &
    R7 &
    R8 &
    R9 &
    R10 &
    R11 extends Promise<unknown>
    ? Promise<R11>
    : R11;
  // 12
  <A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3,
    f4: (args: R3) => R4,
    f5: (args: R4) => R5,
    f6: (args: R5) => R6,
    f7: (args: R6) => R7,
    f8: (args: R7) => R8,
    f9: (args: R8) => R9,
    f10: (args: R9) => R10,
    f11: (args: R10) => R11,
    f12: (args: R11) => R12
  ): R1 &
    R2 &
    R3 &
    R4 &
    R5 &
    R6 &
    R7 &
    R8 &
    R9 &
    R10 &
    R11 &
    R12 extends Promise<unknown>
    ? Promise<R12>
    : R12;
};

/**
 * The implementation seems basic, but is in fact what the big boys like
 * `fp-ts` are doing. Pure and simple value composition, no magic here
 * just a bit of type algebra.
 *
 * @see https://github.com/gcanti/fp-ts/blob/master/src/function.ts#L651
 *
 * I have played around with the idea of using `Promise` as a base,
 * and it worked flawlessly, without any type algebra, but the syntax is uglier
 * and everything has to be ed, even when there are no `async` functions.
 */
abstract class Pipe {
  public static pipe: Overloads = <
    A,
    R1,
    R2,
    R3,
    R4,
    R5,
    R6,
    R7,
    R8,
    R9,
    R10,
    R11,
    R12,
  >(
    input: A,
    f1: (args: A) => R1,
    f2?: (args: R1) => R2,
    f3?: (args: R2) => R3,
    f4?: (args: R3) => R4,
    f5?: (args: R4) => R5,
    f6?: (args: R5) => R6,
    f7?: (args: R6) => R7,
    f8?: (args: R7) => R8,
    f9?: (args: R8) => R9,
    f10?: (args: R9) => R10,
    f11?: (args: R10) => R11,
    f12?: (args: R11) => R12
  ): R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12 => {
    if (f2 && f3 && f4 && f5 && f6 && f7 && f8 && f9 && f10 && f11 && f12)
      return Pipe.pipe12(
        input,
        f1,
        f2,
        f3,
        f4,
        f5,
        f6,
        f7,
        f8,
        f9,
        f10,
        f11,
        f12
      );
    if (f2 && f3 && f4 && f5 && f6 && f7 && f8 && f9 && f10 && f11)
      return Pipe.pipe11(input, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11);
    if (f2 && f3 && f4 && f5 && f6 && f7 && f8 && f9 && f10)
      return Pipe.pipe10(input, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10);
    if (f2 && f3 && f4 && f5 && f6 && f7 && f8 && f9)
      return Pipe.pipe9(input, f1, f2, f3, f4, f5, f6, f7, f8, f9);
    if (f2 && f3 && f4 && f5 && f6 && f7 && f8)
      return Pipe.pipe8(input, f1, f2, f3, f4, f5, f6, f7, f8);

    if (f2 && f3 && f4 && f5 && f6 && f7)
      return Pipe.pipe7(input, f1, f2, f3, f4, f5, f6, f7);
    if (f2 && f3 && f4 && f5 && f6)
      return Pipe.pipe6(input, f1, f2, f3, f4, f5, f6);
    if (f2 && f3 && f4 && f5) return Pipe.pipe5(input, f1, f2, f3, f4, f5);
    if (f2 && f3 && f4) return Pipe.pipe4(input, f1, f2, f3, f4);
    if (f2 && f3) return Pipe.pipe3(input, f1, f2, f3);
    if (f2) return Pipe.pipe2(input, f1, f2);
    return Pipe.pipe1(input, f1);
  };

  private static pipe1 = <A, R1>(input: A, f1: (args: A) => R1): R1 =>
    f1(input);

  private static pipe2 = <A, R1, R2>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2
  ): R2 => f2(f1(input));

  private static pipe3 = <A, R1, R2, R3>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3
  ): R3 => f3(f2(f1(input)));

  private static pipe4 = <A, R1, R2, R3, R4>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3,
    f4: (args: R3) => R4
  ): R4 => f4(f3(f2(f1(input))));

  private static pipe5 = <A, R1, R2, R3, R4, R5>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3,
    f4: (args: R3) => R4,
    f5: (args: R4) => R5
  ): R5 => f5(f4(f3(f2(f1(input)))));

  private static pipe6 = <A, R1, R2, R3, R4, R5, R6>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3,
    f4: (args: R3) => R4,
    f5: (args: R4) => R5,
    f6: (args: R5) => R6
  ): R6 => f6(f5(f4(f3(f2(f1(input))))));

  private static pipe7 = <A, R1, R2, R3, R4, R5, R6, R7>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3,
    f4: (args: R3) => R4,
    f5: (args: R4) => R5,
    f6: (args: R5) => R6,
    f7: (args: R6) => R7
  ): R7 => f7(f6(f5(f4(f3(f2(f1(input)))))));

  private static pipe8 = <A, R1, R2, R3, R4, R5, R6, R7, R8>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3,
    f4: (args: R3) => R4,
    f5: (args: R4) => R5,
    f6: (args: R5) => R6,
    f7: (args: R6) => R7,
    f8: (args: R7) => R8
  ): R8 => f8(f7(f6(f5(f4(f3(f2(f1(input))))))));

  private static pipe9 = <A, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3,
    f4: (args: R3) => R4,
    f5: (args: R4) => R5,
    f6: (args: R5) => R6,
    f7: (args: R6) => R7,
    f8: (args: R7) => R8,
    f9: (args: R8) => R9
  ): R9 => f9(f8(f7(f6(f5(f4(f3(f2(f1(input)))))))));

  private static pipe10 = <A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3,
    f4: (args: R3) => R4,
    f5: (args: R4) => R5,
    f6: (args: R5) => R6,
    f7: (args: R6) => R7,
    f8: (args: R7) => R8,
    f9: (args: R8) => R9,
    f10: (args: R9) => R10
  ): R10 => f10(f9(f8(f7(f6(f5(f4(f3(f2(f1(input))))))))));

  private static pipe11 = <A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3,
    f4: (args: R3) => R4,
    f5: (args: R4) => R5,
    f6: (args: R5) => R6,
    f7: (args: R6) => R7,
    f8: (args: R7) => R8,
    f9: (args: R8) => R9,
    f10: (args: R9) => R10,
    f11: (args: R10) => R11
  ): R11 => f11(f10(f9(f8(f7(f6(f5(f4(f3(f2(f1(input)))))))))));

  private static pipe12 = <
    A,
    R1,
    R2,
    R3,
    R4,
    R5,
    R6,
    R7,
    R8,
    R9,
    R10,
    R11,
    R12,
  >(
    input: A,
    f1: (args: A) => R1,
    f2: (args: R1) => R2,
    f3: (args: R2) => R3,
    f4: (args: R3) => R4,
    f5: (args: R4) => R5,
    f6: (args: R5) => R6,
    f7: (args: R6) => R7,
    f8: (args: R7) => R8,
    f9: (args: R8) => R9,
    f10: (args: R9) => R10,
    f11: (args: R10) => R11,
    f12: (args: R11) => R12
  ): R12 => f12(f11(f10(f9(f8(f7(f6(f5(f4(f3(f2(f1(input))))))))))));
}

/**
 * Allows us to apply step-by-step transformations on a value
 * with easy debugging access between steps and without naming concerns.
 *
 * **Warning:** All the steps must return a value. The maximum is 12 steps.
 * You can easily pipe pipes together if you need more than 12.
 *
 * @see https://github.com/markomitranic/ts-pipe/blob/main/README.md

 * @example
 * // Basic example
 * pipe("1, 2, 3", myFunc, consoleLog, (_) => _.join("-"))
 *
 * // Variables can have any or no names
 * pipe(
 *  "1, 2, 3",
 *  (__) => myFunc(__, 30),
 *  ($) => $.split(", "),
 *  (explodedList) => explodedList.map((i) => parseInt(i))
 * )
 *
 * // Use with async
 * await pipe("1, 2, 3", waitFor, async (a) => (await a).split(","));
 *
 * // You can freely use async steps and sub-pipes
 * await pipe(
 *  {
 *    url: "https://loremflickr.com/320/240/cat",
 *    responseType: "stream",
 *  },
 *  axios,
 *  async (resp) => pipe(path.resolve("./cat.jpg"), fs.createWriteStream, await (resp).data.pipe)
 * );
 * 
 * @example
 * 
 * ## Async operations:
 * The `pipe` works the same when you mix in any async steps:
 * ```ts
 * await pipe("1, 2, 3", waitForA, async (a) => (await a).split(","));
 * ```
 * While it works, any step after an async step will receive a promise,
 * and has to be async. Which can get ugly. There is a `pipeAsync` 
 * that is better suited for this job as it automatically awaits between 
 * each step:
 * ```ts
 * await pipeAsync("1, 2, 3", waitForA, (a) => a.split(","));
 * ```
 */
export const pipe = Pipe.pipe;
