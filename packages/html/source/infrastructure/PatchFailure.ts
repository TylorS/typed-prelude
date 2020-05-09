import { FailEnv } from '@typed/effects'

export const PatchFailure = Symbol.for('PatchFailure')
export type PatchFailure = FailEnv<typeof PatchFailure, Error>
