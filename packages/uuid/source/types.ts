import { NewType } from '@typed/new-type'

declare const UUID: unique symbol

export type Uuid = NewType<string, { readonly Uuid: typeof UUID }>

export type UuidSeed = readonly [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
]

export interface UuidEnv {
  readonly randomUuidSeed: () => UuidSeed
}
