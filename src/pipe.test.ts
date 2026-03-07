import { expect, spyOn, test } from "bun:test";
import { consoleLog } from "./consoleLog";
import { pipe } from "./pipe";

test("propagates the original argument", () =>
	pipe("123", (_) => expect(_).toStrictEqual("123")));

test("works with stdlib functions", () =>
	pipe(
		"1, 2, 3",
		(_) => _.split(", "),
		(_) => _.map((item) => item + item),
		(_) => _.join("-"),
		(_) =>
			expect(_).toStrictEqual(
				"1, 2, 3"
					.split(", ")
					.map((item) => item + item)
					.join("-"),
			),
	));

test("Validate type intellisense", async () => {
	spyOn(console, "log").mockImplementation(() => {});

	const _m0: string[] = pipe("123", consoleLog, ($) => $.split(","));

	const _m1: string[] = await pipe(
		"1, 2, 3",
		(a) => a.split(","),
		waitFor,
		($: Promise<string[]>) => $,
	);
});

test("long pipeline", () => {
	pipe(
		1,
		(_) => _ + 1,
		(_) => _ + 1,
		(_) => _ + 1,
		(_) => _ + 1,
		(_) => _ + 1,
		(_) => _ + 1,
		(_) => _ + 1,
		(_) => _ + 1,
		(_) => _ + 1,
		(_) => _ + 1,
		(_) => _ + 1,
		(_) => {
			expect(_).toStrictEqual(12);
			return _;
		},
	);
});

test("double long pipeline", () => {
	pipe(
		1,
		(_) => _ + 1,
		(_) => _ + 1,
		(_) => _ + 1,
		(_) => _ + 1,
		(_) => _ + 1,
		(_) => _ + 1,
		(_) =>
			pipe(
				_,
				(_) => _ + 1,
				(_) => _ + 1,
				(_) => _ + 1,
				(_) => _ + 1,
				(_) => _ + 1,
			),
		(_) => _ + 1,
		(_) => _ + 1,
		(_) => _ + 1,
		(_) => _ + 1,
		(_) => {
			expect(_).toStrictEqual(16);
			return _;
		},
	);
});

test("supports async/await", async () => {
	const resp = await pipe(
		"1, 2, 3",
		async ($) => await waitFor($, 0.3),
		async ($) => {
			expect(typeof (await $)).toEqual("string");
			return $;
		},
	);

	expect(typeof resp).toEqual("string");
});

test("automagically resolves promises within the pipe", async () => {
	await pipe(
		"1, 2, 3",
		async ($) => {
			const d = await waitFor($, 0.3);
			return d;
		},
		async ($) => (await $).split(","),
	);
});

test("nested map traverse", () =>
	pipe(
		[
			{ player: "Aleksandar Mitrovic", goals: 10, shots: 118 },
			{ player: "Mohamed Salah", goals: 19, shots: 116 },
			{ player: "Harry Kane", goals: 17, shots: 110 },
			{ player: "Sergio Agüero", goals: 19, shots: 99 },
			{ player: "Raùl Jiménez", goals: 12, shots: 96 },
			{ player: "Paul Pogba", goals: 13, shots: 93 },
			{ player: "Eden Hazard", goals: 16, shots: 86 },
			{ player: "Pierre-Emerick Aubameyang", goals: 18, shots: 81 },
			{ player: "Gylfi Sigurdsson", goals: 12, shots: 78 },
			{ player: "Sadio Manè", goals: 18, shots: 77 },
		].reduce(
			({ accGoals, accShots }, { goals, shots }) => ({
				accGoals: goals + accGoals,
				accShots: shots + accShots,
			}),
			{ accGoals: 0, accShots: 0 },
		),
		({ accGoals, accShots }) => ({ goals: accGoals, shots: accShots }),
		({ goals, shots }) => shots / goals,
		($) => $.toFixed(2),
		Number.parseFloat,
		(_) => expect(_).toStrictEqual(6.19),
	));

test("pipes within pipes", () => {
	const middlePipePart = (_: number[]) =>
		pipe(
			_.map((i) => i + i),
			(_) => _.map((i) => i.toString()),
			(_) => {
				_.push("end");
				return _;
			},
			(_) => _.join("-"),
			(_) => _.replace("4-6", "mid"),
			(_) => `start${_.substring(1)}`,
		);

	const smpipe = pipe(
		"1, 2, 3",
		(_) => _.split(", "),
		(_) => _.map((i) => Number.parseInt(i)),
	);

	const _ = pipe(smpipe, middlePipePart, JSON.stringify, (_) =>
		expect(_).toStrictEqual('"start-mid-end"'),
	);
});

const waitFor = async <T>(data: T, seconds = 0.3): Promise<T> => {
	return new Promise((resolve, _reject) => {
		setTimeout(resolve, seconds * 1000);
	}).then(() => {
		return data;
	});
};
