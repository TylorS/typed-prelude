export async function foo() {
  const add = await import('./math').then(math => math.add)

  console.assert(add(1, 2) === 3)
}
