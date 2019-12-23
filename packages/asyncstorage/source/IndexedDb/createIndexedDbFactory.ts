import { isBrowser } from '@typed/env'

export function createIndexedDbFactory(testing: boolean = false): IDBFactory {
  if (isBrowser) {
    return indexedDB
  }

  if (testing) {
    const FDBFactory: new () => IDBFactory = require('fake-indexeddb/build/FDBFactory').default

    return new FDBFactory()
  }

  return require('fake-indexeddb')
}
