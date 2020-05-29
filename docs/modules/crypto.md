[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [crypto](crypto.md)

# Package: crypto

# @typed/crypto

A handful of cryptographic use-cases built upon [`@typed/effects`](./effects/).

## Index

### Interfaces

* [AesEncryptedKeys](../interfaces/crypto.aesencryptedkeys.md)
* [AesKeyStorage](../interfaces/crypto.aeskeystorage.md)
* [CryptoEnv](../interfaces/crypto.cryptoenv.md)
* [CryptoFailure](../interfaces/crypto.cryptofailure.md)
* [DeriveAesKeyOptions](../interfaces/crypto.deriveaeskeyoptions.md)
* [EncryptedKeyPair](../interfaces/crypto.encryptedkeypair.md)

### Type aliases

* [AesEncryptedData](crypto.md#aesencrypteddata)
* [CryptoEffectFrom](crypto.md#cryptoeffectfrom)
* [CryptoEffects](crypto.md#cryptoeffects)
* [EncryptionEffects](crypto.md#encryptioneffects)
* [EncryptionEnv](crypto.md#encryptionenv)
* [ExportedKeyPair](crypto.md#exportedkeypair)
* [JsonWebKeyPair](crypto.md#jsonwebkeypair)
* [PromiseValue](crypto.md#promisevalue)
* [ShaHashSize](crypto.md#shahashsize)

### Variables

* [AES_ALGORITHM](crypto.md#const-aes_algorithm)
* [AES_IV_SIZE](crypto.md#const-aes_iv_size)
* [CryptoFailure](crypto.md#const-cryptofailure)
* [DEFAULT_ITERATIONS](crypto.md#const-default_iterations)
* [ENCRYPT_AND_DECRYPT](crypto.md#const-encrypt_and_decrypt)
* [EXTRACTABLE](crypto.md#const-extractable)
* [HASH](crypto.md#const-hash)
* [MODULUS_LENGTH](crypto.md#const-modulus_length)
* [PUBLIC_EXPONENT](crypto.md#const-public_exponent)
* [SIGN_AND_VERIFY](crypto.md#const-sign_and_verify)
* [decrypt](crypto.md#const-decrypt)
* [deriveBits](crypto.md#const-derivebits)
* [deriveKey](crypto.md#const-derivekey)
* [digest](crypto.md#const-digest)
* [encrypt](crypto.md#const-encrypt)
* [exportKey](crypto.md#const-exportkey)
* [generateKey](crypto.md#const-generatekey)
* [importKey](crypto.md#const-importkey)
* [sign](crypto.md#const-sign)
* [unwrapKey](crypto.md#const-unwrapkey)
* [verify](crypto.md#const-verify)
* [wrapKey](crypto.md#const-wrapkey)

### Functions

* [arrayBufferToString](crypto.md#arraybuffertostring)
* [createCryptoEffect](crypto.md#createcryptoeffect)
* [createServerCrypto](crypto.md#createservercrypto)
* [decryptEncryptedKeys](crypto.md#decryptencryptedkeys)
* [decryptWithAesKey](crypto.md#decryptwithaeskey)
* [decryptWithRsaKeyPair](crypto.md#decryptwithrsakeypair)
* [deriveAesKey](crypto.md#deriveaeskey)
* [deriveSalt](crypto.md#derivesalt)
* [encryptExportedKeyPair](crypto.md#encryptexportedkeypair)
* [encryptWithAesKey](crypto.md#encryptwithaeskey)
* [encryptWithRsaKeyPair](crypto.md#encryptwithrsakeypair)
* [exportKeyPair](crypto.md#exportkeypair)
* [exportedKeysToEncryptedKeyPair](crypto.md#exportedkeystoencryptedkeypair)
* [fromPromise](crypto.md#const-frompromise)
* [generateEcdsaExportedKeys](crypto.md#generateecdsaexportedkeys)
* [generateEcdsaKeyPair](crypto.md#generateecdsakeypair)
* [generateEncryptedEcdsaKeyPair](crypto.md#generateencryptedecdsakeypair)
* [generateEncryptedRsaKeyPair](crypto.md#generateencryptedrsakeypair)
* [generateHashFromString](crypto.md#const-generatehashfromstring)
* [generateRsaExportedKeys](crypto.md#generatersaexportedkeys)
* [generateRsaKeyPair](crypto.md#generatersakeypair)
* [generateShaHash](crypto.md#generateshahash)
* [getRandomValues](crypto.md#getrandomvalues)
* [getSubtleCrypto](crypto.md#getsubtlecrypto)
* [importEncryptedKeys](crypto.md#importencryptedkeys)
* [importExportedKeyPair](crypto.md#importexportedkeypair)
* [signWithEcdsaKeyPair](crypto.md#signwithecdsakeypair)
* [stringToArrayBuffer](crypto.md#stringtoarraybuffer)
* [verifyWithEcdsaKeyPair](crypto.md#verifywithecdsakeypair)

### Object literals

* [ECDSA_KEY_PARAMS](crypto.md#const-ecdsa_key_params)
* [ECDSA_PARAMS](crypto.md#const-ecdsa_params)
* [RSA_PARAMS](crypto.md#const-rsa_params)

## Type aliases

###  AesEncryptedData

Ƭ **AesEncryptedData**: *keyof [ArrayBuffer, Uint8Array]*

*Defined in [packages/crypto/source/common/types.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/types.ts#L11)*

___

###  CryptoEffectFrom

Ƭ **CryptoEffectFrom**: *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [PromiseValue](crypto.md#promisevalue)‹ReturnType‹SubtleCrypto[A]›››*

*Defined in [packages/crypto/source/effects/subtle.ts:133](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/subtle.ts#L133)*

___

###  CryptoEffects

Ƭ **CryptoEffects**: *Effects‹[CryptoEnv](../interfaces/crypto.cryptoenv.md) & [CryptoFailure](../interfaces/crypto.cryptofailure.md) & E, A›*

*Defined in [packages/crypto/source/common/Effects.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/Effects.ts#L6)*

___

###  EncryptionEffects

Ƭ **EncryptionEffects**: *Effects‹[EncryptionEnv](crypto.md#encryptionenv) & E, A›*

*Defined in [packages/crypto/source/common/Effects.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/Effects.ts#L7)*

___

###  EncryptionEnv

Ƭ **EncryptionEnv**: *[CryptoEnv](../interfaces/crypto.cryptoenv.md) & [CryptoFailure](../interfaces/crypto.cryptofailure.md) & [AesKeyStorage](../interfaces/crypto.aeskeystorage.md)*

*Defined in [packages/crypto/source/common/EncryptionEnv.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/EncryptionEnv.ts#L6)*

___

###  ExportedKeyPair

Ƭ **ExportedKeyPair**: *object*

*Defined in [packages/crypto/source/common/types.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/types.ts#L13)*

#### Type declaration:

* **privateKey**: *ArrayBuffer*

* **publicKey**: *ArrayBuffer*

___

###  JsonWebKeyPair

Ƭ **JsonWebKeyPair**: *object*

*Defined in [packages/crypto/source/common/types.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/types.ts#L18)*

#### Type declaration:

* **privateKey**: *JsonWebKey*

* **publicKey**: *JsonWebKey*

___

###  PromiseValue

Ƭ **PromiseValue**: *A extends PromiseLike<infer R> ? R : never*

*Defined in [packages/crypto/source/effects/subtle.ts:137](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/subtle.ts#L137)*

___

###  ShaHashSize

Ƭ **ShaHashSize**: *1 | 256 | 348 | 512*

*Defined in [packages/crypto/source/hashing/generateShaHash.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/hashing/generateShaHash.ts#L4)*

## Variables

### `Const` AES_ALGORITHM

• **AES_ALGORITHM**: *"AES-GCM"* = "AES-GCM"

*Defined in [packages/crypto/source/common/constants.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L7)*

___

### `Const` AES_IV_SIZE

• **AES_IV_SIZE**: *12* = 12

*Defined in [packages/crypto/source/common/constants.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L8)*

___

### `Const` CryptoFailure

• **CryptoFailure**: *unique symbol* = Symbol.for('CryptoFailure')

*Defined in [packages/crypto/source/common/CryptoFailure.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/CryptoFailure.ts#L3)*

___

### `Const` DEFAULT_ITERATIONS

• **DEFAULT_ITERATIONS**: *2000* = 2000

*Defined in [packages/crypto/source/common/constants.ts:2](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L2)*

___

### `Const` ENCRYPT_AND_DECRYPT

• **ENCRYPT_AND_DECRYPT**: *KeyUsage[]* = ['encrypt', 'decrypt']

*Defined in [packages/crypto/source/common/constants.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L4)*

___

### `Const` EXTRACTABLE

• **EXTRACTABLE**: *false* = false

*Defined in [packages/crypto/source/common/constants.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L3)*

___

### `Const` HASH

• **HASH**: *"SHA-256"* = "SHA-256"

*Defined in [packages/crypto/source/common/constants.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L1)*

___

### `Const` MODULUS_LENGTH

• **MODULUS_LENGTH**: *2048* = 2048

*Defined in [packages/crypto/source/common/constants.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L6)*

___

### `Const` PUBLIC_EXPONENT

• **PUBLIC_EXPONENT**: *Uint8Array‹›* = new Uint8Array([0x01, 0x00, 0x01])

*Defined in [packages/crypto/source/common/constants.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L5)*

___

### `Const` SIGN_AND_VERIFY

• **SIGN_AND_VERIFY**: *KeyUsage[]* = ['sign', 'verify']

*Defined in [packages/crypto/source/common/constants.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L15)*

___

### `Const` decrypt

• **decrypt**: *(Anonymous function)* = createCryptoEffect('decrypt')

*Defined in [packages/crypto/source/effects/subtle.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/subtle.ts#L9)*

___

### `Const` deriveBits

• **deriveBits**: *(Anonymous function)* = createCryptoEffect('deriveBits')

*Defined in [packages/crypto/source/effects/subtle.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/subtle.ts#L10)*

___

### `Const` deriveKey

• **deriveKey**: *(Anonymous function)* = createCryptoEffect('deriveKey')

*Defined in [packages/crypto/source/effects/subtle.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/subtle.ts#L11)*

___

### `Const` digest

• **digest**: *(Anonymous function)* = createCryptoEffect('digest')

*Defined in [packages/crypto/source/effects/subtle.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/subtle.ts#L12)*

___

### `Const` encrypt

• **encrypt**: *(Anonymous function)* = createCryptoEffect('encrypt')

*Defined in [packages/crypto/source/effects/subtle.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/subtle.ts#L13)*

___

### `Const` exportKey

• **exportKey**: *function* = createCryptoEffect('exportKey') as {
  (format: 'jwk', key: CryptoKey): CryptoEffects<unknown, JsonWebKey>
  (format: 'raw' | 'pkcs8' | 'spki', key: CryptoKey): CryptoEffects<unknown, ArrayBuffer>
  (format: string, key: CryptoKey): CryptoEffects<unknown, ArrayBuffer | JsonWebKey>
}

*Defined in [packages/crypto/source/effects/subtle.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/subtle.ts#L14)*

#### Type declaration:

▸ (`format`: "jwk", `key`: CryptoKey): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, JsonWebKey›*

**Parameters:**

Name | Type |
------ | ------ |
`format` | "jwk" |
`key` | CryptoKey |

▸ (`format`: "raw" | "pkcs8" | "spki", `key`: CryptoKey): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, ArrayBuffer›*

**Parameters:**

Name | Type |
------ | ------ |
`format` | "raw" &#124; "pkcs8" &#124; "spki" |
`key` | CryptoKey |

▸ (`format`: string, `key`: CryptoKey): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, ArrayBuffer | JsonWebKey›*

**Parameters:**

Name | Type |
------ | ------ |
`format` | string |
`key` | CryptoKey |

___

### `Const` generateKey

• **generateKey**: *function* = createCryptoEffect('generateKey') as {
  (algorithm: string, extractable: boolean, keyUsages: string[]): CryptoEffects<
    unknown,
    CryptoKey | CryptoKeyPair
  >
  (
    algorithm: RsaHashedKeyGenParams | EcKeyGenParams | DhKeyGenParams,
    extractable: boolean,
    keyUsages: string[],
  ): CryptoEffects<unknown, CryptoKeyPair>
  (
    algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params,
    extractable: boolean,
    keyUsages: string[],
  ): CryptoEffects<unknown, CryptoKey>
}

*Defined in [packages/crypto/source/effects/subtle.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/subtle.ts#L19)*

#### Type declaration:

▸ (`algorithm`: string, `extractable`: boolean, `keyUsages`: string[]): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, CryptoKey | [CryptoKeyPair](../interfaces/crypto.encryptedkeypair.md#cryptokeypair)›*

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | string |
`extractable` | boolean |
`keyUsages` | string[] |

▸ (`algorithm`: RsaHashedKeyGenParams | EcKeyGenParams | DhKeyGenParams, `extractable`: boolean, `keyUsages`: string[]): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [CryptoKeyPair](../interfaces/crypto.encryptedkeypair.md#cryptokeypair)›*

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | RsaHashedKeyGenParams &#124; EcKeyGenParams &#124; DhKeyGenParams |
`extractable` | boolean |
`keyUsages` | string[] |

▸ (`algorithm`: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, `extractable`: boolean, `keyUsages`: string[]): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, CryptoKey›*

**Parameters:**

Name | Type |
------ | ------ |
`algorithm` | AesKeyGenParams &#124; HmacKeyGenParams &#124; Pbkdf2Params |
`extractable` | boolean |
`keyUsages` | string[] |

___

### `Const` importKey

• **importKey**: *function* = createCryptoEffect('importKey') as {
  (
    format: 'raw' | 'pkcs8' | 'spki',
    keyData:
      | Int8Array
      | Int16Array
      | Int32Array
      | Uint8Array
      | Uint16Array
      | Uint32Array
      | Uint8ClampedArray
      | Float32Array
      | Float64Array
      | DataView
      | ArrayBuffer,
    algorithm:
      | string
      | RsaHashedImportParams
      | EcKeyImportParams
      | HmacImportParams
      | DhImportKeyParams
      | AesKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[],
  ): CryptoEffects<unknown, CryptoKey>
  (
    format: 'jwk',
    keyData: JsonWebKey,
    algorithm:
      | string
      | RsaHashedImportParams
      | EcKeyImportParams
      | HmacImportParams
      | DhImportKeyParams
      | AesKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[],
  ): CryptoEffects<unknown, CryptoKey>
  (
    format: string,
    keyData:
      | JsonWebKey
      | Int8Array
      | Int16Array
      | Int32Array
      | Uint8Array
      | Uint16Array
      | Uint32Array
      | Uint8ClampedArray
      | Float32Array
      | Float64Array
      | DataView
      | ArrayBuffer,
    algorithm:
      | string
      | RsaHashedImportParams
      | EcKeyImportParams
      | HmacImportParams
      | DhImportKeyParams
      | AesKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[],
  ): CryptoEffects<unknown, CryptoKey>
}

*Defined in [packages/crypto/source/effects/subtle.ts:35](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/subtle.ts#L35)*

#### Type declaration:

▸ (`format`: "raw" | "pkcs8" | "spki", `keyData`: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer, `algorithm`: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams | AesKeyAlgorithm, `extractable`: boolean, `keyUsages`: string[]): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, CryptoKey›*

**Parameters:**

Name | Type |
------ | ------ |
`format` | "raw" &#124; "pkcs8" &#124; "spki" |
`keyData` | Int8Array &#124; Int16Array &#124; Int32Array &#124; Uint8Array &#124; Uint16Array &#124; Uint32Array &#124; Uint8ClampedArray &#124; Float32Array &#124; Float64Array &#124; DataView &#124; ArrayBuffer |
`algorithm` | string &#124; RsaHashedImportParams &#124; EcKeyImportParams &#124; HmacImportParams &#124; DhImportKeyParams &#124; AesKeyAlgorithm |
`extractable` | boolean |
`keyUsages` | string[] |

▸ (`format`: "jwk", `keyData`: JsonWebKey, `algorithm`: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams | AesKeyAlgorithm, `extractable`: boolean, `keyUsages`: string[]): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, CryptoKey›*

**Parameters:**

Name | Type |
------ | ------ |
`format` | "jwk" |
`keyData` | JsonWebKey |
`algorithm` | string &#124; RsaHashedImportParams &#124; EcKeyImportParams &#124; HmacImportParams &#124; DhImportKeyParams &#124; AesKeyAlgorithm |
`extractable` | boolean |
`keyUsages` | string[] |

▸ (`format`: string, `keyData`: JsonWebKey | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer, `algorithm`: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams | AesKeyAlgorithm, `extractable`: boolean, `keyUsages`: string[]): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, CryptoKey›*

**Parameters:**

Name | Type |
------ | ------ |
`format` | string |
`keyData` | JsonWebKey &#124; Int8Array &#124; Int16Array &#124; Int32Array &#124; Uint8Array &#124; Uint16Array &#124; Uint32Array &#124; Uint8ClampedArray &#124; Float32Array &#124; Float64Array &#124; DataView &#124; ArrayBuffer |
`algorithm` | string &#124; RsaHashedImportParams &#124; EcKeyImportParams &#124; HmacImportParams &#124; DhImportKeyParams &#124; AesKeyAlgorithm |
`extractable` | boolean |
`keyUsages` | string[] |

___

### `Const` sign

• **sign**: *(Anonymous function)* = createCryptoEffect('sign')

*Defined in [packages/crypto/source/effects/subtle.ts:99](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/subtle.ts#L99)*

___

### `Const` unwrapKey

• **unwrapKey**: *(Anonymous function)* = createCryptoEffect('unwrapKey')

*Defined in [packages/crypto/source/effects/subtle.ts:100](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/subtle.ts#L100)*

___

### `Const` verify

• **verify**: *(Anonymous function)* = createCryptoEffect('verify')

*Defined in [packages/crypto/source/effects/subtle.ts:101](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/subtle.ts#L101)*

___

### `Const` wrapKey

• **wrapKey**: *(Anonymous function)* = createCryptoEffect('wrapKey')

*Defined in [packages/crypto/source/effects/subtle.ts:102](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/subtle.ts#L102)*

## Functions

###  arrayBufferToString

▸ **arrayBufferToString**(`buffer`: ArrayBuffer): *string*

*Defined in [packages/crypto/source/common/arrayBufferToString.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/arrayBufferToString.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |

**Returns:** *string*

___

###  createCryptoEffect

▸ **createCryptoEffect**<**A**>(`key`: A): *(Anonymous function)*

*Defined in [packages/crypto/source/effects/subtle.ts:104](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/subtle.ts#L104)*

**Type parameters:**

▪ **A**: *keyof SubtleCrypto*

**Parameters:**

Name | Type |
------ | ------ |
`key` | A |

**Returns:** *(Anonymous function)*

___

###  createServerCrypto

▸ **createServerCrypto**(): *Crypto*

*Defined in [packages/crypto/source/common/createServerCrypto.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/createServerCrypto.ts#L1)*

**Returns:** *Crypto*

___

###  decryptEncryptedKeys

▸ **decryptEncryptedKeys**(`aesKey`: CryptoKey, `keyPair`: [AesEncryptedKeys](../interfaces/crypto.aesencryptedkeys.md)): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [ExportedKeyPair](crypto.md#exportedkeypair)›*

*Defined in [packages/crypto/source/effects/decryptEncryptedKeys.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/decryptEncryptedKeys.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`aesKey` | CryptoKey |
`keyPair` | [AesEncryptedKeys](../interfaces/crypto.aesencryptedkeys.md) |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [ExportedKeyPair](crypto.md#exportedkeypair)›*

___

###  decryptWithAesKey

▸ **decryptWithAesKey**(`aesKey`: CryptoKey, `data`: ArrayBuffer, `iv`: Uint8Array): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, ArrayBuffer›*

*Defined in [packages/crypto/source/symmetrical/decryptWithAesKey.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/symmetrical/decryptWithAesKey.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`aesKey` | CryptoKey |
`data` | ArrayBuffer |
`iv` | Uint8Array |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, ArrayBuffer›*

___

###  decryptWithRsaKeyPair

▸ **decryptWithRsaKeyPair**(`keyPair`: [CryptoKeyPair](../interfaces/crypto.encryptedkeypair.md#cryptokeypair), `encrypted`: ArrayBuffer): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, ArrayBuffer›*

*Defined in [packages/crypto/source/asymmetrical/decryptWithRsaKeyPair.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/asymmetrical/decryptWithRsaKeyPair.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`keyPair` | [CryptoKeyPair](../interfaces/crypto.encryptedkeypair.md#cryptokeypair) |
`encrypted` | ArrayBuffer |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, ArrayBuffer›*

___

###  deriveAesKey

▸ **deriveAesKey**(`options`: [DeriveAesKeyOptions](../interfaces/crypto.deriveaeskeyoptions.md)): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, CryptoKey›*

*Defined in [packages/crypto/source/symmetrical/deriveAesKey.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/symmetrical/deriveAesKey.ts#L22)*

Derives a Symmetrical CryptoKey from your password and a salt (e.g. email)

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeriveAesKeyOptions](../interfaces/crypto.deriveaeskeyoptions.md) |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, CryptoKey›*

___

###  deriveSalt

▸ **deriveSalt**(`sizeOrValue`: string | number): *Uint8Array*

*Defined in [packages/crypto/source/common/deriveSalt.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/deriveSalt.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`sizeOrValue` | string &#124; number |

**Returns:** *Uint8Array*

___

###  encryptExportedKeyPair

▸ **encryptExportedKeyPair**(`aesKey`: CryptoKey, `keyPair`: [ExportedKeyPair](crypto.md#exportedkeypair)): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [AesEncryptedKeys](../interfaces/crypto.aesencryptedkeys.md)›*

*Defined in [packages/crypto/source/effects/encryptExportedKeyPair.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/encryptExportedKeyPair.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`aesKey` | CryptoKey |
`keyPair` | [ExportedKeyPair](crypto.md#exportedkeypair) |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [AesEncryptedKeys](../interfaces/crypto.aesencryptedkeys.md)›*

___

###  encryptWithAesKey

▸ **encryptWithAesKey**(`aesKey`: CryptoKey, `data`: ArrayBuffer): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [AesEncryptedData](crypto.md#aesencrypteddata)›*

*Defined in [packages/crypto/source/symmetrical/encryptWithAesKey.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/symmetrical/encryptWithAesKey.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`aesKey` | CryptoKey |
`data` | ArrayBuffer |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [AesEncryptedData](crypto.md#aesencrypteddata)›*

___

###  encryptWithRsaKeyPair

▸ **encryptWithRsaKeyPair**(`keyPair`: [CryptoKeyPair](../interfaces/crypto.encryptedkeypair.md#cryptokeypair), `data`: ArrayBuffer): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, ArrayBuffer›*

*Defined in [packages/crypto/source/asymmetrical/encryptWithRsaKeyPair.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/asymmetrical/encryptWithRsaKeyPair.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`keyPair` | [CryptoKeyPair](../interfaces/crypto.encryptedkeypair.md#cryptokeypair) |
`data` | ArrayBuffer |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, ArrayBuffer›*

___

###  exportKeyPair

▸ **exportKeyPair**(`keyPair`: [CryptoKeyPair](../interfaces/crypto.encryptedkeypair.md#cryptokeypair)): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [JsonWebKeyPair](crypto.md#jsonwebkeypair)›*

*Defined in [packages/crypto/source/effects/exportKeyPair.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/exportKeyPair.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`keyPair` | [CryptoKeyPair](../interfaces/crypto.encryptedkeypair.md#cryptokeypair) |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [JsonWebKeyPair](crypto.md#jsonwebkeypair)›*

___

###  exportedKeysToEncryptedKeyPair

▸ **exportedKeysToEncryptedKeyPair**(`aesKey`: CryptoKey, `params`: RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams | AesKeyAlgorithm, `exportedKeys`: [ExportedKeyPair](crypto.md#exportedkeypair)): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [EncryptedKeyPair](../interfaces/crypto.encryptedkeypair.md)›*

*Defined in [packages/crypto/source/effects/exportedKeysToEncryptedKeyPair.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/exportedKeysToEncryptedKeyPair.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`aesKey` | CryptoKey |
`params` | RsaHashedImportParams &#124; EcKeyImportParams &#124; HmacImportParams &#124; DhImportKeyParams &#124; AesKeyAlgorithm |
`exportedKeys` | [ExportedKeyPair](crypto.md#exportedkeypair) |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [EncryptedKeyPair](../interfaces/crypto.encryptedkeypair.md)›*

___

### `Const` fromPromise

▸ **fromPromise**<**A**>(`promise`: PromiseLike‹A›): *Env‹unknown, Left‹[Error](../classes/effects.killerror.md#static-error)› | Right‹A››*

*Defined in [packages/crypto/source/effects/subtle.ts:121](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/subtle.ts#L121)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`promise` | PromiseLike‹A› |

**Returns:** *Env‹unknown, Left‹[Error](../classes/effects.killerror.md#static-error)› | Right‹A››*

___

###  generateEcdsaExportedKeys

▸ **generateEcdsaExportedKeys**(): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [ExportedKeyPair](crypto.md#exportedkeypair)›*

*Defined in [packages/crypto/source/asymmetrical/generateEcdsaExportedKeys.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/asymmetrical/generateEcdsaExportedKeys.ts#L15)*

Generates an exported key pair. WARNING :: be very careful about what you do with this KeyPair. We highly
recommend encrypting them with another CryptoKey that never leaves memory and can be derived by user-supplied info.

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [ExportedKeyPair](crypto.md#exportedkeypair)›*

___

###  generateEcdsaKeyPair

▸ **generateEcdsaKeyPair**(): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [CryptoKeyPair](../interfaces/crypto.encryptedkeypair.md#cryptokeypair)›*

*Defined in [packages/crypto/source/asymmetrical/generateEcdsaKeyPair.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/asymmetrical/generateEcdsaKeyPair.ts#L4)*

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [CryptoKeyPair](../interfaces/crypto.encryptedkeypair.md#cryptokeypair)›*

___

###  generateEncryptedEcdsaKeyPair

▸ **generateEncryptedEcdsaKeyPair**(`aesKey`: CryptoKey): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [EncryptedKeyPair](../interfaces/crypto.encryptedkeypair.md)›*

*Defined in [packages/crypto/source/asymmetrical/generateEncryptedEcdsaKeyPair.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/asymmetrical/generateEncryptedEcdsaKeyPair.ts#L8)*

Generate encrypted RSA-PSS key pair for signing and verifying

**Parameters:**

Name | Type |
------ | ------ |
`aesKey` | CryptoKey |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [EncryptedKeyPair](../interfaces/crypto.encryptedkeypair.md)›*

___

###  generateEncryptedRsaKeyPair

▸ **generateEncryptedRsaKeyPair**(`aesKey`: CryptoKey): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [EncryptedKeyPair](../interfaces/crypto.encryptedkeypair.md)›*

*Defined in [packages/crypto/source/asymmetrical/generateEncryptedRsaKeyPair.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/asymmetrical/generateEncryptedRsaKeyPair.ts#L16)*

Using an AES CryptoKey, a non-extractable CryptoKeyPair is generated. Encrypted copies of the CryptoKeyPair
are also generated to allow persistence and sending over the internet.

Ideally your supplied CryptoKey is non-extractable, never persisted, and generated with user-supplied
information in a way that the key can be derived again and again. The generated CryptoKeyPair should then
be used to encrypt/decrypt all application data. The encrypted views of the CryptoKeyPair can safely be
persisted or sent over the internet. Furthermore, if the user chooses to change their password
one must only re-encrypt the generated CryptoKeyPair with the new AES CryptoKey.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`aesKey` | CryptoKey | A symmetrical key that is allowed to encrypt/decrypt  |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [EncryptedKeyPair](../interfaces/crypto.encryptedkeypair.md)›*

___

### `Const` generateHashFromString

▸ **generateHashFromString**(`str`: string): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, ArrayBuffer›*

*Defined in [packages/crypto/source/hashing/generateHashFromString.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/hashing/generateHashFromString.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, ArrayBuffer›*

___

###  generateRsaExportedKeys

▸ **generateRsaExportedKeys**(): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [ExportedKeyPair](crypto.md#exportedkeypair)›*

*Defined in [packages/crypto/source/asymmetrical/generateRsaExportedKeys.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/asymmetrical/generateRsaExportedKeys.ts#L15)*

Generates an exported key pair. WARNING :: be very careful about what you do with this KeyPair. We highly
recommend encrypting them with another CryptoKey that never leaves memory and can be derived by user-supplied info.

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [ExportedKeyPair](crypto.md#exportedkeypair)›*

___

###  generateRsaKeyPair

▸ **generateRsaKeyPair**(): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [CryptoKeyPair](../interfaces/crypto.encryptedkeypair.md#cryptokeypair)›*

*Defined in [packages/crypto/source/asymmetrical/generateRsaKeyPair.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/asymmetrical/generateRsaKeyPair.ts#L4)*

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [CryptoKeyPair](../interfaces/crypto.encryptedkeypair.md#cryptokeypair)›*

___

###  generateShaHash

▸ **generateShaHash**(`size`: [ShaHashSize](crypto.md#shahashsize), `data`: ArrayBuffer): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, ArrayBuffer›*

*Defined in [packages/crypto/source/hashing/generateShaHash.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/hashing/generateShaHash.ts#L10)*

Generate a SHA Hash of a given size.
Note: SHA-1 is *NOT* cryptographically secure.

**Parameters:**

Name | Type |
------ | ------ |
`size` | [ShaHashSize](crypto.md#shahashsize) |
`data` | ArrayBuffer |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, ArrayBuffer›*

___

###  getRandomValues

▸ **getRandomValues**<**A**>(`input`: A): *Effects‹[CryptoEnv](../interfaces/crypto.cryptoenv.md), A›*

*Defined in [packages/crypto/source/effects/getRandomValues.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/getRandomValues.ts#L4)*

**Type parameters:**

▪ **A**: *Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView*

**Parameters:**

Name | Type |
------ | ------ |
`input` | A |

**Returns:** *Effects‹[CryptoEnv](../interfaces/crypto.cryptoenv.md), A›*

___

###  getSubtleCrypto

▸ **getSubtleCrypto**(): *Effects‹[CryptoEnv](../interfaces/crypto.cryptoenv.md), SubtleCrypto›*

*Defined in [packages/crypto/source/effects/getSubtleCrypto.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/getSubtleCrypto.ts#L4)*

**Returns:** *Effects‹[CryptoEnv](../interfaces/crypto.cryptoenv.md), SubtleCrypto›*

___

###  importEncryptedKeys

▸ **importEncryptedKeys**(`decryptionKey`: CryptoKey, `params`: RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams | AesKeyAlgorithm, `encryptedKeys`: [AesEncryptedKeys](../interfaces/crypto.aesencryptedkeys.md)): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [CryptoKeyPair](../interfaces/crypto.encryptedkeypair.md#cryptokeypair)›*

*Defined in [packages/crypto/source/effects/importEncryptedKeys.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/effects/importEncryptedKeys.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`decryptionKey` | CryptoKey |
`params` | RsaHashedImportParams &#124; EcKeyImportParams &#124; HmacImportParams &#124; DhImportKeyParams &#124; AesKeyAlgorithm |
`encryptedKeys` | [AesEncryptedKeys](../interfaces/crypto.aesencryptedkeys.md) |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [CryptoKeyPair](../interfaces/crypto.encryptedkeypair.md#cryptokeypair)›*

___

###  importExportedKeyPair

▸ **importExportedKeyPair**(`params`: RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams | AesKeyAlgorithm, `keyPair`: [ExportedKeyPair](crypto.md#exportedkeypair)): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [CryptoKeyPair](../interfaces/crypto.encryptedkeypair.md#cryptokeypair)›*

*Defined in [packages/crypto/source/asymmetrical/importExportedKeyPair.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/asymmetrical/importExportedKeyPair.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | RsaHashedImportParams &#124; EcKeyImportParams &#124; HmacImportParams &#124; DhImportKeyParams &#124; AesKeyAlgorithm |
`keyPair` | [ExportedKeyPair](crypto.md#exportedkeypair) |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, [CryptoKeyPair](../interfaces/crypto.encryptedkeypair.md#cryptokeypair)›*

___

###  signWithEcdsaKeyPair

▸ **signWithEcdsaKeyPair**(`data`: ArrayBuffer, `privateKey`: CryptoKey): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, ArrayBuffer›*

*Defined in [packages/crypto/source/asymmetrical/signWithEcdsaKeyPair.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/asymmetrical/signWithEcdsaKeyPair.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | ArrayBuffer |
`privateKey` | CryptoKey |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, ArrayBuffer›*

___

###  stringToArrayBuffer

▸ **stringToArrayBuffer**(`str`: string): *ArrayBuffer*

*Defined in [packages/crypto/source/common/stringToArrayBuffer.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/stringToArrayBuffer.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *ArrayBuffer*

___

###  verifyWithEcdsaKeyPair

▸ **verifyWithEcdsaKeyPair**(`data`: ArrayBuffer, `signature`: ArrayBuffer, `publicKey`: CryptoKey): *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, boolean›*

*Defined in [packages/crypto/source/asymmetrical/verifyWithEcdsaKeyPair.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/asymmetrical/verifyWithEcdsaKeyPair.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | ArrayBuffer |
`signature` | ArrayBuffer |
`publicKey` | CryptoKey |

**Returns:** *[CryptoEffects](crypto.md#cryptoeffects)‹unknown, boolean›*

## Object literals

### `Const` ECDSA_KEY_PARAMS

### ▪ **ECDSA_KEY_PARAMS**: *object*

*Defined in [packages/crypto/source/common/constants.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L17)*

###  name

• **name**: *string* = "ECDSA"

*Defined in [packages/crypto/source/common/constants.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L18)*

###  namedCurve

• **namedCurve**: *string* = "P-256"

*Defined in [packages/crypto/source/common/constants.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L19)*

___

### `Const` ECDSA_PARAMS

### ▪ **ECDSA_PARAMS**: *object*

*Defined in [packages/crypto/source/common/constants.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L22)*

###  hash

• **hash**: *string* = HASH

*Defined in [packages/crypto/source/common/constants.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L22)*

###  name

• **name**: *string* = "ECDSA"

*Defined in [packages/crypto/source/common/constants.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L22)*

___

### `Const` RSA_PARAMS

### ▪ **RSA_PARAMS**: *object*

*Defined in [packages/crypto/source/common/constants.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L9)*

###  hash

• **hash**: *string* = HASH

*Defined in [packages/crypto/source/common/constants.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L13)*

###  modulusLength

• **modulusLength**: *number* = MODULUS_LENGTH

*Defined in [packages/crypto/source/common/constants.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L11)*

###  name

• **name**: *string* = "RSA-OAEP"

*Defined in [packages/crypto/source/common/constants.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L10)*

###  publicExponent

• **publicExponent**: *Uint8Array‹›* = PUBLIC_EXPONENT

*Defined in [packages/crypto/source/common/constants.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/crypto/source/common/constants.ts#L12)*
