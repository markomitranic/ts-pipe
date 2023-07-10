type Overloads = {
  // 1
  <A, R1>(input: A, f1: (args: A) => Promise<R1> | R1): Promise<R1>;
  // 2
  <A, R1, R2>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2
  ): Promise<R2>;
  // 3
  <A, R1, R2, R3>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3
  ): Promise<R3>;
  // 4
  <A, R1, R2, R3, R4>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3,
    f4: (args: Awaited<R3>) => Promise<R4> | R4
  ): Promise<R4>;
  // 5
  <A, R1, R2, R3, R4, R5>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3,
    f4: (args: Awaited<R3>) => Promise<R4> | R4,
    f5: (args: Awaited<R4>) => Promise<R5> | R5
  ): Promise<R5>;
  // 6
  <A, R1, R2, R3, R4, R5, R6>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3,
    f4: (args: Awaited<R3>) => Promise<R4> | R4,
    f5: (args: Awaited<R4>) => Promise<R5> | R5,
    f6: (args: Awaited<R5>) => Promise<R6> | R6
  ): Promise<R6>;
  // 7
  <A, R1, R2, R3, R4, R5, R6, R7>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3,
    f4: (args: Awaited<R3>) => Promise<R4> | R4,
    f5: (args: Awaited<R4>) => Promise<R5> | R5,
    f6: (args: Awaited<R5>) => Promise<R6> | R6,
    f7: (args: Awaited<R6>) => Promise<R7> | R7
  ): Promise<R7>;
  // 8
  <A, R1, R2, R3, R4, R5, R6, R7, R8>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3,
    f4: (args: Awaited<R3>) => Promise<R4> | R4,
    f5: (args: Awaited<R4>) => Promise<R5> | R5,
    f6: (args: Awaited<R5>) => Promise<R6> | R6,
    f7: (args: Awaited<R6>) => Promise<R7> | R7,
    f8: (args: Awaited<R7>) => Promise<R8> | R8
  ): Promise<R8>;
  // 9
  <A, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3,
    f4: (args: Awaited<R3>) => Promise<R4> | R4,
    f5: (args: Awaited<R4>) => Promise<R5> | R5,
    f6: (args: Awaited<R5>) => Promise<R6> | R6,
    f7: (args: Awaited<R6>) => Promise<R7> | R7,
    f8: (args: Awaited<R7>) => Promise<R8> | R8,
    f9: (args: Awaited<R8>) => Promise<R9> | R9
  ): Promise<R9>;
  // 10
  <A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3,
    f4: (args: Awaited<R3>) => Promise<R4> | R4,
    f5: (args: Awaited<R4>) => Promise<R5> | R5,
    f6: (args: Awaited<R5>) => Promise<R6> | R6,
    f7: (args: Awaited<R6>) => Promise<R7> | R7,
    f8: (args: Awaited<R7>) => Promise<R8> | R8,
    f9: (args: Awaited<R8>) => Promise<R9> | R9,
    f10: (args: Awaited<R9>) => Promise<R10> | R10
  ): Promise<R10>;
  // 11
  <A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3,
    f4: (args: Awaited<R3>) => Promise<R4> | R4,
    f5: (args: Awaited<R4>) => Promise<R5> | R5,
    f6: (args: Awaited<R5>) => Promise<R6> | R6,
    f7: (args: Awaited<R6>) => Promise<R7> | R7,
    f8: (args: Awaited<R7>) => Promise<R8> | R8,
    f9: (args: Awaited<R8>) => Promise<R9> | R9,
    f10: (args: Awaited<R9>) => Promise<R10> | R10,
    f11: (args: Awaited<R10>) => Promise<R11> | R11
  ): Promise<R11>;
  // 12
  <A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12>(
    input: A,
    f1: (args: A) => R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3,
    f4: (args: Awaited<R3>) => Promise<R4> | R4,
    f5: (args: Awaited<R4>) => Promise<R5> | R5,
    f6: (args: Awaited<R5>) => Promise<R6> | R6,
    f7: (args: Awaited<R6>) => Promise<R7> | R7,
    f8: (args: Awaited<R7>) => Promise<R8> | R8,
    f9: (args: Awaited<R8>) => Promise<R9> | R9,
    f10: (args: Awaited<R9>) => Promise<R10> | R10,
    f11: (args: Awaited<R10>) => Promise<R11> | R11,
    f12: (args: Awaited<R11>) => Promise<R12> | R12
  ): Promise<R12>;
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
 * and everything has to be awaited, even when there are no `async` functions.
 */
