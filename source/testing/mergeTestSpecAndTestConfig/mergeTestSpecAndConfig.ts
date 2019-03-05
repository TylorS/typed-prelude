import { TestConfig, TestModifier, TestSpec } from '../types'

export function mergeTestSpecAndConfig(spec: TestSpec, config: TestConfig): TestSpec {
  if (config.id !== spec.testId) {
    throw new Error(`TestSpec of id ${spec.testId} does not match TestConfig id ${config.id}.`)
  }

  const isOnly = config.modifier === TestModifier.ONLY
  const skip = !isOnly && (spec.skip || config.modifier === TestModifier.SKIP)
  const timeout = config.timeout || spec.timeout

  return { ...spec, timeout, skip }
}
