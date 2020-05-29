[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [effects](../modules/effects.md) › [Failure](effects.failure.md)

# Class: Failure <**Err, A**>

## Type parameters

▪ **Err**

▪ **A**

## Hierarchy

* **Failure**

## Index

### Constructors

* [constructor](effects.failure.md#constructor)

### Properties

* [error](effects.failure.md#readonly-error)
* [value](effects.failure.md#readonly-value)

### Methods

* [unpack](effects.failure.md#readonly-unpack)
* [of](effects.failure.md#static-of)

## Constructors

###  constructor

\+ **new Failure**(`error`: Err, `value`: [Maybe](../modules/io.md#const-maybe)‹A›): *[Failure](effects.failure.md)*

*Defined in [packages/effects/source/failures/Failure.ts:28](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/failures/Failure.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Err |
`value` | [Maybe](../modules/io.md#const-maybe)‹A› |

**Returns:** *[Failure](effects.failure.md)*

## Properties

### `Readonly` error

• **error**: *Err*

*Defined in [packages/effects/source/failures/Failure.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/failures/Failure.ts#L30)*

___

### `Readonly` value

• **value**: *[Maybe](../modules/io.md#const-maybe)‹A›*

*Defined in [packages/effects/source/failures/Failure.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/failures/Failure.ts#L30)*

## Methods

### `Readonly` unpack

▸ **unpack**<**B**>(`left`: function, `right`: function): *B*

*Defined in [packages/effects/source/failures/Failure.ts:32](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/failures/Failure.ts#L32)*

**Type parameters:**

▪ **B**

**Parameters:**

▪ **left**: *function*

▸ (`err`: Err): *B*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Err |

▪ **right**: *function*

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *B*

___

### `Static` of

▸ **of**<**Err**, **A**>(`error`: Err, `value`: [Maybe](../modules/io.md#const-maybe)‹A›): *[Failure](effects.failure.md)‹Err, A›*

*Defined in [packages/effects/source/failures/Failure.ts:27](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/failures/Failure.ts#L27)*

**Type parameters:**

▪ **Err**

▪ **A**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`error` | Err | - |
`value` | [Maybe](../modules/io.md#const-maybe)‹A› | Nothing |

**Returns:** *[Failure](effects.failure.md)‹Err, A›*
