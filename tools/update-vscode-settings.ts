import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'fs'
import { join } from 'path'
import { PACKAGES, sourceDirectory } from './common'

const VSCODE_SOURCE_FOLDER = join(__dirname, 'vscode-packages')

PACKAGES.forEach((pkg) => {
  const pkgDirectory = join(sourceDirectory, pkg)
  const vscodeDirectory = join(pkgDirectory, '.vscode')

  if (!existsSync(vscodeDirectory)) {
    mkdirSync(vscodeDirectory)
  }

  copyFilesRecursively(VSCODE_SOURCE_FOLDER, vscodeDirectory)
})

function copyFilesRecursively(sourceFolder: string, destinationFolder: string) {
  for (const pathPart of readdirSync(sourceFolder)) {
    const source = join(sourceFolder, pathPart)
    const destination = join(destinationFolder, pathPart)
    const stats = statSync(source)

    if (stats.isFile()) {
      copyFileSync(source, destination)
    }

    if (stats.isDirectory()) {
      if (!existsSync(destination)) {
        mkdirSync(destination)
      }

      copyFilesRecursively(source, destination)
    }
  }
}
