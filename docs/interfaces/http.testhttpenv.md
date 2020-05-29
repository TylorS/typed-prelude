[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [http](../modules/http.md) › [TestHttpEnv](http.testhttpenv.md)

# Interface: TestHttpEnv

## Hierarchy

* [HttpEnv](http.httpenv.md)

  ↳ **TestHttpEnv**

## Index

### Properties

* [getResponses](http.testhttpenv.md#readonly-getresponses)
* [http](http.testhttpenv.md#readonly-http)

## Properties

### `Readonly` getResponses

• **getResponses**: *function*

*Defined in [packages/http/source/types.ts:36](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/types.ts#L36)*

#### Type declaration:

▸ (): *ReadonlyArray‹[Either](../modules/either.md#either)‹[Error](../classes/effects.killerror.md#static-error), [HttpResponse](../modules/http.md#httpresponse)››*

___

### `Readonly` http

• **http**: *function*

*Inherited from [HttpEnv](http.httpenv.md).[http](http.httpenv.md#readonly-http)*

*Defined in [packages/http/source/types.ts:32](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/types.ts#L32)*

#### Type declaration:

▸ (`url`: string, `options`: [HttpOptions](../modules/http.md#httpoptions), `callbacks`: [HttpCallbacks](../modules/http.md#httpcallbacks)): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`options` | [HttpOptions](../modules/http.md#httpoptions) |
`callbacks` | [HttpCallbacks](../modules/http.md#httpcallbacks) |
