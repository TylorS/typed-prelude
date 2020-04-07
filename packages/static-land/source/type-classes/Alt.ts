import { Type } from './Hkt'
import { Functor } from './Functor'

export interface Alt<T> extends Functor<T> {
  readonly alt: <A>(a: Type<T, A>, b: Type<T, A>) => Type<T, A>
}
