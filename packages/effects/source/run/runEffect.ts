import { Env, Resume } from '@typed/env'
import { Capabilities, Effect, IteratorResultOf, Return } from '../Effect'
import { Failure } from '../failures/Failure'

export const runEffect = <A extends Effect<any, any>>(
  effect: A,
): Env<Capabilities<A>, Return<A>> => (c: Capabilities<A>) => {
  const generator = effect[Symbol.iterator]() as A

  return runEffectGenerator(generator, generator.next(), c)
}

const nextResult = <A extends Effect<any, any>>(value: any, generator: A): IteratorResultOf<A> => {
  if (value instanceof Failure) {
    return value.unpack(
      (e) => generator.throw(e),
      (a) => generator.return(a),
    )
  }

  return generator.next(value)
}

const runEffectGenerator = <A extends Effect<any, any>>(
  generator: A,
  result: IteratorResultOf<A>,
  capabilities: Capabilities<A>,
): Resume<Return<A>> => {
  while (!result.done) {
    const resume = result.value(capabilities)

    if (resume.type === 'lazy') {
      return Resume.chain(
        (value) => runEffectGenerator(generator, nextResult(value, generator), capabilities),
        resume,
      )
    }

    result = nextResult(resume.value, generator)
  }

  return Resume.of(result.value)
}
