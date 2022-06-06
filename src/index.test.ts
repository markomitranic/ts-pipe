import { console_log, pipe } from "./index";

test("sanity check, to-level imports work", () => {
  jest.spyOn(console, "log").mockImplementation(() => {
    return null;
  }); // shhh...

  pipe("1", console_log, (_) => expect(_).toBe("1"));
});
