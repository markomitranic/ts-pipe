import { expect, spyOn, test } from "bun:test";
import { consoleLog } from "./consoleLog";
import { pipe } from "./pipe";

test("console_log returns the argument", () => {
	spyOn(console, "log").mockImplementation(() => {});

	expect(consoleLog("1")).toStrictEqual("1");
});

test("console_log works within a pipe", () =>
	pipe("1", consoleLog, (__) => expect(__).toStrictEqual("1")));
