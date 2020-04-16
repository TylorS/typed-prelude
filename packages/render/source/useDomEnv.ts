import { DomEnv } from '@typed/dom'
import { get, runEffects, TimerEnv } from '@typed/effects'
import { wrapInSubscription } from '@typed/history'
import {
  ChannelEffects,
  createChannel,
  HookEnv,
  useChannel,
  useEffect,
  useMemo,
} from '@typed/hooks'

export const DomEnvChannel = createChannel<DomEnv, DomEnv>(get)

export function* useDomEnv<A>(): ChannelEffects<HookEnv & TimerEnv & DomEnv<A>, DomEnv<A>> {
  const env = yield* get()
  const [getDomEnv, updateDomEnv] = yield* useChannel(DomEnvChannel)
  const domEnv = yield* getDomEnv()
  const { subscription } = yield* useMemo(wrapInSubscription, [domEnv])

  yield* useEffect(
    (s) =>
      s.subscribe((update) =>
        runEffects(
          updateDomEnv((d) => ({ ...d, ...update })),
          env,
        ),
      ),
    [subscription],
  )

  return domEnv
}
