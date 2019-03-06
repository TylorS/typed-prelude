import { Test, TestConfig } from '../types'
import { getTestConfig } from './getTestConfig'
import { isTestCollection } from './isTestCollection'

export function getTestConfigs(tests: Test[]): TestConfig[] {
  const configs: TestConfig[] = []

  for (const test of tests) {
    configs.push(getTestConfig(test))

    if (isTestCollection(test)) {
      configs.push(...getTestConfigs(test.tests))
    }
  }

  return configs
}
