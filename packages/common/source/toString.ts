import { indexOf } from './indexOf'
import { isMap, isSet } from './is'
import { mapArrayLike } from './mapArrayLike'
import { quote } from './quote'

/**
 * Convert anything into a string
 * @param x :: any
 * @returns a string representation of a value
 */
export const toString = (x: any): string => _toString(x, [])

function _toString(x: any, seen: any[]): string {
  const recur = (y: any) => {
    const xs = seen.concat([x])

    return indexOf(xs, y) > -1 ? '<Circular>' : _toString(y, xs)
  }

  const maybeRecur = (y: any) => (typeof y === 'string' ? quote(y) : recur(y))

  const mapPairs = (keys: unknown[], getKey: (u: unknown) => any, separator = ': ') => {
    return mapArrayLike(
      (k: unknown) => maybeRecur(k) + separator + maybeRecur(getKey(k)),
      keys.sort(),
    )
  }

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + mapArrayLike(recur, x).join(', ') + '))'
    case '[object Array]':
      return (
        '[' +
        mapArrayLike(recur, x)
          .concat(
            mapPairs(
              Object.keys(x).filter((k) => !/^\d+$/.test(k)),
              (k) => x[k as keyof typeof x],
            ),
          )
          .join(', ') +
        ']'
      )
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString()
    case '[object Date]':
      return (
        'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : quote((x as Date).toISOString())) + ')'
      )
    case '[object Null]':
      return 'null'
    case '[object Number]':
      return typeof x === 'object'
        ? 'new Number(' + recur(x.valueOf()) + ')'
        : 1 / x === -Infinity
        ? '-0'
        : x.toString(10)
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : quote(x)
    case '[object Undefined]':
      return 'undefined'
    default:
      if (typeof x.toString === 'function') {
        const stringRepresentation = x.toString()

        if (!stringRepresentation.startsWith('[object')) {
          return stringRepresentation
        }
      }

      if (isMap(x)) {
        return 'Map { ' + mapPairs(Array.from(x.keys()), (k) => x.get(k), ' => ').join(', ') + ' }'
      }

      if (isSet(x)) {
        return 'Set [ ' + mapPairs(Array.from(x.values()), (_) => '', '').join(', ') + ' ]'
      }

      return '{' + mapPairs(Object.keys(x), (k) => x[k as keyof typeof x]).join(', ') + '}'
  }
}
