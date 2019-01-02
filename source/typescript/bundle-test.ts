import { multiply } from './findSourceFileDependencies/test-fixtures/re-exports'

async function main() {
  const { add } = await import('./createModulesObject/test-fixtures/add')

  console.log(add(1, multiply(3, 3)))
}

main()