abstract class Pipe {
  public static pipe: Overloads = async <
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
    f1: (args: A) => Promise<R1> | R1,
    f2?: (args: Awaited<R1>) => Promise<R2> | R2,
    f3?: (args: Awaited<R2>) => Promise<R3> | R3,
    f4?: (args: Awaited<R3>) => Promise<R4> | R4,
    f5?: (args: Awaited<R4>) => Promise<R5> | R5,
    f6?: (args: Awaited<R5>) => Promise<R6> | R6,
    f7?: (args: Awaited<R6>) => Promise<R7> | R7,
    f8?: (args: Awaited<R7>) => Promise<R8> | R8,
    f9?: (args: Awaited<R8>) => Promise<R9> | R9,
    f10?: (args: Awaited<R9>) => Promise<R10> | R10,
    f11?: (args: Awaited<R10>) => Promise<R11> | R11,
    f12?: (args: Awaited<R11>) => Promise<R12> | R12
  ): Promise<R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | R12> => {
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

  private static pipe1 = async <A, R1>(
    input: A,
    f1: (args: A) => Promise<R1> | R1
  ): Promise<R1> => await f1(input);

  private static pipe2 = async <A, R1, R2>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2
  ): Promise<R2> => await f2(await f1(input));

  private static pipe3 = async <A, R1, R2, R3>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3
  ): Promise<R3> => await f3(await f2(await f1(input)));

  private static pipe4 = async <A, R1, R2, R3, R4>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3,
    f4: (args: Awaited<R3>) => Promise<R4> | R4
  ): Promise<R4> => await f4(await f3(await f2(await f1(input))));

  private static pipe5 = async <A, R1, R2, R3, R4, R5>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3,
    f4: (args: Awaited<R3>) => Promise<R4> | R4,
    f5: (args: Awaited<R4>) => Promise<R5> | R5
  ): Promise<R5> => await f5(await f4(await f3(await f2(await f1(input)))));

  private static pipe6 = async <A, R1, R2, R3, R4, R5, R6>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3,
    f4: (args: Awaited<R3>) => Promise<R4> | R4,
    f5: (args: Awaited<R4>) => Promise<R5> | R5,
    f6: (args: Awaited<R5>) => Promise<R6> | R6
  ): Promise<R6> =>
    await f6(await f5(await f4(await f3(await f2(await f1(input))))));

  private static pipe7 = async <A, R1, R2, R3, R4, R5, R6, R7>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3,
    f4: (args: Awaited<R3>) => Promise<R4> | R4,
    f5: (args: Awaited<R4>) => Promise<R5> | R5,
    f6: (args: Awaited<R5>) => Promise<R6> | R6,
    f7: (args: Awaited<R6>) => Promise<R7> | R7
  ): Promise<R7> =>
    await f7(await f6(await f5(await f4(await f3(await f2(await f1(input)))))));

  private static pipe8 = async <A, R1, R2, R3, R4, R5, R6, R7, R8>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3,
    f4: (args: Awaited<R3>) => Promise<R4> | R4,
    f5: (args: Awaited<R4>) => Promise<R5> | R5,
    f6: (args: Awaited<R5>) => Promise<R6> | R6,
    f7: (args: Awaited<R6>) => Promise<R7> | R7,
    f8: (args: Awaited<R7>) => Promise<R8> | R8
  ): Promise<R8> =>
    await f8(
      await f7(
        await f6(await f5(await f4(await f3(await f2(await f1(input))))))
      )
    );

  private static pipe9 = async <A, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3,
    f4: (args: Awaited<R3>) => Promise<R4> | R4,
    f5: (args: Awaited<R4>) => Promise<R5> | R5,
    f6: (args: Awaited<R5>) => Promise<R6> | R6,
    f7: (args: Awaited<R6>) => Promise<R7> | R7,
    f8: (args: Awaited<R7>) => Promise<R8> | R8,
    f9: (args: Awaited<R8>) => Promise<R9> | R9
  ): Promise<R9> =>
    await f9(
      await f8(
        await f7(
          await f6(await f5(await f4(await f3(await f2(await f1(input))))))
        )
      )
    );

  private static pipe10 = async <A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3,
    f4: (args: Awaited<R3>) => Promise<R4> | R4,
    f5: (args: Awaited<R4>) => Promise<R5> | R5,
    f6: (args: Awaited<R5>) => Promise<R6> | R6,
    f7: (args: Awaited<R6>) => Promise<R7> | R7,
    f8: (args: Awaited<R7>) => Promise<R8> | R8,
    f9: (args: Awaited<R8>) => Promise<R9> | R9,
    f10: (args: Awaited<R9>) => Promise<R10> | R10
  ): Promise<R10> =>
    await f10(
      await f9(
        await f8(
          await f7(
            await f6(await f5(await f4(await f3(await f2(await f1(input))))))
          )
        )
      )
    );

  private static pipe11 = async <
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
  >(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3,
    f4: (args: Awaited<R3>) => Promise<R4> | R4,
    f5: (args: Awaited<R4>) => Promise<R5> | R5,
    f6: (args: Awaited<R5>) => Promise<R6> | R6,
    f7: (args: Awaited<R6>) => Promise<R7> | R7,
    f8: (args: Awaited<R7>) => Promise<R8> | R8,
    f9: (args: Awaited<R8>) => Promise<R9> | R9,
    f10: (args: Awaited<R9>) => Promise<R10> | R10,
    f11: (args: Awaited<R10>) => Promise<R11> | R11
  ): Promise<R11> =>
    await f11(
      await f10(
        await f9(
          await f8(
            await f7(
              await f6(await f5(await f4(await f3(await f2(await f1(input))))))
            )
          )
        )
      )
    );

  private static pipe12 = async <
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
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: Awaited<R1>) => Promise<R2> | R2,
    f3: (args: Awaited<R2>) => Promise<R3> | R3,
    f4: (args: Awaited<R3>) => Promise<R4> | R4,
    f5: (args: Awaited<R4>) => Promise<R5> | R5,
    f6: (args: Awaited<R5>) => Promise<R6> | R6,
    f7: (args: Awaited<R6>) => Promise<R7> | R7,
    f8: (args: Awaited<R7>) => Promise<R8> | R8,
    f9: (args: Awaited<R8>) => Promise<R9> | R9,
    f10: (args: Awaited<R9>) => Promise<R10> | R10,
    f11: (args: Awaited<R10>) => Promise<R11> | R11,
    f12: (args: Awaited<R11>) => Promise<R12> | R12
  ): Promise<R12> =>
    await f12(
      await f11(
        await f10(
          await f9(
            await f8(
              await f7(
                await f6(
                  await f5(await f4(await f3(await f2(await f1(input)))))
                )
              )
            )
          )
        )
      )
    );
}

