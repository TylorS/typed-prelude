import { describe, given, it } from '../../tests'

const add = (x: number, y: number) => x + y

export const testCollection = describe('add', [
  given('2 and 2', [
    it('returns 4', ({ equal }) => {
      equal(4, add(2, 2))
    }),
  ]),
])
