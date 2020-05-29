[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [html](html.md)

# Package: html

# @typed/html

A configurable virtual-dom library with first-class effects.

## Index

### Enumerations

* [VNodeType](../enums/html.vnodetype.md)

### Interfaces

* [CommentVNode](../interfaces/html.commentvnode.md)
* [HtmlVNode](../interfaces/html.htmlvnode.md)
* [StrMap](../interfaces/html.strmap.md)
* [SvgVNode](../interfaces/html.svgvnode.md)
* [TextVNode](../interfaces/html.textvnode.md)
* [VNodeChildren](../interfaces/html.vnodechildren.md)
* [VNodeProps](../interfaces/html.vnodeprops.md)

### Type aliases

* [AddElements](html.md#addelements)
* [BubblingEventHandler](html.md#bubblingeventhandler)
* [ChildrenOf](html.md#childrenof)
* [CombinedEnvsOf](html.md#combinedenvsof)
* [CreateElement](html.md#createelement)
* [ElementToVNode](html.md#elementtovnode)
* [ElementTypes](html.md#elementtypes)
* [EnvOf](html.md#envof)
* [EventHandler](html.md#eventhandler)
* [EventHandlerWithOptions](html.md#eventhandlerwithoptions)
* [EventMapFrom](html.md#eventmapfrom)
* [EventsFrom](html.md#eventsfrom)
* [EventsFromMap](html.md#eventsfrommap)
* [ExcludedKeys](html.md#excludedkeys)
* [HtmlTagName](html.md#htmltagname)
* [IfEquals](html.md#ifequals)
* [KeyOf](html.md#keyof)
* [NodeFrom](html.md#nodefrom)
* [NodeOf](html.md#nodeof)
* [PatchElement](html.md#patchelement)
* [PatchFailure](html.md#patchfailure)
* [PropertiesOf](html.md#propertiesof)
* [PropsFrom](html.md#propsfrom)
* [RecordDiff](html.md#recorddiff)
* [RemoveElements](html.md#removeelements)
* [StrMapDiff](html.md#strmapdiff)
* [SvgTagName](html.md#svgtagname)
* [TagName](html.md#tagname)
* [TagNameOf](html.md#tagnameof)
* [ToConsList](html.md#toconslist)
* [UpdateAriaAttributes](html.md#updateariaattributes)
* [UpdateAttributes](html.md#updateattributes)
* [UpdateChildren](html.md#updatechildren)
* [UpdateDataList](html.md#updatedatalist)
* [UpdateEventHandlers](html.md#updateeventhandlers)
* [UpdateProperties](html.md#updateproperties)
* [VNode](html.md#vnode)
* [VNodeEnv](html.md#vnodeenv)
* [ValidProperties](html.md#validproperties)
* [WritableKeysOf](html.md#writablekeysof)

### Variables

* [CLASS_NAME_KEY](html.md#const-class_name_key)
* [EMPTY](html.md#const-empty)
* [EMPTY](html.md#const-empty)
* [EMPTY](html.md#const-empty)
* [EMPTY](html.md#const-empty)
* [EMPTY](html.md#const-empty)
* [EMPTY](html.md#const-empty)
* [EMPTY](html.md#const-empty)
* [ID_KEY](html.md#const-id_key)
* [PatchFailure](html.md#const-patchfailure)
* [SVG_NAMESPACE](html.md#const-svg_namespace)
* [booleanAttributeDictionary](html.md#const-booleanattributedictionary)
* [booleanAttributes](html.md#const-booleanattributes)
* [createElement](html.md#const-createelement)

### Functions

* [addElements](html.md#const-addelements)
* [comment](html.md#comment)
* [createElementAttributesAndProps](html.md#createelementattributesandprops)
* [createListener](html.md#createlistener)
* [createPatchEnv](html.md#createpatchenv)
* [diffAttributes](html.md#diffattributes)
* [diffRecordMap](html.md#diffrecordmap)
* [elementToVNode](html.md#const-elementtovnode)
* [getAriaKey](html.md#const-getariakey)
* [getKey](html.md#getkey)
* [getListener](html.md#getlistener)
* [getNodeOrThrow](html.md#getnodeorthrow)
* [getOptions](html.md#getoptions)
* [html](html.md#html)
* [isBooleanAttribute](html.md#isbooleanattribute)
* [isBubblingEventHandler](html.md#const-isbubblingeventhandler)
* [isComment](html.md#iscomment)
* [isCommentNode](html.md#iscommentnode)
* [isEventHandlerWithOptions](html.md#const-iseventhandlerwithoptions)
* [isHtml](html.md#ishtml)
* [isSvg](html.md#issvg)
* [isSvgElement](html.md#issvgelement)
* [isText](html.md#istext)
* [isTextNode](html.md#istextnode)
* [mapKeyToCurrentIndex](html.md#mapkeytocurrentindex)
* [patchChildren](html.md#patchchildren)
* [patchElement](html.md#const-patchelement)
* [patchOnRaf](html.md#patchonraf)
* [removeElements](html.md#const-removeelements)
* [removeReservedProps](html.md#removereservedprops)
* [removeReservedProps](html.md#removereservedprops)
* [replacePreviousElement](html.md#replacepreviouselement)
* [svg](html.md#svg)
* [text](html.md#text)
* [updateAriaAttributes](html.md#const-updateariaattributes)
* [updateAttributes](html.md#const-updateattributes)
* [updateChildren](html.md#const-updatechildren)
* [updateDataList](html.md#const-updatedatalist)
* [updateElement](html.md#updateelement)
* [updateEventHandlers](html.md#const-updateeventhandlers)
* [updateProperties](html.md#const-updateproperties)
* [useHookEnvUpdated](html.md#usehookenvupdated)
* [useKeyManager](html.md#usekeymanager)
* [useListManager](html.md#uselistmanager)
* [useMatchManager](html.md#usematchmanager)
* [vNodesAreEqual](html.md#vnodesareequal)

### Object literals

* [NAMESPACE_URIS](html.md#const-namespace_uris)
* [empty](html.md#const-empty)
* [empty](html.md#const-empty)

## Type aliases

###  AddElements

Ƭ **AddElements**: *function*

*Defined in [packages/html/source/domain/model/dom.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/dom.ts#L19)*

Insert child elements to a parent from a given reference

#### Type declaration:

▸ <**A**>(`parentNode`: Node, `vNodes`: A, `referenceNode`: Node | null): *Effects‹E & [CombinedEnvsOf](html.md#combinedenvsof)‹A›, void›*

**Type parameters:**

▪ **A**: *keyof VNode[]*

**Parameters:**

Name | Type |
------ | ------ |
`parentNode` | Node |
`vNodes` | A |
`referenceNode` | Node &#124; null |

___

###  BubblingEventHandler

Ƭ **BubblingEventHandler**: *function*

*Defined in [packages/html/source/domain/model/VNode.ts:180](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L180)*

Providing just a function defaults to listing to bubbling events

#### Type declaration:

▸ (`event`: object & Map[K]): *Effects‹E, any›*

**Parameters:**

Name | Type |
------ | ------ |
`event` | object & Map[K] |

___

###  ChildrenOf

Ƭ **ChildrenOf**:

*Defined in [packages/html/source/domain/model/VNode.ts:47](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L47)*

Get the Children of a VNode

___

###  CombinedEnvsOf

Ƭ **CombinedEnvsOf**: *[UnNest](common.md#unnest)‹[Flatten](common.md#flatten)‹[ToConsList](html.md#toconslist)‹A›, object››*

*Defined in [packages/html/source/domain/model/VNode.ts:52](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L52)*

Get the combined environments of a list of VNodes

___

###  CreateElement

Ƭ **CreateElement**: *function*

*Defined in [packages/html/source/domain/model/dom.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/dom.ts#L14)*

Given a vNode it creates an element for it

#### Type declaration:

▸ <**A**>(`vNode`: A): *Effects‹E & [EnvOf](html.md#envof)‹A›, void›*

**Type parameters:**

▪ **A**: *[VNode](html.md#vnode)*

**Parameters:**

Name | Type |
------ | ------ |
`vNode` | A |

___

###  ElementToVNode

Ƭ **ElementToVNode**: *function*

*Defined in [packages/html/source/domain/model/dom.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/dom.ts#L7)*

Converts a DOM node to a VNode for monomorphic patch function

#### Type declaration:

▸ (`node`: Text | Comment | HTMLElement | SVGElement): *Effects‹E, [VNode](html.md#vnode)‹object››*

**Parameters:**

Name | Type |
------ | ------ |
`node` | Text &#124; Comment &#124; HTMLElement &#124; SVGElement |

___

###  ElementTypes

Ƭ **ElementTypes**: *[HtmlVNode](../interfaces/html.htmlvnode.md) | [SvgVNode](../interfaces/html.svgvnode.md)*

*Defined in [packages/html/source/domain/model/VNode.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L22)*

___

###  EnvOf

Ƭ **EnvOf**: *[VNodeEnv](html.md#vnodeenv)‹A› & [CombinedEnvsOf](html.md#combinedenvsof)‹[ChildrenOf](html.md#childrenof)‹A››*

*Defined in [packages/html/source/domain/model/VNode.ts:36](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L36)*

Get the combined environment of a VNode and it's children

___

###  EventHandler

Ƭ **EventHandler**: *[BubblingEventHandler](html.md#bubblingeventhandler)‹E, A, Map, K› | [EventHandlerWithOptions](html.md#eventhandlerwithoptions)‹E, A, Map, K›*

*Defined in [packages/html/source/domain/model/VNode.ts:172](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L172)*

___

###  EventHandlerWithOptions

Ƭ **EventHandlerWithOptions**: *keyof [AddEventListenerOptions, function]*

*Defined in [packages/html/source/domain/model/VNode.ts:190](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L190)*

Providing AddEventListenerOptions in a pair allows customizing how the event handler is registered.

___

###  EventMapFrom

Ƭ **EventMapFrom**: *A extends HtmlTagName ? A extends "body" ? HTMLBodyElementEventMap : A extends "frameset" ? HTMLFrameSetElementEventMap : A extends "marquee" ? HTMLMarqueeElementEventMap : A extends "media" ? HTMLMediaElementEventMap : HTMLElementEventMap : A extends SvgTagName ? SVGElementEventMap : never*

*Defined in [packages/html/source/domain/model/VNode.ts:152](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L152)*

___

###  EventsFrom

Ƭ **EventsFrom**: *[EventsFromMap](html.md#eventsfrommap)‹E, A, [EventMapFrom](html.md#eventmapfrom)‹A››*

*Defined in [packages/html/source/domain/model/VNode.ts:166](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L166)*

___

###  EventsFromMap

Ƭ **EventsFromMap**: *object*

*Defined in [packages/html/source/domain/model/VNode.ts:168](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L168)*

#### Type declaration:

___

###  ExcludedKeys

Ƭ **ExcludedKeys**: *"outerHTML" | "textContent"*

*Defined in [packages/html/source/domain/model/VNode.ts:212](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L212)*

___

###  HtmlTagName

Ƭ **HtmlTagName**: *keyof HTMLElementTagNameMap*

*Defined in [packages/html/source/domain/model/VNode.ts:129](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L129)*

___

###  IfEquals

Ƭ **IfEquals**: *function extends function ? C : D*

*Defined in [packages/html/source/domain/model/VNode.ts:218](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L218)*

___

###  KeyOf

Ƭ **KeyOf**: *object*

*Defined in [packages/html/source/useListManager.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/useListManager.ts#L8)*

#### Type declaration:

___

###  NodeFrom

Ƭ **NodeFrom**: *A extends HtmlTagName ? HTMLElementTagNameMap[A] : A extends SvgTagName ? SVGElementTagNameMap[A] : never*

*Defined in [packages/html/source/domain/model/VNode.ts:136](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L136)*

Lookup an element type by it's tag name

___

###  NodeOf

Ƭ **NodeOf**: *A extends TextVNode ? Text : A extends CommentVNode ? Comment : NodeFrom<TagNameOf<A>>*

*Defined in [packages/html/source/domain/model/VNode.ts:57](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L57)*

Get the Node of a given VNode

___

###  PatchElement

Ƭ **PatchElement**: *function*

*Defined in [packages/html/source/domain/model/dom.ts:36](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/dom.ts#L36)*

Patch the differences between two vNodes

#### Type declaration:

▸ <**A**, **B**>(`previous`: A, `updated`: B): *Effects‹E & [EnvOf](html.md#envof)‹A› & [EnvOf](html.md#envof)‹B›, void›*

**Type parameters:**

▪ **A**: *[VNode](html.md#vnode)*

▪ **B**: *[VNode](html.md#vnode)*

**Parameters:**

Name | Type |
------ | ------ |
`previous` | A |
`updated` | B |

___

###  PatchFailure

Ƭ **PatchFailure**: *[FailEnv](effects.md#failenv)‹typeof PatchFailure, [Error](../classes/effects.killerror.md#static-error)›*

*Defined in [packages/html/source/infrastructure/PatchFailure.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/PatchFailure.ts#L4)*

___

###  PropertiesOf

Ƭ **PropertiesOf**: *object*

*Defined in [packages/html/source/domain/model/VNode.ts:150](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L150)*

Get the user-editable properties of a given Node

#### Type declaration:

___

###  PropsFrom

Ƭ **PropsFrom**: *[PropertiesOf](html.md#propertiesof)‹[NodeFrom](html.md#nodefrom)‹A››*

*Defined in [packages/html/source/domain/model/VNode.ts:145](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L145)*

Lookup the properties of an element by tag name

___

###  RecordDiff

Ƭ **RecordDiff**: *object*

*Defined in [packages/html/source/domain/model/StrMap.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/StrMap.ts#L7)*

#### Type declaration:

* **removed**: *ReadonlyArray‹keyof [K, A]›*

* **updated**: *ReadonlyArray‹keyof [K, A]›*

___

###  RemoveElements

Ƭ **RemoveElements**: *function*

*Defined in [packages/html/source/domain/model/dom.ts:28](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/dom.ts#L28)*

Remove child elements from a given parent node. Must remove .ref on removed elements

#### Type declaration:

▸ <**A**>(`parentNode`: Node, `vNodes`: A): *Effects‹E & [CombinedEnvsOf](html.md#combinedenvsof)‹A›, void›*

**Type parameters:**

▪ **A**: *keyof VNode[]*

**Parameters:**

Name | Type |
------ | ------ |
`parentNode` | Node |
`vNodes` | A |

___

###  StrMapDiff

Ƭ **StrMapDiff**: *[RecordDiff](html.md#recorddiff)‹string, A›*

*Defined in [packages/html/source/domain/model/StrMap.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/StrMap.ts#L5)*

___

###  SvgTagName

Ƭ **SvgTagName**: *keyof SVGElementTagNameMap*

*Defined in [packages/html/source/domain/model/VNode.ts:131](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L131)*

___

###  TagName

Ƭ **TagName**: *[HtmlTagName](html.md#htmltagname) | [SvgTagName](html.md#svgtagname)*

*Defined in [packages/html/source/domain/model/VNode.ts:127](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L127)*

___

###  TagNameOf

Ƭ **TagNameOf**: *A extends HtmlVNode<any, infer R, any> ? R : A extends SvgVNode<any, infer R, any> ? R : never*

*Defined in [packages/html/source/domain/model/VNode.ts:39](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L39)*

Get the tag name of a VNode

___

###  ToConsList

Ƭ **ToConsList**: *[] extends A ? unknown : function extends function ? [VNodeEnv<T>, ToConsList<TS>] : unknown*

*Defined in [packages/html/source/domain/model/VNode.ts:222](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L222)*

___

###  UpdateAriaAttributes

Ƭ **UpdateAriaAttributes**: *function*

*Defined in [packages/html/source/domain/model/aria.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/aria.ts#L5)*

#### Type declaration:

▸ <**A**>(`vNode`: A, `diff`: [StrMapDiff](html.md#strmapdiff)‹string›): *Effects‹E & [EnvOf](html.md#envof)‹A›, A›*

**Type parameters:**

▪ **A**: *[ElementTypes](html.md#elementtypes)*

**Parameters:**

Name | Type |
------ | ------ |
`vNode` | A |
`diff` | [StrMapDiff](html.md#strmapdiff)‹string› |

___

###  UpdateAttributes

Ƭ **UpdateAttributes**: *function*

*Defined in [packages/html/source/domain/model/attributes.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/attributes.ts#L5)*

#### Type declaration:

▸ <**A**>(`vNode`: A, `diff`: [StrMapDiff](html.md#strmapdiff)‹string | undefined›): *Effects‹E & [EnvOf](html.md#envof)‹A›, A›*

**Type parameters:**

▪ **A**: *[ElementTypes](html.md#elementtypes)*

**Parameters:**

Name | Type |
------ | ------ |
`vNode` | A |
`diff` | [StrMapDiff](html.md#strmapdiff)‹string &#124; undefined› |

___

###  UpdateChildren

Ƭ **UpdateChildren**: *function*

*Defined in [packages/html/source/domain/model/dom.ts:44](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/dom.ts#L44)*

Diff the children of an element

#### Type declaration:

▸ <**A**, **B**>(`parentElement`: Element, `children`: A, `updatedChildren`: B): *Effects‹E & [CombinedEnvsOf](html.md#combinedenvsof)‹A› & [CombinedEnvsOf](html.md#combinedenvsof)‹B›, void›*

**Type parameters:**

▪ **A**: *keyof VNode[]*

▪ **B**: *keyof VNode[]*

**Parameters:**

Name | Type |
------ | ------ |
`parentElement` | Element |
`children` | A |
`updatedChildren` | B |

___

###  UpdateDataList

Ƭ **UpdateDataList**: *function*

*Defined in [packages/html/source/domain/model/data.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/data.ts#L5)*

#### Type declaration:

▸ <**A**>(`vNode`: A, `diff`: [StrMapDiff](html.md#strmapdiff)‹string›): *Effects‹E & [EnvOf](html.md#envof)‹A›, A›*

**Type parameters:**

▪ **A**: *[ElementTypes](html.md#elementtypes)*

**Parameters:**

Name | Type |
------ | ------ |
`vNode` | A |
`diff` | [StrMapDiff](html.md#strmapdiff)‹string› |

___

###  UpdateEventHandlers

Ƭ **UpdateEventHandlers**: *function*

*Defined in [packages/html/source/domain/model/events.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/events.ts#L9)*

Given an ElementVNode, the current events map, and the updated events map -
perform the necessary updates to the given ElementVNode and returns that ElementVNode.

#### Type declaration:

▸ <**A**>(`vNode`: A, `diff`: [RecordDiff](html.md#recorddiff)‹keyof EventMapFrom<TagNameOf<A>>, [EventHandler](html.md#eventhandler)‹[EnvOf](html.md#envof)‹A›, [TagNameOf](html.md#tagnameof)‹A›, [EventMapFrom](html.md#eventmapfrom)‹[TagNameOf](html.md#tagnameof)‹A››, keyof EventMapFrom<TagNameOf<A>>››): *Effects‹E, A›*

**Type parameters:**

▪ **A**: *[ElementTypes](html.md#elementtypes)*

**Parameters:**

Name | Type |
------ | ------ |
`vNode` | A |
`diff` | [RecordDiff](html.md#recorddiff)‹keyof EventMapFrom<TagNameOf<A>>, [EventHandler](html.md#eventhandler)‹[EnvOf](html.md#envof)‹A›, [TagNameOf](html.md#tagnameof)‹A›, [EventMapFrom](html.md#eventmapfrom)‹[TagNameOf](html.md#tagnameof)‹A››, keyof EventMapFrom<TagNameOf<A>>›› |

___

###  UpdateProperties

Ƭ **UpdateProperties**: *function*

*Defined in [packages/html/source/domain/model/VNode.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L17)*

#### Type declaration:

▸ <**A**>(`vNode`: A, `diff`: [RecordDiff](html.md#recorddiff)‹keyof PropsFrom<TagNameOf<A>>, [ValuesOf](objects.md#valuesof)‹[PropsFrom](html.md#propsfrom)‹[TagNameOf](html.md#tagnameof)‹A››››): *Effects‹E, A›*

**Type parameters:**

▪ **A**: *[ElementTypes](html.md#elementtypes)*

**Parameters:**

Name | Type |
------ | ------ |
`vNode` | A |
`diff` | [RecordDiff](html.md#recorddiff)‹keyof PropsFrom<TagNameOf<A>>, [ValuesOf](objects.md#valuesof)‹[PropsFrom](html.md#propsfrom)‹[TagNameOf](html.md#tagnameof)‹A›››› |

___

###  VNode

Ƭ **VNode**: *[TextVNode](../interfaces/html.textvnode.md) | [CommentVNode](../interfaces/html.commentvnode.md) | [HtmlVNode](../interfaces/html.htmlvnode.md)‹E, A, B› | [SvgVNode](../interfaces/html.svgvnode.md)‹E, A, B›*

*Defined in [packages/html/source/domain/model/VNode.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L11)*

A Virtual Node, used to represent a DOM element

___

###  VNodeEnv

Ƭ **VNodeEnv**: *A extends HtmlVNode<infer E, any, any> ? E : A extends SvgVNode<infer E, any, any> ? E : unknown*

*Defined in [packages/html/source/domain/model/VNode.ts:27](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L27)*

Get the individual environment of a given VNode

___

###  ValidProperties

Ƭ **ValidProperties**: *object[keyof A]*

*Defined in [packages/html/source/domain/model/VNode.ts:202](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L202)*

___

###  WritableKeysOf

Ƭ **WritableKeysOf**: *object[keyof A]*

*Defined in [packages/html/source/domain/model/VNode.ts:214](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L214)*

## Variables

### `Const` CLASS_NAME_KEY

• **CLASS_NAME_KEY**: *"className"* = "className"

*Defined in [packages/html/source/infrastructure/updateProperties.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/updateProperties.ts#L7)*

___

### `Const` EMPTY

• **EMPTY**: *any[]* = []

*Defined in [packages/html/source/domain/services/diffAttributes.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/diffAttributes.ts#L5)*

___

### `Const` EMPTY

• **EMPTY**: *any[]* = []

*Defined in [packages/html/source/domain/services/diffRecordMap.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/diffRecordMap.ts#L7)*

___

### `Const` EMPTY

• **EMPTY**: *AddEventListenerOptions*

*Defined in [packages/html/source/infrastructure/updateEventHandlers.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/updateEventHandlers.ts#L8)*

___

### `Const` EMPTY

• **EMPTY**: *any*

*Defined in [packages/html/source/infrastructure/createElement.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/createElement.ts#L30)*

___

### `Const` EMPTY

• **EMPTY**: *[VNodeChildren](../interfaces/html.vnodechildren.md)* = []

*Defined in [packages/html/source/infrastructure/elementToVNode.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/elementToVNode.ts#L17)*

___

### `Const` EMPTY

• **EMPTY**: *any*

*Defined in [packages/html/source/infrastructure/removeElements.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/removeElements.ts#L7)*

___

### `Const` EMPTY

• **EMPTY**: *any*

*Defined in [packages/html/source/infrastructure/patchElement.ts:33](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/patchElement.ts#L33)*

___

### `Const` ID_KEY

• **ID_KEY**: *"id"* = "id"

*Defined in [packages/html/source/infrastructure/updateProperties.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/updateProperties.ts#L6)*

___

### `Const` PatchFailure

• **PatchFailure**: *unique symbol* = Symbol.for('PatchFailure')

*Defined in [packages/html/source/infrastructure/PatchFailure.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/PatchFailure.ts#L3)*

___

### `Const` SVG_NAMESPACE

• **SVG_NAMESPACE**: *"http://www.w3.org/2000/svg"* = `http://www.w3.org/2000/svg`

*Defined in [packages/html/source/infrastructure/constants.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/constants.ts#L1)*

___

### `Const` booleanAttributeDictionary

• **booleanAttributeDictionary**: *any* = Object.create(null)

*Defined in [packages/html/source/domain/services/isBooleanAttribute.ts:48](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/isBooleanAttribute.ts#L48)*

___

### `Const` booleanAttributes

• **booleanAttributes**: *string[]* = [
  'allowfullscreen',
  'async',
  'autofocus',
  'autoplay',
  'checked',
  'compact',
  'controls',
  'declare',
  'default',
  'defaultchecked',
  'defaultmuted',
  'defaultselected',
  'defer',
  'disabled',
  'draggable',
  'enabled',
  'formnovalidate',
  'hidden',
  'indeterminate',
  'inert',
  'ismap',
  'itemscope',
  'loop',
  'multiple',
  'muted',
  'nohref',
  'noresize',
  'noshade',
  'novalidate',
  'nowrap',
  'open',
  'pauseonexit',
  'readonly',
  'required',
  'reversed',
  'scoped',
  'seamless',
  'selected',
  'sortable',
  'spellcheck',
  'translate',
  'truespeed',
  'typemustmatch',
  'visible',
]

*Defined in [packages/html/source/domain/services/isBooleanAttribute.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/isBooleanAttribute.ts#L1)*

___

### `Const` createElement

• **createElement**: *[CreateElement](html.md#createelement)‹DomEnv›* = function* <A extends VNode>(vNode: A) {
  const { document } = yield* get()
  const node = (isHtml(vNode)
    ? document.createElement(vNode.tagName)
    : isSvg(vNode)
    ? document.createElementNS(SVG_NAMESPACE, vNode.tagName)
    : isText(vNode)
    ? document.createTextNode(vNode.text)
    : document.createComment((vNode as CommentVNode).comment)) as NodeOf<A>

  vNode.node.current = Just.of(node)

  if (isHtml(vNode) || isSvg(vNode)) {
    yield* combine(
      createElementAttributesAndProps(vNode as any),
      vNode.children.length > 0 ? addElements(node, vNode.children, null) : Effect.of(null),
    )
  }

  return vNode
} as CreateElement<DomEnv>

*Defined in [packages/html/source/infrastructure/createElement.ts:44](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/createElement.ts#L44)*

## Functions

### `Const` addElements

▸ **addElements**(`parentNode`: Node, `vNodes`: A, `referenceNode`: null | Node): *Generator‹Env‹object, any›, void, any›*

*Defined in [packages/html/source/infrastructure/createElement.ts:32](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/createElement.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`parentNode` | Node |
`vNodes` | A |
`referenceNode` | null &#124; Node |

**Returns:** *Generator‹Env‹object, any›, void, any›*

___

###  comment

▸ **comment**(`comment`: string, `key?`: [ComparableValues](lambda.md#comparablevalues)): *[CommentVNode](../interfaces/html.commentvnode.md)*

*Defined in [packages/html/source/domain/services/VNode/comment.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/VNode/comment.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`comment` | string |
`key?` | [ComparableValues](lambda.md#comparablevalues) |

**Returns:** *[CommentVNode](../interfaces/html.commentvnode.md)*

___

###  createElementAttributesAndProps

▸ **createElementAttributesAndProps**<**A**>(`vNode`: A): *Generator‹Env‹any›, void, any›*

*Defined in [packages/html/source/infrastructure/createElement.ts:66](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/createElement.ts#L66)*

**Type parameters:**

▪ **A**: *[ElementTypes](html.md#elementtypes)*

**Parameters:**

Name | Type |
------ | ------ |
`vNode` | A |

**Returns:** *Generator‹Env‹any›, void, any›*

___

###  createListener

▸ **createListener**<**E**, **A**>(`vNode`: A): *Effects‹E, EventListener & object›*

*Defined in [packages/html/source/infrastructure/updateEventHandlers.ts:52](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/updateEventHandlers.ts#L52)*

**Type parameters:**

▪ **E**

▪ **A**: *[ElementTypes](html.md#elementtypes)*

**Parameters:**

Name | Type |
------ | ------ |
`vNode` | A |

**Returns:** *Effects‹E, EventListener & object›*

___

###  createPatchEnv

▸ **createPatchEnv**(`fail`: [Fail](effects.md#fail)‹[Error](../classes/effects.killerror.md#static-error)›): *PatchEnv‹[VNode](html.md#vnode), [VNode](html.md#vnode)› & [PatchFailure](html.md#patchfailure)*

*Defined in [packages/html/source/infrastructure/patch.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/patch.ts#L11)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`fail` | [Fail](effects.md#fail)‹[Error](../classes/effects.killerror.md#static-error)› | Fail |

**Returns:** *PatchEnv‹[VNode](html.md#vnode), [VNode](html.md#vnode)› & [PatchFailure](html.md#patchfailure)*

___

###  diffAttributes

▸ **diffAttributes**(`currentMap`: [StrMap](../interfaces/html.strmap.md)‹string | undefined›, `updatedMap`: [StrMap](../interfaces/html.strmap.md)‹string | undefined›): *[StrMapDiff](html.md#strmapdiff)‹string | undefined›*

*Defined in [packages/html/source/domain/services/diffAttributes.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/diffAttributes.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`currentMap` | [StrMap](../interfaces/html.strmap.md)‹string &#124; undefined› |
`updatedMap` | [StrMap](../interfaces/html.strmap.md)‹string &#124; undefined› |

**Returns:** *[StrMapDiff](html.md#strmapdiff)‹string | undefined›*

___

###  diffRecordMap

▸ **diffRecordMap**<**K**, **A**>(`currentMap`: [Record](io.md#const-record)‹K, A›, `updatedMap`: [Record](io.md#const-record)‹K, A›): *[RecordDiff](html.md#recorddiff)‹K, A›*

*Defined in [packages/html/source/domain/services/diffRecordMap.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/diffRecordMap.ts#L13)*

**Type parameters:**

▪ **K**: *string*

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`currentMap` | [Record](io.md#const-record)‹K, A› |
`updatedMap` | [Record](io.md#const-record)‹K, A› |

**Returns:** *[RecordDiff](html.md#recorddiff)‹K, A›*

___

### `Const` elementToVNode

▸ **elementToVNode**(`node`: Text | Comment | HTMLElement | SVGElement): *Effects‹unknown, [VNode](html.md#vnode)›*

*Defined in [packages/html/source/infrastructure/elementToVNode.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/elementToVNode.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | Text &#124; Comment &#124; HTMLElement &#124; SVGElement |

**Returns:** *Effects‹unknown, [VNode](html.md#vnode)›*

___

### `Const` getAriaKey

▸ **getAriaKey**(`key`: string): *string*

*Defined in [packages/html/source/infrastructure/updateAriaAttributes.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/updateAriaAttributes.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *string*

___

###  getKey

▸ **getKey**<**A**>(`vNode`: A): *[ComparableValues](lambda.md#comparablevalues) | null*

*Defined in [packages/html/source/domain/services/VNode/getKey.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/VNode/getKey.ts#L6)*

**Type parameters:**

▪ **A**: *[VNode](html.md#vnode)*

**Parameters:**

Name | Type |
------ | ------ |
`vNode` | A |

**Returns:** *[ComparableValues](lambda.md#comparablevalues) | null*

___

###  getListener

▸ **getListener**<**E**, **A**>(`vNode`: A): *Generator‹Env‹E, any›, EventListener, any›*

*Defined in [packages/html/source/infrastructure/updateEventHandlers.ts:36](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/updateEventHandlers.ts#L36)*

**Type parameters:**

▪ **E**

▪ **A**: *[ElementTypes](html.md#elementtypes)*

**Parameters:**

Name | Type |
------ | ------ |
`vNode` | A |

**Returns:** *Generator‹Env‹E, any›, EventListener, any›*

___

###  getNodeOrThrow

▸ **getNodeOrThrow**<**A**>(`__namedParameters`: object): *Effects‹[PatchFailure](html.md#patchfailure), [NodeOf](html.md#nodeof)‹A››*

*Defined in [packages/html/source/infrastructure/getNodeOrThrow.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/getNodeOrThrow.ts#L6)*

**Type parameters:**

▪ **A**: *[VNode](html.md#vnode)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`node` | object &#124; object &#124; object |

**Returns:** *Effects‹[PatchFailure](html.md#patchfailure), [NodeOf](html.md#nodeof)‹A››*

___

###  getOptions

▸ **getOptions**(`eventHandler`: [EventHandler](html.md#eventhandler)‹any, any, any, any›): *AddEventListenerOptions*

*Defined in [packages/html/source/infrastructure/updateEventHandlers.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/updateEventHandlers.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`eventHandler` | [EventHandler](html.md#eventhandler)‹any, any, any, any› |

**Returns:** *AddEventListenerOptions*

___

###  html

▸ **html**<**E**, **A**, **B**>(`tagName`: A, `props`: [VNodeProps](../interfaces/html.vnodeprops.md)‹E, A› & object | null, `children`: B): *[HtmlVNode](../interfaces/html.htmlvnode.md)‹E & [CombinedEnvsOf](html.md#combinedenvsof)‹B›, A›*

*Defined in [packages/html/source/domain/services/VNode/html.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/VNode/html.ts#L13)*

**Type parameters:**

▪ **E**: *object*

▪ **A**: *[HtmlTagName](html.md#htmltagname)*

▪ **B**: *ReadonlyArray‹[VNode](html.md#vnode) | null›*

**Parameters:**

Name | Type |
------ | ------ |
`tagName` | A |
`props` | [VNodeProps](../interfaces/html.vnodeprops.md)‹E, A› & object &#124; null |
`children` | B |

**Returns:** *[HtmlVNode](../interfaces/html.htmlvnode.md)‹E & [CombinedEnvsOf](html.md#combinedenvsof)‹B›, A›*

___

###  isBooleanAttribute

▸ **isBooleanAttribute**(`key`: any): *boolean*

*Defined in [packages/html/source/domain/services/isBooleanAttribute.ts:53](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/isBooleanAttribute.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | any |

**Returns:** *boolean*

___

### `Const` isBubblingEventHandler

▸ **isBubblingEventHandler**<**E**, **A**, **Map**, **K**>(`handler`: [EventHandler](html.md#eventhandler)‹E, A, Map, K›): *handler is BubblingEventHandler<E, A, Map, K>*

*Defined in [packages/html/source/domain/services/EventHandler.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/EventHandler.ts#L12)*

**Type parameters:**

▪ **E**: *object*

▪ **A**: *[TagName](html.md#tagname)*

▪ **Map**: *object*

▪ **K**: *keyof Map*

**Parameters:**

Name | Type |
------ | ------ |
`handler` | [EventHandler](html.md#eventhandler)‹E, A, Map, K› |

**Returns:** *handler is BubblingEventHandler<E, A, Map, K>*

___

###  isComment

▸ **isComment**(`vNode`: [VNode](html.md#vnode)): *vNode is CommentVNode*

*Defined in [packages/html/source/domain/services/VNode/comment.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/VNode/comment.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`vNode` | [VNode](html.md#vnode) |

**Returns:** *vNode is CommentVNode*

___

###  isCommentNode

▸ **isCommentNode**(`node`: Text | Comment | HTMLElement | SVGElement): *node is Comment*

*Defined in [packages/html/source/infrastructure/elementToVNode.ts:61](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/elementToVNode.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | Text &#124; Comment &#124; HTMLElement &#124; SVGElement |

**Returns:** *node is Comment*

___

### `Const` isEventHandlerWithOptions

▸ **isEventHandlerWithOptions**<**E**, **A**, **Map**, **K**>(`handler`: [EventHandler](html.md#eventhandler)‹E, A, Map, K›): *handler is EventHandlerWithOptions<E, A, Map, K>*

*Defined in [packages/html/source/domain/services/EventHandler.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/EventHandler.ts#L3)*

**Type parameters:**

▪ **E**: *object*

▪ **A**: *[TagName](html.md#tagname)*

▪ **Map**: *object*

▪ **K**: *keyof Map*

**Parameters:**

Name | Type |
------ | ------ |
`handler` | [EventHandler](html.md#eventhandler)‹E, A, Map, K› |

**Returns:** *handler is EventHandlerWithOptions<E, A, Map, K>*

___

###  isHtml

▸ **isHtml**(`vNode`: [VNode](html.md#vnode)): *vNode is HtmlVNode*

*Defined in [packages/html/source/domain/services/VNode/html.ts:32](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/VNode/html.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`vNode` | [VNode](html.md#vnode) |

**Returns:** *vNode is HtmlVNode*

___

###  isSvg

▸ **isSvg**(`vNode`: [VNode](html.md#vnode)): *vNode is SvgVNode*

*Defined in [packages/html/source/domain/services/VNode/svg.ts:32](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/VNode/svg.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`vNode` | [VNode](html.md#vnode) |

**Returns:** *vNode is SvgVNode*

___

###  isSvgElement

▸ **isSvgElement**(`node`: Text | Comment | HTMLElement | SVGElement): *node is SVGElement*

*Defined in [packages/html/source/infrastructure/elementToVNode.ts:65](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/elementToVNode.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | Text &#124; Comment &#124; HTMLElement &#124; SVGElement |

**Returns:** *node is SVGElement*

___

###  isText

▸ **isText**(`vNode`: [VNode](html.md#vnode)): *vNode is TextVNode*

*Defined in [packages/html/source/domain/services/VNode/text.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/VNode/text.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`vNode` | [VNode](html.md#vnode) |

**Returns:** *vNode is TextVNode*

___

###  isTextNode

▸ **isTextNode**(`node`: Text | Comment | HTMLElement | SVGElement): *node is Text*

*Defined in [packages/html/source/infrastructure/elementToVNode.ts:57](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/elementToVNode.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | Text &#124; Comment &#124; HTMLElement &#124; SVGElement |

**Returns:** *node is Text*

___

###  mapKeyToCurrentIndex

▸ **mapKeyToCurrentIndex**(`children`: [VNodeChildren](../interfaces/html.vnodechildren.md), `startIndex`: number, `endIndex`: number): *[Map](../interfaces/objects.mutablemap.md#map)‹any, any›*

*Defined in [packages/html/source/infrastructure/patchElement.ts:182](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/patchElement.ts#L182)*

**Parameters:**

Name | Type |
------ | ------ |
`children` | [VNodeChildren](../interfaces/html.vnodechildren.md) |
`startIndex` | number |
`endIndex` | number |

**Returns:** *[Map](../interfaces/objects.mutablemap.md#map)‹any, any›*

___

###  patchChildren

▸ **patchChildren**<**A**, **B**>(`elementVNode`: A, `vNode`: B): *Generator‹Env‹DomEnv‹unknown› & object, any›, void, any›*

*Defined in [packages/html/source/infrastructure/patchElement.ts:231](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/patchElement.ts#L231)*

**Type parameters:**

▪ **A**: *[ElementTypes](html.md#elementtypes)*

▪ **B**: *[ElementTypes](html.md#elementtypes)*

**Parameters:**

Name | Type |
------ | ------ |
`elementVNode` | A |
`vNode` | B |

**Returns:** *Generator‹Env‹DomEnv‹unknown› & object, any›, void, any›*

___

### `Const` patchElement

▸ **patchElement**<**A**, **B**>(`elementVNode`: A, `vNode`: B): *Generator‹Env‹object, any› | Env‹object & DomEnv‹unknown›, any›, void, any›*

*Defined in [packages/html/source/infrastructure/patchElement.ts:35](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/patchElement.ts#L35)*

**Type parameters:**

▪ **A**: *[VNode](html.md#vnode)*

▪ **B**: *[VNode](html.md#vnode)*

**Parameters:**

Name | Type |
------ | ------ |
`elementVNode` | A |
`vNode` | B |

**Returns:** *Generator‹Env‹object, any› | Env‹object & DomEnv‹unknown›, any›, void, any›*

___

###  patchOnRaf

▸ **patchOnRaf**<**E**, **A**>(`fn`: function, `rootElement`: HTMLElement): *HookEffects‹E & [EnvOf](html.md#envof)‹A› & RafEnv & PatchEnv‹[VNode](html.md#vnode), A› & [PatchFailure](html.md#patchfailure) & HooksManagerEnv, never›*

*Defined in [packages/html/source/infrastructure/patchOnRaf.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/patchOnRaf.ts#L7)*

**Type parameters:**

▪ **E**

▪ **A**: *[VNode](html.md#vnode)*

**Parameters:**

▪ **fn**: *function*

▸ (): *HookEffects‹E, A›*

▪ **rootElement**: *HTMLElement*

**Returns:** *HookEffects‹E & [EnvOf](html.md#envof)‹A› & RafEnv & PatchEnv‹[VNode](html.md#vnode), A› & [PatchFailure](html.md#patchfailure) & HooksManagerEnv, never›*

___

### `Const` removeElements

▸ **removeElements**(`parentNode`: Node, `vNodes`: A): *Generator‹Env‹object, any›, void, any›*

*Defined in [packages/html/source/infrastructure/removeElements.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/removeElements.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`parentNode` | Node |
`vNodes` | A |

**Returns:** *Generator‹Env‹object, any›, void, any›*

___

###  removeReservedProps

▸ **removeReservedProps**<**A**>(`a`: A): *object*

*Defined in [packages/html/source/infrastructure/createElement.ts:84](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/createElement.ts#L84)*

**Type parameters:**

▪ **A**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *object*

___

###  removeReservedProps

▸ **removeReservedProps**<**A**>(`a`: A): *object*

*Defined in [packages/html/source/infrastructure/patchElement.ts:253](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/patchElement.ts#L253)*

**Type parameters:**

▪ **A**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *object*

___

###  replacePreviousElement

▸ **replacePreviousElement**<**A**, **B**>(`elementVNode`: A, `vNode`: B): *Effects‹[PatchFailure](html.md#patchfailure) & [EnvOf](html.md#envof)‹A› & [EnvOf](html.md#envof)‹B›, void›*

*Defined in [packages/html/source/infrastructure/patchElement.ts:66](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/patchElement.ts#L66)*

**Type parameters:**

▪ **A**: *[VNode](html.md#vnode)*

▪ **B**: *[VNode](html.md#vnode)*

**Parameters:**

Name | Type |
------ | ------ |
`elementVNode` | A |
`vNode` | B |

**Returns:** *Effects‹[PatchFailure](html.md#patchfailure) & [EnvOf](html.md#envof)‹A› & [EnvOf](html.md#envof)‹B›, void›*

___

###  svg

▸ **svg**<**E**, **A**, **B**>(`tagName`: A, `props`: [VNodeProps](../interfaces/html.vnodeprops.md)‹E, A› & object | null, `children`: B): *[SvgVNode](../interfaces/html.svgvnode.md)‹E & [CombinedEnvsOf](html.md#combinedenvsof)‹B›, A›*

*Defined in [packages/html/source/domain/services/VNode/svg.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/VNode/svg.ts#L13)*

**Type parameters:**

▪ **E**: *object*

▪ **A**: *[SvgTagName](html.md#svgtagname)*

▪ **B**: *ReadonlyArray‹[VNode](html.md#vnode) | null›*

**Parameters:**

Name | Type |
------ | ------ |
`tagName` | A |
`props` | [VNodeProps](../interfaces/html.vnodeprops.md)‹E, A› & object &#124; null |
`children` | B |

**Returns:** *[SvgVNode](../interfaces/html.svgvnode.md)‹E & [CombinedEnvsOf](html.md#combinedenvsof)‹B›, A›*

___

###  text

▸ **text**(`text`: string, `key?`: [ComparableValues](lambda.md#comparablevalues)): *[TextVNode](../interfaces/html.textvnode.md)*

*Defined in [packages/html/source/domain/services/VNode/text.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/VNode/text.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |
`key?` | [ComparableValues](lambda.md#comparablevalues) |

**Returns:** *[TextVNode](../interfaces/html.textvnode.md)*

___

### `Const` updateAriaAttributes

▸ **updateAriaAttributes**(`vNode`: A, `__namedParameters`: object): *Generator‹Env‹object, any›, A, any›*

*Defined in [packages/html/source/infrastructure/updateAriaAttributes.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/updateAriaAttributes.ts#L8)*

**Parameters:**

▪ **vNode**: *A*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`removed` | ReadonlyArray‹[string, string]› |
`updated` | ReadonlyArray‹[string, string]› |

**Returns:** *Generator‹Env‹object, any›, A, any›*

___

### `Const` updateAttributes

▸ **updateAttributes**(`vNode`: A, `__namedParameters`: object): *Generator‹Env‹object, any›, A, any›*

*Defined in [packages/html/source/infrastructure/updateAttributes.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/updateAttributes.ts#L10)*

**Parameters:**

▪ **vNode**: *A*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`removed` | ReadonlyArray‹[string, undefined &#124; string]› |
`updated` | ReadonlyArray‹[string, undefined &#124; string]› |

**Returns:** *Generator‹Env‹object, any›, A, any›*

___

### `Const` updateChildren

▸ **updateChildren**(`parentElement`: Element, `current`: A, `updated`: B): *Generator‹Env‹DomEnv‹unknown› & object, any›, void, any›*

*Defined in [packages/html/source/infrastructure/patchElement.ts:83](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/patchElement.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`parentElement` | Element |
`current` | A |
`updated` | B |

**Returns:** *Generator‹Env‹DomEnv‹unknown› & object, any›, void, any›*

___

### `Const` updateDataList

▸ **updateDataList**(`vNode`: A, `__namedParameters`: object): *Generator‹Env‹object, any›, A, any›*

*Defined in [packages/html/source/infrastructure/updateDataList.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/updateDataList.ts#L5)*

**Parameters:**

▪ **vNode**: *A*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`removed` | ReadonlyArray‹[string, string]› |
`updated` | ReadonlyArray‹[string, string]› |

**Returns:** *Generator‹Env‹object, any›, A, any›*

___

###  updateElement

▸ **updateElement**<**A**, **B**>(`elementVNode`: A, `vNode`: B): *Generator‹Env‹object & B extends HtmlVNode<E, any, any> ? E : B extends SvgVNode<E, any, any> ? E : unknown & DomEnv<unknown> extends any[] ? any[] & object & B extends HtmlVNode<E, any, any> ? E : B extends SvgVNode<E, any, any> ? E : unknown & DomEnv<unknown> extends any[] ? { [K in keyof (any[] & FailEnv<unique symbol, Error> & VNodeEnv<B> & UnNest<Flatten<ToConsList<ChildrenOf<B>>, {}>, unknown> & DomEnv<...>)]: (any[] & ... 3 more ... & DomEnv<...>)[K] extends [...] ? TT extends any[] ? UnNest<...> : TT : (any[] & ... 3 more ... & DomEnv<...>)[K]; }[number] : unknown : object & B extends HtmlVNode<E, any, any> ? E : B extends SvgVNode<E, any, any> ? E : unknown & DomEnv<unknown>, any›, void, any›*

*Defined in [packages/html/source/infrastructure/patchElement.ts:202](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/patchElement.ts#L202)*

**Type parameters:**

▪ **A**: *[ElementTypes](html.md#elementtypes)*

▪ **B**: *[ElementTypes](html.md#elementtypes)*

**Parameters:**

Name | Type |
------ | ------ |
`elementVNode` | A |
`vNode` | B |

**Returns:** *Generator‹Env‹object & B extends HtmlVNode<E, any, any> ? E : B extends SvgVNode<E, any, any> ? E : unknown & DomEnv<unknown> extends any[] ? any[] & object & B extends HtmlVNode<E, any, any> ? E : B extends SvgVNode<E, any, any> ? E : unknown & DomEnv<unknown> extends any[] ? { [K in keyof (any[] & FailEnv<unique symbol, Error> & VNodeEnv<B> & UnNest<Flatten<ToConsList<ChildrenOf<B>>, {}>, unknown> & DomEnv<...>)]: (any[] & ... 3 more ... & DomEnv<...>)[K] extends [...] ? TT extends any[] ? UnNest<...> : TT : (any[] & ... 3 more ... & DomEnv<...>)[K]; }[number] : unknown : object & B extends HtmlVNode<E, any, any> ? E : B extends SvgVNode<E, any, any> ? E : unknown & DomEnv<unknown>, any›, void, any›*

___

### `Const` updateEventHandlers

▸ **updateEventHandlers**(`vNode`: A, `__namedParameters`: object): *Generator‹Env‹object, any›, A, any›*

*Defined in [packages/html/source/infrastructure/updateEventHandlers.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/updateEventHandlers.ts#L14)*

**Parameters:**

▪ **vNode**: *A*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`removed` | ReadonlyArray‹[keyof EventMapFrom<TagNameOf<A>>, function &#124; [AddEventListenerOptions, function]]› |
`updated` | ReadonlyArray‹[keyof EventMapFrom<TagNameOf<A>>, function &#124; [AddEventListenerOptions, function]]› |

**Returns:** *Generator‹Env‹object, any›, A, any›*

___

### `Const` updateProperties

▸ **updateProperties**(`vNode`: A, `__namedParameters`: object): *Generator‹Env‹object, any›, A, any›*

*Defined in [packages/html/source/infrastructure/updateProperties.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/updateProperties.ts#L9)*

**Parameters:**

▪ **vNode**: *A*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`removed` | ReadonlyArray‹[{ [K in keyof NodeFrom<TagNameOf<A>>]: K extends ExcludedKeys ? never : K extends { [K in keyof NodeFrom<TagNameOf<A>>]: IfEquals<{ [Key in K]: NodeFrom<TagNameOf<A>>[K]; }, { -readonly [Key in K]: NodeFrom<...>[K]; }, K, never>; }[keyof NodeFrom<...>] ? NodeFrom<...>[K] extends Json ? K : never : never; }[keyof Nod..., { [K in keyof PropertiesOf<NodeFrom<TagNameOf<A>>>]: PropertiesOf<NodeFrom<TagNameOf<A>>>[K]; }[{ [K in keyof NodeFrom<...>]: K extends ExcludedKeys ? never : K extends { [K in keyof NodeFrom<...>]: IfEquals<...>; }[keyof NodeFrom<...>] ? NodeFrom<...>[K] extends Json ? K : never : never; }[keyof NodeFrom<...>]]]› |
`updated` | ReadonlyArray‹[{ [K in keyof NodeFrom<TagNameOf<A>>]: K extends ExcludedKeys ? never : K extends { [K in keyof NodeFrom<TagNameOf<A>>]: IfEquals<{ [Key in K]: NodeFrom<TagNameOf<A>>[K]; }, { -readonly [Key in K]: NodeFrom<...>[K]; }, K, never>; }[keyof NodeFrom<...>] ? NodeFrom<...>[K] extends Json ? K : never : never; }[keyof Nod..., { [K in keyof PropertiesOf<NodeFrom<TagNameOf<A>>>]: PropertiesOf<NodeFrom<TagNameOf<A>>>[K]; }[{ [K in keyof NodeFrom<...>]: K extends ExcludedKeys ? never : K extends { [K in keyof NodeFrom<...>]: IfEquals<...>; }[keyof NodeFrom<...>] ? NodeFrom<...>[K] extends Json ? K : never : never; }[keyof NodeFrom<...>]]]› |

**Returns:** *Generator‹Env‹object, any›, A, any›*

___

###  useHookEnvUpdated

▸ **useHookEnvUpdated**(`env`: HookEnvironment, `onUpdated`: function): *ChannelEffects‹HookEnv & [TimerEnv](effects.md#timerenv), Disposable›*

*Defined in [packages/html/source/useHookEnvUpdated.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/useHookEnvUpdated.ts#L14)*

Listen for updated events regarding a particular hook environment.

**Parameters:**

▪ **env**: *HookEnvironment*

▪ **onUpdated**: *function*

▸ (): *Disposable*

**Returns:** *ChannelEffects‹HookEnv & [TimerEnv](effects.md#timerenv), Disposable›*

___

###  useKeyManager

▸ **useKeyManager**<**E**, **A**>(`key`: object, `render`: function): *ChannelEffects‹HookEnv & [TimerEnv](effects.md#timerenv) & PatchEnv‹[VNode](html.md#vnode), A› & E & [EnvOf](html.md#envof)‹A›, A›*

*Defined in [packages/html/source/useKeyManager.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/useKeyManager.ts#L20)*

Used to manage a help manage re-rendering a patchable instance

**Type parameters:**

▪ **E**

▪ **A**: *[VNode](html.md#vnode)*

**Parameters:**

▪ **key**: *object*

▪ **render**: *function*

▸ (): *HookEffects‹E, A›*

**Returns:** *ChannelEffects‹HookEnv & [TimerEnv](effects.md#timerenv) & PatchEnv‹[VNode](html.md#vnode), A› & E & [EnvOf](html.md#envof)‹A›, A›*

___

###  useListManager

▸ **useListManager**<**A**, **B**, **E**>(`list`: ReadonlyArray‹A›, `identify`: [Arity1](lambda.md#arity1)‹A, B›, `computation`: function): *HookEffects‹E & [TimerEnv](effects.md#timerenv) & HooksManagerEnv & PatchEnv‹[VNode](html.md#vnode), [VNode](html.md#vnode)›, ReadonlyArray‹[VNode](html.md#vnode)››*

*Defined in [packages/html/source/useListManager.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/useListManager.ts#L10)*

**Type parameters:**

▪ **A**

▪ **B**: *PropertyKey*

▪ **E**

**Parameters:**

▪ **list**: *ReadonlyArray‹A›*

▪ **identify**: *[Arity1](lambda.md#arity1)‹A, B›*

▪ **computation**: *function*

▸ (`value`: A, `index`: number): *HookEffects‹E, [VNode](html.md#vnode)›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`index` | number |

**Returns:** *HookEffects‹E & [TimerEnv](effects.md#timerenv) & HooksManagerEnv & PatchEnv‹[VNode](html.md#vnode), [VNode](html.md#vnode)›, ReadonlyArray‹[VNode](html.md#vnode)››*

___

###  useMatchManager

▸ **useMatchManager**<**A**, **E**, **B**>(`matchAgainst`: A, `matches`: ReadonlyArray‹Match‹A, function››): *ChannelEffects‹E & [TimerEnv](effects.md#timerenv) & HookEnv & PatchEnv‹[VNode](html.md#vnode), B›, [Maybe](io.md#const-maybe)‹B››*

*Defined in [packages/html/source/useMatchManager.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/useMatchManager.ts#L17)*

**Type parameters:**

▪ **A**

▪ **E**

▪ **B**: *[VNode](html.md#vnode)*

**Parameters:**

Name | Type |
------ | ------ |
`matchAgainst` | A |
`matches` | ReadonlyArray‹Match‹A, function›› |

**Returns:** *ChannelEffects‹E & [TimerEnv](effects.md#timerenv) & HookEnv & PatchEnv‹[VNode](html.md#vnode), B›, [Maybe](io.md#const-maybe)‹B››*

___

###  vNodesAreEqual

▸ **vNodesAreEqual**<**A**, **B**>(`a`: A, `b`: B): *boolean*

*Defined in [packages/html/source/domain/services/VNode/vNodesAreEqual.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/VNode/vNodesAreEqual.ts#L6)*

**Type parameters:**

▪ **A**: *[VNode](html.md#vnode)*

▪ **B**: *[VNode](html.md#vnode)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |

**Returns:** *boolean*

## Object literals

### `Const` NAMESPACE_URIS

### ▪ **NAMESPACE_URIS**: *object*

*Defined in [packages/html/source/infrastructure/updateAttributes.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/updateAttributes.ts#L6)*

###  xlink

• **xlink**: *string* = "http://www.w3.org/1999/xlink"

*Defined in [packages/html/source/infrastructure/updateAttributes.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/infrastructure/updateAttributes.ts#L7)*

___

### `Const` empty

### ▪ **empty**: *object*

*Defined in [packages/html/source/domain/services/diffAttributes.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/diffAttributes.ts#L6)*

###  removed

• **removed**: *any[]* = EMPTY

*Defined in [packages/html/source/domain/services/diffAttributes.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/diffAttributes.ts#L7)*

###  updated

• **updated**: *any[]* = EMPTY

*Defined in [packages/html/source/domain/services/diffAttributes.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/diffAttributes.ts#L8)*

___

### `Const` empty

### ▪ **empty**: *object*

*Defined in [packages/html/source/domain/services/diffRecordMap.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/diffRecordMap.ts#L8)*

###  removed

• **removed**: *any[]* = EMPTY

*Defined in [packages/html/source/domain/services/diffRecordMap.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/diffRecordMap.ts#L9)*

###  updated

• **updated**: *any[]* = EMPTY

*Defined in [packages/html/source/domain/services/diffRecordMap.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/services/diffRecordMap.ts#L10)*
