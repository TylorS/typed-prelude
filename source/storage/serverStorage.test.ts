import { describe, it } from '@typed/test'
import { serverStorage } from './serverStorage'

describe(`serverStorage`, [
  it(`implements Storage interface`, ({ equal }) => {
    const storage: Storage = serverStorage()

    storage.setItem('foo', 'bar')
    equal('bar', storage.getItem('foo'))
  }),
])
