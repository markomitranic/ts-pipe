import {console_log} from "./utilities";

test("console_log returns the argument", () => {
  jest.spyOn(console, 'log').mockImplementation(() => {}); // shhh...
  expect(console_log("1")).toBe("1")
});
