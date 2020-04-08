import { Type, Types, Values } from './Hkt'
import { Functor } from './Functor'

export interface Alt<T extends Types> extends Functor<T> {
  readonly alt: <A extends Values>(a: Type<T, A>, b: Type<T, A>) => Type<T, A>
}
