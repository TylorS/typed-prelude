import { basename, dirname, extname, join } from 'path'

export function insertHash(hash: string, filePath: string) {
  const dir = dirname(filePath)
  const ext = extname(filePath)
  const base = basename(filePath).replace(ext, '')

  return join(dir, base + `.${hash}` + ext)
}
