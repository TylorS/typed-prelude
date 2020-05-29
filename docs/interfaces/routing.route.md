[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [routing](../modules/routing.md) › [Route](routing.route.md)

# Interface: Route <**A, B**>

## Type parameters

▪ **A**

▪ **B**

## Hierarchy

* **Route**

## Index

### Properties

* [createPath](routing.route.md#readonly-createpath)
* [match](routing.route.md#readonly-match)
* [path](routing.route.md#readonly-path)

## Properties

### `Readonly` createPath

• **createPath**: *function*

*Defined in [packages/routing/source/types.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/routing/source/types.ts#L8)*

#### Type declaration:

▸ (`params`: A, `trailingSlash?`: undefined | false | true): *[Maybe](../modules/io.md#const-maybe)‹[Path](../modules/history.md#path)›*

**Parameters:**

Name | Type |
------ | ------ |
`params` | A |
`trailingSlash?` | undefined &#124; false &#124; true |

___

### `Readonly` match

• **match**: *Match‹[Path](../modules/history.md#path), B›*

*Defined in [packages/routing/source/types.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/routing/source/types.ts#L7)*

___

### `Readonly` path

• **path**: *[Path](../modules/history.md#path)*

*Defined in [packages/routing/source/types.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/routing/source/types.ts#L6)*
