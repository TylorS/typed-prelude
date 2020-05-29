[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [subscription](../modules/subscription.md) › [Subscription](subscription.subscription-1.md)

# Interface: Subscription <**A, B**>

A generic subscription type

## Type parameters

▪ **A**

▪ **B**

## Hierarchy

* **Subscription**

## Index

### Properties

* [clearSubscribers](subscription.subscription-1.md#readonly-clearsubscribers)
* [publish](subscription.subscription-1.md#readonly-publish)
* [subscribe](subscription.subscription-1.md#readonly-subscribe)

## Properties

### `Readonly` clearSubscribers

• **clearSubscribers**: *function*

*Defined in [packages/subscription/source/Subscription.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/Subscription.ts#L11)*

#### Type declaration:

▸ (): *void*

___

### `Readonly` publish

• **publish**: *[Arity1](../modules/lambda.md#arity1)‹A, Disposable›*

*Defined in [packages/subscription/source/Subscription.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/Subscription.ts#L9)*

___

### `Readonly` subscribe

• **subscribe**: *[Arity1](../modules/lambda.md#arity1)‹[Subscriber](../modules/subscription.md#subscriber)‹B›, Disposable›*

*Defined in [packages/subscription/source/Subscription.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/subscription/source/Subscription.ts#L10)*
