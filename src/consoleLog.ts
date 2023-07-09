/**
 * Simply a pure functional wrapper around a console log.
 *
 * Useful for debugging within pipelines, as you can quickly put it between two steps to inspect the result.
 *
 * @example
 * pipe("123", f1, consoleLog, f2)
 */
export const consoleLog = <T>(data: T): T => {
  console.log(data);
  return data;
};

export default consoleLog;
