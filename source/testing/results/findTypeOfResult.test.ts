import { describe, given, it } from '@typed/test'
import {
  createFailingTestResult,
  createGroupTestResult,
  createPassingTestResult,
  createSkippedTestResult,
} from './createTestResults'
import { findTypeOfResult } from './findTypeOfResult'

const fail = 'fail'
const pass = 'pass'
const skip = 'skip'

export const test = describe(`findTypeOfResult`, [
  given(`a Failing TestResult`, [
    it(`returns 'fail'`, ({ equal }) => {
      equal(fail, findTypeOfResult(createFailingTestResult()))
    }),
  ]),

  given(`a Passing TestResult`, [
    it(`returns 'pass'`, ({ equal }) => {
      equal(pass, findTypeOfResult(createPassingTestResult()))
    }),
  ]),

  given(`a Skipped TestResult`, [
    it(`returns 'skip'`, ({ equal }) => {
      equal(skip, findTypeOfResult(createSkippedTestResult()))
    }),
  ]),

  given(`a Group Result with passing additional tests`, [
    it(`returns 'pass'`, ({ equal }) => {
      equal(
        pass,
        findTypeOfResult(
          createGroupTestResult({
            results: [createPassingTestResult(), createPassingTestResult()],
          }),
        ),
      )
    }),
  ]),

  given(`a Group Result with skipped additional tests`, [
    it(`returns 'skip'`, ({ equal }) => {
      equal(
        skip,
        findTypeOfResult(
          createGroupTestResult({
            results: [createSkippedTestResult(), createSkippedTestResult()],
          }),
        ),
      )
    }),
  ]),

  given(`a Group Result with failing additional tests`, [
    it(`returns 'fail'`, ({ equal }) => {
      equal(
        fail,
        findTypeOfResult(
          createGroupTestResult({
            results: [createPassingTestResult(), createFailingTestResult()],
          }),
        ),
      )
    }),
  ]),
])
