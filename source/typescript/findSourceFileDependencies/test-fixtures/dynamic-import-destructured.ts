export async function foo() {
  const { add: add2, multiply } = await import('./math')

  console.assert(add2(1, 2) === 3)
  console.assert(multiply(1, 2) === 2)
}
