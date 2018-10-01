import { Effect } from '../effect'
import { IO, pipe } from '../lambda'
import { randomUuidSeed } from './randomUuidSeed'
import { Uuid } from './Uuid'
import { uuid4 } from './uuid4'

const uuid: IO<Uuid> = pipe(
  randomUuidSeed,
  uuid4,
)
const uuidEff: Effect<Uuid> = Effect.fromIO(uuid)

export { Uuid, uuid, uuidEff }
export { isUuid } from './isUuid'
