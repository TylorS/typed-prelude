import { lstatSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { gzipSync } from 'zlib'
import { makeUmdBundle } from '../../tools/makeUmdBundle'

const options = {
  directory: __dirname,
  entry: './source/client.ts',
  distName: 'dist/client.js',
  watch: process.argv.includes('--watch'),
}

makeUmdBundle(options).then(() => {
  if (process.env.NODE_ENV === 'production') {
    const outFile = join(options.directory, options.distName)
    const outFileGzipped = join(options.directory, options.distName + '.gz')
    const contents = readFileSync(outFile)
    const contentsGzipped = gzipSync(contents)

    writeFileSync(outFileGzipped, contentsGzipped)

    console.log(
      `\nBundle Size:`,
      `\n  Minifed: ${lstatSync(outFile).size / 1000}kB`,
      `\n  Gzipped: ${lstatSync(outFileGzipped).size / 1000}kB`,
      `\n`,
    )
  }
})
