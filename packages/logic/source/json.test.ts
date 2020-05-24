import { describe, given, it } from '@typed/test'
import { fromJson, toJson } from './json'

export const test = describe.only(`toJson/fromJson`, [
  given(`a Map`, [
    it(`is properly serialized/deserialized`, ({ equal }) => {
      const sut = {
        map: new Map([
          [new Map([[1, 2]]), 2],
          [new Map([[2, 3]]), 3],
        ]),
      }
      const jsonString = toJson(sut)

      equal(
        '{"map":{"__json_tag__":2,"__values_tag__":[[{"__json_tag__":2,"__values_tag__":[[1,2]]},2],[{"__json_tag__":2,"__values_tag__":[[2,3]]},3]]}}',
        jsonString,
      )

      const actual = fromJson(jsonString)

      equal(sut, actual)
    }),
  ]),

  given(`a Set`, [
    it(`is properly serialized/deserialized`, ({ equal }) => {
      const sut = {
        set: new Set([new Set([1, 2]), new Set([2, 3])]),
      }
      const jsonString = toJson(sut)

      equal(
        `{"set":{"__json_tag__":1,"__values_tag__":[{"__json_tag__":1,"__values_tag__":[1,2]},{"__json_tag__":1,"__values_tag__":[2,3]}]}}`,
        jsonString,
      )

      const actual = fromJson(jsonString)

      equal(sut, actual)
    }),
  ]),

  given(`undefined`, [
    it(`is properly serialized/deserialized`, ({ equal }) => {
      const jsonString = toJson(undefined)

      equal(`{"__json_tag__":0}`, jsonString)

      const actual = fromJson(jsonString)

      equal(undefined, actual)
    }),
  ]),
])
