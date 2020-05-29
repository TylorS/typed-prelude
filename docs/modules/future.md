[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [future](future.md)

# Package: future

# @typed/future 

One-time asynchronous data structure with strongly-typed errors.

## Index

### Namespaces

* [Future](future.md#future)

### Type aliases

* [PureFuture](future.md#purefuture)

### Variables

* [ap](future.md#const-ap)
* [chain](future.md#const-chain)
* [chainLeft](future.md#const-chainleft)
* [fork](future.md#const-fork)
* [map](future.md#const-map)

### Functions

* [__ap](future.md#__ap)
* [__chain](future.md#__chain)
* [__chainLeft](future.md#__chainleft)
* [__fork](future.md#__fork)
* [__map](future.md#__map)
* [all](future.md#const-all)
* [createIfNotResolved](future.md#createifnotresolved)
* [sequence](future.md#sequence)
* [toPromise](future.md#topromise)

## Namespaces

###  Future

• **Future**: *Env‹E, [Either](either.md#either)‹A, B››*

*Defined in [packages/future/source/Future.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/Future.ts#L7)*

*Defined in [packages/future/source/Future.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/Future.ts#L10)*

### `Const` create

▸ **create**<**E**, **A**, **B**>(`fn`: function): *[Future](future.md#future)‹E, A, B›*

*Defined in [packages/future/source/Future.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/Future.ts#L13)*

**Type parameters:**

▪ **E**

▪ **A**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`reject`: [Arity1](lambda.md#arity1)‹A, Disposable›, `resolve`: [Arity1](lambda.md#arity1)‹B, Disposable›, `environment`: E): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`reject` | [Arity1](lambda.md#arity1)‹A, Disposable› |
`resolve` | [Arity1](lambda.md#arity1)‹B, Disposable› |
`environment` | E |

**Returns:** *[Future](future.md#future)‹E, A, B›*

### `Const` fromPromise

▸ **fromPromise**<**A**>(`promise`: function): *[PureFuture](future.md#purefuture)‹[Error](../classes/effects.killerror.md#static-error), A›*

*Defined in [packages/future/source/Future.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/Future.ts#L26)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **promise**: *function*

▸ (): *PromiseLike‹A›*

**Returns:** *[PureFuture](future.md#purefuture)‹[Error](../classes/effects.killerror.md#static-error), A›*

### `Const` of

▸ **of**<**A**, **B**>(`value`: B): *[PureFuture](future.md#purefuture)‹A, B›*

*Defined in [packages/future/source/Future.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/Future.ts#L11)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

**Returns:** *[PureFuture](future.md#purefuture)‹A, B›*

## Type aliases

###  PureFuture

Ƭ **PureFuture**: *Pure‹[Either](either.md#either)‹A, B››*

*Defined in [packages/future/source/Future.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/Future.ts#L8)*

## Variables

### `Const` ap

• **ap**: *function* = curry(__ap) as {
  <E1, E2, A, B, C>(fn: Future<E1, A, Arity1<B, C>>, value: Future<E2, A, B>): Future<
    Compact<E1 & E2>,
    A,
    C
  >

  <E1, A, B, C>(fn: Future<E1, A, Arity1<B, C>>): <E2>(
    value: Future<E2, A, B>,
  ) => Future<Compact<E1 & E2>, A, C>
}

*Defined in [packages/future/source/ap.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/ap.ts#L7)*

#### Type declaration:

▸ <**E1**, **E2**, **A**, **B**, **C**>(`fn`: [Future](future.md#future)‹E1, A, [Arity1](lambda.md#arity1)‹B, C››, `value`: [Future](future.md#future)‹E2, A, B›): *[Future](future.md#future)‹[Compact](common.md#compact)‹E1 & E2›, A, C›*

**Type parameters:**

▪ **E1**

▪ **E2**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Future](future.md#future)‹E1, A, [Arity1](lambda.md#arity1)‹B, C›› |
`value` | [Future](future.md#future)‹E2, A, B› |

▸ <**E1**, **A**, **B**, **C**>(`fn`: [Future](future.md#future)‹E1, A, [Arity1](lambda.md#arity1)‹B, C››): *function*

**Type parameters:**

▪ **E1**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Future](future.md#future)‹E1, A, [Arity1](lambda.md#arity1)‹B, C›› |

▸ <**E2**>(`value`: [Future](future.md#future)‹E2, A, B›): *[Future](future.md#future)‹[Compact](common.md#compact)‹E1 & E2›, A, C›*

**Type parameters:**

▪ **E2**

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Future](future.md#future)‹E2, A, B› |

___

### `Const` chain

• **chain**: *function* = curry(__chain) as {
  <E1, E2, A, B, C>(fn: (value: B) => Future<E2, A, C>, future: Future<E1, A, B>): Future<
    Compact<E1 & E2>,
    A,
    C
  >
  <E2, A, B, C>(fn: (value: B) => Future<E2, A, C>): <E1>(
    future: Future<E1, A, B>,
  ) => Future<Compact<E1 & E2>, A, C>
}

*Defined in [packages/future/source/chain.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/chain.ts#L7)*

#### Type declaration:

▸ <**E1**, **E2**, **A**, **B**, **C**>(`fn`: function, `future`: [Future](future.md#future)‹E1, A, B›): *[Future](future.md#future)‹[Compact](common.md#compact)‹E1 & E2›, A, C›*

**Type parameters:**

▪ **E1**

▪ **E2**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: B): *[Future](future.md#future)‹E2, A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **future**: *[Future](future.md#future)‹E1, A, B›*

▸ <**E2**, **A**, **B**, **C**>(`fn`: function): *function*

**Type parameters:**

▪ **E2**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: B): *[Future](future.md#future)‹E2, A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ <**E1**>(`future`: [Future](future.md#future)‹E1, A, B›): *[Future](future.md#future)‹[Compact](common.md#compact)‹E1 & E2›, A, C›*

**Type parameters:**

▪ **E1**

**Parameters:**

Name | Type |
------ | ------ |
`future` | [Future](future.md#future)‹E1, A, B› |

___

### `Const` chainLeft

• **chainLeft**: *function* = curry(__chainLeft) as {
  <A, E1, B, C, E2>(fn: Arity1<A, Future<E1, B, C>>, future: Future<E2, A, C>): Future<
    E1 & E2,
    B,
    C
  >

  <A, E1, B, C>(fn: Arity1<A, Future<E1, B, C>>): <E2>(
    future: Future<E2, A, C>,
  ) => Future<E1 & E2, B, C>
}

*Defined in [packages/future/source/chainLeft.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/chainLeft.ts#L6)*

#### Type declaration:

▸ <**A**, **E1**, **B**, **C**, **E2**>(`fn`: [Arity1](lambda.md#arity1)‹A, [Future](future.md#future)‹E1, B, C››, `future`: [Future](future.md#future)‹E2, A, C›): *[Future](future.md#future)‹E1 & E2, B, C›*

**Type parameters:**

▪ **A**

▪ **E1**

▪ **B**

▪ **C**

▪ **E2**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, [Future](future.md#future)‹E1, B, C›› |
`future` | [Future](future.md#future)‹E2, A, C› |

▸ <**A**, **E1**, **B**, **C**>(`fn`: [Arity1](lambda.md#arity1)‹A, [Future](future.md#future)‹E1, B, C››): *function*

**Type parameters:**

▪ **A**

▪ **E1**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, [Future](future.md#future)‹E1, B, C›› |

▸ <**E2**>(`future`: [Future](future.md#future)‹E2, A, C›): *[Future](future.md#future)‹E1 & E2, B, C›*

**Type parameters:**

▪ **E2**

**Parameters:**

Name | Type |
------ | ------ |
`future` | [Future](future.md#future)‹E2, A, C› |

___

### `Const` fork

• **fork**: *function* = curry(__fork) as {
  <A, B>(
    left: (value: A) => Disposable,
    right: (value: B) => Disposable,
    future: PureFuture<A, B>,
  ): Disposable

  <A, B>(left: (value: A) => Disposable, right: (value: B) => Disposable): (
    future: PureFuture<A, B>,
  ) => Disposable

  <A>(left: (value: A) => Disposable): {
    <B>(right: (value: B) => Disposable, future: PureFuture<A, B>): Disposable
    <B>(right: (value: B) => Disposable, future: PureFuture<A, B>): Disposable
  }
}

*Defined in [packages/future/source/fork.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/fork.ts#L7)*

#### Type declaration:

▸ <**A**, **B**>(`left`: function, `right`: function, `future`: [PureFuture](future.md#purefuture)‹A, B›): *Disposable*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **left**: *function*

▸ (`value`: A): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **right**: *function*

▸ (`value`: B): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **future**: *[PureFuture](future.md#purefuture)‹A, B›*

▸ <**A**, **B**>(`left`: function, `right`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **left**: *function*

▸ (`value`: A): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **right**: *function*

▸ (`value`: B): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ (`future`: [PureFuture](future.md#purefuture)‹A, B›): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`future` | [PureFuture](future.md#purefuture)‹A, B› |

▸ <**A**>(`left`: function): *function*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **left**: *function*

▸ (`value`: A): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ <**B**>(`right`: function, `future`: [PureFuture](future.md#purefuture)‹A, B›): *Disposable*

**Type parameters:**

▪ **B**

**Parameters:**

▪ **right**: *function*

▸ (`value`: B): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **future**: *[PureFuture](future.md#purefuture)‹A, B›*

▸ <**B**>(`right`: function, `future`: [PureFuture](future.md#purefuture)‹A, B›): *Disposable*

**Type parameters:**

▪ **B**

**Parameters:**

▪ **right**: *function*

▸ (`value`: B): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **future**: *[PureFuture](future.md#purefuture)‹A, B›*

___

### `Const` map

• **map**: *function* = curry(__map) as {
  <E, A, B, C>(fn: Arity1<B, C>, future: Future<E, A, B>): Future<E, A, C>
  <B, C>(fn: Arity1<B, C>): <E, A>(future: Future<E, A, B>) => Future<E, A, C>
}

*Defined in [packages/future/source/map.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/map.ts#L5)*

#### Type declaration:

▸ <**E**, **A**, **B**, **C**>(`fn`: [Arity1](lambda.md#arity1)‹B, C›, `future`: [Future](future.md#future)‹E, A, B›): *[Future](future.md#future)‹E, A, C›*

**Type parameters:**

▪ **E**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹B, C› |
`future` | [Future](future.md#future)‹E, A, B› |

▸ <**B**, **C**>(`fn`: [Arity1](lambda.md#arity1)‹B, C›): *function*

**Type parameters:**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹B, C› |

▸ <**E**, **A**>(`future`: [Future](future.md#future)‹E, A, B›): *[Future](future.md#future)‹E, A, C›*

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`future` | [Future](future.md#future)‹E, A, B› |

## Functions

###  __ap

▸ **__ap**<**E1**, **E2**, **A**, **B**, **C**>(`fn`: [Future](future.md#future)‹E1, A, [Arity1](lambda.md#arity1)‹B, C››, `value`: [Future](future.md#future)‹E2, A, B›): *[Future](future.md#future)‹[Compact](common.md#compact)‹E1 & E2›, A, C›*

*Defined in [packages/future/source/ap.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/ap.ts#L19)*

**Type parameters:**

▪ **E1**

▪ **E2**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Future](future.md#future)‹E1, A, [Arity1](lambda.md#arity1)‹B, C›› |
`value` | [Future](future.md#future)‹E2, A, B› |

**Returns:** *[Future](future.md#future)‹[Compact](common.md#compact)‹E1 & E2›, A, C›*

___

###  __chain

▸ **__chain**<**A**, **B**, **C**, **D**, **E**>(`fn`: function, `future`: [Future](future.md#future)‹E, C, A›): *[Future](future.md#future)‹[Compact](common.md#compact)‹B & E›, C, D›*

*Defined in [packages/future/source/chain.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/chain.ts#L18)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: A): *[Future](future.md#future)‹B, C, D›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **future**: *[Future](future.md#future)‹E, C, A›*

**Returns:** *[Future](future.md#future)‹[Compact](common.md#compact)‹B & E›, C, D›*

___

###  __chainLeft

▸ **__chainLeft**<**A**, **E1**, **B**, **C**, **E2**>(`fn`: [Arity1](lambda.md#arity1)‹A, [Future](future.md#future)‹E1, B, C››, `future`: [Future](future.md#future)‹E2, A, C›): *[Future](future.md#future)‹E1 & E2, B, C›*

*Defined in [packages/future/source/chainLeft.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/chainLeft.ts#L18)*

**Type parameters:**

▪ **A**

▪ **E1**

▪ **B**

▪ **C**

▪ **E2**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, [Future](future.md#future)‹E1, B, C›› |
`future` | [Future](future.md#future)‹E2, A, C› |

**Returns:** *[Future](future.md#future)‹E1 & E2, B, C›*

___

###  __fork

▸ **__fork**<**A**, **B**>(`left`: function, `right`: function, `future`: [PureFuture](future.md#purefuture)‹A, B›): *Disposable*

*Defined in [packages/future/source/fork.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/fork.ts#L24)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **left**: *function*

▸ (`value`: A): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **right**: *function*

▸ (`value`: B): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **future**: *[PureFuture](future.md#purefuture)‹A, B›*

**Returns:** *Disposable*

___

###  __map

▸ **__map**<**E**, **A**, **B**, **C**>(`fn`: [Arity1](lambda.md#arity1)‹B, C›, `future`: [Future](future.md#future)‹E, A, B›): *[Future](future.md#future)‹E, A, C›*

*Defined in [packages/future/source/map.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/map.ts#L10)*

**Type parameters:**

▪ **E**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹B, C› |
`future` | [Future](future.md#future)‹E, A, B› |

**Returns:** *[Future](future.md#future)‹E, A, C›*

___

### `Const` all

▸ **all**<**E**, **A**, **B**>(`futures`: ReadonlyArray‹[Future](future.md#future)‹E, A, B››): *Env‹E, Left‹A› | Right‹ReadonlyArray‹B›››*

*Defined in [packages/future/source/all.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/all.ts#L6)*

**Type parameters:**

▪ **E**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`futures` | ReadonlyArray‹[Future](future.md#future)‹E, A, B›› |

**Returns:** *Env‹E, Left‹A› | Right‹ReadonlyArray‹B›››*

___

###  createIfNotResolved

▸ **createIfNotResolved**(): *(Anonymous function)*

*Defined in [packages/future/source/Future.ts:39](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/Future.ts#L39)*

**Returns:** *(Anonymous function)*

___

###  sequence

▸ **sequence**<**E**, **A**, **B**>(`futures`: ReadonlyArray‹[Future](future.md#future)‹E, A, B››): *[Future](future.md#future)‹E, A, keyof B[]›*

*Defined in [packages/future/source/sequence.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/sequence.ts#L5)*

**Type parameters:**

▪ **E**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`futures` | ReadonlyArray‹[Future](future.md#future)‹E, A, B›› |

**Returns:** *[Future](future.md#future)‹E, A, keyof B[]›*

___

###  toPromise

▸ **toPromise**<**A**, **B**>(`future`: [PureFuture](future.md#purefuture)‹A, B›): *Promise‹[Either](either.md#either)‹A, B››*

*Defined in [packages/future/source/toPromise.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/future/source/toPromise.ts#L6)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`future` | [PureFuture](future.md#purefuture)‹A, B› |

**Returns:** *Promise‹[Either](either.md#either)‹A, B››*
