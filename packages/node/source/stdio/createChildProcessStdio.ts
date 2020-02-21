import { ReadableOptions, WritableOptions } from 'stream'
import { MockReadable } from './MockReadable'
import { MockWritable } from './MockWritable'

export interface ChildProcessOptions {
  readonly stdin?: WritableOptions
  readonly stdout?: ReadableOptions
  readonly stderr?: ReadableOptions
}

export type ChildProcessStdio = {
  readonly stdin: MockWritable
  readonly stderr: MockReadable
  readonly stdout: MockReadable
}

// for developer convenience
/**
 * Creates a standard input/output object
 * { stdin: MockReadable, stderr: MockWritable, stdout: MockWritable }
 *
 * @export
 * @param {StdioOptions} [options]
 * @returns { stdin: MockReadable, stderr: MockWritable, stdout: MockWritable }
 */
export function createChildProcessStdio(options: ChildProcessOptions = {}): ChildProcessStdio {
  const stdin = new MockWritable(options.stdin)
  const stdout = new MockReadable(options.stdout)
  const stderr = new MockReadable(options.stderr)

  return { stdin, stdout, stderr } as const
}
