abstract class Pipe {
  public static async pipe<A, R1, R2, R3, R4, R5, R6, R7>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: R1) => Promise<R2> | R2,
    f3: (args: R2) => Promise<R3> | R3,
    f4: (args: R3) => Promise<R4> | R4,
    f5: (args: R4) => Promise<R5> | R5,
    f6: (args: R5) => Promise<R6> | R6,
    f7: (args: R6) => Promise<R7> | R7
  ): Promise<R7>;
  public static async pipe<A, R1, R2, R3, R4, R5, R6>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: R1) => Promise<R2> | R2,
    f3: (args: R2) => Promise<R3> | R3,
    f4: (args: R3) => Promise<R4> | R4,
    f5: (args: R4) => Promise<R5> | R5,
    f6: (args: R5) => Promise<R6> | R6
  ): Promise<R6>;
  public static async pipe<A, R1, R2, R3, R4, R5>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: R1) => Promise<R2> | R2,
    f3: (args: R2) => Promise<R3> | R3,
    f4: (args: R3) => Promise<R4> | R4,
    f5: (args: R4) => Promise<R5> | R5
  ): Promise<R5>;
  public static async pipe<A, R1, R2, R3, R4>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: R1) => Promise<R2> | R2,
    f3: (args: R2) => Promise<R3> | R3,
    f4: (args: R3) => Promise<R4> | R4
  ): Promise<R4>;
  public static async pipe<A, R1, R2, R3>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: R1) => Promise<R2> | R2,
    f3: (args: R2) => Promise<R3> | R3
  ): Promise<R3>;
  public static async pipe<A, R1, R2>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: R1) => Promise<R2> | R2
  ): Promise<R2>;
  public static async pipe<A, R1>(
    input: A,
    f1: (args: A) => Promise<R1> | R1
  ): Promise<R1>;
  public static async pipe<A, R1, R2, R3, R4, R5, R6, R7>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2?: (args: R1) => Promise<R2> | R2,
    f3?: (args: R2) => Promise<R3> | R3,
    f4?: (args: R3) => Promise<R4> | R4,
    f5?: (args: R4) => Promise<R5> | R5,
    f6?: (args: R5) => Promise<R6> | R6,
    f7?: (args: R6) => Promise<R7> | R7
  ): Promise<R1 | R2 | R3 | R4 | R5 | R6 | R7> {
    if (f2 && f3 && f4 && f5 && f6 && f7)
      return Pipe.pipe7(input, f1, f2, f3, f4, f5, f6, f7);
    if (f2 && f3 && f4 && f5 && f6)
      return Pipe.pipe6(input, f1, f2, f3, f4, f5, f6);
    if (f2 && f3 && f4 && f5) return Pipe.pipe5(input, f1, f2, f3, f4, f5);
    if (f2 && f3 && f4) return Pipe.pipe4(input, f1, f2, f3, f4);
    if (f2 && f3) return Pipe.pipe3(input, f1, f2, f3);
    if (f2) return Pipe.pipe2(input, f1, f2);
    return Pipe.pipe1(input, f1);
  }

  public static pipe1 = async <A, R1>(
    input: A,
    f1: (args: A) => Promise<R1> | R1
  ): Promise<R1> => await f1(input);

  public static pipe2 = async <A, R1, R2>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: R1) => Promise<R2> | R2
  ): Promise<R2> => await f2(await f1(input));

  public static pipe3 = async <A, R1, R2, R3>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: R1) => Promise<R2> | R2,
    f3: (args: R2) => Promise<R3> | R3
  ): Promise<R3> => await f3(await f2(await f1(input)));

  public static pipe4 = async <A, R1, R2, R3, R4>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: R1) => Promise<R2> | R2,
    f3: (args: R2) => Promise<R3> | R3,
    f4: (args: R3) => Promise<R4> | R4
  ): Promise<R4> => await f4(await f3(await f2(await f1(input))));

  public static pipe5 = async <A, R1, R2, R3, R4, R5>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: R1) => Promise<R2> | R2,
    f3: (args: R2) => Promise<R3> | R3,
    f4: (args: R3) => Promise<R4> | R4,
    f5: (args: R4) => R5
  ): Promise<R5> => await f5(await f4(await f3(await f2(await f1(input)))));

  public static pipe6 = async <A, R1, R2, R3, R4, R5, R6>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: R1) => Promise<R2> | R2,
    f3: (args: R2) => Promise<R3> | R3,
    f4: (args: R3) => Promise<R4> | R4,
    f5: (args: R4) => Promise<R5> | R5,
    f6: (args: R5) => Promise<R6> | R6
  ): Promise<R6> =>
    await f6(await f5(await f4(await f3(await f2(await f1(input))))));

  public static pipe7 = async <A, R1, R2, R3, R4, R5, R6, R7>(
    input: A,
    f1: (args: A) => Promise<R1> | R1,
    f2: (args: R1) => Promise<R2> | R2,
    f3: (args: R2) => Promise<R3> | R3,
    f4: (args: R3) => Promise<R4> | R4,
    f5: (args: R4) => Promise<R5> | R5,
    f6: (args: R5) => Promise<R6> | R6,
    f7: (args: R6) => Promise<R7> | R7
  ): Promise<R7> =>
    await f7(await f6(await f5(await f4(await f3(await f2(await f1(input)))))));
}

export default Pipe.pipe;

/**
 * Simply a wrapper around a console log.
 * Useful for debugging within pipelines.
 */
export const LOG = async <T>(data: Promise<T> | T): Promise<T> => {
  console.log(data);
  return data;
};
