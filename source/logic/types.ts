import { Arity1 } from '../lambda'
import { Maybe } from '../maybe'

export type Match<A, B> = Arity1<A, Maybe<B>>
