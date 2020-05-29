[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [jwt](jwt.md)

# Package: jwt

# @typed/jwt

An JWT implementation that uses public-key cryptography for signing/verifying, using @typed/effects.

## Index

### Type aliases

* [Jwt](jwt.md#jwt)
* [VerificationOptions](jwt.md#verificationoptions)

### Variables

* [KEYS](jwt.md#const-keys)
* [NODE_BASE64_ENCODING](jwt.md#const-node_base64_encoding)
* [NODE_MESSAGE_ENCODING](jwt.md#const-node_message_encoding)
* [REPLACE_TOKENS](jwt.md#const-replace_tokens)
* [REPLACE_TOKENS](jwt.md#const-replace_tokens)
* [base64UrlDecode](jwt.md#const-base64urldecode)
* [base64UrlEncode](jwt.md#const-base64urlencode)
* [expirationKey](jwt.md#const-expirationkey)
* [header](jwt.md#const-header)
* [isJwt](jwt.md#const-isjwt)
* [notBeforeKey](jwt.md#const-notbeforekey)
* [regex](jwt.md#const-regex)

### Functions

* [base64Decode](jwt.md#base64decode)
* [base64Encode](jwt.md#base64encode)
* [createClaims](jwt.md#createclaims)
* [decode](jwt.md#decode)
* [encode](jwt.md#encode)
* [encodeJson](jwt.md#encodejson)
* [encodeTokens](jwt.md#encodetokens)
* [getClaims](jwt.md#getclaims)
* [getExpiration](jwt.md#getexpiration)
* [getHeader](jwt.md#getheader)
* [getNotBefore](jwt.md#getnotbefore)
* [getSignature](jwt.md#getsignature)
* [getToken](jwt.md#gettoken)
* [isActive](jwt.md#isactive)
* [isExpired](jwt.md#isexpired)
* [padString](jwt.md#padstring)
* [replaceTokens](jwt.md#replacetokens)
* [sign](jwt.md#sign)
* [splitToken](jwt.md#splittoken)
* [utf8Decode](jwt.md#utf8decode)
* [utf8Encode](jwt.md#utf8encode)
* [verify](jwt.md#verify)

## Type aliases

###  Jwt

Ƭ **Jwt**: *[NewType](new_type.md#newtype)‹string, "Jwt"›*

*Defined in [packages/jwt/source/Jwt.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/Jwt.ts#L5)*

___

###  VerificationOptions

Ƭ **VerificationOptions**: *object*

*Defined in [packages/jwt/source/verify.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/verify.ts#L8)*

#### Type declaration:

* **audience**? : *undefined | string*

* **issuer**? : *undefined | string*

* **subject**? : *undefined | string*

## Variables

### `Const` KEYS

• **KEYS**: *"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="* = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="

*Defined in [packages/jwt/source/browser-base64.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/browser-base64.ts#L1)*

___

### `Const` NODE_BASE64_ENCODING

• **NODE_BASE64_ENCODING**: *"base64"* = "base64"

*Defined in [packages/jwt/source/base64.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/base64.ts#L5)*

___

### `Const` NODE_MESSAGE_ENCODING

• **NODE_MESSAGE_ENCODING**: *"utf8"* = "utf8"

*Defined in [packages/jwt/source/base64.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/base64.ts#L4)*

___

### `Const` REPLACE_TOKENS

• **REPLACE_TOKENS**: *[RegExp‹›, "+"] | [RegExp‹›, "/"][]* = [[/\-/g, '+'] as const, [/_/g, '/'] as const]

*Defined in [packages/jwt/source/base64UrlDecode.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/base64UrlDecode.ts#L10)*

___

### `Const` REPLACE_TOKENS

• **REPLACE_TOKENS**: *[RegExp‹›, ""] | [RegExp‹›, "-"] | [RegExp‹›, "_"][]* = [[/=+$/, ''] as const, [/\+/g, '-'] as const, [/\//g, '_'] as const]

*Defined in [packages/jwt/source/base64UrlEncode.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/base64UrlEncode.ts#L6)*

___

### `Const` base64UrlDecode

• **base64UrlDecode**: *function* = pipe(
  replaceTokens,
  padString,
  base64Decode,
)

*Defined in [packages/jwt/source/base64UrlDecode.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/base64UrlDecode.ts#L4)*

#### Type declaration:

▸ (`encoded`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`encoded` | string |

___

### `Const` base64UrlEncode

• **base64UrlEncode**: *function* = pipe(base64Encode, encodeTokens)

*Defined in [packages/jwt/source/base64UrlEncode.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/base64UrlEncode.ts#L4)*

#### Type declaration:

▸ (`str`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

___

### `Const` expirationKey

• **expirationKey**: *string* = "exp"

*Defined in [packages/jwt/source/getExpiration.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/getExpiration.ts#L4)*

___

### `Const` header

• **header**: *string* = encodeJson({
  alg: ECDSA_PARAMS.name,
  typ: 'JWT',
})

*Defined in [packages/jwt/source/sign.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/sign.ts#L14)*

___

### `Const` isJwt

• **isJwt**: *function* = isNewType((s: string): s is Jwt => regex.test(s))

*Defined in [packages/jwt/source/Jwt.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/Jwt.ts#L7)*

#### Type declaration:

▸ (`value`: A): *value is B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

___

### `Const` notBeforeKey

• **notBeforeKey**: *"nbf"* = "nbf"

*Defined in [packages/jwt/source/getNotBefore.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/getNotBefore.ts#L4)*

___

### `Const` regex

• **regex**: *RegExp‹›* = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/

*Defined in [packages/jwt/source/Jwt.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/Jwt.ts#L3)*

## Functions

###  base64Decode

▸ **base64Decode**(`message`: string): *string*

*Defined in [packages/jwt/source/base64.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/base64.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *string*

___

###  base64Encode

▸ **base64Encode**(`message`: string): *string*

*Defined in [packages/jwt/source/base64.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/base64.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *string*

___

###  createClaims

▸ **createClaims**<**A**>(`claims`: A, `expirationMs`: number): *Readonly‹A & object›*

*Defined in [packages/jwt/source/createClaims.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/createClaims.ts#L3)*

**Type parameters:**

▪ **A**: *JsonObject*

**Parameters:**

Name | Type |
------ | ------ |
`claims` | A |
`expirationMs` | number |

**Returns:** *Readonly‹A & object›*

___

###  decode

▸ **decode**(`input`: string): *string*

*Defined in [packages/jwt/source/browser-base64.ts:33](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/browser-base64.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *string*

___

###  encode

▸ **encode**(`input`: string): *string*

*Defined in [packages/jwt/source/browser-base64.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/browser-base64.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *string*

___

###  encodeJson

▸ **encodeJson**(`x`: JsonObject): *string*

*Defined in [packages/jwt/source/sign.ts:33](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/sign.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | JsonObject |

**Returns:** *string*

___

###  encodeTokens

▸ **encodeTokens**(`message`: string): *string*

*Defined in [packages/jwt/source/base64UrlEncode.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/base64UrlEncode.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *string*

___

###  getClaims

▸ **getClaims**<**A**>(`jwt`: [Jwt](jwt.md#jwt)): *A*

*Defined in [packages/jwt/source/getClaims.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/getClaims.ts#L6)*

**Type parameters:**

▪ **A**: *JsonObject*

**Parameters:**

Name | Type |
------ | ------ |
`jwt` | [Jwt](jwt.md#jwt) |

**Returns:** *A*

___

###  getExpiration

▸ **getExpiration**(`jwt`: [Jwt](jwt.md#jwt)): *Date*

*Defined in [packages/jwt/source/getExpiration.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/getExpiration.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`jwt` | [Jwt](jwt.md#jwt) |

**Returns:** *Date*

___

###  getHeader

▸ **getHeader**(`jwt`: [Jwt](jwt.md#jwt)): *JsonObject*

*Defined in [packages/jwt/source/getHeader.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/getHeader.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`jwt` | [Jwt](jwt.md#jwt) |

**Returns:** *JsonObject*

___

###  getNotBefore

▸ **getNotBefore**(`jwt`: [Jwt](jwt.md#jwt)): *Date*

*Defined in [packages/jwt/source/getNotBefore.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/getNotBefore.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`jwt` | [Jwt](jwt.md#jwt) |

**Returns:** *Date*

___

###  getSignature

▸ **getSignature**(`jwt`: [Jwt](jwt.md#jwt)): *string*

*Defined in [packages/jwt/source/getSignature.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/getSignature.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`jwt` | [Jwt](jwt.md#jwt) |

**Returns:** *string*

___

###  getToken

▸ **getToken**(`jwt`: [Jwt](jwt.md#jwt)): *string*

*Defined in [packages/jwt/source/getToken.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/getToken.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`jwt` | [Jwt](jwt.md#jwt) |

**Returns:** *string*

___

###  isActive

▸ **isActive**(`jwt`: [Jwt](jwt.md#jwt)): *boolean*

*Defined in [packages/jwt/source/isActive.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/isActive.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`jwt` | [Jwt](jwt.md#jwt) |

**Returns:** *boolean*

___

###  isExpired

▸ **isExpired**(`jwt`: [Jwt](jwt.md#jwt)): *boolean*

*Defined in [packages/jwt/source/isExpired.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/isExpired.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`jwt` | [Jwt](jwt.md#jwt) |

**Returns:** *boolean*

___

###  padString

▸ **padString**(`input`: string): *string*

*Defined in [packages/jwt/source/base64UrlDecode.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/base64UrlDecode.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *string*

___

###  replaceTokens

▸ **replaceTokens**(`message`: string): *string*

*Defined in [packages/jwt/source/base64UrlDecode.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/base64UrlDecode.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *string*

___

###  sign

▸ **sign**(`claims`: JsonObject, `privateKey`: CryptoKey): *Effects‹CryptoEnv & CryptoFailure, [Jwt](jwt.md#jwt)›*

*Defined in [packages/jwt/source/sign.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/sign.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`claims` | JsonObject |
`privateKey` | CryptoKey |

**Returns:** *Effects‹CryptoEnv & CryptoFailure, [Jwt](jwt.md#jwt)›*

___

###  splitToken

▸ **splitToken**(`jwt`: [Jwt](jwt.md#jwt)): *keyof [string, string, string]*

*Defined in [packages/jwt/source/splitToken.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/splitToken.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`jwt` | [Jwt](jwt.md#jwt) |

**Returns:** *keyof [string, string, string]*

___

###  utf8Decode

▸ **utf8Decode**(`utfText`: string): *string*

*Defined in [packages/jwt/source/browser-base64.ts:91](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/browser-base64.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`utfText` | string |

**Returns:** *string*

___

###  utf8Encode

▸ **utf8Encode**(`input`: string): *string*

*Defined in [packages/jwt/source/browser-base64.ts:68](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/browser-base64.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *string*

___

###  verify

▸ **verify**(`jwt`: [Jwt](jwt.md#jwt), `publicKey`: CryptoKey, `options`: [VerificationOptions](jwt.md#verificationoptions)): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, boolean›*

*Defined in [packages/jwt/source/verify.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/jwt/source/verify.ts#L14)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`jwt` | [Jwt](jwt.md#jwt) | - |
`publicKey` | CryptoKey | - |
`options` | [VerificationOptions](jwt.md#verificationoptions) | {} |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, boolean›*
