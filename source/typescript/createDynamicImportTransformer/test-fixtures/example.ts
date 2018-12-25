export async function foo() {
  const { add } = await import('./math')

  console.log('adding', add(1, 2) === 3)
}
