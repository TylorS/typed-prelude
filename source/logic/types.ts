import { Arity1 } from '../lambda'
import { Maybe } from '../maybe'

export interface Match<A, B> extends Arity1<A, Maybe<B>> {}
