[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [timer](../modules/timer.md) › [Timeline](timer.timeline.md)

# Class: Timeline

Timeline is responsible for storing tasks at a given time and
returns what tasks are ready at the current time.

## Hierarchy

* **Timeline**

## Index

### Properties

* [tasks](timer.timeline.md#private-tasks)

### Methods

* [addTask](timer.timeline.md#addtask)
* [getAndDelete](timer.timeline.md#private-getanddelete)
* [readyTasks](timer.timeline.md#readytasks)
* [removeTask](timer.timeline.md#removetask)

## Properties

### `Private` tasks

• **tasks**: *[Map](../interfaces/objects.mutablemap.md#map)‹number, [Arity1](../modules/lambda.md#arity1)‹number›[]›* = new Map()

*Defined in [packages/timer/source/Timeline.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/Timeline.ts#L9)*

## Methods

###  addTask

▸ **addTask**(`time`: number, `f`: [Arity1](../modules/lambda.md#arity1)‹number›): *void*

*Defined in [packages/timer/source/Timeline.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/Timeline.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`time` | number |
`f` | [Arity1](../modules/lambda.md#arity1)‹number› |

**Returns:** *void*

___

### `Private` getAndDelete

▸ **getAndDelete**(`time`: number): *function[]*

*Defined in [packages/timer/source/Timeline.ts:44](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/Timeline.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`time` | number |

**Returns:** *function[]*

___

###  readyTasks

▸ **readyTasks**(`currentTime`: number): *function[]*

*Defined in [packages/timer/source/Timeline.ts:37](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/Timeline.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`currentTime` | number |

**Returns:** *function[]*

___

###  removeTask

▸ **removeTask**(`time`: number, `f`: [Arity1](../modules/lambda.md#arity1)‹number›): *void*

*Defined in [packages/timer/source/Timeline.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/timer/source/Timeline.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`time` | number |
`f` | [Arity1](../modules/lambda.md#arity1)‹number› |

**Returns:** *void*
