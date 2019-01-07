import { join } from 'path'
import { generateBundle } from './source/typescript'

generateBundle({
  directory: process.cwd(),
  filePath: join(process.cwd(), 'source/typescript/index.ts'),
  outputDirectory: join(process.cwd(), 'dist'),
  publicPath: 'dist',
  useHash: false,
})
