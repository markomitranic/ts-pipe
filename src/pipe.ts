type Overloads = {
	// 1
	<A, R1>(input: A, f1: (args: A) => R1): R1;
	// 2
	<A, R1, R2>(input: A, f1: (args: A) => R1, f2: (args: R1) => R2): R2;
	// 3
	<A, R1, R2, R3>(
		input: A,
		f1: (args: A) => R1,
		f2: (args: R1) => R2,
		f3: (args: R2) => R3,
	): R3;
	// 4
	<A, R1, R2, R3, R4>(
		input: A,
		f1: (args: A) => R1,
		f2: (args: R1) => R2,
		f3: (args: R2) => R3,
		f4: (args: R3) => R4,
	): R4;
	// 5
	<A, R1, R2, R3, R4, R5>(
		input: A,
		f1: (args: A) => R1,
		f2: (args: R1) => R2,
		f3: (args: R2) => R3,
		f4: (args: R3) => R4,
		f5: (args: R4) => R5,
	): R5;
	// 6
	<A, R1, R2, R3, R4, R5, R6>(
		input: A,
		f1: (args: A) => R1,
		f2: (args: R1) => R2,
		f3: (args: R2) => R3,
		f4: (args: R3) => R4,
		f5: (args: R4) => R5,
		f6: (args: R5) => R6,
	): R6;
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
	): R7;
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
	): R8;
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
	): R9;
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
	): R10;
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
	): R11;
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
	): R12;
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
	): R13;
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
	): R14;
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
	): R15;
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
	): R16;
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
	): R17;
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
	): R18;
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
	): R19;
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
	): R20;
};

/**
 * Allows us to apply step-by-step transformations on a value
 * with easy debugging access between steps and without naming concerns.
 *
 * **Warning:** All the steps must return a value. The maximum is 20 steps.
 * You can easily pipe pipes together if you need more than 20.
 *
 * @see https://github.com/markomitranic/ts-pipe/blob/main/README.md
 *
 * @example
 * pipe("1, 2, 3", myFunc, consoleLog, (_) => _.join("-"))
 *
 * @example
 * pipe(
 *  "1, 2, 3",
 *  (__) => myFunc(__, 30),
 *  ($) => $.split(", "),
 *  (explodedList) => explodedList.map((i) => parseInt(i))
 * )
 */
// biome-ignore lint/suspicious/noExplicitAny: runtime dispatcher requires dynamic args
export const pipe: Overloads = (input: any, ...fns: ((args: any) => any)[]) => {
	let result = input;
	for (const fn of fns) {
		result = fn(result);
	}
	return result;
};
