[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [http](../modules/http.md) › [HttpRequest](http.httprequest.md)

# Interface: HttpRequest <**A**>

## Type parameters

▪ **A**

## Hierarchy

* Effects‹[HttpEnv](http.httpenv.md), [Either](../modules/either.md#either)‹[Error](../classes/effects.killerror.md#static-error), [HttpResponse](../modules/http.md#httpresponse)‹A›››

  ↳ **HttpRequest**

## Index

### Methods

* [[Symbol.iterator]](http.httprequest.md#[symbol.iterator])
* [next](http.httprequest.md#next)
* [return](http.httprequest.md#return)
* [throw](http.httprequest.md#throw)

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Generator‹Env‹[HttpEnv](http.httpenv.md), any›, [Either](../modules/either.md#either)‹[Error](../classes/effects.killerror.md#static-error), [HttpResponse](../modules/http.md#httpresponse)‹A››, any›*

*Inherited from [Effects](effects.effects-1.md).[[Symbol.iterator]](effects.effects-1.md#[symbol.iterator])*

Defined in node_modules/typescript/lib/lib.es2015.generator.d.ts:28

**Returns:** *Generator‹Env‹[HttpEnv](http.httpenv.md), any›, [Either](../modules/either.md#either)‹[Error](../classes/effects.killerror.md#static-error), [HttpResponse](../modules/http.md#httpresponse)‹A››, any›*

___

###  next

▸ **next**(...`args`: [] | [any]): *IteratorResult‹Env‹[HttpEnv](http.httpenv.md), any›, [Either](../modules/either.md#either)‹[Error](../classes/effects.killerror.md#static-error), [HttpResponse](../modules/http.md#httpresponse)‹A›››*

*Inherited from [Effects](effects.effects-1.md).[next](effects.effects-1.md#next)*

*Overrides void*

Defined in node_modules/typescript/lib/lib.es2015.generator.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [] &#124; [any] |

**Returns:** *IteratorResult‹Env‹[HttpEnv](http.httpenv.md), any›, [Either](../modules/either.md#either)‹[Error](../classes/effects.killerror.md#static-error), [HttpResponse](../modules/http.md#httpresponse)‹A›››*

___

###  return

▸ **return**(`value`: [Either](../modules/either.md#either)‹[Error](../classes/effects.killerror.md#static-error), [HttpResponse](../modules/http.md#httpresponse)‹A››): *IteratorResult‹Env‹[HttpEnv](http.httpenv.md), any›, [Either](../modules/either.md#either)‹[Error](../classes/effects.killerror.md#static-error), [HttpResponse](../modules/http.md#httpresponse)‹A›››*

*Inherited from [Effects](effects.effects-1.md).[return](effects.effects-1.md#return)*

*Overrides void*

Defined in node_modules/typescript/lib/lib.es2015.generator.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Either](../modules/either.md#either)‹[Error](../classes/effects.killerror.md#static-error), [HttpResponse](../modules/http.md#httpresponse)‹A›› |

**Returns:** *IteratorResult‹Env‹[HttpEnv](http.httpenv.md), any›, [Either](../modules/either.md#either)‹[Error](../classes/effects.killerror.md#static-error), [HttpResponse](../modules/http.md#httpresponse)‹A›››*

___

###  throw

▸ **throw**(`e`: any): *IteratorResult‹Env‹[HttpEnv](http.httpenv.md), any›, [Either](../modules/either.md#either)‹[Error](../classes/effects.killerror.md#static-error), [HttpResponse](../modules/http.md#httpresponse)‹A›››*

*Inherited from [Effects](effects.effects-1.md).[throw](effects.effects-1.md#throw)*

*Overrides void*

Defined in node_modules/typescript/lib/lib.es2015.generator.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

**Returns:** *IteratorResult‹Env‹[HttpEnv](http.httpenv.md), any›, [Either](../modules/either.md#either)‹[Error](../classes/effects.killerror.md#static-error), [HttpResponse](../modules/http.md#httpresponse)‹A›››*
