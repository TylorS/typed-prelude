[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [map](map.md)

# Package: map

# @typed/map

> Useful functions for working immutable `ReadonlyMap`s.

## Index

### Variables

* [appendTo](map.md#const-appendto)
* [collectBy](map.md#const-collectby)
* [forEach](map.md#const-foreach)
* [getOr](map.md#const-getor)
* [has](map.md#const-has)
* [map](map.md#const-map)
* [remove](map.md#const-remove)
* [withMutations](map.md#const-withmutations)

### Functions

* [__appendTo](map.md#__appendto)
* [__collectBy](map.md#__collectby)
* [__forEach](map.md#__foreach)
* [__has](map.md#__has)
* [__map](map.md#__map)
* [__withMutations](map.md#__withmutations)
* [empty](map.md#const-empty)
* [entries](map.md#const-entries)
* [keysOf](map.md#const-keysof)
* [size](map.md#const-size)
* [valuesOf](map.md#const-valuesof)

## Variables

### `Const` appendTo

• **appendTo**: *function* = curry(__appendTo)

*Defined in [packages/map/source/appendTo.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/appendTo.ts#L4)*

#### Type declaration:

▸ <**A**, **B**>(`key`: A, `value`: B, `map`: ReadonlyMap‹A, ReadonlyArray‹B››): *ReadonlyMap‹A, ReadonlyArray‹B››*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`key` | A |
`value` | B |
`map` | ReadonlyMap‹A, ReadonlyArray‹B›› |

▸ <**A**, **B**>(`key`: A, `value`: B): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`key` | A |
`value` | B |

▸ (`map`: ReadonlyMap‹A, ReadonlyArray‹B››): *ReadonlyMap‹A, ReadonlyArray‹B››*

**Parameters:**

Name | Type |
------ | ------ |
`map` | ReadonlyMap‹A, ReadonlyArray‹B›› |

▸ <**A**, **B**>(`key`: A): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`key` | A |

▸ (`value`: B, `map`: ReadonlyMap‹A, ReadonlyArray‹B››): *ReadonlyMap‹A, ReadonlyArray‹B››*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |
`map` | ReadonlyMap‹A, ReadonlyArray‹B›› |

▸ (`value`: B): *function*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ (`map`: ReadonlyMap‹A, ReadonlyArray‹B››): *ReadonlyMap‹A, ReadonlyArray‹B››*

**Parameters:**

Name | Type |
------ | ------ |
`map` | ReadonlyMap‹A, ReadonlyArray‹B›› |

___

### `Const` collectBy

• **collectBy**: *function* = curry(__collectBy)

*Defined in [packages/map/source/collectBy.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/collectBy.ts#L7)*

Index an Iterable into a ReadonlyMap

#### Type declaration:

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›, `iterable`: Iterable‹A›): *ReadonlyMap‹B, ReadonlyArray‹A››*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |
`iterable` | Iterable‹A› |

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |

▸ (`iterable`: Iterable‹A›): *ReadonlyMap‹B, ReadonlyArray‹A››*

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹A› |

___

### `Const` forEach

• **forEach**: *function* = curry(__forEach)

*Defined in [packages/map/source/forEach.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/forEach.ts#L3)*

#### Type declaration:

▸ <**A**, **B**>(`fn`: [Arity2](lambda.md#arity2)‹A, B›, `map`: ReadonlyMap‹A, B›): *ReadonlyMap‹A, B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity2](lambda.md#arity2)‹A, B› |
`map` | ReadonlyMap‹A, B› |

▸ <**A**, **B**>(`fn`: [Arity2](lambda.md#arity2)‹A, B›): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity2](lambda.md#arity2)‹A, B› |

▸ (`map`: ReadonlyMap‹A, B›): *ReadonlyMap‹A, B›*

**Parameters:**

Name | Type |
------ | ------ |
`map` | ReadonlyMap‹A, B› |

___

### `Const` getOr

• **getOr**: *function* = curry(function getOr<A, B>(key: A, fallback: IO<B>, map: ReadonlyMap<A, B>): B {
  return map.has(key) ? map.get(key)! : fallback()
})

*Defined in [packages/map/source/getOr.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/getOr.ts#L3)*

#### Type declaration:

▸ <**A**, **B**>(`key`: A, `fallback`: [IO](lambda.md#io)‹B›, `map`: ReadonlyMap‹A, B›): *B*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`key` | A |
`fallback` | [IO](lambda.md#io)‹B› |
`map` | ReadonlyMap‹A, B› |

▸ <**A**, **B**>(`key`: A, `fallback`: [IO](lambda.md#io)‹B›): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`key` | A |
`fallback` | [IO](lambda.md#io)‹B› |

▸ (`map`: ReadonlyMap‹A, B›): *B*

**Parameters:**

Name | Type |
------ | ------ |
`map` | ReadonlyMap‹A, B› |

▸ <**A**>(`key`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`key` | A |

▸ <**B**>(`fallback`: [IO](lambda.md#io)‹B›, `map`: ReadonlyMap‹A, B›): *B*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fallback` | [IO](lambda.md#io)‹B› |
`map` | ReadonlyMap‹A, B› |

▸ <**B**>(`fallback`: [IO](lambda.md#io)‹B›): *function*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fallback` | [IO](lambda.md#io)‹B› |

▸ (`map`: ReadonlyMap‹A, B›): *B*

**Parameters:**

Name | Type |
------ | ------ |
`map` | ReadonlyMap‹A, B› |

___

### `Const` has

• **has**: *function* = curry(__has)

*Defined in [packages/map/source/has.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/has.ts#L3)*

#### Type declaration:

▸ <**A**, **B**>(`value`: A, `set`: ReadonlyMap‹A, B›): *boolean*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`set` | ReadonlyMap‹A, B› |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ <**B**>(`set`: ReadonlyMap‹A, B›): *boolean*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`set` | ReadonlyMap‹A, B› |

___

### `Const` map

• **map**: *function* = curry(__map)

*Defined in [packages/map/source/map.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/map.ts#L3)*

#### Type declaration:

▸ <**A**, **B**, **C**>(`fn`: [Arity2](lambda.md#arity2)‹A, B, C›, `map`: ReadonlyMap‹A, B›): *ReadonlyMap‹A, C›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity2](lambda.md#arity2)‹A, B, C› |
`map` | ReadonlyMap‹A, B› |

▸ <**A**, **B**, **C**>(`fn`: [Arity2](lambda.md#arity2)‹A, B, C›): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity2](lambda.md#arity2)‹A, B, C› |

▸ (`map`: ReadonlyMap‹A, B›): *ReadonlyMap‹A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`map` | ReadonlyMap‹A, B› |

___

### `Const` remove

• **remove**: *function* = curry(
  <A, B>(key: A, map: ReadonlyMap<A, B>): ReadonlyMap<A, B> =>
    withMutations((x) => x.delete(key), map),
)

*Defined in [packages/map/source/remove.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/remove.ts#L4)*

#### Type declaration:

▸ <**A**, **B**>(`key`: A, `map`: ReadonlyMap‹A, B›): *ReadonlyMap‹A, B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`key` | A |
`map` | ReadonlyMap‹A, B› |

▸ <**A**, **B**>(`key`: A): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`key` | A |

▸ (`map`: ReadonlyMap‹A, B›): *ReadonlyMap‹A, B›*

**Parameters:**

Name | Type |
------ | ------ |
`map` | ReadonlyMap‹A, B› |

___

### `Const` withMutations

• **withMutations**: *function* = curry(__withMutations)

*Defined in [packages/map/source/withMutations.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/withMutations.ts#L4)*

Create an updated ReadonlyMap by mutating a copy of the initial map

#### Type declaration:

▸ <**A**, **B**>(`fn`: function, `map`: ReadonlyMap‹A, B›): *ReadonlyMap‹A, B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`map`: [Map](../interfaces/objects.mutablemap.md#map)‹A, B›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`map` | [Map](../interfaces/objects.mutablemap.md#map)‹A, B› |

▪ **map**: *ReadonlyMap‹A, B›*

▸ <**A**, **B**>(`fn`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`map`: [Map](../interfaces/objects.mutablemap.md#map)‹A, B›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`map` | [Map](../interfaces/objects.mutablemap.md#map)‹A, B› |

▸ (`map`: ReadonlyMap‹A, B›): *ReadonlyMap‹A, B›*

**Parameters:**

Name | Type |
------ | ------ |
`map` | ReadonlyMap‹A, B› |

## Functions

###  __appendTo

▸ **__appendTo**<**A**, **B**>(`key`: A, `value`: B, `map`: ReadonlyMap‹A, ReadonlyArray‹B››): *ReadonlyMap‹A, ReadonlyArray‹B››*

*Defined in [packages/map/source/appendTo.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/appendTo.ts#L15)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`key` | A |
`value` | B |
`map` | ReadonlyMap‹A, ReadonlyArray‹B›› |

**Returns:** *ReadonlyMap‹A, ReadonlyArray‹B››*

___

###  __collectBy

▸ **__collectBy**<**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›, `iterable`: Iterable‹A›): *ReadonlyMap‹B, ReadonlyArray‹A››*

*Defined in [packages/map/source/collectBy.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/collectBy.ts#L12)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |
`iterable` | Iterable‹A› |

**Returns:** *ReadonlyMap‹B, ReadonlyArray‹A››*

___

###  __forEach

▸ **__forEach**<**A**, **B**>(`fn`: [Arity2](lambda.md#arity2)‹A, B›, `map`: ReadonlyMap‹A, B›): *ReadonlyMap‹A, B›*

*Defined in [packages/map/source/forEach.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/forEach.ts#L8)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity2](lambda.md#arity2)‹A, B› |
`map` | ReadonlyMap‹A, B› |

**Returns:** *ReadonlyMap‹A, B›*

___

###  __has

▸ **__has**<**A**, **B**>(`value`: A, `map`: ReadonlyMap‹A, B›): *boolean*

*Defined in [packages/map/source/has.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/has.ts#L8)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`map` | ReadonlyMap‹A, B› |

**Returns:** *boolean*

___

###  __map

▸ **__map**<**A**, **B**, **C**>(`fn`: [Arity2](lambda.md#arity2)‹A, B, C›, `map`: ReadonlyMap‹A, B›): *ReadonlyMap‹A, C›*

*Defined in [packages/map/source/map.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/map.ts#L8)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity2](lambda.md#arity2)‹A, B, C› |
`map` | ReadonlyMap‹A, B› |

**Returns:** *ReadonlyMap‹A, C›*

___

###  __withMutations

▸ **__withMutations**<**A**, **B**>(`fn`: function, `map`: ReadonlyMap‹A, B›): *ReadonlyMap‹A, B›*

*Defined in [packages/map/source/withMutations.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/withMutations.ts#L9)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`map`: [Map](../interfaces/objects.mutablemap.md#map)‹A, B›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`map` | [Map](../interfaces/objects.mutablemap.md#map)‹A, B› |

▪ **map**: *ReadonlyMap‹A, B›*

**Returns:** *ReadonlyMap‹A, B›*

___

### `Const` empty

▸ **empty**<**A**, **B**>(): *ReadonlyMap‹A, B›*

*Defined in [packages/map/source/empty.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/empty.ts#L1)*

**Type parameters:**

▪ **A**

▪ **B**

**Returns:** *ReadonlyMap‹A, B›*

___

### `Const` entries

▸ **entries**<**A**, **B**>(`map`: ReadonlyMap‹A, B›): *IterableIterator‹keyof [A, B]›*

*Defined in [packages/map/source/entries.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/entries.ts#L1)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`map` | ReadonlyMap‹A, B› |

**Returns:** *IterableIterator‹keyof [A, B]›*

___

### `Const` keysOf

▸ **keysOf**<**A**>(`map`: ReadonlyMap‹A, unknown›): *IterableIterator‹A›*

*Defined in [packages/map/source/keysOf.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/keysOf.ts#L1)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`map` | ReadonlyMap‹A, unknown› |

**Returns:** *IterableIterator‹A›*

___

### `Const` size

▸ **size**(`set`: ReadonlyMap‹unknown, unknown›): *number*

*Defined in [packages/map/source/size.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/size.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`set` | ReadonlyMap‹unknown, unknown› |

**Returns:** *number*

___

### `Const` valuesOf

▸ **valuesOf**<**A**>(`map`: ReadonlyMap‹unknown, A›): *IterableIterator‹A›*

*Defined in [packages/map/source/valuesOf.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/map/source/valuesOf.ts#L1)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`map` | ReadonlyMap‹unknown, A› |

**Returns:** *IterableIterator‹A›*
