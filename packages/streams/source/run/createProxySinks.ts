import { until } from '@most/core'
import { Stream } from '@most/types'
import { create, Subject } from 'most-subject'
import { Sinks } from './types'

export function createProxySinks<A extends Sinks>(
  sinks: Record<keyof Sinks, Subject<any, any>>,
  endSignal: Stream<void>,
): A {
  return new Proxy<A>({} as A, {
    get(target: A, property: keyof A) {
      if (!target[property]) {
        const subject = create<any, any>(until(endSignal))

        sinks[property] = subject
        target[property] = subject[1] as A[keyof A]
      }

      return target[property]
    },
  })
}
