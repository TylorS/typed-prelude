import { join } from 'path'
import { findTsConfig } from './findTsConfig'
import { createBundle } from './fuse-box/createBundle'

async function main() {
  const directory = process.cwd()
  const fileName = join(directory, 'source/test.ts')
  const tsConfig = findTsConfig({ directory })
  const { fuseBox } = await createBundle({
    directory,
    fileName,
    tsConfig,
    ssl: true,
    indexHtmlPath: join(directory, 'source/index.html'),
  })

  await fuseBox.run()
}

main()
