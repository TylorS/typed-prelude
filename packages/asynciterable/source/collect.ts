export async function collect<A>(asyncIterable: AsyncIterable<A>): Promise<A[]> {
  const values: A[] = []

  for await (const x of asyncIterable) {
    values.push(x)
  }

  return values
}
