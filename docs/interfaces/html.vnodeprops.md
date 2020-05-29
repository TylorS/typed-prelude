[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [html](../modules/html.md) › [VNodeProps](html.vnodeprops.md)

# Interface: VNodeProps <**E, A**>

Meant to be extended by external modules

## Type parameters

▪ **E**: *object*

▪ **A**: *[TagName](../modules/html.md#tagname)*

## Hierarchy

* **VNodeProps**

## Index

### Properties

* [aria](html.vnodeprops.md#optional-readonly-aria)
* [attrs](html.vnodeprops.md#optional-readonly-attrs)
* [data](html.vnodeprops.md#optional-readonly-data)
* [key](html.vnodeprops.md#optional-readonly-key)
* [on](html.vnodeprops.md#optional-readonly-on)
* [ref](html.vnodeprops.md#optional-readonly-ref)

## Properties

### `Optional` `Readonly` aria

• **aria**? : *[StrMap](html.strmap.md)‹string›*

*Defined in [packages/html/source/domain/model/VNode.ts:118](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L118)*

___

### `Optional` `Readonly` attrs

• **attrs**? : *[StrMap](html.strmap.md)‹string | undefined›*

*Defined in [packages/html/source/domain/model/VNode.ts:115](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L115)*

___

### `Optional` `Readonly` data

• **data**? : *[StrMap](html.strmap.md)‹string›*

*Defined in [packages/html/source/domain/model/VNode.ts:121](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L121)*

___

### `Optional` `Readonly` key

• **key**? : *[ComparableValues](../modules/lambda.md#comparablevalues)*

*Defined in [packages/html/source/domain/model/VNode.ts:109](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L109)*

___

### `Optional` `Readonly` on

• **on**? : *[EventsFrom](../modules/html.md#eventsfrom)‹E, A›*

*Defined in [packages/html/source/domain/model/VNode.ts:124](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L124)*

___

### `Optional` `Readonly` ref

• **ref**? : *[Ref](../modules/hooks.md#ref)‹[NodeFrom](../modules/html.md#nodefrom)‹A››*

*Defined in [packages/html/source/domain/model/VNode.ts:112](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/html/source/domain/model/VNode.ts#L112)*
