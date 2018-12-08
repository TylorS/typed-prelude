import { bold, green, red, yellow } from '../../common/colors'
import { Mutable } from '../../objects'
import { TestResult, TestStats } from '../types'

export function resultsToTestStats(testResults: TestResult[]): TestStats & { toString(): string } {
  const stats: Mutable<TestStats> = { passed: 0, failed: 0, skipped: 0 }
  const resultsToProcess: TestResult[] = testResults.slice()

  while (resultsToProcess.length > 0) {
    const result = resultsToProcess.shift() as TestResult

    if (result.type === 'collection') {
      resultsToProcess.push(...result.results)
      continue
    }

    stats[result.type] += 1
  }

  const statsString = [
    maybeLog('Passed', stats.passed, green),
    maybeLog('Failed', stats.failed, red),
    maybeLog('Skipped', stats.skipped, yellow),
  ]
    .filter(Boolean)
    .join(' - ')

  return {
    ...stats,
    toString: () => statsString,
  }
}

function maybeLog(msg: string, amount: number, color: (str: string) => string): string {
  if (amount === 0) {
    return ''
  }

  return `${bold(msg)} ${color(`${amount}`)}`
}
