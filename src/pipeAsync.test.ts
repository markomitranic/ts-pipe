import { consoleLog } from "./consoleLog";
import { pipeAsync } from "./pipeAsync";

test("propagates the original argument", () =>
  pipeAsync("123", (_) => expect(_).toStrictEqual("123")));

test("works with stdlib functions", () =>
  pipeAsync(
    "1, 2, 3",
    (_) => _.split(", "),
    (_) => _.map((item) => item + item),
    (_) => _.join("-"),
    (_) =>
      expect(_).toStrictEqual(
        "1, 2, 3"
          .split(", ")
          .map((item) => item + item)
          .join("-")
      )
  ));

test("Validate eslint intellisense", async () => {
  jest.spyOn(console, "log").mockImplementation(() => {
    return null;
  }); // Console shhh...

  // Sync works
  const m0: string[] = await pipeAsync("1,2,3", consoleLog, ($) =>
    $.split(",")
  );
  expect(m0).toStrictEqual(["1", "2", "3"]);

  // Async values awaited inline.
  const m1: string[] = await pipeAsync("1,2,3", waitFor, (a) => a.split(","));
  expect(m1).toStrictEqual(["1", "2", "3"]);
});

test("long pipeline", async () => {
  await pipeAsync(
    1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => {
      expect(_).toStrictEqual(12);
      return _;
    }
  );
});

test("double long pipeline", async () => {
  await pipeAsync(
    1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) =>
      pipeAsync(
        _,
        (_) => _ + 1,
        (_) => _ + 1,
        (_) => _ + 1,
        (_) => _ + 1,
        (_) => _ + 1
      ),
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => {
      expect(_).toStrictEqual(16);
      return _;
    }
  );
});

test("supports async/await", async () => {
  const resp = await pipeAsync(
    "1, 2, 3",
    async ($) => await waitFor($, 0.3),
    ($) => {
      expect(typeof $).toEqual("string");
      return $;
    }
  );

  expect(typeof resp).toEqual("string");
});

// This actually works but tye types don't allow it.
test("automagically resolves promises within the pipe", async () => {
  await pipeAsync(
    "1, 2, 3",
    async ($) => {
      const d = await waitFor($, 0.3);
      return d;
    },
    ($) => $.split(",")
  );
});

test("automagically redsolves promises within the pipe", async () => {
  await pipeAsync(
    "1, 2, 3",
    async ($) => await waitFor($, 0.3),
    ($) => expect(typeof $).toEqual("string")
  );
});

test("nested map traverse", () =>
  pipeAsync(
    [
      { player: "Aleksandar Mitrovic", goals: 10, shots: 118 },
      { player: "Mohamed Salah", goals: 19, shots: 116 },
      { player: "Harry Kane", goals: 17, shots: 110 },
      { player: "Sergio Agüero", goals: 19, shots: 99 },
      { player: "Raùl Jiménez", goals: 12, shots: 96 },
      { player: "Paul Pogba", goals: 13, shots: 93 },
      { player: "Eden Hazard", goals: 16, shots: 86 },
      { player: "Pierre-Emerick Aubameyang", goals: 18, shots: 81 },
      { player: "Gylfi Sigurdsson", goals: 12, shots: 78 },
      { player: "Sadio Manè", goals: 18, shots: 77 },
    ].reduce(
      ({ accGoals, accShots }, { goals, shots }) => ({
        accGoals: goals + accGoals,
        accShots: shots + accShots,
      }),
      { accGoals: 0, accShots: 0 }
    ),
    ({ accGoals, accShots }) => ({ goals: accGoals, shots: accShots }),
    ({ goals, shots }) => shots / goals,
    ($) => $.toFixed(2),
    parseFloat,
    (_) => expect(_).toStrictEqual(6.19)
  ));

test("pipes within pipes", async () => {
  jest.spyOn(console, "log").mockImplementation(() => {
    return null;
  }); // Console shhh...

  await pipeAsync(
    await pipeAsync(
      "1, 2, 3",
      (_) => _.split(", "),
      (_) => _.map((i) => parseInt(i))
    ),
    (_: number[]) =>
      pipeAsync(
        _,
        consoleLog,
        (_) => _.map((i) => i + i),
        (_) => _.map((i) => i.toString()),
        (_) => {
          _.push("end");
          return _;
        },
        (_) => waitFor(_, 1),
        (_) => _.join("-"),
        (_) => _.replace("4-6", "mid"),
        (_) => "start" + _.substring(1)
      ),
    JSON.stringify,
    (_) => expect(_).toStrictEqual('"start-mid-end"')
  );
});

const waitFor = async <T>(data: T, seconds = 0.3): Promise<T> => {
  return new Promise((resolve, _reject) => {
    setTimeout(resolve, seconds * 1000);
  }).then(function () {
    return data;
  });
};
