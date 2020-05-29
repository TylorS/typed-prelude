[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [promises](promises.md)

# Package: promises

# @typed/promises

> Helpful functions for working with promises

## Index

### Type aliases

* [Deferred](promises.md#deferred)

### Functions

* [ap](promises.md#const-ap)
* [chain](promises.md#const-chain)
* [createDeferred](promises.md#const-createdeferred)
* [delay](promises.md#const-delay)
* [map](promises.md#const-map)

## Type aliases

###  Deferred

Ƭ **Deferred**: *[Promise‹A›, [Arity1](lambda.md#arity1)‹A, void›, [Arity1](lambda.md#arity1)‹[Error](../classes/effects.killerror.md#static-error), void›]*

*Defined in [packages/promises/source/createDeferred.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/promises/source/createDeferred.ts#L6)*

An imperative promise

## Functions

### `Const` ap

▸ **ap**<**A**, **B**>(`fn`: Promise‹[Arity1](lambda.md#arity1)‹A, B››, `value`: Promise‹A›): *Promise‹B›*

*Defined in [packages/promises/source/ap.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/promises/source/ap.ts#L11)*

Apply a fn contained in a promise to the value of a promise

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fn` | Promise‹[Arity1](lambda.md#arity1)‹A, B›› | :: Promise (a -> b) |
`value` | Promise‹A› | :: Promise a |

**Returns:** *Promise‹B›*

:: Promise b

___

### `Const` chain

▸ **chain**<**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, Promise‹B››, `promise`: Promise‹A›): *Promise‹B›*

*Defined in [packages/promises/source/chain.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/promises/source/chain.ts#L9)*

Chain together multiple promises

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, Promise‹B›› | :: a -> Promise b |
`promise` | Promise‹A› | :: Promise a |

**Returns:** *Promise‹B›*

:: Promise b

___

### `Const` createDeferred

▸ **createDeferred**<**A**>(): *[Deferred](promises.md#deferred)‹A›*

*Defined in [packages/promises/source/createDeferred.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/promises/source/createDeferred.ts#L11)*

Create a Deferred

**Type parameters:**

▪ **A**

**Returns:** *[Deferred](promises.md#deferred)‹A›*

___

### `Const` delay

▸ **delay**(`ms`: number): *Promise‹void›*

*Defined in [packages/promises/source/delay.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/promises/source/delay.ts#L6)*

Creates a promise that waits a given number of milliseconds.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ms` | number | :: number |

**Returns:** *Promise‹void›*

:: Promise void

___

### `Const` map

▸ **map**<**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›, `promise`: Promise‹A›): *Promise‹B›*

*Defined in [packages/promises/source/map.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/promises/source/map.ts#L9)*

Map over a promise value

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› | :: (a -> b) |
`promise` | Promise‹A› | :: Promise a |

**Returns:** *Promise‹B›*

:: Promise b
