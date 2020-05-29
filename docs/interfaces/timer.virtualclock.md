[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [timer](../modules/timer.md) › [VirtualClock](timer.virtualclock.md)

# Interface: VirtualClock

An extension of Clock useful for testing

## Hierarchy

* [Clock](timer.clock.md)

  ↳ **VirtualClock**

  ↳ [VirtualTimer](timer.virtualtimer.md)

## Index

### Properties

* [currentTime](timer.virtualclock.md#readonly-currenttime)
* [progressTimeBy](timer.virtualclock.md#readonly-progresstimeby)

## Properties

### `Readonly` currentTime

• **currentTime**: *[IO](../modules/lambda.md#io)‹number›*

*Inherited from [Clock](timer.clock.md).[currentTime](timer.clock.md#readonly-currenttime)*

*Defined in [packages/timer/source/types.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/types.ts#L8)*

___

### `Readonly` progressTimeBy

• **progressTimeBy**: *function*

*Defined in [packages/timer/source/types.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/types.ts#L15)*

#### Type declaration:

▸ (`delayMS`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`delayMS` | number |
