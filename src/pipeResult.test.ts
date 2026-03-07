import { expect, test } from "bun:test";
import { pipeResult } from "./pipeResult";

test("returns ok result on success", () => {
	const result = pipeResult(
		1,
		(_) => _ + 1,
		(_) => _ * 3,
	);
	expect(result).toStrictEqual({ ok: true, value: 6 });
});

test("returns error result when a step throws", () => {
	const result = pipeResult(
		"hello",
		(_) => _.toUpperCase(),
		(_) => {
			throw new Error("step failed");
		},
		(_) => _.split(","),
	);

	expect(result.ok).toBe(false);
	if (!result.ok) {
		expect(result.error).toBeInstanceOf(Error);
		expect(result.error.message).toBe("step failed");
	}
});

test("short-circuits on first error", () => {
	let step3Called = false;

	const result = pipeResult(
		10,
		(_) => {
			throw new Error("boom");
		},
		(_) => _ + 1,
		(_) => {
			step3Called = true;
			return _;
		},
	);

	expect(result.ok).toBe(false);
	expect(step3Called).toBe(false);
});

test("wraps non-Error throws in Error", () => {
	const result = pipeResult(1, (_) => {
		throw "string error";
	});

	expect(result.ok).toBe(false);
	if (!result.ok) {
		expect(result.error).toBeInstanceOf(Error);
		expect(result.error.message).toBe("string error");
	}
});

test("works with multi-step pipelines", () => {
	const result = pipeResult(
		"1, 2, 3",
		(_) => _.split(", "),
		(_) => _.map(Number),
		(_) => _.reduce((a, b) => a + b, 0),
		(_) => _.toFixed(2),
	);

	expect(result).toStrictEqual({ ok: true, value: "6.00" });
});

test("handles thrown error from explicit validation", () => {
	const result = pipeResult(
		{ nested: undefined } as { nested?: { value: string } },
		(_) => _.nested,
		(_) => {
			if (_ === undefined) throw new Error("nested is undefined");
			return _.value;
		},
	);

	expect(result.ok).toBe(false);
	if (!result.ok) {
		expect(result.error.message).toBe("nested is undefined");
	}
});
