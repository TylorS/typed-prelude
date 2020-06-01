import * as fs from 'fs'
import { join } from 'path'
import { createInterface } from 'readline'
import { promisify } from 'util'
import * as yargs from 'yargs'
import { sourceDirectory } from './common'
import { updateCodeWorkspace } from './update-code-workspace'
import { updatePackageJson } from './update-package-json'
import { updateRootConfigs, updateTsConfigForPkg } from './update-tsconfig-json'
import { updateVsCodeSettings } from './update-vscode-settings'

const options = yargs.boolean('force').alias('f', 'force').help().argv
const { _: names, force = false } = options

const mkdir = promisify(fs.mkdir)

if (process.mainModule === module) {
  ;(async () => {
    for (const name of names) {
      await newPackage(name, force)
    }

    updateRootConfigs()
    updateCodeWorkspace()
  })().catch((error) => {
    console.error(error)

    process.exit(1)
  })
}

export async function newPackage(name: string, force: boolean) {
  const packageName = `@typed/${name}`
  const packageDirectory = join(sourceDirectory, name)
  const packageSourceDirectory = join(packageDirectory, 'source')
  const packageJsonPath = join(packageDirectory, 'package.json')
  const exists = fs.existsSync(packageJsonPath)

  if (exists && force) {
    deleteFolderRecursively(packageDirectory)
  }

  if (exists) {
    return console.log(
      `\n[${packageName}] :: Already Exists\n\nUse --force to recreate this package.\n`,
    )
  }

  const description = await prompt(`\n[${packageName}] :: Please provide a description\n\n> `)
  const keywords = (
    await prompt(`\n[${packageName}] :: Please provide a comma-separated list of keywords\n\n> `)
  )
    .split(/\,/g)
    .map((s) => s.trim())
  // TODO: retrieve from git?
  const author = await prompt(`\n[${packageName}] :: Please provide the author's information\n\n> `)

  const packageJSONData = {
    name: `${packageName}`,
    version: '0.0.0',
    description,
    keywords,
    author,
  }

  await shouldContinue(packageName, JSON.stringify(packageJSONData, null, 2))

  // Create the stuff
  await mkdir(packageDirectory)
  await mkdir(packageSourceDirectory)

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJSONData))

  await Promise.all([
    updatePackageJson(name),
    updateTsConfigForPkg(name),
    updateVsCodeSettings(name),
  ])
}

async function shouldContinue(name: string, data: string): Promise<void> {
  console.log(`\nCreating ${name}:\n\n${data}\n\n`)
  const answer = (await prompt('Would you like to continue? Y(es)/N(o)\n\n> ')).toLowerCase()

  if (answer === 'yes' || answer === 'y') {
    return
  }

  if (answer === 'no' || answer === 'n') {
    console.log(`\n\nExiting.\n\n`)
    process.exit(1)
  }

  return shouldContinue(name, data)
}

function prompt(q: string) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise<string>((resolve) =>
    rl.question(q, (a) => {
      rl.close()
      resolve(a)
    }),
  )
}

function deleteFolderRecursively(path: string) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file) => {
      const curPath = join(path, file)

      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursively(curPath)
      } else {
        // delete file
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}
