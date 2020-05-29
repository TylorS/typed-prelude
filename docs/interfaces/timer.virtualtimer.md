[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [timer](../modules/timer.md) › [VirtualTimer](timer.virtualtimer.md)

# Interface: VirtualTimer

An extension of Timer useful for testing

## Hierarchy

  ↳ [Timer](timer.timer-1.md)

  ↳ [VirtualClock](timer.virtualclock.md)

  ↳ **VirtualTimer**

## Index

### Properties

* [currentTime](timer.virtualtimer.md#readonly-currenttime)
* [delay](timer.virtualtimer.md#readonly-delay)
* [progressTimeBy](timer.virtualtimer.md#readonly-progresstimeby)

## Properties

### `Readonly` currentTime

• **currentTime**: *[IO](../modules/lambda.md#io)‹number›*

*Inherited from [Clock](timer.clock.md).[currentTime](timer.clock.md#readonly-currenttime)*

*Overrides [Clock](timer.clock.md).[currentTime](timer.clock.md#readonly-currenttime)*

*Defined in [packages/timer/source/types.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/types.ts#L8)*

___

### `Readonly` delay

• **delay**: *function*

*Inherited from [Timer](timer.timer-1.md).[delay](timer.timer-1.md#readonly-delay)*

*Defined in [packages/timer/source/types.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/types.ts#L22)*

#### Type declaration:

▸ (`fn`: [Arity1](../modules/lambda.md#arity1)‹number, Disposable›, `delayMs`: number): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](../modules/lambda.md#arity1)‹number, Disposable› |
`delayMs` | number |

___

### `Readonly` progressTimeBy

• **progressTimeBy**: *function*

*Inherited from [VirtualClock](timer.virtualclock.md).[progressTimeBy](timer.virtualclock.md#readonly-progresstimeby)*

*Defined in [packages/timer/source/types.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/types.ts#L15)*

#### Type declaration:

▸ (`delayMS`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`delayMS` | number |
