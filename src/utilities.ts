/**
 * Simply a wrapper around a console log.
 * Useful for debugging within pipelines.
 */
export const console_log = <T>(data: T): T => {
  console.log(data);
  return data;
};
