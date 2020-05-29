[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [dom](../modules/dom.md) › [NodeFilterImplementation](dom.nodefilterimplementation.md)

# Class: NodeFilterImplementation

## Hierarchy

* **NodeFilterImplementation**

## Implements

* NodeFilter

## Index

### Constructors

* [constructor](dom.nodefilterimplementation.md#constructor)

### Properties

* [filters](dom.nodefilterimplementation.md#private-filters)
* [skip](dom.nodefilterimplementation.md#private-skip)

### Methods

* [acceptNode](dom.nodefilterimplementation.md#acceptnode)

## Constructors

###  constructor

\+ **new NodeFilterImplementation**(`filters`: ReadonlyArray‹[NodeFilter](../enums/dom.nodefilter.md)›, `skip`: boolean): *[NodeFilterImplementation](dom.nodefilterimplementation.md)*

*Defined in [packages/dom/source/NodeFilter.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeFilter.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`filters` | ReadonlyArray‹[NodeFilter](../enums/dom.nodefilter.md)› |
`skip` | boolean |

**Returns:** *[NodeFilterImplementation](dom.nodefilterimplementation.md)*

## Properties

### `Private` filters

• **filters**: *ReadonlyArray‹[NodeFilter](../enums/dom.nodefilter.md)›*

*Defined in [packages/dom/source/NodeFilter.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeFilter.ts#L4)*

___

### `Private` skip

• **skip**: *boolean*

*Defined in [packages/dom/source/NodeFilter.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeFilter.ts#L4)*

## Methods

###  acceptNode

▸ **acceptNode**(`node`: Node): *[FILTER_ACCEPT](../enums/dom.nodefilter.md#filter_accept) | [FILTER_REJECT](../enums/dom.nodefilter.md#filter_reject) | [FILTER_SKIP](../enums/dom.nodefilter.md#filter_skip)*

*Defined in [packages/dom/source/NodeFilter.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeFilter.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | Node |

**Returns:** *[FILTER_ACCEPT](../enums/dom.nodefilter.md#filter_accept) | [FILTER_REJECT](../enums/dom.nodefilter.md#filter_reject) | [FILTER_SKIP](../enums/dom.nodefilter.md#filter_skip)*
