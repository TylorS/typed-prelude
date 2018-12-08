const perf =
  // tslint:disable-next-line:no-var-requires
  typeof performance !== 'undefined' ? performance : require('perf_hooks').performance

export const time = <A>(f: () => A): [A, number, number] => {
  const startTime = perf.now()
  const x = f()
  const endTime = perf.now()

  return [x, startTime, endTime]
}
