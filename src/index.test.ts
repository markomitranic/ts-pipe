import { consoleLog, pipe, pipeAsync } from "./index";

test("sanity check, to-level imports work", async () => {
  jest.spyOn(console, "log").mockImplementation(() => {
    return null;
  }); // Console shhh...

  await pipeAsync("1", consoleLog, (_) => expect(_).toStrictEqual("1"));

  pipe("1", consoleLog, (_) => expect(_).toStrictEqual("1"));
});
