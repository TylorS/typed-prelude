import { fork } from 'child_process'

export type ProcessResults = { exitCode: number; stdout: string; stderr: string }

export function runInAnotherProcess(filePath: string, args: string[]): Promise<ProcessResults> {
  return new Promise(resolve => {
    const messages: string[] = []
    const errors: string[] = []
    const subprocess = fork(filePath, args, { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] })

    subprocess.stdout!.on('data', msg => messages.push(msg.toString()))
    subprocess.stderr!.on('data', msg => errors.push(msg.toString()))

    subprocess.on('close', exitCode =>
      resolve({ exitCode, stdout: messages.join(''), stderr: errors.join('') }),
    )
  })
}
