import { CreateHook, createUseMemo, withCreateHook } from '@typed/hooks'
import { Uuid, uuid4, UuidEnv } from '@typed/uuid'
import { createUseUuidEnv } from '../channels'

const createWithUuidEnv = ({ randomUuidSeed }: UuidEnv) => () => uuid4(randomUuidSeed())

export const createUseUuid: CreateHook<[], () => Uuid> = withCreateHook(
  createHook => [createHook(createUseUuidEnv), createHook(createUseMemo)] as const,
  ([useUuidEnv, useMemo]) => useMemo(createWithUuidEnv, [useUuidEnv()]),
)
