import { Alt } from './Alt'
import { Applicative } from './Applicative'
import { Types } from './Hkt'

export interface Alternative<T extends Types> extends Applicative<T>, Alt<T> {}
