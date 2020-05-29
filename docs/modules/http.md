[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [http](http.md)

# Package: http

# @typed/http

> Cross-platform HTTP requests with superpowers.

## Index

### Interfaces

* [HttpEnv](../interfaces/http.httpenv.md)
* [HttpRequest](../interfaces/http.httprequest.md)
* [JsonArray](../interfaces/http.jsonarray.md)
* [JsonObject](../interfaces/http.jsonobject.md)
* [TestHttpEnv](../interfaces/http.testhttpenv.md)

### Type aliases

* [GetOptions](http.md#getoptions)
* [HttpCallbacks](http.md#httpcallbacks)
* [HttpHeaders](http.md#httpheaders)
* [HttpMethod](http.md#httpmethod)
* [HttpOptions](http.md#httpoptions)
* [HttpRequestValue](http.md#httprequestvalue)
* [HttpResponse](http.md#httpresponse)
* [Json](http.md#json)
* [JsonPrimitive](http.md#jsonprimitive)
* [Timestamp](http.md#timestamp)
* [Timestamped](http.md#timestamped)
* [WithHttpManagementOptions](http.md#withhttpmanagementoptions)

### Variables

* [DEFAULT_EXPIRATION](http.md#const-default_expiration)
* [DEFAULT_METHODS_TO_CACHE](http.md#const-default_methods_to_cache)
* [IS_HTTPS](http.md#const-is_https)
* [MINUTE](http.md#const-minute)
* [SECOND](http.md#const-second)
* [addAuthorizationHeader](http.md#const-addauthorizationheader)
* [addHeader](http.md#const-addheader)
* [headerSeparator](http.md#const-headerseparator)
* [newLineRegex](http.md#const-newlineregex)
* [withHttpManagement](http.md#const-withhttpmanagement)

### Functions

* [__withHttpManagement](http.md#__withhttpmanagement)
* [createFailedResponse](http.md#createfailedresponse)
* [createFetchHttpEnv](http.md#createfetchhttpenv)
* [createHttpEnv](http.md#createhttpenv)
* [createHttpResponse](http.md#createhttpresponse)
* [createJsonResponse](http.md#createjsonresponse)
* [createServerHttpEnv](http.md#createserverhttpenv)
* [createSuccessfulResponse](http.md#createsuccessfulresponse)
* [createTestHttpEnv](http.md#createtesthttpenv)
* [defaultCacheKey](http.md#defaultcachekey)
* [get](http.md#const-get)
* [handleSuccess](http.md#handlesuccess)
* [http](http.md#http)
* [http](http.md#http)
* [http](http.md#http)
* [isValidStatus](http.md#isvalidstatus)
* [nodeHttpRequest](http.md#nodehttprequest)
* [toJson](http.md#tojson)

## Type aliases

###  GetOptions

Ƭ **GetOptions**: *Readonly‹Partial‹[MergeObjects](objects.md#mergeobjects)‹[DropKeys](common.md#dropkeys)‹[HttpOptions](http.md#httpoptions), "body"›, object›››*

*Defined in [packages/http/source/get.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/get.ts#L6)*

___

###  HttpCallbacks

Ƭ **HttpCallbacks**: *object*

*Defined in [packages/http/source/types.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/types.ts#L26)*

#### Type declaration:

* **failure**(): *function*

  * (`error`: [Error](../classes/effects.killerror.md#static-error)): *Disposable*

* **success**(): *function*

  * (`response`: [HttpResponse](http.md#httpresponse)): *Disposable*

___

###  HttpHeaders

Ƭ **HttpHeaders**: *Readonly‹[Record](io.md#const-record)‹string, string | undefined››*

*Defined in [packages/http/source/types.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/types.ts#L6)*

___

###  HttpMethod

Ƭ **HttpMethod**: *"GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "PATCH" | "HEAD"*

*Defined in [packages/http/source/types.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/types.ts#L5)*

___

###  HttpOptions

Ƭ **HttpOptions**: *object*

*Defined in [packages/http/source/types.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/types.ts#L8)*

#### Type declaration:

* **body**? : *undefined | string*

* **headers**? : *[HttpHeaders](http.md#httpheaders)*

* **method**? : *[HttpMethod](http.md#httpmethod)*

* **type**? : *"always-fetch" | "prefer-last" | "prefer-current"*

___

###  HttpRequestValue

Ƭ **HttpRequestValue**: *A extends HttpRequest<infer R> ? R : never*

*Defined in [packages/http/source/types.ts:39](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/types.ts#L39)*

___

###  HttpResponse

Ƭ **HttpResponse**: *object*

*Defined in [packages/http/source/types.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/types.ts#L16)*

#### Type declaration:

* **headers**: *[HttpHeaders](http.md#httpheaders)*

* **responseText**: *string*

* **status**: *number*

* **statusText**: *string*

___

###  Json

Ƭ **Json**: *[JsonPrimitive](http.md#jsonprimitive) | [JsonArray](../interfaces/http.jsonarray.md) | [JsonObject](../interfaces/http.jsonobject.md)*

*Defined in [packages/http/source/Json.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/Json.ts#L1)*

___

###  JsonPrimitive

Ƭ **JsonPrimitive**: *string | number | boolean | null*

*Defined in [packages/http/source/Json.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/Json.ts#L3)*

___

###  Timestamp

Ƭ **Timestamp**: *ReturnType‹Clock["currentTime"]›*

*Defined in [packages/http/source/withHttpManagement.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/withHttpManagement.ts#L20)*

___

###  Timestamped

Ƭ **Timestamped**: *object*

*Defined in [packages/http/source/withHttpManagement.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/withHttpManagement.ts#L21)*

#### Type declaration:

* **response**: *[HttpResponse](http.md#httpresponse)*

* **timestamp**: *[Timestamp](http.md#timestamp)*

___

###  WithHttpManagementOptions

Ƭ **WithHttpManagementOptions**: *object*

*Defined in [packages/http/source/withHttpManagement.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/withHttpManagement.ts#L7)*

#### Type declaration:

* **expiration**? : *undefined | number*

* **getCacheKey**? : *undefined | function*

* **methodsToCache**? : *[HttpMethod](http.md#httpmethod)[]*

* **timer**: *Timer*

## Variables

### `Const` DEFAULT_EXPIRATION

• **DEFAULT_EXPIRATION**: *number* = 5 * MINUTE

*Defined in [packages/http/source/withHttpManagement.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/withHttpManagement.ts#L17)*

___

### `Const` DEFAULT_METHODS_TO_CACHE

• **DEFAULT_METHODS_TO_CACHE**: *[HttpMethod](http.md#httpmethod)[]* = ['GET', 'HEAD', 'OPTIONS']

*Defined in [packages/http/source/withHttpManagement.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/withHttpManagement.ts#L18)*

___

### `Const` IS_HTTPS

• **IS_HTTPS**: *RegExp‹›* = /https/

*Defined in [packages/http/source/createServerHttpEnv.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/createServerHttpEnv.ts#L7)*

___

### `Const` MINUTE

• **MINUTE**: *number* = 60 * SECOND

*Defined in [packages/http/source/withHttpManagement.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/withHttpManagement.ts#L16)*

___

### `Const` SECOND

• **SECOND**: *1000* = 1000

*Defined in [packages/http/source/withHttpManagement.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/withHttpManagement.ts#L15)*

___

### `Const` addAuthorizationHeader

• **addAuthorizationHeader**: *Curry2‹string, [HttpEnv](../interfaces/http.httpenv.md), [HttpEnv](../interfaces/http.httpenv.md)›* = addHeader('Authorization')

*Defined in [packages/http/source/addHeader.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/addHeader.ts#L13)*

___

### `Const` addHeader

• **addHeader**: *Curry3‹string, string, [HttpEnv](../interfaces/http.httpenv.md), [HttpEnv](../interfaces/http.httpenv.md)›* = curry(
  (name: string, value: string, { http }: HttpEnv): HttpEnv => {
    return {
      http: (url, options, callbacks) =>
        http(url, { ...options, headers: { ...options.headers, [name]: value } }, callbacks),
    }
  },
)

*Defined in [packages/http/source/addHeader.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/addHeader.ts#L4)*

___

### `Const` headerSeparator

• **headerSeparator**: *": "* = ": "

*Defined in [packages/http/source/createHttpEnv.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/createHttpEnv.ts#L5)*

___

### `Const` newLineRegex

• **newLineRegex**: *RegExp‹›* = /[\r\n]+/

*Defined in [packages/http/source/createHttpEnv.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/createHttpEnv.ts#L6)*

___

### `Const` withHttpManagement

• **withHttpManagement**: *function* = curry(__withHttpManagement)

*Defined in [packages/http/source/withHttpManagement.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/withHttpManagement.ts#L23)*

#### Type declaration:

▸ (`options`: [WithHttpManagementOptions](http.md#withhttpmanagementoptions), `env`: [HttpEnv](../interfaces/http.httpenv.md)): *[HttpEnv](../interfaces/http.httpenv.md)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [WithHttpManagementOptions](http.md#withhttpmanagementoptions) |
`env` | [HttpEnv](../interfaces/http.httpenv.md) |

▸ (`options`: [WithHttpManagementOptions](http.md#withhttpmanagementoptions)): *function*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [WithHttpManagementOptions](http.md#withhttpmanagementoptions) |

▸ (`env`: [HttpEnv](../interfaces/http.httpenv.md)): *[HttpEnv](../interfaces/http.httpenv.md)*

**Parameters:**

Name | Type |
------ | ------ |
`env` | [HttpEnv](../interfaces/http.httpenv.md) |

## Functions

###  __withHttpManagement

▸ **__withHttpManagement**(`options`: [WithHttpManagementOptions](http.md#withhttpmanagementoptions), `env`: [HttpEnv](../interfaces/http.httpenv.md)): *[HttpEnv](../interfaces/http.httpenv.md)*

*Defined in [packages/http/source/withHttpManagement.ts:28](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/withHttpManagement.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [WithHttpManagementOptions](http.md#withhttpmanagementoptions) |
`env` | [HttpEnv](../interfaces/http.httpenv.md) |

**Returns:** *[HttpEnv](../interfaces/http.httpenv.md)*

___

###  createFailedResponse

▸ **createFailedResponse**(`error`: [Error](../classes/effects.killerror.md#static-error)): *Left‹[Error](../classes/effects.killerror.md#static-error)›*

*Defined in [packages/http/source/createTestHttpEnv.ts:60](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/createTestHttpEnv.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [Error](../classes/effects.killerror.md#static-error) |

**Returns:** *Left‹[Error](../classes/effects.killerror.md#static-error)›*

___

###  createFetchHttpEnv

▸ **createFetchHttpEnv**(`options?`: [WithHttpManagementOptions](http.md#withhttpmanagementoptions)): *[HttpEnv](../interfaces/http.httpenv.md)*

*Defined in [packages/http/source/createFetchHttpEnv.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/createFetchHttpEnv.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [WithHttpManagementOptions](http.md#withhttpmanagementoptions) |

**Returns:** *[HttpEnv](../interfaces/http.httpenv.md)*

___

###  createHttpEnv

▸ **createHttpEnv**(`options?`: [WithHttpManagementOptions](http.md#withhttpmanagementoptions)): *[HttpEnv](../interfaces/http.httpenv.md)*

*Defined in [packages/http/source/createHttpEnv.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/createHttpEnv.ts#L11)*

Creates an Http Environment that works in browser and node.

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [WithHttpManagementOptions](http.md#withhttpmanagementoptions) |

**Returns:** *[HttpEnv](../interfaces/http.httpenv.md)*

___

###  createHttpResponse

▸ **createHttpResponse**<**A**>(`options`: Partial‹[HttpResponse](http.md#httpresponse)‹A››): *[HttpResponse](http.md#httpresponse)‹A›*

*Defined in [packages/http/source/createTestHttpEnv.ts:64](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/createTestHttpEnv.ts#L64)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | Partial‹[HttpResponse](http.md#httpresponse)‹A›› | {} |

**Returns:** *[HttpResponse](http.md#httpresponse)‹A›*

___

###  createJsonResponse

▸ **createJsonResponse**<**A**>(`jsonReadyValue`: A, `options`: Partial‹[HttpResponse](http.md#httpresponse)‹A››): *[HttpResponse](http.md#httpresponse)‹A›*

*Defined in [packages/http/source/createTestHttpEnv.ts:76](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/createTestHttpEnv.ts#L76)*

**Type parameters:**

▪ **A**: *[Json](http.md#json)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`jsonReadyValue` | A | - |
`options` | Partial‹[HttpResponse](http.md#httpresponse)‹A›› | {} |

**Returns:** *[HttpResponse](http.md#httpresponse)‹A›*

___

###  createServerHttpEnv

▸ **createServerHttpEnv**(`options?`: [WithHttpManagementOptions](http.md#withhttpmanagementoptions)): *[HttpEnv](../interfaces/http.httpenv.md)*

*Defined in [packages/http/source/createServerHttpEnv.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/createServerHttpEnv.ts#L12)*

Creates an Http Environment that works in browser and node.

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [WithHttpManagementOptions](http.md#withhttpmanagementoptions) |

**Returns:** *[HttpEnv](../interfaces/http.httpenv.md)*

___

###  createSuccessfulResponse

▸ **createSuccessfulResponse**<**A**>(`options`: Partial‹[HttpResponse](http.md#httpresponse)‹A››): *Right‹object›*

*Defined in [packages/http/source/createTestHttpEnv.ts:56](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/createTestHttpEnv.ts#L56)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | Partial‹[HttpResponse](http.md#httpresponse)‹A›› | {} |

**Returns:** *Right‹object›*

___

###  createTestHttpEnv

▸ **createTestHttpEnv**(`testHttp`: function): *[TestHttpEnv](../interfaces/http.testhttpenv.md)*

*Defined in [packages/http/source/createTestHttpEnv.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/createTestHttpEnv.ts#L12)*

Create a test-friendly http environment

**Parameters:**

▪ **testHttp**: *function*

:: (url -> HttpOptions -> Either Error HttpResponse)

▸ (`url`: string, `options`: [HttpOptions](http.md#httpoptions)): *[Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), [HttpResponse](http.md#httpresponse)› | PromiseLike‹[Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), [HttpResponse](http.md#httpresponse)››*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`options` | [HttpOptions](http.md#httpoptions) |

**Returns:** *[TestHttpEnv](../interfaces/http.testhttpenv.md)*

___

###  defaultCacheKey

▸ **defaultCacheKey**(`url`: string, `_`: [HttpOptions](http.md#httpoptions)): *string*

*Defined in [packages/http/source/withHttpManagement.ts:104](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/withHttpManagement.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`_` | [HttpOptions](http.md#httpoptions) |

**Returns:** *string*

___

### `Const` get

▸ **get**<**A**>(`url`: string, `options`: [GetOptions](http.md#getoptions)): *[HttpRequest](../interfaces/http.httprequest.md)‹A›*

*Defined in [packages/http/source/get.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/get.ts#L21)*

Create Get Requests

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`url` | string | - | :: string |
`options` | [GetOptions](http.md#getoptions) | {} | :: GetOptions |

**Returns:** *[HttpRequest](../interfaces/http.httprequest.md)‹A›*

:: Request<A>

___

###  handleSuccess

▸ **handleSuccess**<**A**>(`response`: [HttpResponse](http.md#httpresponse)‹A›): *Left‹[Error](../classes/effects.killerror.md#static-error)› | Right‹object›*

*Defined in [packages/http/source/http.ts:29](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/http.ts#L29)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`response` | [HttpResponse](http.md#httpresponse)‹A› |

**Returns:** *Left‹[Error](../classes/effects.killerror.md#static-error)› | Right‹object›*

___

###  http

▸ **http**(`url`: string, `options`: [HttpOptions](http.md#httpoptions), `callbacks`: [HttpCallbacks](http.md#httpcallbacks)): *Disposable*

*Defined in [packages/http/source/createFetchHttpEnv.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/createFetchHttpEnv.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`options` | [HttpOptions](http.md#httpoptions) |
`callbacks` | [HttpCallbacks](http.md#httpcallbacks) |

**Returns:** *Disposable*

___

###  http

▸ **http**(`url`: string, `options`: [HttpOptions](http.md#httpoptions), `callbacks`: [HttpCallbacks](http.md#httpcallbacks)): *Disposable*

*Defined in [packages/http/source/createHttpEnv.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/createHttpEnv.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`options` | [HttpOptions](http.md#httpoptions) |
`callbacks` | [HttpCallbacks](http.md#httpcallbacks) |

**Returns:** *Disposable*

___

###  http

▸ **http**<**A**>(`url`: string, `options`: [HttpOptions](http.md#httpoptions)): *[HttpRequest](../interfaces/http.httprequest.md)‹A›*

*Defined in [packages/http/source/http.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/http.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`url` | string | - |
`options` | [HttpOptions](http.md#httpoptions) | {} |

**Returns:** *[HttpRequest](../interfaces/http.httprequest.md)‹A›*

___

###  isValidStatus

▸ **isValidStatus**(`__namedParameters`: object): *boolean*

*Defined in [packages/http/source/isValidStatus.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/isValidStatus.ts#L3)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`status` | number |

**Returns:** *boolean*

___

###  nodeHttpRequest

▸ **nodeHttpRequest**(`url`: string, `options`: [HttpOptions](http.md#httpoptions), `callbacks`: [HttpCallbacks](http.md#httpcallbacks)): *Disposable*

*Defined in [packages/http/source/createServerHttpEnv.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/createServerHttpEnv.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`options` | [HttpOptions](http.md#httpoptions) |
`callbacks` | [HttpCallbacks](http.md#httpcallbacks) |

**Returns:** *Disposable*

___

###  toJson

▸ **toJson**<**A**>(`response`: [Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), [HttpResponse](http.md#httpresponse)‹A››): *[Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), A›*

*Defined in [packages/http/source/toJson.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/http/source/toJson.ts#L4)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`response` | [Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), [HttpResponse](http.md#httpresponse)‹A›› |

**Returns:** *[Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), A›*
