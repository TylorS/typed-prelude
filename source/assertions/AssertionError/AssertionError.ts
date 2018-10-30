export class AssertionError<A> extends Error {
  public expected: A
  public actual: A

  constructor(message: string, expected: A, actual: A) {
    super(message)

    this.expected = expected
    this.actual = actual

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AssertionError)
    }
  }
}
