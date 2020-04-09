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
}
