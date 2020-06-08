import { TestName } from '../../domain'

export const IT_TEST_NAME_PLACEHOLDER = `[IT]`
export const GIVEN_TEST_NAME_PLACEHOLDER = `[GIVEN]`
export const DESCRIBE_TEST_NAME_PLACEHOLDER = `[DESCRIBE]`

export const itTestName = <A extends string>(name: A): TestName<A> =>
  `${IT_TEST_NAME_PLACEHOLDER} ${name}` as TestName<A>

export const givenTestName = <A extends string>(name: A): TestName<A> =>
  `${GIVEN_TEST_NAME_PLACEHOLDER} ${name}` as TestName<A>

export const describeTestName = <A extends string>(name: A): TestName<A> =>
  `${DESCRIBE_TEST_NAME_PLACEHOLDER} ${name}` as TestName<A>
