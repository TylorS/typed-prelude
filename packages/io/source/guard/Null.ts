import { isNull } from '@typed/logic'
import { Guard, TypeOf } from './Guard'
import { union } from './Union'

export const Null: Guard<null> = Guard.is(isNull)
export const nullable = <A extends Guard<any>>(g: A): Guard<TypeOf<A> | null> => union([g, Null])
