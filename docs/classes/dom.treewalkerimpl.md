[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [dom](../modules/dom.md) › [TreeWalkerImpl](dom.treewalkerimpl.md)

# Class: TreeWalkerImpl

## Hierarchy

* [NodeIteratorImpl](dom.nodeiteratorimpl.md)

  ↳ **TreeWalkerImpl**

## Implements

* NodeIterator
* TreeWalker

## Index

### Constructors

* [constructor](dom.treewalkerimpl.md#constructor)

### Properties

* [filter](dom.treewalkerimpl.md#readonly-filter)
* [pointerBeforeReferenceNode](dom.treewalkerimpl.md#pointerbeforereferencenode)
* [referenceNode](dom.treewalkerimpl.md#referencenode)
* [root](dom.treewalkerimpl.md#readonly-root)
* [whatToShow](dom.treewalkerimpl.md#readonly-whattoshow)

### Accessors

* [currentNode](dom.treewalkerimpl.md#currentnode)

### Methods

* [detach](dom.treewalkerimpl.md#detach)
* [firstChild](dom.treewalkerimpl.md#firstchild)
* [lastChild](dom.treewalkerimpl.md#lastchild)
* [nextNode](dom.treewalkerimpl.md#nextnode)
* [nextSibling](dom.treewalkerimpl.md#nextsibling)
* [parentNode](dom.treewalkerimpl.md#parentnode)
* [previousNode](dom.treewalkerimpl.md#previousnode)
* [previousSibling](dom.treewalkerimpl.md#previoussibling)
* [setIfExists](dom.treewalkerimpl.md#private-setifexists)

## Constructors

###  constructor

\+ **new TreeWalkerImpl**(`root`: Node, `whatToShow`: [NodeFilter](../enums/dom.nodefilter.md), `filter`: [INodeFilter](../modules/dom.md#inodefilter)): *[TreeWalkerImpl](dom.treewalkerimpl.md)*

*Overrides [NodeIteratorImpl](dom.nodeiteratorimpl.md).[constructor](dom.nodeiteratorimpl.md#constructor)*

*Defined in [packages/dom/source/TreeWalker.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/TreeWalker.ts#L5)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`root` | Node | - |
`whatToShow` | [NodeFilter](../enums/dom.nodefilter.md) | NodeFilter.SHOW_ALL |
`filter` | [INodeFilter](../modules/dom.md#inodefilter) | new NodeFilterImplementation([whatToShow], true) |

**Returns:** *[TreeWalkerImpl](dom.treewalkerimpl.md)*

## Properties

### `Readonly` filter

• **filter**: *[INodeFilter](../modules/dom.md#inodefilter)*

*Overrides [NodeIteratorImpl](dom.nodeiteratorimpl.md).[filter](dom.nodeiteratorimpl.md#readonly-filter)*

*Defined in [packages/dom/source/TreeWalker.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/TreeWalker.ts#L9)*

___

###  pointerBeforeReferenceNode

• **pointerBeforeReferenceNode**: *boolean* = true

*Inherited from [NodeIteratorImpl](dom.nodeiteratorimpl.md).[pointerBeforeReferenceNode](dom.nodeiteratorimpl.md#pointerbeforereferencenode)*

*Defined in [packages/dom/source/NodeIterator.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeIterator.ts#L5)*

___

###  referenceNode

• **referenceNode**: *Node* = this.root

*Inherited from [NodeIteratorImpl](dom.nodeiteratorimpl.md).[referenceNode](dom.nodeiteratorimpl.md#referencenode)*

*Defined in [packages/dom/source/NodeIterator.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeIterator.ts#L6)*

___

### `Readonly` root

• **root**: *Node*

*Overrides [NodeIteratorImpl](dom.nodeiteratorimpl.md).[root](dom.nodeiteratorimpl.md#readonly-root)*

*Defined in [packages/dom/source/TreeWalker.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/TreeWalker.ts#L7)*

___

### `Readonly` whatToShow

• **whatToShow**: *[NodeFilter](../enums/dom.nodefilter.md)*

*Overrides [NodeIteratorImpl](dom.nodeiteratorimpl.md).[whatToShow](dom.nodeiteratorimpl.md#readonly-whattoshow)*

*Defined in [packages/dom/source/TreeWalker.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/TreeWalker.ts#L8)*

## Accessors

###  currentNode

• **get currentNode**(): *Node*

*Defined in [packages/dom/source/TreeWalker.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/TreeWalker.ts#L14)*

**Returns:** *Node*

• **set currentNode**(`node`: Node): *void*

*Defined in [packages/dom/source/TreeWalker.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/TreeWalker.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | Node |

**Returns:** *void*

## Methods

###  detach

▸ **detach**(): *void*

*Inherited from [NodeIteratorImpl](dom.nodeiteratorimpl.md).[detach](dom.nodeiteratorimpl.md#detach)*

*Defined in [packages/dom/source/NodeIterator.ts:89](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeIterator.ts#L89)*

**Returns:** *void*

___

###  firstChild

▸ **firstChild**(): *null | Node*

*Defined in [packages/dom/source/TreeWalker.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/TreeWalker.ts#L24)*

**Returns:** *null | Node*

___

###  lastChild

▸ **lastChild**(): *null | Node*

*Defined in [packages/dom/source/TreeWalker.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/TreeWalker.ts#L26)*

**Returns:** *null | Node*

___

###  nextNode

▸ **nextNode**(): *Node | null*

*Inherited from [NodeIteratorImpl](dom.nodeiteratorimpl.md).[nextNode](dom.nodeiteratorimpl.md#nextnode)*

*Defined in [packages/dom/source/NodeIterator.ts:51](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeIterator.ts#L51)*

**Returns:** *Node | null*

___

###  nextSibling

▸ **nextSibling**(): *null | Node*

*Defined in [packages/dom/source/TreeWalker.ts:28](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/TreeWalker.ts#L28)*

**Returns:** *null | Node*

___

###  parentNode

▸ **parentNode**(): *null | Node*

*Defined in [packages/dom/source/TreeWalker.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/TreeWalker.ts#L22)*

**Returns:** *null | Node*

___

###  previousNode

▸ **previousNode**(): *Node | null*

*Inherited from [NodeIteratorImpl](dom.nodeiteratorimpl.md).[previousNode](dom.nodeiteratorimpl.md#previousnode)*

*Defined in [packages/dom/source/NodeIterator.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/NodeIterator.ts#L14)*

**Returns:** *Node | null*

___

###  previousSibling

▸ **previousSibling**(): *null | Node*

*Defined in [packages/dom/source/TreeWalker.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/TreeWalker.ts#L30)*

**Returns:** *null | Node*

___

### `Private` setIfExists

▸ **setIfExists**(`node`: Node | null): *null | Node*

*Defined in [packages/dom/source/TreeWalker.ts:32](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/dom/source/TreeWalker.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | Node &#124; null |

**Returns:** *null | Node*
