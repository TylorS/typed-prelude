import { Uuid } from '@typed/uuid'
import { TestResult } from '../types'

export const eventNames = ['testResults']

export type ResultsEvent = {
  type: 'testResults'
  testRunId: Uuid
  results: TestResult[]
}
