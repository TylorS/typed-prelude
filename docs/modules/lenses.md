[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [lenses](lenses.md)

# Package: lenses

# @typed/lenses

A pretty basic Lenses library.

## Index

### Namespaces

* [Lens](lenses.md#lens)

### Interfaces

* [PathLens](../interfaces/lenses.pathlens.md)
* [PropLens](../interfaces/lenses.proplens.md)

### Type aliases

* [GetPath](lenses.md#getpath)
* [GetPipedLenses](lenses.md#getpipedlenses)
* [GetPropKeys](lenses.md#getpropkeys)
* [LensInput](lenses.md#lensinput)
* [LensOutput](lenses.md#lensoutput)
* [Lenses](lenses.md#lenses)
* [PathLensKeys](lenses.md#pathlenskeys)
* [PathToRecord](lenses.md#pathtorecord)
* [PipeLenses](lenses.md#pipelenses)
* [PropLensKey](lenses.md#proplenskey)
* [VerifyLensesAreValidAndGetOutput](lenses.md#verifylensesarevalidandgetoutput)

### Functions

* [fromPath](lenses.md#const-frompath)
* [fromProp](lenses.md#const-fromprop)
* [pipe](lenses.md#pipe)
* [pipe2](lenses.md#pipe2)

## Namespaces

###  Lens

• **Lens**:

*Defined in [packages/lenses/source/Lens.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/Lens.ts#L4)*

*Defined in [packages/lenses/source/Lens.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/Lens.ts#L9)*

### `Readonly` get

• **get**: *[Arity1](lambda.md#arity1)‹A, B›*

*Defined in [packages/lenses/source/Lens.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/Lens.ts#L5)*

### `Readonly` update

• **update**: *Curry2‹[Arity1](lambda.md#arity1)‹B, B›, A, A›*

*Defined in [packages/lenses/source/Lens.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/Lens.ts#L6)*

### `Const` create

▸ **create**<**A**, **B**>(`get`: [Arity1](lambda.md#arity1)‹A, B›, `set`: [Arity2](lambda.md#arity2)‹B, A, A›): *[Lens](lenses.md#lens)‹A, B›*

*Defined in [packages/lenses/source/Lens.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/Lens.ts#L10)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`get` | [Arity1](lambda.md#arity1)‹A, B› |
`set` | [Arity2](lambda.md#arity2)‹B, A, A› |

**Returns:** *[Lens](lenses.md#lens)‹A, B›*

### `Const` id

▸ **id**<**A**>(): *[Lens](lenses.md#lens)‹A, A›*

*Defined in [packages/lenses/source/Lens.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/Lens.ts#L15)*

**Type parameters:**

▪ **A**

**Returns:** *[Lens](lenses.md#lens)‹A, A›*

### `Const` prop

▸ **prop**<**A**, **K**>(`key`: K): *[Lens](lenses.md#lens)‹A, A[K]›*

*Defined in [packages/lenses/source/Lens.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/Lens.ts#L21)*

**Type parameters:**

▪ **A**

▪ **K**: *keyof A*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *[Lens](lenses.md#lens)‹A, A[K]›*

## Type aliases

###  GetPath

Ƭ **GetPath**: *K extends [] ? O : object[[] extends Tail<K> ? "complete" : "continue"]*

*Defined in [packages/lenses/source/PathLens.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/PathLens.ts#L23)*

___

###  GetPipedLenses

Ƭ **GetPipedLenses**: *[Lens](lenses.md#lens)‹I, [VerifyLensesAreValidAndGetOutput](lenses.md#verifylensesarevalidandgetoutput)‹O, Lenses››*

*Defined in [packages/lenses/source/pipe.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/pipe.ts#L21)*

___

###  GetPropKeys

Ƭ **GetPropKeys**: *object*

*Defined in [packages/lenses/source/pipe.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/pipe.ts#L15)*

#### Type declaration:

___

###  LensInput

Ƭ **LensInput**: *A extends Lens<infer R, any> ? R : never*

*Defined in [packages/lenses/source/Lens.ts:28](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/Lens.ts#L28)*

___

###  LensOutput

Ƭ **LensOutput**: *A extends Lens<any, infer R> ? R : never*

*Defined in [packages/lenses/source/Lens.ts:29](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/Lens.ts#L29)*

___

###  Lenses

Ƭ **Lenses**: *keyof [Lens<any, any>, Lens<any, any>, Lens]*

*Defined in [packages/lenses/source/pipe.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/pipe.ts#L19)*

___

###  PathLensKeys

Ƭ **PathLensKeys**: *A extends PathLens<infer Keys> ? Keys : never*

*Defined in [packages/lenses/source/PathLens.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/PathLens.ts#L17)*

___

###  PathToRecord

Ƭ **PathToRecord**: *Tail<K> extends [] ? object : object*

*Defined in [packages/lenses/source/PathLens.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/PathLens.ts#L19)*

___

###  PipeLenses

Ƭ **PipeLenses**: *A extends ReadonlyArray<PropLens<any>> ? PathLens<GetPropKeys<A>> : GetPipedLenses<LensInput<Head<A>>, LensOutput<Head<A>>, Tail<A>>*

*Defined in [packages/lenses/source/pipe.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/pipe.ts#L7)*

___

###  PropLensKey

Ƭ **PropLensKey**: *A extends PropLens<infer K> ? K : never*

*Defined in [packages/lenses/source/PropLens.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/PropLens.ts#L13)*

___

###  VerifyLensesAreValidAndGetOutput

Ƭ **VerifyLensesAreValidAndGetOutput**: *object[Tail<A> extends [] ? "complete" : "continue"]*

*Defined in [packages/lenses/source/pipe.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/pipe.ts#L26)*

## Functions

### `Const` fromPath

▸ **fromPath**<**K**>(`keys`: K): *[PathLens](../interfaces/lenses.pathlens.md)‹K›*

*Defined in [packages/lenses/source/PathLens.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/PathLens.ts#L6)*

**Type parameters:**

▪ **K**: *ReadonlyArray‹PropertyKey›*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | K |

**Returns:** *[PathLens](../interfaces/lenses.pathlens.md)‹K›*

___

### `Const` fromProp

▸ **fromProp**<**K**>(`key`: K): *[PropLens](../interfaces/lenses.proplens.md)‹K›*

*Defined in [packages/lenses/source/PropLens.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/PropLens.ts#L15)*

**Type parameters:**

▪ **K**: *PropertyKey*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *[PropLens](../interfaces/lenses.proplens.md)‹K›*

___

###  pipe

▸ **pipe**<**A**>(...`lenses`: A): *[PipeLenses](lenses.md#pipelenses)‹A›*

*Defined in [packages/lenses/source/pipe.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/pipe.ts#L11)*

**Type parameters:**

▪ **A**: *[Lenses](lenses.md#lenses)*

**Parameters:**

Name | Type |
------ | ------ |
`...lenses` | A |

**Returns:** *[PipeLenses](lenses.md#pipelenses)‹A›*

___

###  pipe2

▸ **pipe2**<**A**, **B**, **C**>(`ab`: [Lens](lenses.md#lens)‹A, B›, `bc`: [Lens](lenses.md#lens)‹B, C›): *[Lens](lenses.md#lens)‹A, C›*

*Defined in [packages/lenses/source/pipe2.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lenses/source/pipe2.ts#L3)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`ab` | [Lens](lenses.md#lens)‹A, B› |
`bc` | [Lens](lenses.md#lens)‹B, C› |

**Returns:** *[Lens](lenses.md#lens)‹A, C›*
