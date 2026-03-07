/**
 * A discriminated union representing either a successful value or an error.
 *
 * Inspired by Rust's `Result<T, E>` and Elixir's `{:ok, value} | {:error, reason}`.
 *
 * @example
 * const r: Result<number> = { ok: true, value: 42 };
 * const e: Result<number> = { ok: false, error: new Error("oops") };
 *
 * if (r.ok) {
 *   console.log(r.value); // 42
 * } else {
 *   console.log(r.error); // Error
 * }
 */
export type Result<T, E = Error> =
	| { ok: true; value: T }
	| { ok: false; error: E };
