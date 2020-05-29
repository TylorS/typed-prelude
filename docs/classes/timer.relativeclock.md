[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [timer](../modules/timer.md) › [RelativeClock](timer.relativeclock.md)

# Class: RelativeClock

## Hierarchy

* **RelativeClock**

## Implements

* [Clock](../interfaces/timer.clock.md)

## Index

### Constructors

* [constructor](timer.relativeclock.md#constructor)

### Properties

* [clock](timer.relativeclock.md#private-clock)
* [origin](timer.relativeclock.md#private-origin)

### Methods

* [currentTime](timer.relativeclock.md#currenttime)

## Constructors

###  constructor

\+ **new RelativeClock**(`clock`: [Clock](../interfaces/timer.clock.md), `origin`: number): *[RelativeClock](timer.relativeclock.md)*

*Defined in [packages/timer/source/clock.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/clock.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`clock` | [Clock](../interfaces/timer.clock.md) |
`origin` | number |

**Returns:** *[RelativeClock](timer.relativeclock.md)*

## Properties

### `Private` clock

• **clock**: *[Clock](../interfaces/timer.clock.md)*

*Defined in [packages/timer/source/clock.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/clock.ts#L20)*

___

### `Private` origin

• **origin**: *number*

*Defined in [packages/timer/source/clock.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/clock.ts#L20)*

## Methods

###  currentTime

▸ **currentTime**(): *number*

*Defined in [packages/timer/source/clock.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/clock.ts#L22)*

**Returns:** *number*
