import {
  createChannel,
  useChannel,
  useMemo,
  useEffect,
  ChannelEffects,
  HookEnv,
} from '@typed/hooks'
import { get, runEffects, TimerEnv } from '@typed/effects'
import { DomEnv } from '@typed/dom'
import { wrapInSubscription } from '@typed/history'

export const DomEnvChannel = createChannel<DomEnv, DomEnv>(get)

export function* useDomEnv<A>(): ChannelEffects<HookEnv & TimerEnv & DomEnv<A>, DomEnv<A>> {
  const env = yield* get()
  const [getDomEnv, updateDomEnv] = yield* useChannel(DomEnvChannel)
  const domEnv = yield* getDomEnv()
  const { subscription } = yield* useMemo(wrapInSubscription, [domEnv])

  yield* useEffect(
    s =>
      s.subscribe(update =>
        runEffects(
          updateDomEnv(d => ({ ...d, ...update })),
          env,
        ),
      ),
    [subscription],
  )

  return domEnv
}
