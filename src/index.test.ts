import { expect, spyOn, test } from "bun:test";
import {
	P,
	PA,
	type Result,
	consoleLog,
	pipe,
	pipeAsync,
	pipeResult,
	pipeResultAsync,
} from "./index";

test("sanity check, top-level imports work", async () => {
	spyOn(console, "log").mockImplementation(() => {});

	await pipeAsync("1", consoleLog, (_) => expect(_).toStrictEqual("1"));
	pipe("1", consoleLog, (_) => expect(_).toStrictEqual("1"));
});

test("P alias works like pipe", () => {
	const result = P(
		1,
		(_) => _ + 1,
		(_) => _ * 2,
	);
	expect(result).toBe(4);
});

test("PA alias works like pipeAsync", async () => {
	const result = await PA(
		1,
		async (_) => _ + 1,
		(_) => _ * 2,
	);
	expect(result).toBe(4);
});

test("pipeResult is exported", () => {
	const result: Result<number> = pipeResult(1, (_) => _ + 1);
	expect(result).toStrictEqual({ ok: true, value: 2 });
});

test("pipeResultAsync is exported", async () => {
	const result: Result<number> = await pipeResultAsync(1, async (_) => _ + 1);
	expect(result).toStrictEqual({ ok: true, value: 2 });
});
