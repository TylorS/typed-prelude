[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [dom](../modules/dom.md) › [NodeIteratorImpl](dom.nodeiteratorimpl.md)

# Class: NodeIteratorImpl

## Hierarchy

* **NodeIteratorImpl**

  ↳ [TreeWalkerImpl](dom.treewalkerimpl.md)

## Implements

* NodeIterator

## Index

### Constructors

* [constructor](dom.nodeiteratorimpl.md#constructor)

### Properties

* [filter](dom.nodeiteratorimpl.md#readonly-filter)
* [pointerBeforeReferenceNode](dom.nodeiteratorimpl.md#pointerbeforereferencenode)
* [referenceNode](dom.nodeiteratorimpl.md#referencenode)
* [root](dom.nodeiteratorimpl.md#readonly-root)
* [whatToShow](dom.nodeiteratorimpl.md#readonly-whattoshow)

### Methods

* [detach](dom.nodeiteratorimpl.md#detach)
* [matches](dom.nodeiteratorimpl.md#private-matches)
* [nextNode](dom.nodeiteratorimpl.md#nextnode)
* [previousNode](dom.nodeiteratorimpl.md#previousnode)

## Constructors

###  constructor

\+ **new NodeIteratorImpl**(`root`: Node, `whatToShow`: [NodeFilter](../enums/dom.nodefilter.md), `filter`: [INodeFilter](../modules/dom.md#inodefilter)): *[NodeIteratorImpl](dom.nodeiteratorimpl.md)*

*Defined in [packages/dom/source/NodeIterator.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeIterator.ts#L6)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`root` | Node | - |
`whatToShow` | [NodeFilter](../enums/dom.nodefilter.md) | NodeFilter.SHOW_ALL |
`filter` | [INodeFilter](../modules/dom.md#inodefilter) | new NodeFilterImplementation([whatToShow], true) |

**Returns:** *[NodeIteratorImpl](dom.nodeiteratorimpl.md)*

## Properties

### `Readonly` filter

• **filter**: *[INodeFilter](../modules/dom.md#inodefilter)*

*Defined in [packages/dom/source/NodeIterator.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeIterator.ts#L11)*

___

###  pointerBeforeReferenceNode

• **pointerBeforeReferenceNode**: *boolean* = true

*Defined in [packages/dom/source/NodeIterator.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeIterator.ts#L5)*

___

###  referenceNode

• **referenceNode**: *Node* = this.root

*Defined in [packages/dom/source/NodeIterator.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeIterator.ts#L6)*

___

### `Readonly` root

• **root**: *Node*

*Defined in [packages/dom/source/NodeIterator.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeIterator.ts#L9)*

___

### `Readonly` whatToShow

• **whatToShow**: *[NodeFilter](../enums/dom.nodefilter.md)*

*Defined in [packages/dom/source/NodeIterator.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeIterator.ts#L10)*

## Methods

###  detach

▸ **detach**(): *void*

*Defined in [packages/dom/source/NodeIterator.ts:89](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeIterator.ts#L89)*

**Returns:** *void*

___

### `Private` matches

▸ **matches**(`node`: Node): *number | false*

*Defined in [packages/dom/source/NodeIterator.ts:93](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeIterator.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | Node |

**Returns:** *number | false*

___

###  nextNode

▸ **nextNode**(): *Node | null*

*Defined in [packages/dom/source/NodeIterator.ts:51](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeIterator.ts#L51)*

**Returns:** *Node | null*

___

###  previousNode

▸ **previousNode**(): *Node | null*

*Defined in [packages/dom/source/NodeIterator.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeIterator.ts#L14)*

**Returns:** *Node | null*
