[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [timer](timer.md)

# Package: timer

# @typed/timer

> Interfaces for working with time. Immensely useful for testing time dependent functionality.

## Index

### Namespaces

* [__global](timer.md#__global)

### Classes

* [HRTimeClock](../classes/timer.hrtimeclock.md)
* [RelativeClock](../classes/timer.relativeclock.md)
* [Timeline](../classes/timer.timeline.md)

### Interfaces

* [Clock](../interfaces/timer.clock.md)
* [Timer](../interfaces/timer.timer-1.md)
* [VirtualClock](../interfaces/timer.virtualclock.md)
* [VirtualTimer](../interfaces/timer.virtualtimer.md)

### Type aliases

* [RequestIdleCallbackDeadline](timer.md#requestidlecallbackdeadline)
* [RequestIdleCallbackHandle](timer.md#requestidlecallbackhandle)
* [RequestIdleCallbackOptions](timer.md#requestidlecallbackoptions)

### Functions

* [asap](timer.md#asap)
* [createClock](timer.md#const-createclock)
* [createRelativeClock](timer.md#const-createrelativeclock)
* [createSetTimeoutTimer](timer.md#createsettimeouttimer)
* [createTimer](timer.md#createtimer)
* [createVirtualClock](timer.md#createvirtualclock)
* [createVirtualTimer](timer.md#createvirtualtimer)
* [interval](timer.md#interval)
* [whenIdle](timer.md#whenidle)
* [whenIdleWithTimeout](timer.md#whenidlewithtimeout)

## Namespaces

###  __global

• **__global**:

*Defined in [packages/timer/source/whenIdle.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/whenIdle.ts#L16)*

###  Window

• **Window**:

*Defined in [packages/timer/source/whenIdle.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/whenIdle.ts#L17)*

###  cancelIdleCallback

• **cancelIdleCallback**: *function*

*Defined in [packages/timer/source/whenIdle.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/whenIdle.ts#L22)*

#### Type declaration:

▸ (`handle`: [RequestIdleCallbackHandle](timer.md#requestidlecallbackhandle)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`handle` | [RequestIdleCallbackHandle](timer.md#requestidlecallbackhandle) |

###  requestIdleCallback

• **requestIdleCallback**: *function*

*Defined in [packages/timer/source/whenIdle.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/whenIdle.ts#L18)*

#### Type declaration:

▸ (`callback`: function, `opts?`: [RequestIdleCallbackOptions](timer.md#requestidlecallbackoptions)): *[RequestIdleCallbackHandle](timer.md#requestidlecallbackhandle)*

**Parameters:**

▪ **callback**: *function*

▸ (`deadline`: [RequestIdleCallbackDeadline](timer.md#requestidlecallbackdeadline)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`deadline` | [RequestIdleCallbackDeadline](timer.md#requestidlecallbackdeadline) |

▪`Optional`  **opts**: *[RequestIdleCallbackOptions](timer.md#requestidlecallbackoptions)*

## Type aliases

###  RequestIdleCallbackDeadline

Ƭ **RequestIdleCallbackDeadline**: *object*

*Defined in [packages/timer/source/whenIdle.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/whenIdle.ts#L11)*

#### Type declaration:

* **didTimeout**: *boolean*

* **timeRemaining**(): *function*

  * (): *number*

___

###  RequestIdleCallbackHandle

Ƭ **RequestIdleCallbackHandle**: *any*

*Defined in [packages/timer/source/whenIdle.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/whenIdle.ts#L6)*

___

###  RequestIdleCallbackOptions

Ƭ **RequestIdleCallbackOptions**: *object*

*Defined in [packages/timer/source/whenIdle.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/whenIdle.ts#L7)*

#### Type declaration:

* **timeout**: *number*

## Functions

###  asap

▸ **asap**(`f`: [Arity1](lambda.md#arity1)‹number›, `clock`: [Clock](../interfaces/timer.clock.md)): *object*

*Defined in [packages/timer/source/createSetTimeoutTimer.ts:37](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/createSetTimeoutTimer.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Arity1](lambda.md#arity1)‹number› |
`clock` | [Clock](../interfaces/timer.clock.md) |

**Returns:** *object*

* **dispose**: *dispose*

___

### `Const` createClock

▸ **createClock**(): *[Clock](../interfaces/timer.clock.md)*

*Defined in [packages/timer/source/clock.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/clock.ts#L8)*

**Returns:** *[Clock](../interfaces/timer.clock.md)*

___

### `Const` createRelativeClock

▸ **createRelativeClock**(`clock`: [Clock](../interfaces/timer.clock.md)): *[Clock](../interfaces/timer.clock.md)*

*Defined in [packages/timer/source/clock.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/clock.ts#L5)*

Create a clock relative to the current time

**Parameters:**

Name | Type |
------ | ------ |
`clock` | [Clock](../interfaces/timer.clock.md) |

**Returns:** *[Clock](../interfaces/timer.clock.md)*

___

###  createSetTimeoutTimer

▸ **createSetTimeoutTimer**(`clock`: [Clock](../interfaces/timer.clock.md)): *[Timer](../interfaces/timer.timer-1.md)*

*Defined in [packages/timer/source/createSetTimeoutTimer.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/createSetTimeoutTimer.ts#L10)*

Createa timer from a clock and setTimeout.
Also tries to run tasks with delay of 0 using micro-tasks
by way of a Promise.

**Parameters:**

Name | Type |
------ | ------ |
`clock` | [Clock](../interfaces/timer.clock.md) |

**Returns:** *[Timer](../interfaces/timer.timer-1.md)*

___

###  createTimer

▸ **createTimer**(): *[Timer](../interfaces/timer.timer-1.md)*

*Defined in [packages/timer/source/createTimer.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/createTimer.ts#L8)*

Create a timer based on Performance and setTimeout

**Returns:** *[Timer](../interfaces/timer.timer-1.md)*

___

###  createVirtualClock

▸ **createVirtualClock**(`currentTime`: number): *[VirtualClock](../interfaces/timer.virtualclock.md)*

*Defined in [packages/timer/source/createVirtualClock.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/createVirtualClock.ts#L7)*

Create a VirtualClock

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`currentTime` | number | 0 | (optional) :: Time to start at  |

**Returns:** *[VirtualClock](../interfaces/timer.virtualclock.md)*

___

###  createVirtualTimer

▸ **createVirtualTimer**(`clock`: [VirtualClock](../interfaces/timer.virtualclock.md)): *[VirtualTimer](../interfaces/timer.virtualtimer.md)*

*Defined in [packages/timer/source/createVirtualTimer.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/createVirtualTimer.ts#L11)*

Create a VirtualTimer. Useful for testing.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`clock` | [VirtualClock](../interfaces/timer.virtualclock.md) | createVirtualClock() |

**Returns:** *[VirtualTimer](../interfaces/timer.virtualtimer.md)*

___

###  interval

▸ **interval**(`fn`: [Arity1](lambda.md#arity1)‹number, Disposable›, `interval`: number, `timer`: [Timer](../interfaces/timer.timer-1.md)): *Disposable*

*Defined in [packages/timer/source/interval.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/interval.ts#L12)*

Call a function at a given interval using a Timer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹number, Disposable› | :: (number -> *) |
`interval` | number | :: number |
`timer` | [Timer](../interfaces/timer.timer-1.md) | :: Timer |

**Returns:** *Disposable*

:: Disposable

___

###  whenIdle

▸ **whenIdle**(`fn`: [Arity2](lambda.md#arity2)‹[RequestIdleCallbackDeadline](timer.md#requestidlecallbackdeadline), number›, `timer`: [Timer](../interfaces/timer.timer-1.md)): *Disposable*

*Defined in [packages/timer/source/whenIdle.ts:32](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/whenIdle.ts#L32)*

Attempts to schedule a task to be performed when the event queue is clear.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fn` | [Arity2](lambda.md#arity2)‹[RequestIdleCallbackDeadline](timer.md#requestidlecallbackdeadline), number› | :: ({ didTimeout:: boolean; timeRemaining :: (* -> number) } -> number -> *) |
`timer` | [Timer](../interfaces/timer.timer-1.md) | :: Timer |

**Returns:** *Disposable*

Disposable

___

###  whenIdleWithTimeout

▸ **whenIdleWithTimeout**(`fn`: [Arity2](lambda.md#arity2)‹[RequestIdleCallbackDeadline](timer.md#requestidlecallbackdeadline), number›, `timeout`: number, `timer`: [Timer](../interfaces/timer.timer-1.md)): *Disposable*

*Defined in [packages/timer/source/whenIdle.ts:48](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/whenIdle.ts#L48)*

Run a function when idle when in a browser falling back to
a specified timeout within node.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fn` | [Arity2](lambda.md#arity2)‹[RequestIdleCallbackDeadline](timer.md#requestidlecallbackdeadline), number› | :: (RequestIdleCallbackDeadline -> number -> *) |
`timeout` | number | :: number |
`timer` | [Timer](../interfaces/timer.timer-1.md) | :: Timer |

**Returns:** *Disposable*

Disposable
