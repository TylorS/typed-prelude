[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [maybe](maybe.md)

# Package: maybe

# @typed/maybe

> Data-type for handling "nothing" for your sanity.

## Index

### Namespaces

* [Just](maybe.md#just)
* [Maybe](maybe.md#maybe)

### Interfaces

* [Nothing](../interfaces/maybe.nothing.md)

### Type aliases

* [CombineArray](maybe.md#combinearray)
* [JUST](maybe.md#just)
* [MaybeOf](maybe.md#maybeof)
* [MaybeValue](maybe.md#maybevalue)
* [NOTHING](maybe.md#nothing)

### Variables

* [JUST](maybe.md#const-just)
* [NOTHING](maybe.md#const-nothing)
* [ap](maybe.md#const-ap)
* [chain](maybe.md#const-chain)
* [combine](maybe.md#const-combine)
* [combineArray](maybe.md#const-combinearray)
* [map](maybe.md#const-map)
* [race](maybe.md#const-race)
* [unwrap](maybe.md#const-unwrap)
* [withDefault](maybe.md#const-withdefault)

### Functions

* [__ap](maybe.md#__ap)
* [__chain](maybe.md#__chain)
* [__combine](maybe.md#__combine)
* [__combineArray](maybe.md#__combinearray)
* [__map](maybe.md#__map)
* [__withDefault](maybe.md#__withdefault)
* [fromJust](maybe.md#fromjust)
* [isJust](maybe.md#isjust)
* [isNothing](maybe.md#isnothing)
* [unpack](maybe.md#const-unpack)

### Object literals

* [Nothing](maybe.md#const-nothing)

## Namespaces

###  Just

• **Just**:

*Defined in [packages/maybe/source/Just.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/Just.ts#L8)*

*Defined in [packages/maybe/source/Just.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/Just.ts#L12)*

A JSON-serializable Just data-structure

**`name`** Just

### `Readonly` [JUST]

• **[JUST]**: *A*

*Defined in [packages/maybe/source/Just.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/Just.ts#L9)*

###  of

▸ **of**<**A**>(`value`: A): *[Just](maybe.md#just)‹A›*

*Defined in [packages/maybe/source/Just.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/Just.ts#L17)*

Creates a Just given a value.

**`name`** Just.of<A>(value: A): Just<A>

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *[Just](maybe.md#just)‹A›*

___

###  Maybe

• **Maybe**: *[Just](maybe.md#just)‹A› | [Nothing](../interfaces/maybe.nothing.md)*

*Defined in [packages/maybe/source/Maybe.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/Maybe.ts#L4)*

*Defined in [packages/maybe/source/Maybe.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/Maybe.ts#L10)*

### `Const` fromString

▸ **fromString**(`str`: string | null | undefined | void): *[Maybe](maybe.md#maybe)‹string›*

*Defined in [packages/maybe/source/Maybe.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/Maybe.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string &#124; null &#124; undefined &#124; void |

**Returns:** *[Maybe](maybe.md#maybe)‹string›*

### `Const` of

▸ **of**<**A**>(`value`: A | null | undefined | void): *[Maybe](maybe.md#maybe)‹A›*

*Defined in [packages/maybe/source/Maybe.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/Maybe.ts#L16)*

Creates a Maybe containing a value. If the value is `undefined` or `null`
a `Nothing` will be returned. All other values will be wrapped in a `Just`.

**`name`** Maybe.of<A>(value: A): Maybe<A>

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A &#124; null &#124; undefined &#124; void |

**Returns:** *[Maybe](maybe.md#maybe)‹A›*

## Type aliases

###  CombineArray

Ƭ **CombineArray**: *function*

*Defined in [packages/maybe/source/combineArray.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/combineArray.ts#L26)*

#### Type declaration:

▸ <**A**, **B**, **C**>(`f`: function, `maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›]): *[Maybe](maybe.md#maybe)‹C›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |

▪ **maybes**: *[[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›]*

▸ <**A**, **B**, **C**, **D**>(`f`: function, `maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›]): *[Maybe](maybe.md#maybe)‹D›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B, `valueC`: C): *D*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |
`valueC` | C |

▪ **maybes**: *[[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›]*

▸ <**A**, **B**, **C**, **D**, **E**>(`f`: function, `maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›]): *[Maybe](maybe.md#maybe)‹E›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B, `valueC`: C, `valueD`: D): *E*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |
`valueC` | C |
`valueD` | D |

▪ **maybes**: *[[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›]*

▸ <**A**, **B**, **C**, **D**, **E**, **F**>(`f`: function, `maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›]): *[Maybe](maybe.md#maybe)‹F›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B, `valueC`: C, `valueD`: D, `valueE`: E): *F*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |
`valueC` | C |
`valueD` | D |
`valueE` | E |

▪ **maybes**: *[[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›]*

▸ <**A**, **B**, **C**, **D**, **E**, **F**, **G**>(`f`: function, `maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›, [Maybe](maybe.md#maybe)‹F›]): *[Maybe](maybe.md#maybe)‹G›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B, `valueC`: C, `valueD`: D, `valueE`: E, `valueF`: F): *G*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |
`valueC` | C |
`valueD` | D |
`valueE` | E |
`valueF` | F |

▪ **maybes**: *[[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›, [Maybe](maybe.md#maybe)‹F›]*

▸ <**A**, **B**, **C**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |

▸ (`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›]): *[Maybe](maybe.md#maybe)‹C›*

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›] |

▸ <**A**, **B**, **C**, **D**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B, `valueC`: C): *D*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |
`valueC` | C |

▸ (`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›]): *[Maybe](maybe.md#maybe)‹D›*

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›] |

▸ <**A**, **B**, **C**, **D**, **E**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B, `valueC`: C, `valueD`: D): *E*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |
`valueC` | C |
`valueD` | D |

▸ (`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›]): *[Maybe](maybe.md#maybe)‹E›*

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›] |

▸ <**A**, **B**, **C**, **D**, **E**, **F**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B, `valueC`: C, `valueD`: D, `valueE`: E): *F*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |
`valueC` | C |
`valueD` | D |
`valueE` | E |

▸ (`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›]): *[Maybe](maybe.md#maybe)‹F›*

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›] |

▸ <**A**, **B**, **C**, **D**, **E**, **F**, **G**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B, `valueC`: C, `valueD`: D, `valueE`: E, `valueF`: F): *G*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |
`valueC` | C |
`valueD` | D |
`valueE` | E |
`valueF` | F |

▸ (`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›, [Maybe](maybe.md#maybe)‹F›]): *[Maybe](maybe.md#maybe)‹G›*

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›, [Maybe](maybe.md#maybe)‹F›] |

▸ (`f`: ArrayConstructor): *function*

**Parameters:**

Name | Type |
------ | ------ |
`f` | ArrayConstructor |

▸ <**A**, **B**>(`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›]): *[Maybe](maybe.md#maybe)‹[A, B]›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›] |

▸ <**A**, **B**, **C**>(`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›]): *[Maybe](maybe.md#maybe)‹[A, B, C]›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›] |

▸ <**A**, **B**, **C**, **D**>(`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›]): *[Maybe](maybe.md#maybe)‹[A, B, C, D]›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›] |

▸ <**A**, **B**, **C**, **D**, **E**>(`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›]): *[Maybe](maybe.md#maybe)‹[A, B, C, D, E]›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›] |

▸ <**A**, **B**, **C**, **D**, **E**, **F**>(`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›, [Maybe](maybe.md#maybe)‹F›]): *[Maybe](maybe.md#maybe)‹[A, B, C, D, E, F]›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›, [Maybe](maybe.md#maybe)‹F›] |

▸ <**R**>(`f`: function, `maybes`: ReadonlyArray‹[Maybe](maybe.md#maybe)‹any››): *[Maybe](maybe.md#maybe)‹R›*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **f**: *function*

▸ (...`values`: any[]): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | any[] |

▪ **maybes**: *ReadonlyArray‹[Maybe](maybe.md#maybe)‹any››*

▸ <**R**>(`f`: function): *function*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **f**: *function*

▸ (...`values`: any[]): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | any[] |

▸ (`maybes`: ReadonlyArray‹[Maybe](maybe.md#maybe)‹any››): *[Maybe](maybe.md#maybe)‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | ReadonlyArray‹[Maybe](maybe.md#maybe)‹any›› |

___

###  JUST

Ƭ **JUST**: *typeof JUST*

*Defined in [packages/maybe/source/Just.ts:2](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/Just.ts#L2)*

___

###  MaybeOf

Ƭ **MaybeOf**: *object*

*Defined in [packages/maybe/source/Maybe.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/Maybe.ts#L6)*

#### Type declaration:

___

###  MaybeValue

Ƭ **MaybeValue**: *A extends Maybe<infer R> ? R : never*

*Defined in [packages/maybe/source/Maybe.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/Maybe.ts#L8)*

___

###  NOTHING

Ƭ **NOTHING**: *typeof Nothing*

*Defined in [packages/maybe/source/Nothing.ts:2](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/Nothing.ts#L2)*

## Variables

### `Const` JUST

• **JUST**: *"@typed/Just"* = '@typed/Just' as const

*Defined in [packages/maybe/source/Just.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/Just.ts#L1)*

___

### `Const` NOTHING

• **NOTHING**: *"@typed/Nothing"* = '@typed/Nothing' as const

*Defined in [packages/maybe/source/Nothing.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/Nothing.ts#L1)*

___

### `Const` ap

• **ap**: *function* = curry(__ap) as {
  <A, B>(fn: Maybe<(value: A) => B>, value: Maybe<A>): Maybe<B>
  <A, B>(fn: Maybe<(value: A) => B>): (value: Maybe<A>) => Maybe<B>
}

*Defined in [packages/maybe/source/ap.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/ap.ts#L11)*

Applies the function contained in a `Maybe` to the value contained in a
second `Maybe`.

**`name`** ap<A, B>(fn: Maybe<(value: A) => B>, value: Maybe<A>): Maybe<B>

#### Type declaration:

▸ <**A**, **B**>(`fn`: [Maybe](maybe.md#maybe)‹function›, `value`: [Maybe](maybe.md#maybe)‹A›): *[Maybe](maybe.md#maybe)‹B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Maybe](maybe.md#maybe)‹function› |
`value` | [Maybe](maybe.md#maybe)‹A› |

▸ <**A**, **B**>(`fn`: [Maybe](maybe.md#maybe)‹function›): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Maybe](maybe.md#maybe)‹function› |

▸ (`value`: [Maybe](maybe.md#maybe)‹A›): *[Maybe](maybe.md#maybe)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Maybe](maybe.md#maybe)‹A› |

___

### `Const` chain

• **chain**: *function* = curry(__chain) as {
  <A, B>(f: (value: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => Maybe<B>): (maybe: Maybe<A>) => Maybe<B>
}

*Defined in [packages/maybe/source/chain.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/chain.ts#L10)*

Maps a `Maybe` to another `Maybe`.

**`name`** chain<A, B>(f: (value: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B>

#### Type declaration:

▸ <**A**, **B**>(`f`: function, `maybe`: [Maybe](maybe.md#maybe)‹A›): *[Maybe](maybe.md#maybe)‹B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`value`: A): *[Maybe](maybe.md#maybe)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **maybe**: *[Maybe](maybe.md#maybe)‹A›*

▸ <**A**, **B**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`value`: A): *[Maybe](maybe.md#maybe)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`maybe`: [Maybe](maybe.md#maybe)‹A›): *[Maybe](maybe.md#maybe)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`maybe` | [Maybe](maybe.md#maybe)‹A› |

___

### `Const` combine

• **combine**: *function* = curry(__combine) as {
  <A, B, C>(f: (valueA: A, valueB: B) => C, maybeA: Maybe<A>, maybeB: Maybe<B>): Maybe<C>
  <A, B, C>(f: (valueA: A, valueB: B) => C, maybeA: Maybe<A>): (maybeB: Maybe<B>) => Maybe<C>

  <A, B, C>(f: (valueA: A, valueB: B) => C): {
    (maybeA: Maybe<A>, maybeB: Maybe<B>): Maybe<C>
    (maybeA: Maybe<A>): (maybeB: Maybe<B>) => Maybe<C>
  }
}

*Defined in [packages/maybe/source/combine.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/combine.ts#L10)*

Applies a function with the values contained in 2 `Maybes` if both are
`Just`s. If either `Maybe`s are `Nothing` then `Nothing` is returned.

**`name`** combine<A, B, C>(f: (a: A, b: B) => C, a: Maybe<A>, b: Maybe<B>): Maybe<C>

#### Type declaration:

▸ <**A**, **B**, **C**>(`f`: function, `maybeA`: [Maybe](maybe.md#maybe)‹A›, `maybeB`: [Maybe](maybe.md#maybe)‹B›): *[Maybe](maybe.md#maybe)‹C›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |

▪ **maybeA**: *[Maybe](maybe.md#maybe)‹A›*

▪ **maybeB**: *[Maybe](maybe.md#maybe)‹B›*

▸ <**A**, **B**, **C**>(`f`: function, `maybeA`: [Maybe](maybe.md#maybe)‹A›): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |

▪ **maybeA**: *[Maybe](maybe.md#maybe)‹A›*

▸ (`maybeB`: [Maybe](maybe.md#maybe)‹B›): *[Maybe](maybe.md#maybe)‹C›*

**Parameters:**

Name | Type |
------ | ------ |
`maybeB` | [Maybe](maybe.md#maybe)‹B› |

▸ <**A**, **B**, **C**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |

▸ (`maybeA`: [Maybe](maybe.md#maybe)‹A›, `maybeB`: [Maybe](maybe.md#maybe)‹B›): *[Maybe](maybe.md#maybe)‹C›*

**Parameters:**

Name | Type |
------ | ------ |
`maybeA` | [Maybe](maybe.md#maybe)‹A› |
`maybeB` | [Maybe](maybe.md#maybe)‹B› |

▸ (`maybeA`: [Maybe](maybe.md#maybe)‹A›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`maybeA` | [Maybe](maybe.md#maybe)‹A› |

▸ (`maybeB`: [Maybe](maybe.md#maybe)‹B›): *[Maybe](maybe.md#maybe)‹C›*

**Parameters:**

Name | Type |
------ | ------ |
`maybeB` | [Maybe](maybe.md#maybe)‹B› |

___

### `Const` combineArray

• **combineArray**: *function* = curry(__combineArray) as CombineArray

*Defined in [packages/maybe/source/combineArray.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/combineArray.ts#L13)*

Applies a function with all of the values contained in an array of `Maybe`s.
If *any* of the `Maybe`s are `Nothing`s then `Nothing` is returned.

**`name`** combineArray<R>(f: (...values: Array<any>) => R, maybes: ReadonlyArray<Maybe<any>>): R

#### Type declaration:

▸ <**A**, **B**, **C**>(`f`: function, `maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›]): *[Maybe](maybe.md#maybe)‹C›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |

▪ **maybes**: *[[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›]*

▸ <**A**, **B**, **C**, **D**>(`f`: function, `maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›]): *[Maybe](maybe.md#maybe)‹D›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B, `valueC`: C): *D*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |
`valueC` | C |

▪ **maybes**: *[[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›]*

▸ <**A**, **B**, **C**, **D**, **E**>(`f`: function, `maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›]): *[Maybe](maybe.md#maybe)‹E›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B, `valueC`: C, `valueD`: D): *E*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |
`valueC` | C |
`valueD` | D |

▪ **maybes**: *[[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›]*

▸ <**A**, **B**, **C**, **D**, **E**, **F**>(`f`: function, `maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›]): *[Maybe](maybe.md#maybe)‹F›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B, `valueC`: C, `valueD`: D, `valueE`: E): *F*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |
`valueC` | C |
`valueD` | D |
`valueE` | E |

▪ **maybes**: *[[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›]*

▸ <**A**, **B**, **C**, **D**, **E**, **F**, **G**>(`f`: function, `maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›, [Maybe](maybe.md#maybe)‹F›]): *[Maybe](maybe.md#maybe)‹G›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B, `valueC`: C, `valueD`: D, `valueE`: E, `valueF`: F): *G*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |
`valueC` | C |
`valueD` | D |
`valueE` | E |
`valueF` | F |

▪ **maybes**: *[[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›, [Maybe](maybe.md#maybe)‹F›]*

▸ <**A**, **B**, **C**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |

▸ (`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›]): *[Maybe](maybe.md#maybe)‹C›*

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›] |

▸ <**A**, **B**, **C**, **D**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B, `valueC`: C): *D*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |
`valueC` | C |

▸ (`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›]): *[Maybe](maybe.md#maybe)‹D›*

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›] |

▸ <**A**, **B**, **C**, **D**, **E**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B, `valueC`: C, `valueD`: D): *E*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |
`valueC` | C |
`valueD` | D |

▸ (`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›]): *[Maybe](maybe.md#maybe)‹E›*

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›] |

▸ <**A**, **B**, **C**, **D**, **E**, **F**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B, `valueC`: C, `valueD`: D, `valueE`: E): *F*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |
`valueC` | C |
`valueD` | D |
`valueE` | E |

▸ (`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›]): *[Maybe](maybe.md#maybe)‹F›*

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›] |

▸ <**A**, **B**, **C**, **D**, **E**, **F**, **G**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B, `valueC`: C, `valueD`: D, `valueE`: E, `valueF`: F): *G*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |
`valueC` | C |
`valueD` | D |
`valueE` | E |
`valueF` | F |

▸ (`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›, [Maybe](maybe.md#maybe)‹F›]): *[Maybe](maybe.md#maybe)‹G›*

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›, [Maybe](maybe.md#maybe)‹F›] |

▸ (`f`: ArrayConstructor): *function*

**Parameters:**

Name | Type |
------ | ------ |
`f` | ArrayConstructor |

▸ <**A**, **B**>(`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›]): *[Maybe](maybe.md#maybe)‹[A, B]›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›] |

▸ <**A**, **B**, **C**>(`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›]): *[Maybe](maybe.md#maybe)‹[A, B, C]›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›] |

▸ <**A**, **B**, **C**, **D**>(`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›]): *[Maybe](maybe.md#maybe)‹[A, B, C, D]›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›] |

▸ <**A**, **B**, **C**, **D**, **E**>(`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›]): *[Maybe](maybe.md#maybe)‹[A, B, C, D, E]›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›] |

▸ <**A**, **B**, **C**, **D**, **E**, **F**>(`maybes`: [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›, [Maybe](maybe.md#maybe)‹F›]): *[Maybe](maybe.md#maybe)‹[A, B, C, D, E, F]›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | [[Maybe](maybe.md#maybe)‹A›, [Maybe](maybe.md#maybe)‹B›, [Maybe](maybe.md#maybe)‹C›, [Maybe](maybe.md#maybe)‹D›, [Maybe](maybe.md#maybe)‹E›, [Maybe](maybe.md#maybe)‹F›] |

▸ <**R**>(`f`: function, `maybes`: ReadonlyArray‹[Maybe](maybe.md#maybe)‹any››): *[Maybe](maybe.md#maybe)‹R›*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **f**: *function*

▸ (...`values`: any[]): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | any[] |

▪ **maybes**: *ReadonlyArray‹[Maybe](maybe.md#maybe)‹any››*

▸ <**R**>(`f`: function): *function*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **f**: *function*

▸ (...`values`: any[]): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | any[] |

▸ (`maybes`: ReadonlyArray‹[Maybe](maybe.md#maybe)‹any››): *[Maybe](maybe.md#maybe)‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`maybes` | ReadonlyArray‹[Maybe](maybe.md#maybe)‹any›› |

___

### `Const` map

• **map**: *function* = curry(__map) as {
  <A, B>(f: (value: A) => B, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => B): (maybe: Maybe<A>) => Maybe<B>
}

*Defined in [packages/maybe/source/map.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/map.ts#L10)*

Applies a function to the value possibly contained in a `Maybe`. If the
maybe is a `Nothing` just the `Nothing` is returned.

**`name`** map<A, B>(f: (value: A) => B, maybe: Maybe<A>): Maybe<B>

#### Type declaration:

▸ <**A**, **B**>(`f`: function, `maybe`: [Maybe](maybe.md#maybe)‹A›): *[Maybe](maybe.md#maybe)‹B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **maybe**: *[Maybe](maybe.md#maybe)‹A›*

▸ <**A**, **B**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`maybe`: [Maybe](maybe.md#maybe)‹A›): *[Maybe](maybe.md#maybe)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`maybe` | [Maybe](maybe.md#maybe)‹A› |

___

### `Const` race

• **race**: *function* = curry(<A>(a: Maybe<A>, b: Maybe<A>): Maybe<A> => (isJust(a) ? a : b)) as {
  <A>(a: Maybe<A>, b: Maybe<A>): Maybe<A>
  <A>(a: Maybe<A>): (b: Maybe<A>) => Maybe<A>
}

*Defined in [packages/maybe/source/race.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/race.ts#L5)*

#### Type declaration:

▸ <**A**>(`a`: [Maybe](maybe.md#maybe)‹A›, `b`: [Maybe](maybe.md#maybe)‹A›): *[Maybe](maybe.md#maybe)‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Maybe](maybe.md#maybe)‹A› |
`b` | [Maybe](maybe.md#maybe)‹A› |

▸ <**A**>(`a`: [Maybe](maybe.md#maybe)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Maybe](maybe.md#maybe)‹A› |

▸ (`b`: [Maybe](maybe.md#maybe)‹A›): *[Maybe](maybe.md#maybe)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [Maybe](maybe.md#maybe)‹A› |

___

### `Const` unwrap

• **unwrap**: *function* = curry(<A, B>(fn: Arity1<A, B>, maybe: Maybe<A>): B | null => withDefault(null, map(fn, maybe)))

*Defined in [packages/maybe/source/unwrap.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/unwrap.ts#L10)*

Used for performing side-effects with a Maybe

#### Type declaration:

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›, `maybe`: [Just](maybe.md#just)‹A›): *B*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |
`maybe` | [Just](maybe.md#just)‹A› |

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›, `maybe`: [Maybe](maybe.md#maybe)‹A›): *B | null*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |
`maybe` | [Maybe](maybe.md#maybe)‹A› |

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |

▸ (`maybe`: [Just](maybe.md#just)‹A›): *B*

**Parameters:**

Name | Type |
------ | ------ |
`maybe` | [Just](maybe.md#just)‹A› |

▸ (`maybe`: [Maybe](maybe.md#maybe)‹A›): *B | null*

**Parameters:**

Name | Type |
------ | ------ |
`maybe` | [Maybe](maybe.md#maybe)‹A› |

___

### `Const` withDefault

• **withDefault**: *function* = curry(__withDefault) as {
  <A>(defaultValue: A, maybe: Maybe<A>): A
  <A>(defaultValue: A): (maybe: Maybe<A>) => A
}

*Defined in [packages/maybe/source/withDefault.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/withDefault.ts#L11)*

Given a default value and a Maybe returns the default value if the Maybe is a
Nothing or the value contained in a Just.

**`name`** withDefault<A>(defaultValue: A, maybe: Maybe<A>): A

#### Type declaration:

▸ <**A**>(`defaultValue`: A, `maybe`: [Maybe](maybe.md#maybe)‹A›): *A*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`defaultValue` | A |
`maybe` | [Maybe](maybe.md#maybe)‹A› |

▸ <**A**>(`defaultValue`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`defaultValue` | A |

▸ (`maybe`: [Maybe](maybe.md#maybe)‹A›): *A*

**Parameters:**

Name | Type |
------ | ------ |
`maybe` | [Maybe](maybe.md#maybe)‹A› |

## Functions

###  __ap

▸ **__ap**<**A**, **B**>(`fn`: [Maybe](maybe.md#maybe)‹function›, `maybe`: [Maybe](maybe.md#maybe)‹A›): *[Maybe](maybe.md#maybe)‹B›*

*Defined in [packages/maybe/source/ap.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/ap.ts#L16)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Maybe](maybe.md#maybe)‹function› |
`maybe` | [Maybe](maybe.md#maybe)‹A› |

**Returns:** *[Maybe](maybe.md#maybe)‹B›*

___

###  __chain

▸ **__chain**<**A**, **B**>(`f`: function, `maybe`: [Maybe](maybe.md#maybe)‹A›): *[Maybe](maybe.md#maybe)‹B›*

*Defined in [packages/maybe/source/chain.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/chain.ts#L15)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`value`: A): *[Maybe](maybe.md#maybe)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **maybe**: *[Maybe](maybe.md#maybe)‹A›*

**Returns:** *[Maybe](maybe.md#maybe)‹B›*

___

###  __combine

▸ **__combine**<**A**, **B**, **C**>(`f`: function, `maybeA`: [Maybe](maybe.md#maybe)‹A›, `maybeB`: [Maybe](maybe.md#maybe)‹B›): *[Maybe](maybe.md#maybe)‹C›*

*Defined in [packages/maybe/source/combine.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/combine.ts#L20)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`valueA`: A, `valueB`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`valueA` | A |
`valueB` | B |

▪ **maybeA**: *[Maybe](maybe.md#maybe)‹A›*

▪ **maybeB**: *[Maybe](maybe.md#maybe)‹B›*

**Returns:** *[Maybe](maybe.md#maybe)‹C›*

___

###  __combineArray

▸ **__combineArray**<**R**>(`f`: function, `maybes`: ReadonlyArray‹[Maybe](maybe.md#maybe)‹any››): *[Maybe](maybe.md#maybe)‹R›*

*Defined in [packages/maybe/source/combineArray.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/combineArray.ts#L15)*

**Type parameters:**

▪ **R**

**Parameters:**

▪ **f**: *function*

▸ (...`values`: any[]): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | any[] |

▪ **maybes**: *ReadonlyArray‹[Maybe](maybe.md#maybe)‹any››*

**Returns:** *[Maybe](maybe.md#maybe)‹R›*

___

###  __map

▸ **__map**<**A**, **B**>(`f`: function, `maybe`: [Maybe](maybe.md#maybe)‹A›): *[Maybe](maybe.md#maybe)‹B›*

*Defined in [packages/maybe/source/map.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/map.ts#L15)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **maybe**: *[Maybe](maybe.md#maybe)‹A›*

**Returns:** *[Maybe](maybe.md#maybe)‹B›*

___

###  __withDefault

▸ **__withDefault**<**A**>(`defaultValue`: A, `maybe`: [Maybe](maybe.md#maybe)‹A›): *A*

*Defined in [packages/maybe/source/withDefault.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/withDefault.ts#L16)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`defaultValue` | A |
`maybe` | [Maybe](maybe.md#maybe)‹A› |

**Returns:** *A*

___

###  fromJust

▸ **fromJust**<**A**>(`just`: [Just](maybe.md#just)‹A›): *A*

*Defined in [packages/maybe/source/fromJust.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/fromJust.ts#L12)*

Extract the value contained in a Just

**`name`** fromJust<A>(just: Just<A>): A

**`example`** 
import { fromJust, Just } from '@typed/maybe'

const value = fromJust(Just.of(1))
console.log(value) // logs '1'

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`just` | [Just](maybe.md#just)‹A› |

**Returns:** *A*

___

###  isJust

▸ **isJust**<**A**>(`maybe`: [Maybe](maybe.md#maybe)‹A›): *maybe is Just<A>*

*Defined in [packages/maybe/source/isJust.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/isJust.ts#L14)*

Given a Maybe<A> it returns true if the Maybe<A> is Just<A> or
false if it is a Nothing.

**`name`** isJust<A>(maybe: Maybe<A>): maybe is Just<A>

**`example`** 
import { isJust, Nothing, Maybe } from '@typed/maybe'

console.log(isJust(Nothing)) // logs false
console.log(isJust(Maybe.of(1))) // logs true

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`maybe` | [Maybe](maybe.md#maybe)‹A› |

**Returns:** *maybe is Just<A>*

___

###  isNothing

▸ **isNothing**<**A**>(`maybe`: [Maybe](maybe.md#maybe)‹A›): *maybe is Nothing*

*Defined in [packages/maybe/source/isNothing.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/isNothing.ts#L14)*

Given a Maybe<A> it returns false if the Maybe<A> is Just<A> or
true if it is a Nothing.

**`name`** isNothing<A>(maybe: Maybe<A>): maybe is Nothing

**`example`** 
import { isNothing, Maybe, Nothing } from '@typed/maybe'

console.log(isNothing(Nothing)) // logs true
console.log(isNothing(Maybe.of(1))) // logs false

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`maybe` | [Maybe](maybe.md#maybe)‹A› |

**Returns:** *maybe is Nothing*

___

### `Const` unpack

▸ **unpack**<**A**, **B**>(`fn`: function, `fallback`: function, `maybe`: [Maybe](maybe.md#maybe)‹A›): *B*

*Defined in [packages/maybe/source/unpack.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/unpack.ts#L5)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **fallback**: *function*

▸ (): *B*

▪ **maybe**: *[Maybe](maybe.md#maybe)‹A›*

**Returns:** *B*

## Object literals

### `Const` Nothing

### ▪ **Nothing**: *object*

*Defined in [packages/maybe/source/Nothing.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/Nothing.ts#L12)*

###  [NOTHING]

• **[NOTHING]**: *true* = true

*Defined in [packages/maybe/source/Nothing.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/maybe/source/Nothing.ts#L12)*
