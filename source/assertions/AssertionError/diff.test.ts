import { describe, given, it, Test } from '@typed/test'

import { strip } from '../../common/colors'
import { diff } from './diff'

export const test: Test = describe(`diff`, [
  given(`two identical objects`, [
    it(`returns a string representation of object`, ({ equal }) => {
      const object = { a: 1, b: 2 }

      equal(`{\n  "a": 1,\n  "b": 2\n}`, diff(object, object))
    }),
  ]),

  given(`empty expected object`, [
    it(`returns a string repesentation of added properties`, ({ equal }) => {
      const expected = {}
      const actual = { a: 1, b: 2 }

      const expectedString = `{\n` + `+ "a": 1\n` + `+ "b": 2\n` + `}`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`empty actual object`, [
    it(`returns a string representation of removed properties`, ({ equal }) => {
      const expected = { a: 1, b: 2 }
      const actual = {}

      const expectedString = `{\n` + `- "a": 1\n` + `- "b": 2\n` + `}`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`an actual object with different values`, [
    it(`returns a string representation of changed properties`, ({ equal }) => {
      const expected = { a: 1, b: 2 }
      const actual = { a: 2, b: 3 }

      const expectedString = `{\n` + `- "a": 1\n` + `+ "a": 2\n` + `- "b": 2\n` + `+ "b": 3\n` + `}`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`an actual object with some different values`, [
    it(`returns a string representation of changed propertes`, ({ equal }) => {
      const expected = { a: 1, b: 2 }
      const actual = { a: 1, b: 3 }

      const expectedString = `{\n` + `  "a": 1\n` + `- "b": 2\n` + `+ "b": 3\n` + `}`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`an expected and actual object with nested objects`, [
    it(`returns a string representation of nested propertes`, ({ equal }) => {
      const expected = { a: { b: 1 } }
      const actual = { a: { b: 2 } }

      const expectedString =
        `{\n` + `  "a": {\n` + `    - "b": 1\n` + `    + "b": 2\n` + `  }\n` + `}`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`two empty arrays`, [
    it(`returns a string representation of an array`, ({ equal }) => {
      const expected: string[] = []
      const actual: string[] = []

      const expectedString = `[]`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`an empty expected array and actual array with values`, [
    it(`returns a string representation of added values`, ({ equal }) => {
      const expected: string[] = []
      const actual: string[] = ['a', 'b']

      const expectedString = `[\n` + `+ a\n` + `+ b\n` + `]`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`an expected array with values and an empty actual array`, [
    it(`returns a string representation of removed values`, ({ equal }) => {
      const expected: string[] = ['a', 'b']
      const actual: string[] = []

      const expectedString = `[\n` + `- a\n` + `- b\n` + `]`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`an expected array and actual array with different values`, [
    it(`retuns a string representation of changed values`, ({ equal }) => {
      const expected: string[] = ['a', 'b']
      const actual: string[] = ['c', 'd']

      const expectedString = `[\n` + `- a\n` + `+ c\n` + `- b\n` + `+ d\n` + `]`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`an expected array and actual array with objects as values`, [
    it(`returns a string representation of changes`, ({ equal }) => {
      const expected = [{ a: 1 }, { a: 2 }]
      const actual = [{ a: 2 }, { a: 1 }]

      const expectedString =
        `[\n` +
        `- {\n` +
        `    "a": 1\n` +
        `  }\n` +
        `+ {\n` +
        `    "a": 2\n` +
        `  }\n` +
        `- {\n` +
        `    "a": 2\n` +
        `  }\n` +
        `+ {\n` +
        `    "a": 1\n` +
        `  }\n` +
        `]`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`two empty Maps`, [
    it(`returns a string representation of empty Map`, ({ equal }) => {
      const expected = new Map()
      const actual = new Map()

      const expectedString = `Map {\n` + `}`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`an empty expected Map and a non-empty actual Map`, [
    it(`returns a string representation of added entries`, ({ equal }) => {
      const expected = new Map()
      const actual = new Map([[1, 'a'], [2, 'b']])

      const expectedString = `Map {\n` + `+ "1" => a\n` + `+ "2" => b\n` + `}`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`a non-empty expected Map and an empty actual Map`, [
    it(`returns a string representation of removed entries`, ({ equal }) => {
      const actual = new Map()
      const expected = new Map([[1, 'a'], [2, 'b']])

      const expectedString = `Map {\n` + `- "1" => a\n` + `- "2" => b\n` + `}`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`two non-empty Maps with different values`, [
    it(`returns a string representation of changes`, ({ equal }) => {
      const expected = new Map([[1, 'a'], [2, 'b']])
      const actual = new Map([[1, 'abc'], [2, 'def']])

      const expectedString =
        `Map {\n` + `- "1" => a\n` + `+ "1" => abc\n` + `- "2" => b\n` + `+ "2" => def\n` + `}`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`two empty Sets`, [
    it(`returns a string representation of a Set`, ({ equal }) => {
      const expected = new Set([])
      const actual = new Set([])

      const expectedString = `Set []`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`an empty expected Set and a non-empty actual Set`, [
    it('returns a string representation of added values', ({ equal }) => {
      const expected = new Set([])
      const actual = new Set([1, 2])

      const expectedString = `Set [\n` + `+ 1\n` + `+ 2\n` + `]`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`two of the same boolean values`, [
    it(`returns a string representation of values`, ({ equal }) => {
      const expected = true
      const actual = true

      const expectedString = `true`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`two different boolean values`, [
    it(`returns a string representation of values`, ({ equal }) => {
      const expected = false
      const actual = true

      const expectedString = `false !== true`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`two of the same numbers`, [
    it(`returns a string representation of values`, ({ equal }) => {
      const expected = 1
      const actual = 1

      const expectedString = `1`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),

  given(`two different numbers`, [
    it(`returns a string representation of values`, ({ equal }) => {
      const expected = 1
      const actual = 2

      const expectedString = `1 !== 2`

      equal(expectedString, strip(diff(expected, actual)))
    }),
  ]),
])
