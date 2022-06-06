import { pipe } from "./index";
import { console_log } from "./utilities";

test("console_log returns the argument", () => {
  jest.spyOn(console, "log").mockImplementation(() => {
    return null;
  }); // shhh...
  expect(console_log("1")).toBe("1");
});

test("console_log works within a pipe", () =>
  pipe("1", console_log, (__) => expect(__).toBe("1")));
