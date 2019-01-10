import { createProject, findExportsFromSourceFile, findTsConfig } from './typescript'
import { makeAbsolute } from './typescript/common/makeAbsolute'
import { ExportMetadata } from './typescript/types'

async function main() {
  const directory = process.cwd()
  const tsConfig = findTsConfig({ directory })
  const { getSourceFiles } = createProject({
    tsConfig,
    directory,
    fileGlobs: ['source/**/*.test.ts'],
    skipDependencies: false,
  })

  const { sourceFiles, program } = getSourceFiles()
  const typeChecker = program.getTypeChecker()
  const exportMetadata: Record<string, ExportMetadata[]> = {}

  for (const sourceFile of sourceFiles) {
    exportMetadata[makeAbsolute(directory, sourceFile.fileName)] = findExportsFromSourceFile(
      sourceFile,
      typeChecker,
    )
  }

  return exportMetadata
}

console.time('Finished')
const metadata = main()
console.timeEnd('Finished')

console.log(metadata)
