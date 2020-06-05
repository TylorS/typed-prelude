import { createServer } from '@typed/json-rpc'

export function* main() {
  const server = yield* createServer()
}
