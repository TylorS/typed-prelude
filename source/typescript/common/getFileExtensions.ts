import { CompilerOptions } from 'typescript'

export function getFileExtensions(compilerOptions: CompilerOptions): string[] {
  const { allowJs = false, resolveJsonModule = false, jsx } = compilerOptions

  const extensions: string[] = ['.ts']

  if (allowJs) {
    extensions.push('.js')
  }

  if (jsx) {
    extensions.push('.tsx')

    if (allowJs) {
      extensions.push('.jsx')
    }
  }

  if (resolveJsonModule) {
    extensions.push('.json')
  }

  return extensions
}
