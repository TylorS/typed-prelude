[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [streams](../modules/streams.md) › [StreamChannel](streams.streamchannel.md)

# Interface: StreamChannel <**E, A, B**>

A convenient way to communicate between components. I'll be using them for domain and application events.

## Type parameters

▪ **E**

▪ **A**

▪ **B**

## Hierarchy

* Channel‹E, keyof [Sink<A>, Stream<B>]›

  ↳ **StreamChannel**

## Index

### Properties

* [defaultValue](streams.streamchannel.md#readonly-defaultvalue)

## Properties

### `Readonly` defaultValue

• **defaultValue**: *function*

*Inherited from [StreamChannel](streams.streamchannel.md).[defaultValue](streams.streamchannel.md#readonly-defaultvalue)*

Defined in packages/hooks/esm/Channel.d.ts:3

#### Type declaration:

▸ (): *Effects‹E, keyof [Sink<A>, Stream<B>]›*
