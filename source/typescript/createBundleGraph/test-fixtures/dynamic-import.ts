export async function main() {
  const { add } = await import('./math')

  return add(1, 2)
}
