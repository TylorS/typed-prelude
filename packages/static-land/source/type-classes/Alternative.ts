import { Alt } from './Alt'
import { Applicative } from './Applicative'

export interface Alternative<T> extends Applicative<T>, Alt<T> {}
