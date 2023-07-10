import { consoleLog } from "./consoleLog";
import { pipe } from "./pipe";

test("console_log returns the argument", () => {
  jest.spyOn(console, "log").mockImplementation(() => {
    return null;
  }); // Console shhh...

  expect(consoleLog("1")).toStrictEqual("1");
});

test("console_log works within a pipe", () =>
  pipe("1", consoleLog, (__) => expect(__).toStrictEqual("1")));
