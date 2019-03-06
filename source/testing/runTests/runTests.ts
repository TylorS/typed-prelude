import { Logger, Test } from '../types'
import { runTest } from './runTest'

export type RunTestsOptions = {
  timeout?: number
  skip?: boolean
  tests: Test[]
  logger: Logger
}

export const runTests = ({ tests, ...options }: RunTestsOptions) =>
  Promise.all(tests.map(test => runTest({ ...options, test })))
