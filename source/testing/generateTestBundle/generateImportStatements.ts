import { groupBy } from '@typed/list'
import { TestMetadata } from '../types'

const openingTokens = ['import', '{']
const closingTokens = ['}', 'from']

export function generateImportStatements(testMetadata: TestMetadata[]): [string, number] {
  let numberOfTests = 0
  const getImportStatement = importStatementByFile(() => numberOfTests++)
  const metadataByFile = groupBy(x => x.filePath, testMetadata)
  const importStatements = Object.keys(metadataByFile)
    .sort()
    .map(filePath => getImportStatement(filePath, metadataByFile[filePath]))

  return [`${importStatements.join(`\n`)}`, numberOfTests] as [string, number]
}

function importStatementByFile(getId: () => number) {
  return (filePath: string, testMetadata: TestMetadata[]): string => {
    const tokens: string[] = []
    const lastIndex = testMetadata.length - 1

    for (let i = 0; i < testMetadata.length; ++i) {
      const {
        exportNames: [exportName],
      } = testMetadata[i]

      const id = getId()

      tokens.push(`${exportName}`, 'as', `test${id}${i !== lastIndex ? ',' : ''}`)
    }

    return [...openingTokens, ...tokens, ...closingTokens, `'${filePath}'`].join(' ')
  }
}
