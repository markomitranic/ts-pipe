import consoleLog from "./consoleLog";
import pipe from "./pipe";

test("sanity check, to-level imports work", async () => {
  jest.spyOn(console, "log").mockImplementation(() => {
    return null;
  }); // shhh...

  await pipe("1", consoleLog, (_) => expect(_).toBe("1"));
});
