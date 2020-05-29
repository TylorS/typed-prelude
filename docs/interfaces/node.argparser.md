[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [node](../modules/node.md) › [ArgParser](node.argparser.md)

# Interface: ArgParser <**A, B**>

## Type parameters

▪ **A**: *string*

▪ **B**

## Hierarchy

* **ArgParser**

## Index

### Properties

* [help](node.argparser.md#readonly-help)
* [parse](node.argparser.md#readonly-parse)

## Properties

### `Readonly` help

• **help**: *function*

*Defined in [packages/node/source/arg-parse/types.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/types.ts#L10)*

#### Type declaration:

▸ (): *[PureEffect](../modules/effects.md#pureeffect)‹string›*

___

### `Readonly` parse

• **parse**: *function*

*Defined in [packages/node/source/arg-parse/types.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/node/source/arg-parse/types.ts#L11)*

#### Type declaration:

▸ (): *Effects‹[ArgsEnv](node.argsenv.md), [ArgParserResult](../modules/node.md#argparserresult)‹A, B››*
