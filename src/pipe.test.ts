import { pipe } from "./pipe";

test("propagates the original argument", () =>
  pipe("123", (_) => expect(_).toBe("123")));

test("works with stdlib functions", () =>
  pipe(
    "1, 2, 3",
    (_) => _.split(", "),
    (_) => _.map((item) => item + item),
    (_) => _.join("-"),
    (_) =>
      expect(_).toBe(
        "1, 2, 3"
          .split(", ")
          .map((item) => item + item)
          .join("-")
      )
  ));

test("long pipeline", () => {
  pipe(
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
    (_) => _ + 1
  ).then((_) => {
    expect(_).toBe(13);
  });
});

test("double long pipeline", () => {
  pipe(
    1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) => _ + 1,
    (_) =>
      pipe(
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
    (_) => _ + 1
  ).then((_) => {
    expect(_).toBe(17);
  });
});

test("supports async/await", async () => {
  const resp = await pipe(
    "1, 2, 3",
    async ($) => await waitFor($, 0.3),
    ($) => {
      expect(typeof $).toEqual("string");
      return $;
    }
  );

  expect(typeof resp).toEqual("string");
});

test("automagically resolves promises within the pipe", async () => {
  await pipe(
    "1, 2, 3",
    ($) => waitFor($, 0.3),
    ($) => expect(typeof $).toEqual("string")
  );
});

test("nested map traverse", () =>
  pipe(
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
    ].reduce<any>(
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
    (_) => expect(_).toBe(6.19)
  ));

test("pipes within pipes", async () => {
  const middlePipePart = (_: number[]) =>
    pipe(
      _.map((i) => i + i),
      (_) => _.map((i) => i.toString()),
      (_) => {
        _.push("end");
        return _;
      },
      (_) => _.join("-"),
      (_) => _.replace("4-6", "mid"),
      (_) => "start" + _.substring(1)
    );

  pipe(
    await pipe(
      "1, 2, 3",
      (_) => _.split(", "),
      (_) => _.map((i) => parseInt(i))
    ),
    async (_) => await middlePipePart(_),
    JSON.stringify
  ).then((_) => {
    expect(_).toBe('"start-mid-end"');
    return _;
  });
});

const waitFor = async <T>(data: T, seconds: number): Promise<T> => {
  return new Promise((resolve, _reject) => {
    setTimeout(resolve, seconds * 1000);
  }).then(function () {
    return data;
  });
};
