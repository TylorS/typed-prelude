import { ReadableOptions, WritableOptions } from 'stream'
import { MockReadable } from './MockReadable'
import { MockWritable } from './MockWritable'

export interface ChildProcessStdioOptions {
  readonly stdin?: WritableOptions
  readonly stdout?: ReadableOptions
  readonly stderr?: ReadableOptions
}

export type ChildProcessStdio = {
  readonly stdin: MockWritable
  readonly stderr: MockReadable
  readonly stdout: MockReadable
}

export function createChildProcessStdio(options: ChildProcessStdioOptions = {}): ChildProcessStdio {
  const stdin = new MockWritable(options.stdin)
  const stdout = new MockReadable(options.stdout)
  const stderr = new MockReadable(options.stderr)

  return { stdin, stdout, stderr } as const
}