/**
 * Same mechanism as `pipe` but awaits each step sequentially
 * before stepping into the next one.
 *
 * Allows us to apply step-by-step transformations on a value
 * with easy debugging access between steps and without naming concerns.
 *
 * ## Async operations:
 * Allows for async operations, with a caveat that steps are sequential and
 * will await eachother. Thus, it is not suitable as a streaming `pipeline`.
 * The pipe as a whole will return a `Promise` and might be awaited.
 *
 * In practice that means the usage is the same as `pipe` but the next
 * step after an async step won't receive a promise, instead it will be awaited.
 * ```ts
 * await pipeAsync("1, 2, 3", waitForA, (a) => a.split(","));
 * ```
 *
 * **Warning:** All the steps must return a value. The maximum is 12 steps.
 * You can easily pipe pipes together if you need more than 12.
 *
 * @see https://github.com/markomitranic/ts-pipe/blob/main/README.md
 *
 * @example
 * // Use with async
 * await pipeAsync("1, 2, 3", waitForA, async (a) => a.split(","));
 *
 * // You can freely use async steps and sub-pipes
 * await pipeAsync(
 *  {
 *    url: "https://loremflickr.com/320/240/cat",
 *    responseType: "stream",
 *  },
 *  axios,
 *  (resp) => pipe(path.resolve("./cat.jpg"), fs.createWriteStream, resp.data.pipe)
 * );
 */
export const pipeAsync = Pipe.pipe;
