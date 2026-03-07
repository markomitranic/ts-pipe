import type { Result } from "./result";

type Overloads = {
	// 1
	<A, R1>(input: A, f1: (args: A) => Promise<R1> | R1): Promise<Result<R1>>;
	// 2
	<A, R1, R2>(
		input: A,
		f1: (args: A) => Promise<R1> | R1,
		f2: (args: Awaited<R1>) => Promise<R2> | R2,
	): Promise<Result<R2>>;
	// 3
	<A, R1, R2, R3>(
		input: A,
		f1: (args: A) => Promise<R1> | R1,
		f2: (args: Awaited<R1>) => Promise<R2> | R2,
		f3: (args: Awaited<R2>) => Promise<R3> | R3,
	): Promise<Result<R3>>;
	// 4
	<A, R1, R2, R3, R4>(
		input: A,
		f1: (args: A) => Promise<R1> | R1,
		f2: (args: Awaited<R1>) => Promise<R2> | R2,
		f3: (args: Awaited<R2>) => Promise<R3> | R3,
		f4: (args: Awaited<R3>) => Promise<R4> | R4,
	): Promise<Result<R4>>;
	// 5
	<A, R1, R2, R3, R4, R5>(
		input: A,
		f1: (args: A) => Promise<R1> | R1,
		f2: (args: Awaited<R1>) => Promise<R2> | R2,
		f3: (args: Awaited<R2>) => Promise<R3> | R3,
		f4: (args: Awaited<R3>) => Promise<R4> | R4,
		f5: (args: Awaited<R4>) => Promise<R5> | R5,
	): Promise<Result<R5>>;
	// 6
	<A, R1, R2, R3, R4, R5, R6>(
		input: A,
		f1: (args: A) => Promise<R1> | R1,
		f2: (args: Awaited<R1>) => Promise<R2> | R2,
		f3: (args: Awaited<R2>) => Promise<R3> | R3,
		f4: (args: Awaited<R3>) => Promise<R4> | R4,
		f5: (args: Awaited<R4>) => Promise<R5> | R5,
		f6: (args: Awaited<R5>) => Promise<R6> | R6,
	): Promise<Result<R6>>;
	// 7
	<A, R1, R2, R3, R4, R5, R6, R7>(
		input: A,
		f1: (args: A) => Promise<R1> | R1,
		f2: (args: Awaited<R1>) => Promise<R2> | R2,
		f3: (args: Awaited<R2>) => Promise<R3> | R3,
		f4: (args: Awaited<R3>) => Promise<R4> | R4,
		f5: (args: Awaited<R4>) => Promise<R5> | R5,
		f6: (args: Awaited<R5>) => Promise<R6> | R6,
		f7: (args: Awaited<R6>) => Promise<R7> | R7,
	): Promise<Result<R7>>;
	// 8
	<A, R1, R2, R3, R4, R5, R6, R7, R8>(
		input: A,
		f1: (args: A) => Promise<R1> | R1,
		f2: (args: Awaited<R1>) => Promise<R2> | R2,
		f3: (args: Awaited<R2>) => Promise<R3> | R3,
		f4: (args: Awaited<R3>) => Promise<R4> | R4,
		f5: (args: Awaited<R4>) => Promise<R5> | R5,
		f6: (args: Awaited<R5>) => Promise<R6> | R6,
		f7: (args: Awaited<R6>) => Promise<R7> | R7,
		f8: (args: Awaited<R7>) => Promise<R8> | R8,
	): Promise<Result<R8>>;
	// 9
	<A, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
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
	): Promise<Result<R9>>;
	// 10
	<A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
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
	): Promise<Result<R10>>;
	// 11
	<A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(
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
	): Promise<Result<R11>>;
	// 12
	<A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12>(
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
		f12: (args: Awaited<R11>) => Promise<R12> | R12,
	): Promise<Result<R12>>;
	// 13
	<A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13>(
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
		f12: (args: Awaited<R11>) => Promise<R12> | R12,
		f13: (args: Awaited<R12>) => Promise<R13> | R13,
	): Promise<Result<R13>>;
	// 14
	<A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14>(
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
		f12: (args: Awaited<R11>) => Promise<R12> | R12,
		f13: (args: Awaited<R12>) => Promise<R13> | R13,
		f14: (args: Awaited<R13>) => Promise<R14> | R14,
	): Promise<Result<R14>>;
	// 15
	<A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15>(
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
		f12: (args: Awaited<R11>) => Promise<R12> | R12,
		f13: (args: Awaited<R12>) => Promise<R13> | R13,
		f14: (args: Awaited<R13>) => Promise<R14> | R14,
		f15: (args: Awaited<R14>) => Promise<R15> | R15,
	): Promise<Result<R15>>;
	// 16
	<A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15, R16>(
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
		f12: (args: Awaited<R11>) => Promise<R12> | R12,
		f13: (args: Awaited<R12>) => Promise<R13> | R13,
		f14: (args: Awaited<R13>) => Promise<R14> | R14,
		f15: (args: Awaited<R14>) => Promise<R15> | R15,
		f16: (args: Awaited<R15>) => Promise<R16> | R16,
	): Promise<Result<R16>>;
	// 17
	<
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
		R13,
		R14,
		R15,
		R16,
		R17,
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
		f12: (args: Awaited<R11>) => Promise<R12> | R12,
		f13: (args: Awaited<R12>) => Promise<R13> | R13,
		f14: (args: Awaited<R13>) => Promise<R14> | R14,
		f15: (args: Awaited<R14>) => Promise<R15> | R15,
		f16: (args: Awaited<R15>) => Promise<R16> | R16,
		f17: (args: Awaited<R16>) => Promise<R17> | R17,
	): Promise<Result<R17>>;
	// 18
	<
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
		R13,
		R14,
		R15,
		R16,
		R17,
		R18,
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
		f12: (args: Awaited<R11>) => Promise<R12> | R12,
		f13: (args: Awaited<R12>) => Promise<R13> | R13,
		f14: (args: Awaited<R13>) => Promise<R14> | R14,
		f15: (args: Awaited<R14>) => Promise<R15> | R15,
		f16: (args: Awaited<R15>) => Promise<R16> | R16,
		f17: (args: Awaited<R16>) => Promise<R17> | R17,
		f18: (args: Awaited<R17>) => Promise<R18> | R18,
	): Promise<Result<R18>>;
	// 19
	<
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
		R13,
		R14,
		R15,
		R16,
		R17,
		R18,
		R19,
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
		f12: (args: Awaited<R11>) => Promise<R12> | R12,
		f13: (args: Awaited<R12>) => Promise<R13> | R13,
		f14: (args: Awaited<R13>) => Promise<R14> | R14,
		f15: (args: Awaited<R14>) => Promise<R15> | R15,
		f16: (args: Awaited<R15>) => Promise<R16> | R16,
		f17: (args: Awaited<R16>) => Promise<R17> | R17,
		f18: (args: Awaited<R17>) => Promise<R18> | R18,
		f19: (args: Awaited<R18>) => Promise<R19> | R19,
	): Promise<Result<R19>>;
	// 20
	<
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
		R13,
		R14,
		R15,
		R16,
		R17,
		R18,
		R19,
		R20,
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
		f12: (args: Awaited<R11>) => Promise<R12> | R12,
		f13: (args: Awaited<R12>) => Promise<R13> | R13,
		f14: (args: Awaited<R13>) => Promise<R14> | R14,
		f15: (args: Awaited<R14>) => Promise<R15> | R15,
		f16: (args: Awaited<R15>) => Promise<R16> | R16,
		f17: (args: Awaited<R16>) => Promise<R17> | R17,
		f18: (args: Awaited<R17>) => Promise<R18> | R18,
		f19: (args: Awaited<R18>) => Promise<R19> | R19,
		f20: (args: Awaited<R19>) => Promise<R20> | R20,
	): Promise<Result<R20>>;
};

/**
 * Like `pipeAsync`, but wraps each step in try/catch and returns a `Promise<Result<T, Error>>`.
 *
 * If any step throws (or rejects), the chain short-circuits and returns `{ ok: false, error }`.
 * If all steps succeed, returns `{ ok: true, value }`.
 *
 * @example
 * const result = await pipeResultAsync(
 *   userId,
 *   fetchUser,
 *   validatePermissions,
 *   updateProfile
 * );
 *
 * if (result.ok) {
 *   console.log(result.value);
 * } else {
 *   console.error(result.error);
 * }
 */
export const pipeResultAsync: Overloads = async (
	// biome-ignore lint/suspicious/noExplicitAny: runtime dispatcher requires dynamic args
	input: any,
	// biome-ignore lint/suspicious/noExplicitAny: runtime dispatcher requires dynamic args
	...fns: ((args: any) => any)[]
) => {
	let result = input;
	for (const fn of fns) {
		try {
			result = await fn(result);
		} catch (error) {
			return {
				ok: false as const,
				error: error instanceof Error ? error : new Error(String(error)),
			};
		}
	}
	return { ok: true as const, value: result };
};
