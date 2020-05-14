import { Writable, WritableOptions } from 'stream'

export class MockWritable extends Writable {
  // tslint:disable-next-line:variable-name
  private _data: any[] = []

  constructor(options?: WritableOptions) {
    super(options)
  }

  public end(): void {
    this.emit('end')
    super.end()
  }

  public write(data: Buffer | string): boolean {
    this._data.push(data)

    return super.write(data)
  }

  public data(): any[] {
    return this._data.slice(0)
  }

  public _write(data: Buffer | string, encoding: string, callback: Function) {
    this.emit('data', Buffer.isBuffer(data) ? data.toString('utf8' || encoding) : data)
    callback()
  }
}
