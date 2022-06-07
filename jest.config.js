/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["dist"],
  moduleFileExtensions: [
    "ts",
    "js",
    "mjs",
    "cjs",
    "jsx",
    "tsx",
    "json",
    "node",
  ],
};
