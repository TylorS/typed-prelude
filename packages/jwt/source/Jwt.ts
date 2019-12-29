import { isNewType, NewType } from '@typed/new-type'

const regex = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/

export type Jwt = NewType<string, 'Jwt'>

export const isJwt = isNewType<Jwt>(s => regex.test(s))
