import { NewType } from '@typed/new-type'

export type Uuid = NewType<string, 'Uuid'>

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
