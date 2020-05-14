import { Readable, ReadableOptions } from 'stream'

const defaults = {
  encoding: 'utf8',
}

export class MockReadable extends Readable {
  protected readData: string[] = []
  protected writeData: string[] = []
  protected options: ReadableOptions

  constructor(options?: ReadableOptions) {
    super({ ...defaults, ...options })

    this.options = { ...defaults, ...options }
  }

  public _read(size?: number): void {
    const data = this.readData

    if (size === void 0) {
      size = data.length
    }

    let count = 0

    while (this.readable && data.length && count < size) {
      const item = data.shift()

      if (!this.push(item, this.options.encoding)) {
        this.readable = false
      }

      ++count
    }
  }

  public write(...data: (Buffer | string)[]): MockReadable {
    if (!this.readable) {
      throw new Error('This stream has already finished')
    }

    const values = data.map((x) => x.toString())

    this.readData.push(...values)
    this.writeData.push(...values)

    this._read()

    for (const value of values) {
      this.emit('data', value)
    }

    return this
  }

  public data(): readonly string[] {
    return this.writeData.slice(0)
  }

  public end(...args: any[]): void {
    this.readable = false

    process.nextTick(() => {
      this.emit('end', ...args)
    })
  }
}
