[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [either](either.md)

# Package: either

# @typed/either

> A useful data-type for operations that have more than one outcome, especially failures.

## Index

### Namespaces

* [Either](either.md#either)
* [Left](either.md#left)
* [Right](either.md#right)

### Type aliases

* [LEFT](either.md#left)
* [RIGHT](either.md#right)
* [UnpackArity2A](either.md#unpackarity2a)
* [UnpackArity2B](either.md#unpackarity2b)

### Variables

* [LEFT](either.md#const-left)
* [RIGHT](either.md#const-right)
* [ap](either.md#const-ap)
* [chain](either.md#const-chain)
* [chainLeft](either.md#const-chainleft)
* [map](either.md#const-map)
* [mapLeft](either.md#const-mapleft)
* [orElse](either.md#const-orelse)
* [unpack](either.md#const-unpack)

### Functions

* [__ap](either.md#__ap)
* [__chain](either.md#__chain)
* [__chainLeft](either.md#__chainleft)
* [__map](either.md#__map)
* [__mapLeft](either.md#__mapleft)
* [__orElse](either.md#__orelse)
* [__unpack](either.md#__unpack)
* [fromLeft](either.md#fromleft)
* [fromRight](either.md#fromright)
* [isLeft](either.md#isleft)
* [isRight](either.md#isright)
* [swap](either.md#swap)
* [tryCatch](either.md#trycatch)

## Namespaces

###  Either

• **Either**: *[Left](either.md#left)‹A› | [Right](either.md#right)‹B›*

*Defined in [packages/either/source/Either.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Either.ts#L10)*

*Defined in [packages/either/source/Either.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Either.ts#L12)*

Either data structure. Extremely useful for handling errors or different
logic paths without the use of if-statements.

**`name`** Either

### `Const` left

• **left**: *function* = Left.of as <A, B = unknown>(value: A) => Either<A, B>

*Defined in [packages/either/source/Either.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Either.ts#L22)*

Creates an Either<A, B> that is of type Left<A>

**`name`** Either.left<A>(value: A): Either<A, B>

#### Type declaration:

▸ <**A**, **B**>(`value`: A): *[Either](either.md#either)‹A, B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

### `Const` of

• **of**: *function* = Right.of

*Defined in [packages/either/source/Either.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Either.ts#L17)*

Creates an Either<A, B> that is of type Right<B>

**`name`** Either.of<A>(value: A): Either<B, A>

#### Type declaration:

▸ <**A**, **B**>(`value`: B): *[Either](either.md#either)‹A, B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

___

###  Left

• **Left**:

*Defined in [packages/either/source/Left.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Left.ts#L9)*

*Defined in [packages/either/source/Left.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Left.ts#L13)*

A JSON-serializable Left<A> data-structure.

**`name`** Left

### `Readonly` [LEFT]

• **[LEFT]**: *A*

*Defined in [packages/either/source/Left.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Left.ts#L10)*

###  of

▸ **of**<**A**>(`value`: A): *[Left](either.md#left)‹A›*

*Defined in [packages/either/source/Left.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Left.ts#L18)*

Create a Left<A>

**`name`** Left.of<A>(value: A): Left<A>

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *[Left](either.md#left)‹A›*

___

###  Right

• **Right**:

*Defined in [packages/either/source/Right.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Right.ts#L9)*

*Defined in [packages/either/source/Right.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Right.ts#L13)*

A JSON-serializable Right data-structure.

**`name`** Right

### `Readonly` [RIGHT]

• **[RIGHT]**: *A*

*Defined in [packages/either/source/Right.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Right.ts#L10)*

###  of

▸ **of**<**A**>(`value`: A): *[Right](either.md#right)‹A›*

*Defined in [packages/either/source/Right.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Right.ts#L20)*

Creates a Right

**`name`** Right.of<A>(value: A): Right<A>

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *[Right](either.md#right)‹A›*

## Type aliases

###  LEFT

Ƭ **LEFT**: *typeof LEFT*

*Defined in [packages/either/source/Left.ts:2](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Left.ts#L2)*

___

###  RIGHT

Ƭ **RIGHT**: *typeof RIGHT*

*Defined in [packages/either/source/Right.ts:2](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Right.ts#L2)*

___

###  UnpackArity2A

Ƭ **UnpackArity2A**: *function*

*Defined in [packages/either/source/unpack.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/unpack.ts#L19)*

#### Type declaration:

▸ (`g`: [Arity1](lambda.md#arity1)‹B, C›, `either`: [Either](either.md#either)‹A, B›): *C*

**Parameters:**

Name | Type |
------ | ------ |
`g` | [Arity1](lambda.md#arity1)‹B, C› |
`either` | [Either](either.md#either)‹A, B› |

▸ (`g`: [Arity1](lambda.md#arity1)‹B, C›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`g` | [Arity1](lambda.md#arity1)‹B, C› |

▸ (`either`: [Either](either.md#either)‹A, B›): *C*

**Parameters:**

Name | Type |
------ | ------ |
`either` | [Either](either.md#either)‹A, B› |

___

###  UnpackArity2B

Ƭ **UnpackArity2B**: *function*

*Defined in [packages/either/source/unpack.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/unpack.ts#L24)*

#### Type declaration:

▸ <**B**>(`g`: [Arity1](lambda.md#arity1)‹B, C›, `either`: [Either](either.md#either)‹A, B›): *C*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`g` | [Arity1](lambda.md#arity1)‹B, C› |
`either` | [Either](either.md#either)‹A, B› |

▸ <**B**>(`g`: [Arity1](lambda.md#arity1)‹B, C›): *function*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`g` | [Arity1](lambda.md#arity1)‹B, C› |

▸ (`either`: [Either](either.md#either)‹A, B›): *C*

**Parameters:**

Name | Type |
------ | ------ |
`either` | [Either](either.md#either)‹A, B› |

## Variables

### `Const` LEFT

• **LEFT**: *"@typed/Left"* = '@typed/Left' as const

*Defined in [packages/either/source/Left.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Left.ts#L1)*

___

### `Const` RIGHT

• **RIGHT**: *"@typed/Right"* = '@typed/Right' as const

*Defined in [packages/either/source/Right.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Right.ts#L1)*

___

### `Const` ap

• **ap**: *function* = curry(__ap) as {
  <A, B, C>(fn: Either<A, (value: B) => C>, value: Either<A, B>): Either<A, C>
  <A, B, C>(fn: Either<A, (value: B) => C>): (value: Either<A, B>) => Either<A, C>
}

*Defined in [packages/either/source/ap.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/ap.ts#L11)*

Applies the function contains in an `Either` to the value contained in a
second `Either`.

**`name`** ap<A, B, C>(fn: Either<A, (value: B) => C>, value: Either<A, B>): Either<A, C>

#### Type declaration:

▸ <**A**, **B**, **C**>(`fn`: [Either](either.md#either)‹A, function›, `value`: [Either](either.md#either)‹A, B›): *[Either](either.md#either)‹A, C›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Either](either.md#either)‹A, function› |
`value` | [Either](either.md#either)‹A, B› |

▸ <**A**, **B**, **C**>(`fn`: [Either](either.md#either)‹A, function›): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Either](either.md#either)‹A, function› |

▸ (`value`: [Either](either.md#either)‹A, B›): *[Either](either.md#either)‹A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Either](either.md#either)‹A, B› |

___

### `Const` chain

• **chain**: *function* = curry(__chain) as {
  <A, B, C>(f: (value: B) => Either<A, C>, either: Either<A, B>): Either<A, C>
  <A, B, C>(f: (value: B) => Either<A, C>): (either: Either<A, B>) => Either<A, C>
}

*Defined in [packages/either/source/chain.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/chain.ts#L11)*

Returns a `Either` that is the result of calling `f` with the resolved
value of another `Either`.

**`name`** chain<A, B, C>(f: (value: B) => Either<A, C>, either: Either<A, B>): Either<A C>

#### Type declaration:

▸ <**A**, **B**, **C**>(`f`: function, `either`: [Either](either.md#either)‹A, B›): *[Either](either.md#either)‹A, C›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: B): *[Either](either.md#either)‹A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **either**: *[Either](either.md#either)‹A, B›*

▸ <**A**, **B**, **C**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: B): *[Either](either.md#either)‹A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ (`either`: [Either](either.md#either)‹A, B›): *[Either](either.md#either)‹A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`either` | [Either](either.md#either)‹A, B› |

___

### `Const` chainLeft

• **chainLeft**: *function* = curry(__chainLeft) as {
  <A, B, C>(f: (value: A) => Either<C, B>, either: Either<A, B>): Either<C, B>
  <A, B, C>(f: (value: A) => Either<C, B>): (either: Either<A, B>) => Either<C, B>
}

*Defined in [packages/either/source/chainLeft.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/chainLeft.ts#L11)*

Returns a `Either` that is the result of calling `f` with the rejected
value of another `Either`.

**`name`** chainLeft<A, B, C>(f: (value: B) => Either<C, B>, either: Either<A, B>): Either<A C>

#### Type declaration:

▸ <**A**, **B**, **C**>(`f`: function, `either`: [Either](either.md#either)‹A, B›): *[Either](either.md#either)‹C, B›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: A): *[Either](either.md#either)‹C, B›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **either**: *[Either](either.md#either)‹A, B›*

▸ <**A**, **B**, **C**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: A): *[Either](either.md#either)‹C, B›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`either`: [Either](either.md#either)‹A, B›): *[Either](either.md#either)‹C, B›*

**Parameters:**

Name | Type |
------ | ------ |
`either` | [Either](either.md#either)‹A, B› |

___

### `Const` map

• **map**: *function* = curry(__map) as {
  <A, B, C>(f: (value: B) => C, either: Either<A, B>): Either<A, C>
  <A, B, C>(f: (value: B) => C): (either: Either<A, B>) => Either<A, C>
}

*Defined in [packages/either/source/map.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/map.ts#L10)*

Returns a `Either` that is the result of calling `f` with the resolved
value of another `Either`.

**`name`** map<A, B, C>(f: (value: B) => C, either: Either<A, B>): Either<A C>

#### Type declaration:

▸ <**A**, **B**, **C**>(`f`: function, `either`: [Either](either.md#either)‹A, B›): *[Either](either.md#either)‹A, C›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **either**: *[Either](either.md#either)‹A, B›*

▸ <**A**, **B**, **C**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ (`either`: [Either](either.md#either)‹A, B›): *[Either](either.md#either)‹A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`either` | [Either](either.md#either)‹A, B› |

___

### `Const` mapLeft

• **mapLeft**: *function* = curry(__mapLeft) as {
  <A, B, C>(f: (value: A) => C, either: Either<A, B>): Either<C, B>
  <A, B, C>(f: (value: A) => C): (either: Either<A, B>) => Either<C, B>
}

*Defined in [packages/either/source/mapLeft.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/mapLeft.ts#L10)*

Returns a `Either` that is the result of calling `f` with the resolved
value of another `Either`.

**`name`** mapLeft<A, B, C>(f: (value: A) => C, either: Either<A, B>): Either<A C>

#### Type declaration:

▸ <**A**, **B**, **C**>(`f`: function, `either`: [Either](either.md#either)‹A, B›): *[Either](either.md#either)‹C, B›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **either**: *[Either](either.md#either)‹A, B›*

▸ <**A**, **B**, **C**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`either`: [Either](either.md#either)‹A, B›): *[Either](either.md#either)‹C, B›*

**Parameters:**

Name | Type |
------ | ------ |
`either` | [Either](either.md#either)‹A, B› |

___

### `Const` orElse

• **orElse**: *function* = curry(__orElse) as {
  <A, B>(value: A, validation: Either<B, A>): A
  <A>(value: A): <B>(validation: Either<B, A>) => A
}

*Defined in [packages/either/source/orElse.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/orElse.ts#L5)*

#### Type declaration:

▸ <**A**, **B**>(`value`: A, `validation`: [Either](either.md#either)‹B, A›): *A*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`validation` | [Either](either.md#either)‹B, A› |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ <**B**>(`validation`: [Either](either.md#either)‹B, A›): *A*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`validation` | [Either](either.md#either)‹B, A› |

___

### `Const` unpack

• **unpack**: *function* = curry(__unpack) as {
  <A, B, C>(f: Arity1<A, C>, g: Arity1<B, C>, either: Either<A, B>): C
  <A, B, C>(f: Arity1<A, C>, g: Arity1<B, C>): (either: Either<A, B>) => C
  <A, B, C>(f: Arity1<A, C>): UnpackArity2A<A, B, C>
  <A, C>(f: Arity1<A, C>): UnpackArity2B<A, C>
}

*Defined in [packages/either/source/unpack.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/unpack.ts#L12)*

Extracts the value from an `Either` applying function `f` if the `Either<A, B>` is
`Left<A>` or function `g` if `Right<B>`.

**`name`** unpack<A, B, C>(f: Arity1<A, C>, g: Arity1<B, C>, either: Either<A, B>): C

#### Type declaration:

▸ <**A**, **B**, **C**>(`f`: [Arity1](lambda.md#arity1)‹A, C›, `g`: [Arity1](lambda.md#arity1)‹B, C›, `either`: [Either](either.md#either)‹A, B›): *C*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Arity1](lambda.md#arity1)‹A, C› |
`g` | [Arity1](lambda.md#arity1)‹B, C› |
`either` | [Either](either.md#either)‹A, B› |

▸ <**A**, **B**, **C**>(`f`: [Arity1](lambda.md#arity1)‹A, C›, `g`: [Arity1](lambda.md#arity1)‹B, C›): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Arity1](lambda.md#arity1)‹A, C› |
`g` | [Arity1](lambda.md#arity1)‹B, C› |

▸ (`either`: [Either](either.md#either)‹A, B›): *C*

**Parameters:**

Name | Type |
------ | ------ |
`either` | [Either](either.md#either)‹A, B› |

▸ <**A**, **B**, **C**>(`f`: [Arity1](lambda.md#arity1)‹A, C›): *[UnpackArity2A](either.md#unpackarity2a)‹A, B, C›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Arity1](lambda.md#arity1)‹A, C› |

▸ <**A**, **C**>(`f`: [Arity1](lambda.md#arity1)‹A, C›): *[UnpackArity2B](either.md#unpackarity2b)‹A, C›*

**Type parameters:**

▪ **A**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Arity1](lambda.md#arity1)‹A, C› |

## Functions

###  __ap

▸ **__ap**<**A**, **B**, **C**>(`fn`: [Either](either.md#either)‹A, function›, `value`: [Either](either.md#either)‹A, B›): *[Either](either.md#either)‹A, C›*

*Defined in [packages/either/source/ap.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/ap.ts#L16)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Either](either.md#either)‹A, function› |
`value` | [Either](either.md#either)‹A, B› |

**Returns:** *[Either](either.md#either)‹A, C›*

___

###  __chain

▸ **__chain**<**A**, **B**, **C**>(`f`: function, `either`: [Either](either.md#either)‹A, B›): *[Either](either.md#either)‹A, C›*

*Defined in [packages/either/source/chain.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/chain.ts#L16)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: B): *[Either](either.md#either)‹A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **either**: *[Either](either.md#either)‹A, B›*

**Returns:** *[Either](either.md#either)‹A, C›*

___

###  __chainLeft

▸ **__chainLeft**<**A**, **B**, **C**>(`f`: function, `either`: [Either](either.md#either)‹A, B›): *[Either](either.md#either)‹C, B›*

*Defined in [packages/either/source/chainLeft.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/chainLeft.ts#L16)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: A): *[Either](either.md#either)‹C, B›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **either**: *[Either](either.md#either)‹A, B›*

**Returns:** *[Either](either.md#either)‹C, B›*

___

###  __map

▸ **__map**<**A**, **B**, **C**>(`f`: function, `either`: [Either](either.md#either)‹A, B›): *[Either](either.md#either)‹A, C›*

*Defined in [packages/either/source/map.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/map.ts#L15)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **either**: *[Either](either.md#either)‹A, B›*

**Returns:** *[Either](either.md#either)‹A, C›*

___

###  __mapLeft

▸ **__mapLeft**<**A**, **B**, **C**>(`f`: function, `either`: [Either](either.md#either)‹A, B›): *[Either](either.md#either)‹C, B›*

*Defined in [packages/either/source/mapLeft.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/mapLeft.ts#L15)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **either**: *[Either](either.md#either)‹A, B›*

**Returns:** *[Either](either.md#either)‹C, B›*

___

###  __orElse

▸ **__orElse**<**A**, **B**>(`value`: A, `validation`: [Either](either.md#either)‹B, A›): *A*

*Defined in [packages/either/source/orElse.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/orElse.ts#L10)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`validation` | [Either](either.md#either)‹B, A› |

**Returns:** *A*

___

###  __unpack

▸ **__unpack**<**A**, **B**, **C**>(`f`: function, `g`: function, `either`: [Either](either.md#either)‹A, B›): *C*

*Defined in [packages/either/source/unpack.ts:29](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/unpack.ts#L29)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **g**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **either**: *[Either](either.md#either)‹A, B›*

**Returns:** *C*

___

###  fromLeft

▸ **fromLeft**<**A**>(`left`: [Left](either.md#left)‹A›): *A*

*Defined in [packages/either/source/Left.ts:27](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Left.ts#L27)*

Extracts the value contained in a Left.

**`name`** fromLeft<A>(left: Left<A>): A

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`left` | [Left](either.md#left)‹A› |

**Returns:** *A*

___

###  fromRight

▸ **fromRight**<**A**>(`right`: [Right](either.md#right)‹A›): *A*

*Defined in [packages/either/source/Right.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Right.ts#L30)*

Extracts the value contained in a Right.

**`name`** fromRight<A>(right: Right<A>): A

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`right` | [Right](either.md#right)‹A› |   |

**Returns:** *A*

___

###  isLeft

▸ **isLeft**<**A**, **B**>(`either`: [Either](either.md#either)‹A, B›): *either is Left<A>*

*Defined in [packages/either/source/Either.ts:29](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Either.ts#L29)*

Returns true if an Either<A, B> is type Left<A>

**`name`** isLeft<A, B>(either: Either<A, B>): Either is Left<A>

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`either` | [Either](either.md#either)‹A, B› |

**Returns:** *either is Left<A>*

___

###  isRight

▸ **isRight**<**A**, **B**>(`either`: [Either](either.md#either)‹A, B›): *either is Right<B>*

*Defined in [packages/either/source/Either.ts:37](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/Either.ts#L37)*

Returns true if an Either<A, B> is type Right<B>

**`name`** isRight<A, B>(either: Either<A, B>): either is Right<B>

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`either` | [Either](either.md#either)‹A, B› |

**Returns:** *either is Right<B>*

___

###  swap

▸ **swap**<**A**, **B**>(`either`: [Either](either.md#either)‹A, B›): *[Either](either.md#either)‹B, A›*

*Defined in [packages/either/source/swap.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/swap.ts#L10)*

Swaps the values contained in an `Either`.

**`name`** swap<A, B>(either: Either<A, B>): Either<B, A>

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`either` | [Either](either.md#either)‹A, B› |

**Returns:** *[Either](either.md#either)‹B, A›*

___

###  tryCatch

▸ **tryCatch**<**A**, **B**>(`fn`: [IO](lambda.md#io)‹A›): *[Either](either.md#either)‹B, A›*

*Defined in [packages/either/source/tryCatch.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/either/source/tryCatch.ts#L8)*

Wrap a function that could fail in an Either

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fn` | [IO](lambda.md#io)‹A› |   |

**Returns:** *[Either](either.md#either)‹B, A›*
