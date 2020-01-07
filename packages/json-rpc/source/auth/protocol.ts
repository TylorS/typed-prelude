import { Jwt } from '@typed/jwt'
import { Request, Response } from '../protocol'

/* Sign-up flow */
// SignUpRequest -> SignUpResponse :: User should receive a text message with code
// MultifactorAuthRequest -> MultifactorAuthResponse :: User inputs code into app and sends request to verify

/* Login flow */
// LogInRequest -> LogInResponse :: User should input phone number and send request
// MultifactorAuthRequest -> MultifactorAuthResponse :: User inputs code into app and sends request to verify

export type User = {
  readonly name: string
  readonly phoneNumber: string
  readonly verified: boolean
}

export type SignUpRequest = Request<
  'auth.signUp',
  Omit<
    {
      readonly name: string
      readonly phoneNumber: string
    },
    'verified'
  >
>

export type SignUpResponse = Response<boolean>

export type LogInRequest = Request<'auth.login', Pick<User, 'phoneNumber'>>
export type LogInResponse = Response<boolean>

export type MultifactorAuthRequest = Request<
  'auth.multifactor',
  {
    readonly code: string
  }
>
export type MultifactorAuthResponse = Response<Jwt>

export type RefreshRequest

export namespace AuthError {
  export const UnauthorizedErrorCode = -32001 as const
}
