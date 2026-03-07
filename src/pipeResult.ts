import type { Result } from "./result";

type Overloads = {
	// 1
	<A, R1>(input: A, f1: (args: A) => R1): Result<R1>;
	// 2
	<A, R1, R2>(input: A, f1: (args: A) => R1, f2: (args: R1) => R2): Result<R2>;
	// 3
	<A, R1, R2, R3>(
		input: A,
		f1: (args: A) => R1,
		f2: (args: R1) => R2,
		f3: (args: R2) => R3,
	): Result<R3>;
	// 4
	<A, R1, R2, R3, R4>(
		input: A,
		f1: (args: A) => R1,
		f2: (args: R1) => R2,
		f3: (args: R2) => R3,
		f4: (args: R3) => R4,
	): Result<R4>;
	// 5
	<A, R1, R2, R3, R4, R5>(
		input: A,
		f1: (args: A) => R1,
		f2: (args: R1) => R2,
		f3: (args: R2) => R3,
		f4: (args: R3) => R4,
		f5: (args: R4) => R5,
	): Result<R5>;
	// 6
	<A, R1, R2, R3, R4, R5, R6>(
		input: A,
		f1: (args: A) => R1,
		f2: (args: R1) => R2,
		f3: (args: R2) => R3,
		f4: (args: R3) => R4,
		f5: (args: R4) => R5,
		f6: (args: R5) => R6,
	): Result<R6>;
	// 7
	<A, R1, R2, R3, R4, R5, R6, R7>(
		input: A,
		f1: (args: A) => R1,
		f2: (args: R1) => R2,
		f3: (args: R2) => R3,
		f4: (args: R3) => R4,
		f5: (args: R4) => R5,
		f6: (args: R5) => R6,
		f7: (args: R6) => R7,
	): Result<R7>;
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
		f8: (args: R7) => R8,
	): Result<R8>;
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
		f9: (args: R8) => R9,
	): Result<R9>;
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
		f10: (args: R9) => R10,
	): Result<R10>;
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
		f11: (args: R10) => R11,
	): Result<R11>;
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
		f12: (args: R11) => R12,
	): Result<R12>;
	// 13
	<A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13>(
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
		f12: (args: R11) => R12,
		f13: (args: R12) => R13,
	): Result<R13>;
	// 14
	<A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14>(
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
		f12: (args: R11) => R12,
		f13: (args: R12) => R13,
		f14: (args: R13) => R14,
	): Result<R14>;
	// 15
	<A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15>(
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
		f12: (args: R11) => R12,
		f13: (args: R12) => R13,
		f14: (args: R13) => R14,
		f15: (args: R14) => R15,
	): Result<R15>;
	// 16
	<A, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15, R16>(
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
		f12: (args: R11) => R12,
		f13: (args: R12) => R13,
		f14: (args: R13) => R14,
		f15: (args: R14) => R15,
		f16: (args: R15) => R16,
	): Result<R16>;
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
		f12: (args: R11) => R12,
		f13: (args: R12) => R13,
		f14: (args: R13) => R14,
		f15: (args: R14) => R15,
		f16: (args: R15) => R16,
		f17: (args: R16) => R17,
	): Result<R17>;
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
		f12: (args: R11) => R12,
		f13: (args: R12) => R13,
		f14: (args: R13) => R14,
		f15: (args: R14) => R15,
		f16: (args: R15) => R16,
		f17: (args: R16) => R17,
		f18: (args: R17) => R18,
	): Result<R18>;
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
		f12: (args: R11) => R12,
		f13: (args: R12) => R13,
		f14: (args: R13) => R14,
		f15: (args: R14) => R15,
		f16: (args: R15) => R16,
		f17: (args: R16) => R17,
		f18: (args: R17) => R18,
		f19: (args: R18) => R19,
	): Result<R19>;
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
		f12: (args: R11) => R12,
		f13: (args: R12) => R13,
		f14: (args: R13) => R14,
		f15: (args: R14) => R15,
		f16: (args: R15) => R16,
		f17: (args: R16) => R17,
		f18: (args: R17) => R18,
		f19: (args: R18) => R19,
		f20: (args: R19) => R20,
	): Result<R20>;
};

/**
 * Like `pipe`, but wraps each step in try/catch and returns a `Result<T, Error>`.
 *
 * If any step throws, the chain short-circuits and returns `{ ok: false, error }`.
 * If all steps succeed, returns `{ ok: true, value }`.
 *
 * Inspired by Elixir's `with` construct and Railway-Oriented Programming.
 *
 * @example
 * const result = pipeResult(
 *   rawInput,
 *   validate,
 *   transform,
 *   persist
 * );
 *
 * if (result.ok) {
 *   console.log(result.value);
 * } else {
 *   console.error(result.error);
 * }
 */
export const pipeResult: Overloads = (
	// biome-ignore lint/suspicious/noExplicitAny: runtime dispatcher requires dynamic args
	input: any,
	// biome-ignore lint/suspicious/noExplicitAny: runtime dispatcher requires dynamic args
	...fns: ((args: any) => any)[]
) => {
	let result = input;
	for (const fn of fns) {
		try {
			result = fn(result);
		} catch (error) {
			return {
				ok: false as const,
				error: error instanceof Error ? error : new Error(String(error)),
			};
		}
	}
	return { ok: true as const, value: result };
};
