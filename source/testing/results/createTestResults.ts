import { uuid } from '@typed/uuid'
import { FailedTestResult, GroupResult, PassedTestResult, SkippedTestResult } from '../types'

export const createPassingTestResult = (
  options: Partial<PassedTestResult> = {},
): PassedTestResult => ({
  type: 'pass',
  testId: uuid(),
  ...options,
})

export const createFailingTestResult = (
  options: Partial<FailedTestResult> = {},
): FailedTestResult => ({
  type: 'fail',
  testId: uuid(),
  error: new Error('Failed'),
  ...options,
})

export const createSkippedTestResult = (
  options: Partial<SkippedTestResult> = {},
): SkippedTestResult => ({
  type: 'skip',
  testId: uuid(),
  ...options,
})

export const createGroupTestResult = (options: Partial<GroupResult> = {}): GroupResult => ({
  type: 'group',
  testId: uuid(),
  results: [],
  ...options,
})
