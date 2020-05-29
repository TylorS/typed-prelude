[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [subscription](subscription.md)

# Package: subscription

# @typed/subscription

> Generic data-type for one-to-many broadcasting of data.

## Index

### Interfaces

* [Subscription](../interfaces/subscription.subscription-1.md)

### Type aliases

* [CombineSubscriptions](subscription.md#combinesubscriptions)
* [Subscriber](subscription.md#subscriber)
* [SubscriptionInput](subscription.md#subscriptioninput)
* [SubscriptionOutput](subscription.md#subscriptionoutput)
* [SubscriptionValues](subscription.md#subscriptionvalues)

### Variables

* [debounce](subscription.md#const-debounce)
* [delay](subscription.md#const-delay)
* [filter](subscription.md#const-filter)
* [map](subscription.md#const-map)
* [scan](subscription.md#const-scan)

### Functions

* [__debounce](subscription.md#__debounce)
* [__delay](subscription.md#__delay)
* [__filter](subscription.md#__filter)
* [__scan](subscription.md#__scan)
* [combine](subscription.md#combine)
* [createSubscription](subscription.md#createsubscription)
* [merge](subscription.md#merge)
* [once](subscription.md#const-once)
* [refCountDisposable](subscription.md#refcountdisposable)

## Type aliases

###  CombineSubscriptions

Ƭ **CombineSubscriptions**: *[Subscription](../interfaces/subscription.subscription-1.md)‹[SubscriptionValues](subscription.md#subscriptionvalues)‹A››*

*Defined in [packages/subscription/source/combine.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/combine.ts#L4)*

___

###  Subscriber

Ƭ **Subscriber**: *[Arity1](lambda.md#arity1)‹A, Disposable›*

*Defined in [packages/subscription/source/Subscription.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/Subscription.ts#L17)*

___

###  SubscriptionInput

Ƭ **SubscriptionInput**: *A extends Subscription<infer R, any> ? R : never*

*Defined in [packages/subscription/source/Subscription.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/Subscription.ts#L14)*

___

###  SubscriptionOutput

Ƭ **SubscriptionOutput**: *A extends Subscription<any, infer R> ? R : never*

*Defined in [packages/subscription/source/Subscription.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/Subscription.ts#L15)*

___

###  SubscriptionValues

Ƭ **SubscriptionValues**: *object*

*Defined in [packages/subscription/source/combine.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/combine.ts#L8)*

#### Type declaration:

## Variables

### `Const` debounce

• **debounce**: *function* = curry(__debounce) as {
  <A, B>(timer: Timer, delayMs: number, subscription: Subscription<A, B>): Subscription<A, B>
  (timer: Timer, delayMs: number): <A, B>(subscription: Subscription<A, B>) => Subscription<A, B>
  (timer: Timer): {
    <A, B>(delayMs: number, subscription: Subscription<A, B>): Subscription<A, B>
    (delayMs: number): <A, B>(subscription: Subscription<A, B>) => Subscription<A, B>
  }
}

*Defined in [packages/subscription/source/debounce.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/debounce.ts#L6)*

#### Type declaration:

▸ <**A**, **B**>(`timer`: Timer, `delayMs`: number, `subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹A, B›): *[Subscription](../interfaces/subscription.subscription-1.md)‹A, B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`timer` | Timer |
`delayMs` | number |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹A, B› |

▸ (`timer`: Timer, `delayMs`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`timer` | Timer |
`delayMs` | number |

▸ <**A**, **B**>(`subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹A, B›): *[Subscription](../interfaces/subscription.subscription-1.md)‹A, B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹A, B› |

▸ (`timer`: Timer): *function*

**Parameters:**

Name | Type |
------ | ------ |
`timer` | Timer |

▸ <**A**, **B**>(`delayMs`: number, `subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹A, B›): *[Subscription](../interfaces/subscription.subscription-1.md)‹A, B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`delayMs` | number |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹A, B› |

▸ (`delayMs`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`delayMs` | number |

▸ <**A**, **B**>(`subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹A, B›): *[Subscription](../interfaces/subscription.subscription-1.md)‹A, B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹A, B› |

___

### `Const` delay

• **delay**: *function* = curry(__delay) as {
  <A, B>(timer: Timer, delayMs: number, subscription: Subscription<A, B>): Subscription<A, B>
  (timer: Timer, delayMs: number): <A, B>(subscription: Subscription<A, B>) => Subscription<A, B>
  (timer: Timer): {
    <A, B>(delayMs: number, subscription: Subscription<A, B>): Subscription<A, B>
    (delayMs: number): <A, B>(subscription: Subscription<A, B>) => Subscription<A, B>
  }
}

*Defined in [packages/subscription/source/delay.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/delay.ts#L5)*

#### Type declaration:

▸ <**A**, **B**>(`timer`: Timer, `delayMs`: number, `subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹A, B›): *[Subscription](../interfaces/subscription.subscription-1.md)‹A, B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`timer` | Timer |
`delayMs` | number |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹A, B› |

▸ (`timer`: Timer, `delayMs`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`timer` | Timer |
`delayMs` | number |

▸ <**A**, **B**>(`subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹A, B›): *[Subscription](../interfaces/subscription.subscription-1.md)‹A, B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹A, B› |

▸ (`timer`: Timer): *function*

**Parameters:**

Name | Type |
------ | ------ |
`timer` | Timer |

▸ <**A**, **B**>(`delayMs`: number, `subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹A, B›): *[Subscription](../interfaces/subscription.subscription-1.md)‹A, B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`delayMs` | number |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹A, B› |

▸ (`delayMs`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`delayMs` | number |

▸ <**A**, **B**>(`subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹A, B›): *[Subscription](../interfaces/subscription.subscription-1.md)‹A, B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹A, B› |

___

### `Const` filter

• **filter**: *function* = curry(__filter)

*Defined in [packages/subscription/source/filter.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/filter.ts#L5)*

#### Type declaration:

▸ <**A**>(`predicate`: [Is](lambda.md#is)‹A›, `subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹any, any›): *[Subscription](../interfaces/subscription.subscription-1.md)‹[SubscriptionInput](subscription.md#subscriptioninput)‹typeof subscription›, A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Is](lambda.md#is)‹A› |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹any, any› |

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹any, A›): *[Subscription](../interfaces/subscription.subscription-1.md)‹[SubscriptionInput](subscription.md#subscriptioninput)‹typeof subscription›, A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹any, A› |

▸ <**A**>(`predicate`: [Is](lambda.md#is)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Is](lambda.md#is)‹A› |

▸ (`subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹any, any›): *[Subscription](../interfaces/subscription.subscription-1.md)‹[SubscriptionInput](subscription.md#subscriptioninput)‹typeof subscription›, A›*

**Parameters:**

Name | Type |
------ | ------ |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹any, any› |

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |

▸ (`subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹any, A›): *[Subscription](../interfaces/subscription.subscription-1.md)‹[SubscriptionInput](subscription.md#subscriptioninput)‹typeof subscription›, A›*

**Parameters:**

Name | Type |
------ | ------ |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹any, A› |

___

### `Const` map

• **map**: *function* = curry(
  <A, B, C>(fn: Arity1<B, C>, subscription: Subscription<A, B>): Subscription<A, C> => {
    const subscribe = (subscriber: Subscriber<C>): Disposable =>
      subscription.subscribe(pipe(fn, subscriber))

    return {
      ...subscription,
      subscribe,
    }
  },
) as {
  <A, B, C>(fn: Arity1<B, C>, subscription: Subscription<A, B>): Subscription<A, C>
  <B, C>(fn: Arity1<B, C>): <A>(subscription: Subscription<A, B>) => Subscription<A, C>
}

*Defined in [packages/subscription/source/map.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/map.ts#L11)*

Map over a subscription

**`param`** :: (b -> c)

**`param`** :: Subscription a b

**`returns`** Subscription a c

#### Type declaration:

▸ <**A**, **B**, **C**>(`fn`: [Arity1](lambda.md#arity1)‹B, C›, `subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹A, B›): *[Subscription](../interfaces/subscription.subscription-1.md)‹A, C›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹B, C› |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹A, B› |

▸ <**B**, **C**>(`fn`: [Arity1](lambda.md#arity1)‹B, C›): *function*

**Type parameters:**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹B, C› |

▸ <**A**>(`subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹A, B›): *[Subscription](../interfaces/subscription.subscription-1.md)‹A, C›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹A, B› |

___

### `Const` scan

• **scan**: *function* = curry(__scan) as {
  <A, B, C>(
    reducer: (acc: C, value: B) => C,
    seed: C,
    subscription: Subscription<A, B>,
  ): Subscription<A, C>

  <B, C>(reducer: (acc: C, value: B) => C, seed: C): <A>(
    subscription: Subscription<A, B>,
  ) => Subscription<A, C>

  <B, C>(reducer: (acc: C, value: B) => C): {
    <A>(seed: C, subscription: Subscription<A, B>): Subscription<A, C>
    (seed: C): <A>(subscription: Subscription<A, B>) => Subscription<A, C>
  }
}

*Defined in [packages/subscription/source/scan.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/scan.ts#L4)*

#### Type declaration:

▸ <**A**, **B**, **C**>(`reducer`: function, `seed`: C, `subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹A, B›): *[Subscription](../interfaces/subscription.subscription-1.md)‹A, C›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **reducer**: *function*

▸ (`acc`: C, `value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | C |
`value` | B |

▪ **seed**: *C*

▪ **subscription**: *[Subscription](../interfaces/subscription.subscription-1.md)‹A, B›*

▸ <**B**, **C**>(`reducer`: function, `seed`: C): *function*

**Type parameters:**

▪ **B**

▪ **C**

**Parameters:**

▪ **reducer**: *function*

▸ (`acc`: C, `value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | C |
`value` | B |

▪ **seed**: *C*

▸ <**A**>(`subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹A, B›): *[Subscription](../interfaces/subscription.subscription-1.md)‹A, C›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹A, B› |

▸ <**B**, **C**>(`reducer`: function): *function*

**Type parameters:**

▪ **B**

▪ **C**

**Parameters:**

▪ **reducer**: *function*

▸ (`acc`: C, `value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | C |
`value` | B |

▸ <**A**>(`seed`: C, `subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹A, B›): *[Subscription](../interfaces/subscription.subscription-1.md)‹A, C›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`seed` | C |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹A, B› |

▸ (`seed`: C): *function*

**Parameters:**

Name | Type |
------ | ------ |
`seed` | C |

▸ <**A**>(`subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹A, B›): *[Subscription](../interfaces/subscription.subscription-1.md)‹A, C›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹A, B› |

## Functions

###  __debounce

▸ **__debounce**<**A**, **B**>(`timer`: Timer, `delayMs`: number, `subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹A, B›): *[Subscription](../interfaces/subscription.subscription-1.md)‹A, B›*

*Defined in [packages/subscription/source/debounce.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/debounce.ts#L15)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`timer` | Timer |
`delayMs` | number |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹A, B› |

**Returns:** *[Subscription](../interfaces/subscription.subscription-1.md)‹A, B›*

___

###  __delay

▸ **__delay**<**A**, **B**>(`timer`: Timer, `delayMs`: number, `subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹A, B›): *[Subscription](../interfaces/subscription.subscription-1.md)‹A, B›*

*Defined in [packages/subscription/source/delay.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/delay.ts#L14)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`timer` | Timer |
`delayMs` | number |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹A, B› |

**Returns:** *[Subscription](../interfaces/subscription.subscription-1.md)‹A, B›*

___

###  __filter

▸ **__filter**<**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹any, A›): *[Subscription](../interfaces/subscription.subscription-1.md)‹A›*

*Defined in [packages/subscription/source/filter.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/filter.ts#L23)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`subscription` | [Subscription](../interfaces/subscription.subscription-1.md)‹any, A› |

**Returns:** *[Subscription](../interfaces/subscription.subscription-1.md)‹A›*

___

###  __scan

▸ **__scan**<**A**, **B**, **C**>(`reducer`: function, `seed`: C, `subscription`: [Subscription](../interfaces/subscription.subscription-1.md)‹A, B›): *[Subscription](../interfaces/subscription.subscription-1.md)‹A, C›*

*Defined in [packages/subscription/source/scan.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/scan.ts#L21)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **reducer**: *function*

▸ (`acc`: C, `value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | C |
`value` | B |

▪ **seed**: *C*

▪ **subscription**: *[Subscription](../interfaces/subscription.subscription-1.md)‹A, B›*

**Returns:** *[Subscription](../interfaces/subscription.subscription-1.md)‹A, C›*

___

###  combine

▸ **combine**<**A**>(...`subscriptions`: A): *[CombineSubscriptions](subscription.md#combinesubscriptions)‹A›*

*Defined in [packages/subscription/source/combine.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/combine.ts#L12)*

**Type parameters:**

▪ **A**: *[Subscription](../interfaces/subscription.subscription-1.md)‹any, any›[]*

**Parameters:**

Name | Type |
------ | ------ |
`...subscriptions` | A |

**Returns:** *[CombineSubscriptions](subscription.md#combinesubscriptions)‹A›*

___

###  createSubscription

▸ **createSubscription**<**A**>(): *[Subscription](../interfaces/subscription.subscription-1.md)‹A›*

*Defined in [packages/subscription/source/Subscription.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/Subscription.ts#L22)*

Create a simple subscription

**Type parameters:**

▪ **A**

**Returns:** *[Subscription](../interfaces/subscription.subscription-1.md)‹A›*

___

###  merge

▸ **merge**<**A**>(...`subscriptions`: A): *[Subscription](../interfaces/subscription.subscription-1.md)‹[SubscriptionInput](subscription.md#subscriptioninput)‹A[number]›, [SubscriptionOutput](subscription.md#subscriptionoutput)‹A[number]››*

*Defined in [packages/subscription/source/merge.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/merge.ts#L9)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[Subscription](../interfaces/subscription.subscription-1.md)‹any››*

**Parameters:**

Name | Type |
------ | ------ |
`...subscriptions` | A |

**Returns:** *[Subscription](../interfaces/subscription.subscription-1.md)‹[SubscriptionInput](subscription.md#subscriptioninput)‹A[number]›, [SubscriptionOutput](subscription.md#subscriptionoutput)‹A[number]››*

___

### `Const` once

▸ **once**<**A**>(`__namedParameters`: object): *Promise‹A›*

*Defined in [packages/subscription/source/once.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/once.ts#L6)*

Subscribe to a subscription just once.

**Type parameters:**

▪ **A**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`subscribe` | function |

**Returns:** *Promise‹A›*

___

###  refCountDisposable

▸ **refCountDisposable**(`numberOfListeners`: function, `wrapped`: Disposable, `delayed`: Disposable): *Disposable*

*Defined in [packages/subscription/source/combine.ts:50](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/combine.ts#L50)*

**Parameters:**

▪ **numberOfListeners**: *function*

▸ (): *number*

▪ **wrapped**: *Disposable*

▪ **delayed**: *Disposable*

**Returns:** *Disposable*
