import { FailEnv } from '@typed/effects'

export const WebSocketFailure = Symbol('WebSocketFailure')
export type WebSocketFailure = FailEnv<typeof WebSocketFailure, Error>
