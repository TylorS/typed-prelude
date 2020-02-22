import { Arity1, pipe } from '@typed/lambda'
import { equals } from '@typed/logic'
import { map, withDefault } from '@typed/maybe'
import { toLowerCase, trim } from '@typed/strings'
import { getEnvVar } from './getEnvVar'

const isBoolean = map(pipe(toLowerCase, trim, equals('true')))

export const getBoolEnvVar: Arity1<string, boolean> = pipe(
  getEnvVar,
  isBoolean,
  withDefault<boolean>(false),
)
