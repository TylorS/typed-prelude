import { Bundle } from 'fuse-box'
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

  const producer = await fuseBox.run()

  producer.sharedEvents.on('file-changed', ([, path]: [Bundle, string]) => {
    console.log(path)
  })
}

main()
