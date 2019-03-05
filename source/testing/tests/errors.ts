export class TimeoutError extends Error {
  public static is = (err: Error): err is TimeoutError => err instanceof TimeoutError

  constructor() {
    super('Test Timeout')
  }
}

// tslint:disable-next-line:max-classes-per-file
export class NoAssertionError extends Error {
  public static is = (err: Error): err is NoAssertionError => err instanceof NoAssertionError

  constructor() {
    super('No Assertion Used')
  }
}

// tslint:disable-next-line:max-classes-per-file
export class DoneUsedWithPromiseError extends Error {
  public static is = (err: Error): err is DoneUsedWithPromiseError =>
    err instanceof DoneUsedWithPromiseError

  constructor() {
    super('Done used with Promise')
  }
}

export function captureStackTrace(error: Error, fn: Function): Error {
  Error.captureStackTrace(error, fn)

  return error
}
