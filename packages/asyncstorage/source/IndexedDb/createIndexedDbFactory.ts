export function createServerIndexedDbFactory(testing: boolean = false): IDBFactory {
  if (testing) {
    const FDBFactory: new () => IDBFactory = require('fake-indexeddb/build/FDBFactory').default

    return new FDBFactory()
  }

  return require('fake-indexeddb')
}
