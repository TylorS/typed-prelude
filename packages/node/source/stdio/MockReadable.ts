import { Readable, ReadableOptions } from 'stream'

const defaults = {
  encoding: 'utf8',
}

export class MockReadable extends Readable {
  // tslint:disable-next-line:variable-name
  private _data: any[] = []
  // tslint:disable-next-line:variable-name
  private _immutableData: any[] = []

  constructor(options?: ReadableOptions) {
    super(Object.assign({}, defaults, options))
  }

  public _read(size?: number): void {
    const data = this._data

    if (size === void 0) {
      size = data.length
    }

    let count = 0

    while (this.readable && data.length && count < size) {
      const item = data.shift()

      if (!this.push(item, 'utf8')) {
        this.readable = false
      }

      ++count
    }
  }

  public write(...data: any[]): MockReadable {
    if (!this.readable) {
      throw new Error('This stream has already finished')
    }

    this._data.push(...data)
    this._immutableData.push(...data)

    this._read()

    return this
  }

  public data(): any[] {
    return this._immutableData.slice(0)
  }

  public end(...args: any[]): void {
    this.readable = false

    process.nextTick(() => {
      this.emit('end', ...args)
    })
  }
}
