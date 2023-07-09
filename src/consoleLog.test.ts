import consoleLog from "./consoleLog";
import pipe from "./pipe";

test("console_log returns the argument", () => {
  jest.spyOn(console, "log").mockImplementation(() => {
    return null;
  }); // shhh...
  expect(consoleLog("1")).toBe("1");
});

test("console_log works within a pipe", () =>
  pipe("1", consoleLog, (__) => expect(__).toBe("1")));
