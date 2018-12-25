import { extname } from 'path'

export function filePathIsLink(linkExtensions: string[]) {
  return (filePath: string) => {
    const extension = extname(filePath)

    return linkExtensions.some(x => x === extension)
  }
}
