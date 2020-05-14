import { Sink, Stream } from '@most/types'
import { useMemo } from '@typed/hooks'
import { noOp } from '@typed/lambda'
import { useRunStream } from './useRunStream'

/**
 * A convenient helper for listening to the values of a stream
 */
export function* useStreamEvents<A>(stream: Stream<A>, sink: Partial<Sink<A>>) {
  return yield* useRunStream(stream, yield* useEventSink(sink))
}

function* useEventSink<A>(sink: Partial<Sink<A>>) {
  return yield* useMemo((sink): Sink<A> => ({ event: noOp, error: noOp, end: noOp, ...sink }), [
    sink,
  ])
}
