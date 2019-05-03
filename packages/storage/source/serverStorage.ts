/**
 * Create an in-memory implementation of Storage
 * @param map :: Map string string - Initial values
 * @returns :: Storage
 */
export function serverStorage(map?: Map<string, string>): Storage {
  return new Proxy(new ServerStorage(map), { get, set }) as Storage
}

class ServerStorage {
  public map: Map<string, string>

  constructor(map?: Map<string, string>) {
    this.map = map || new Map<string, string>()
  }

  public get length(): number {
    return this.map.size
  }

  public clear(): void {
    this.map.clear()
  }

  public setItem(key: string, value: string) {
    this.map.set(key, value)
  }

  public getItem(key: string): string | null {
    return this.map.get(key) || null
  }

  public key(index: number): string | null {
    const values = Array.from(this.map.keys())

    return values[index] || null
  }

  public removeItem(key: string) {
    this.map.delete(key)
  }
}

function get(target: ServerStorage, property: keyof ServerStorage) {
  if (target[property]) {
    return target[property]
  }

  const int = parseInt(property.toString(), 10)

  if (!Number.isNaN(int)) {
    return target.key(int)
  }

  return target.getItem(property)
}

function set(target: ServerStorage, property: PropertyKey, value: string) {
  let key = property.toString()
  const int = parseInt(key, 10)

  if (!Number.isNaN(int)) {
    const keys = Array.from(target.map.keys())
    const actualKey = (key = keys[int])

    if (!actualKey) {
      return false
    }
  }

  target.setItem(key, value)

  return true
}
