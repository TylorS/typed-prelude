import { ReadableOptions, WritableOptions } from 'stream'
import { MockReadable } from './MockReadable'
import { MockWritable } from './MockWritable'

export interface StdioOptions {
  readonly stdin?: ReadableOptions
  readonly stdout?: WritableOptions
  readonly stderr?: WritableOptions
}

export type Stdio = {
  readonly stdin: MockReadable
  readonly stderr: MockWritable
  readonly stdout: MockWritable
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
export function createStdio(options: StdioOptions = {}): Stdio {
  const stdin = new MockReadable(options.stdin)
  const stdout = new MockWritable(options.stdout)
  const stderr = new MockWritable(options.stderr)

  return { stdin, stdout, stderr } as const
}
