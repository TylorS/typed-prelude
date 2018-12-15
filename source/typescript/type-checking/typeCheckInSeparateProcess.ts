import { fork } from 'child_process'
import { existsSync } from 'fs'
import { join } from 'path'

const typeCheckCliBasePath = join(__dirname, 'typeCheckCli')
const tsPath = typeCheckCliBasePath + '.ts'
const jsPath = typeCheckCliBasePath + '.js'
const typeCheckCliPath = existsSync(jsPath) ? jsPath : tsPath

export type ProcessResults = { exitCode: number; stdout: string; stderr: string }

export function typecheckInSeparateProcess(cwd: string, files: string[]): Promise<ProcessResults> {
  return runInAnotherProcess(typeCheckCliPath, [cwd, ...files])
}

function runInAnotherProcess(filePath: string, args: string[]): Promise<ProcessResults> {
  return new Promise(resolve => {
    const messages: string[] = []
    const errors: string[] = []
    const subprocess = fork(filePath, args, { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] })

    subprocess.stdout.on('data', msg => messages.push(msg.toString()))
    subprocess.stderr.on('data', msg => errors.push(msg.toString()))

    subprocess.on('close', exitCode =>
      resolve({ exitCode, stdout: messages.join(''), stderr: errors.join('') }),
    )
  })
}
