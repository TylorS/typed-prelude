import { Chain } from './Chain'
import { Applicative } from './Applicative'
import { Types } from './Hkt'

export interface Monad<T extends Types> extends Applicative<T>, Chain<T> {}
