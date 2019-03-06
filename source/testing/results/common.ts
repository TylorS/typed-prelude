import { TestResult } from '../types'

export const eventNames = ['testResults']

export type ResultsEvent = {
  type: 'testResults'
  testRunId: number
  results: TestResult[]
}
