[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [lenses](../modules/lenses.md) › [PathLens](lenses.pathlens.md)

# Interface: PathLens <**K**>

## Type parameters

▪ **K**: *ReadonlyArray‹PropertyKey›*

## Hierarchy

* [Lens](../modules/lenses.md#lens)‹[PathToRecord](../modules/lenses.md#pathtorecord)‹K›, any›

  ↳ **PathLens**

## Index

### Properties

* [get](lenses.pathlens.md#readonly-get)
* [update](lenses.pathlens.md#readonly-update)

### Methods

* [create](lenses.pathlens.md#create)
* [id](lenses.pathlens.md#id)
* [prop](lenses.pathlens.md#prop)

## Properties

### `Readonly` get

• **get**: *function*

*Overrides [Lens](../modules/lenses.md#lens).[get](../modules/lenses.md#readonly-get)*

*Defined in [packages/lenses/source/PathLens.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/PathLens.ts#L10)*

#### Type declaration:

▸ <**R**>(`r`: R): *[GetPath](../modules/lenses.md#getpath)‹R, K›*

**Type parameters:**

▪ **R**: *[PathToRecord](../modules/lenses.md#pathtorecord)‹K›*

**Parameters:**

Name | Type |
------ | ------ |
`r` | R |

___

### `Readonly` update

• **update**: *function*

*Overrides [Lens](../modules/lenses.md#lens).[update](../modules/lenses.md#readonly-update)*

*Defined in [packages/lenses/source/PathLens.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/PathLens.ts#L11)*

#### Type declaration:

▸ <**R**>(`update`: [Arity1](../modules/lambda.md#arity1)‹[GetPath](../modules/lenses.md#getpath)‹R, K›, [GetPath](../modules/lenses.md#getpath)‹R, K››, `r`: R): *R*

**Type parameters:**

▪ **R**: *[PathToRecord](../modules/lenses.md#pathtorecord)‹K›*

**Parameters:**

Name | Type |
------ | ------ |
`update` | [Arity1](../modules/lambda.md#arity1)‹[GetPath](../modules/lenses.md#getpath)‹R, K›, [GetPath](../modules/lenses.md#getpath)‹R, K›› |
`r` | R |

▸ <**B**>(`update`: [Arity1](../modules/lambda.md#arity1)‹B, B›): *function*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`update` | [Arity1](../modules/lambda.md#arity1)‹B, B› |

▸ <**R**>(`r`: R): *R*

**Type parameters:**

▪ **R**: *[PathToRecord](../modules/lenses.md#pathtorecord)‹K, B›*

**Parameters:**

Name | Type |
------ | ------ |
`r` | R |

## Methods

###  create

▸ **create**<**A**, **B**>(`get`: [Arity1](../modules/lambda.md#arity1)‹A, B›, `set`: [Arity2](../modules/lambda.md#arity2)‹B, A, A›): *[Lens](../modules/lenses.md#lens)‹A, B›*

*Defined in [packages/lenses/source/Lens.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/Lens.ts#L10)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`get` | [Arity1](../modules/lambda.md#arity1)‹A, B› |
`set` | [Arity2](../modules/lambda.md#arity2)‹B, A, A› |

**Returns:** *[Lens](../modules/lenses.md#lens)‹A, B›*

___

###  id

▸ **id**<**A**>(): *[Lens](../modules/lenses.md#lens)‹A, A›*

*Defined in [packages/lenses/source/Lens.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/Lens.ts#L15)*

**Type parameters:**

▪ **A**

**Returns:** *[Lens](../modules/lenses.md#lens)‹A, A›*

___

###  prop

▸ **prop**<**A**, **K**>(`key`: K): *[Lens](../modules/lenses.md#lens)‹A, A[K]›*

*Defined in [packages/lenses/source/Lens.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/Lens.ts#L21)*

**Type parameters:**

▪ **A**

▪ **K**: *keyof A*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *[Lens](../modules/lenses.md#lens)‹A, A[K]›*
