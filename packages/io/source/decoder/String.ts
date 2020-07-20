import { isString } from '@typed/logic'
import { Decoder } from './Decoder'

// tslint:disable-next-line:variable-name
export const String: Decoder<unknown, string> = Decoder.fromGuard({ is: isString }, `string`)
