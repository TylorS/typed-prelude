import { always } from '@typed/lambda'
import { Guard } from './Guard'

export const Never: Guard = { is: always(false) } as Guard
