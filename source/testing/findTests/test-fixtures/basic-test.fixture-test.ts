import { it } from '../../tests'

export const basicPassingTest = it('Is Basic (Passing)', ({ ok }) => ok(true))
export const basicFailingTest = it('Is Basic (Failing)', ({ ok }) => ok(false))
