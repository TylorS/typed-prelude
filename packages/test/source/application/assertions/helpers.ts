import { isNotUndefined } from '@typed/logic'
import { parse } from 'error-stack-parser'

export function getFirstLineNumber(error: Error): number {
  const frames = parse(error)
  const match = frames.find((frame) => isNotUndefined(frame.lineNumber))

  return match?.lineNumber ?? -1
}

export function trimStackTraceToStartAtTarget(error: Error, target: Function) {
  Error.captureStackTrace(error, target)
}

export function getLineNumberFromTarget(target?: Function) {
  const error = catchThrownErrorForStackTrace(new Error(`Getting stacktrace`))

  if (target) {
    trimStackTraceToStartAtTarget(error, target)
  }

  return getFirstLineNumber(error)
}

export function catchThrownErrorForStackTrace<A extends Error>(error: A): A {
  if (error.stack) {
    return error
  }

  // Some browsers might not add the stack until throwing
  try {
    throw error
  } catch (e) {
    return e
  }
}
