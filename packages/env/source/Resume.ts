import { Disposable } from '@typed/disposable'

export type Resume<A> = ValueResume<A> | LazyResume<A>

export type ValueResume<A> = { readonly type: 'value'; readonly value: A }
export type LazyResume<A> = {
  readonly type: 'lazy'
  readonly resume: (cb: (value: A) => Disposable) => Disposable
}

export namespace Resume {
  export const of = <A>(value: A): Resume<A> => ({ type: 'value', value })
  export const create = <A>(resume: (cb: (value: A) => Disposable) => Disposable): Resume<A> => ({
    type: 'lazy',
    resume,
  })

  export const run = <A>(f: (value: A) => Disposable, resume: Resume<A>) =>
    isValue(resume) ? f(resume.value) : resume.resume(f)

  export const chain = <A, B>(fn: (value: A) => Resume<B>, resume: Resume<A>): Resume<B> =>
    isValue(resume) ? fn(resume.value) : create((cb) => run((a) => run(cb, fn(a)), resume))

  export const isValue = <A>(resume: Resume<A>): resume is ValueResume<A> => resume.type === 'value'
  export const isLazy = <A>(resume: Resume<A>): resume is LazyResume<A> => resume.type === 'lazy'

  export const combine = <A, B>(a: Resume<A>, b: Resume<B>): Resume<readonly [A, B]> =>
    create((cb) => {
      const disposable = Disposable.lazy()
      const values = Array(2)
      const hasValues = Array(2).fill(false)

      function done(value: A, index: 0): Disposable
      function done(value: B, index: 1): Disposable
      function done(value: A | B, index: 0 | 1) {
        values[index] = value
        hasValues[index] = true

        if (hasValues.every(Boolean)) {
          return cb(values as [A, B])
        }

        return Disposable.None
      }

      disposable.addDisposable(run((a) => done(a, 0), a))
      disposable.addDisposable(run((b) => done(b, 1), b))

      return disposable
    })
}
