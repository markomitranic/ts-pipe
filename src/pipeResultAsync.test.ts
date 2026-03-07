import { expect, test } from "bun:test";
import { pipeResultAsync } from "./pipeResultAsync";

test("returns ok result on success", async () => {
	const result = await pipeResultAsync(
		1,
		(_) => _ + 1,
		async (_) => _ * 3,
	);
	expect(result).toStrictEqual({ ok: true, value: 6 });
});

test("returns error result when a sync step throws", async () => {
	const result = await pipeResultAsync(
		"hello",
		(_) => _.toUpperCase(),
		(_) => {
			throw new Error("sync failure");
		},
		(_) => _.split(","),
	);

	expect(result.ok).toBe(false);
	if (!result.ok) {
		expect(result.error.message).toBe("sync failure");
	}
});

test("returns error result when an async step rejects", async () => {
	const result = await pipeResultAsync(
		"hello",
		async (_) => _.toUpperCase(),
		async (_) => {
			throw new Error("async failure");
		},
		(_) => _.split(","),
	);

	expect(result.ok).toBe(false);
	if (!result.ok) {
		expect(result.error.message).toBe("async failure");
	}
});

test("short-circuits on first error", async () => {
	let step3Called = false;

	const result = await pipeResultAsync(
		10,
		async (_) => {
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

test("handles mixed sync and async steps", async () => {
	const result = await pipeResultAsync(
		"1, 2, 3",
		(_) => _.split(", "),
		async (_) => _.map(Number),
		(_) => _.reduce((a, b) => a + b, 0),
		async (_) => _.toFixed(2),
	);

	expect(result).toStrictEqual({ ok: true, value: "6.00" });
});

test("wraps non-Error throws in Error", async () => {
	const result = await pipeResultAsync(1, async (_) => {
		throw "string error";
	});

	expect(result.ok).toBe(false);
	if (!result.ok) {
		expect(result.error).toBeInstanceOf(Error);
		expect(result.error.message).toBe("string error");
	}
});
