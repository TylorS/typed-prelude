import * as t from '@typed/io'
import { NewType } from '@typed/new-type'
import { Uuid } from '@typed/uuid'

const DocumentUriRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/

/**
 * A string formatted just like a URL that points to where to find
 * a document.
 * foo://example.com:8042/over/there?name=ferret#nose
 * \_/   \______________/\_________/ \_________/ \__/
 * |           |            |            |        |
 * scheme     authority       path        query   fragment
 * |   _____________________|__
 * / \ /                        \
 * urn:example:animal:ferret:nose
 */
export type DocumentUri = NewType<string, 'DocumentUri'>
export const DocumentUri = t.refinement(
  t.String,
  (s): s is DocumentUri => DocumentUriRegex.test(s),
  'DocumentUri',
)

export type Environment = NewType<string, 'Environment'>
export const Environment = t.refinement(
  t.String,
  (s): s is Environment => t.String.is(s),
  'Environment',
)

export type Key<A> = NewType<Uuid, A>
export const Key = <A extends Key<any>>(keyName: string): t.Type<A> =>
  t.refinement(t.Uuid, (_): _ is A => true, keyName)
