import { extname } from 'path'

export function filePathIsLink(linkExtensions: string[]) {
  return (filePath: string) => {
    const extension = withDot(extname(filePath))

    return linkExtensions.map(withDot).some(x => x === extension)
  }
}

function withDot(extension: string) {
  return extension.startsWith('.') ? extension : `.${extension}`
}
