[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [timer](../modules/timer.md) › [HRTimeClock](timer.hrtimeclock.md)

# Class: HRTimeClock

## Hierarchy

* **HRTimeClock**

## Implements

* [Clock](../interfaces/timer.clock.md)

## Index

### Constructors

* [constructor](timer.hrtimeclock.md#constructor)

### Properties

* [hrtime](timer.hrtimeclock.md#private-hrtime)
* [origin](timer.hrtimeclock.md#private-origin)

### Methods

* [currentTime](timer.hrtimeclock.md#currenttime)

## Constructors

###  constructor

\+ **new HRTimeClock**(`hrtime`: typeof hrtime, `origin`: ReturnType‹typeof hrtime›): *[HRTimeClock](timer.hrtimeclock.md)*

*Defined in [packages/timer/source/clock.ts:28](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/clock.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`hrtime` | typeof hrtime |
`origin` | ReturnType‹typeof hrtime› |

**Returns:** *[HRTimeClock](timer.hrtimeclock.md)*

## Properties

### `Private` hrtime

• **hrtime**: *typeof hrtime*

*Defined in [packages/timer/source/clock.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/clock.ts#L30)*

___

### `Private` origin

• **origin**: *ReturnType‹typeof hrtime›*

*Defined in [packages/timer/source/clock.ts:31](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/clock.ts#L31)*

## Methods

###  currentTime

▸ **currentTime**(): *number*

*Defined in [packages/timer/source/clock.ts:34](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/clock.ts#L34)*

**Returns:** *number*
