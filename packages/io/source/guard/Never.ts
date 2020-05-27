import { always } from '@typed/lambda'
import { Guard } from '../Guard'

export const Never: Guard<never> = { is: always(false) } as Guard<never>
