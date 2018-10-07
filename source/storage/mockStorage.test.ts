import { describe, it } from '@typed/test'
import { mockStorage } from './mockStorage'

describe(`mockStorage`, [
  it(`implements Storage interface`, ({ equal }) => {
    const storage: Storage = mockStorage()

    storage.setItem('foo', 'bar')
    equal('bar', storage.getItem('foo'))
  }),
])
