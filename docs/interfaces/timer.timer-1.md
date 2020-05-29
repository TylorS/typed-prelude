[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [timer](../modules/timer.md) › [Timer](timer.timer-1.md)

# Interface: Timer

An extension of Clock used for scheduling delayed tasks.

## Hierarchy

* [Clock](timer.clock.md)

  ↳ **Timer**

  ↳ [VirtualTimer](timer.virtualtimer.md)

## Index

### Properties

* [currentTime](timer.timer-1.md#readonly-currenttime)
* [delay](timer.timer-1.md#readonly-delay)

## Properties

### `Readonly` currentTime

• **currentTime**: *[IO](../modules/lambda.md#io)‹number›*

*Inherited from [Clock](timer.clock.md).[currentTime](timer.clock.md#readonly-currenttime)*

*Defined in [packages/timer/source/types.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/types.ts#L8)*

___

### `Readonly` delay

• **delay**: *function*

*Defined in [packages/timer/source/types.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/types.ts#L22)*

#### Type declaration:

▸ (`fn`: [Arity1](../modules/lambda.md#arity1)‹number, Disposable›, `delayMs`: number): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](../modules/lambda.md#arity1)‹number, Disposable› |
`delayMs` | number |
