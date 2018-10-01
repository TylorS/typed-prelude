export type Uuid = string & { readonly _uuid?: undefined }

export type UuidSeed = [
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
  number
]

export interface RandomNumberGenerator {
  readonly randomUuidSeed: () => UuidSeed
}
