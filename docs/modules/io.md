[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [io](io.md)

# Package: io

# @typed/io

Validate the types flowing through your application boundaries.

## Index

### Namespaces

* [DecodeError](io.md#decodeerror)
* [Decoder](io.md#decoder)
* [Encoder](io.md#encoder)
* [Guard](io.md#guard)
* [Type](io.md#type)

### Interfaces

* [DecodeFailure](../interfaces/io.decodefailure.md)

### Type aliases

* [ArrayType](io.md#arraytype)
* [DecodeEffect](io.md#decodeeffect)
* [DecoderInputConsList](io.md#decoderinputconslist)
* [EncoderInputConsList](io.md#encoderinputconslist)
* [EncoderOutputConsList](io.md#encoderoutputconslist)
* [EncoderOutputConsList](io.md#encoderoutputconslist)
* [InputIntersection](io.md#inputintersection)
* [InputOf](io.md#inputof)
* [IntersectionType](io.md#intersectiontype)
* [IntersectionType](io.md#intersectiontype)
* [IntersectionType](io.md#intersectiontype)
* [MapType](io.md#maptype)
* [Mixed](io.md#mixed)
* [NeverType](io.md#nevertype)
* [OutputIntersection](io.md#outputintersection)
* [OutputOf](io.md#outputof)
* [Props](io.md#props)
* [ToDecoderTypeConsList](io.md#todecodertypeconslist)
* [ToGuardTypeConsList](io.md#toguardtypeconslist)
* [TypeOf](io.md#typeof)
* [TypeOf](io.md#typeof)
* [TypeOf](io.md#typeof)

### Variables

* [Array](io.md#const-array)
* [Array](io.md#const-array)
* [Array](io.md#const-array)
* [Boolean](io.md#const-boolean)
* [Boolean](io.md#const-boolean)
* [Boolean](io.md#const-boolean)
* [Character](io.md#const-character)
* [Character](io.md#const-character)
* [Character](io.md#const-character)
* [DecodeFailure](io.md#const-decodefailure)
* [EmptyString](io.md#const-emptystring)
* [EmptyString](io.md#const-emptystring)
* [EmptyString](io.md#const-emptystring)
* [False](io.md#const-false)
* [False](io.md#const-false)
* [False](io.md#const-false)
* [Function](io.md#const-function)
* [Function](io.md#const-function)
* [Function](io.md#const-function)
* [Integer](io.md#const-integer)
* [Integer](io.md#const-integer)
* [Integer](io.md#const-integer)
* [Map](io.md#const-map)
* [Map](io.md#const-map)
* [Maybe](io.md#const-maybe)
* [Negative](io.md#const-negative)
* [Negative](io.md#const-negative)
* [Negative](io.md#const-negative)
* [NegativeInteger](io.md#const-negativeinteger)
* [NegativeInteger](io.md#const-negativeinteger)
* [NegativeInteger](io.md#const-negativeinteger)
* [Never](io.md#const-never)
* [Never](io.md#const-never)
* [NonEmptyString](io.md#const-nonemptystring)
* [NonEmptyString](io.md#const-nonemptystring)
* [NonEmptyString](io.md#const-nonemptystring)
* [NonNegative](io.md#const-nonnegative)
* [NonNegative](io.md#const-nonnegative)
* [NonNegative](io.md#const-nonnegative)
* [NonNegativeInteger](io.md#const-nonnegativeinteger)
* [NonNegativeInteger](io.md#const-nonnegativeinteger)
* [NonNegativeInteger](io.md#const-nonnegativeinteger)
* [NonPositive](io.md#const-nonpositive)
* [NonPositive](io.md#const-nonpositive)
* [NonPositive](io.md#const-nonpositive)
* [NonPositiveInteger](io.md#const-nonpositiveinteger)
* [NonPositiveInteger](io.md#const-nonpositiveinteger)
* [NonPositiveInteger](io.md#const-nonpositiveinteger)
* [NonZero](io.md#const-nonzero)
* [NonZero](io.md#const-nonzero)
* [NonZero](io.md#const-nonzero)
* [NonZeroInteger](io.md#const-nonzerointeger)
* [NonZeroInteger](io.md#const-nonzerointeger)
* [NonZeroInteger](io.md#const-nonzerointeger)
* [Null](io.md#const-null)
* [Null](io.md#const-null)
* [Null](io.md#const-null)
* [Number](io.md#const-number)
* [Number](io.md#const-number)
* [Number](io.md#const-number)
* [Positive](io.md#const-positive)
* [Positive](io.md#const-positive)
* [Positive](io.md#const-positive)
* [PositiveInteger](io.md#const-positiveinteger)
* [PositiveInteger](io.md#const-positiveinteger)
* [PositiveInteger](io.md#const-positiveinteger)
* [Record](io.md#const-record)
* [Record](io.md#const-record)
* [Record](io.md#const-record)
* [Set](io.md#const-set)
* [String](io.md#const-string)
* [String](io.md#const-string)
* [True](io.md#const-true)
* [True](io.md#const-true)
* [True](io.md#const-true)
* [Undefined](io.md#const-undefined)
* [Undefined](io.md#const-undefined)
* [Undefined](io.md#const-undefined)
* [UnknownEither](io.md#const-unknowneither)
* [UnknownEither](io.md#const-unknowneither)
* [UnknownMap](io.md#const-unknownmap)
* [Uuid](io.md#const-uuid)
* [Uuid](io.md#const-uuid)
* [Uuid](io.md#const-uuid)
* [Void](io.md#const-void)
* [Void](io.md#const-void)
* [Void](io.md#const-void)
* [Zero](io.md#const-zero)
* [Zero](io.md#const-zero)
* [Zero](io.md#const-zero)
* [_Either](io.md#const-_either)
* [_Maybe](io.md#const-_maybe)
* [_RemoteData](io.md#const-_remotedata)
* [_RemoteData](io.md#const-_remotedata)
* [_RemoteData](io.md#const-_remotedata)
* [_Set](io.md#const-_set)
* [decode](io.md#const-decode)
* [guard](io.md#const-guard)
* [isNoData](io.md#const-isnodata)

### Functions

* [__decode](io.md#__decode)
* [__guard](io.md#__guard)
* [array](io.md#const-array)
* [array](io.md#const-array)
* [array](io.md#array)
* [array](io.md#array)
* [catchDecodeFailure](io.md#catchdecodefailure)
* [decodeFailure](io.md#const-decodefailure)
* [decodePartialError](io.md#decodepartialerror)
* [decodeRecordError](io.md#decoderecorderror)
* [either](io.md#const-either)
* [either](io.md#const-either)
* [either](io.md#const-either)
* [formatArrayErrors](io.md#formatarrayerrors)
* [getDefaultPartialExpected](io.md#getdefaultpartialexpected)
* [getDefaultRecordExpected](io.md#getdefaultrecordexpected)
* [getDefaultRecordExpected](io.md#getdefaultrecordexpected)
* [getIntersectionName](io.md#const-getintersectionname)
* [getUnionName](io.md#const-getunionname)
* [intersection](io.md#const-intersection)
* [intersection](io.md#const-intersection)
* [intersection](io.md#intersection)
* [intersection](io.md#intersection)
* [literal](io.md#literal)
* [literal](io.md#literal)
* [literal](io.md#literal)
* [map](io.md#const-map)
* [map](io.md#const-map)
* [map](io.md#map)
* [maybe](io.md#const-maybe)
* [maybe](io.md#const-maybe)
* [maybe](io.md#const-maybe)
* [nullable](io.md#const-nullable)
* [nullable](io.md#const-nullable)
* [nullable](io.md#const-nullable)
* [partial](io.md#partial)
* [partial](io.md#const-partial)
* [partial](io.md#partial)
* [partial](io.md#const-partial)
* [record](io.md#const-record)
* [record](io.md#const-record)
* [record](io.md#record)
* [record](io.md#const-record)
* [refinement](io.md#refinement)
* [refinement](io.md#const-refinement)
* [refinement](io.md#refinement)
* [remoteData](io.md#remotedata)
* [remoteData](io.md#const-remotedata)
* [remoteData](io.md#const-remotedata)
* [set](io.md#const-set)
* [set](io.md#const-set)
* [set](io.md#const-set)
* [shouldUseIdentity](io.md#const-shoulduseidentity)
* [tuple](io.md#const-tuple)
* [tuple](io.md#const-tuple)
* [tuple](io.md#tuple)
* [tuple](io.md#const-tuple)
* [union](io.md#const-union)
* [union](io.md#const-union)
* [union](io.md#const-union)

### Object literals

* [Never](io.md#const-never)
* [Set](io.md#const-set)
* [_Maybe](io.md#const-_maybe)

## Namespaces

###  DecodeError

• **DecodeError**:

*Defined in [packages/io/source/decoder/Decoder.ts:25](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L25)*

*Defined in [packages/io/source/decoder/Decoder.ts:32](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L32)*

An decoding error.
Note: Is and MUST continue to be JSON-safe

### `Readonly` actual

• **actual**: *string*

*Defined in [packages/io/source/decoder/Decoder.ts:28](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L28)*

### `Readonly` errors

• **errors**: *ReadonlyArray‹[DecodeError](io.md#decodeerror)›*

*Defined in [packages/io/source/decoder/Decoder.ts:29](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L29)*

### `Readonly` expected

• **expected**: *string*

*Defined in [packages/io/source/decoder/Decoder.ts:27](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L27)*

### `Readonly` key

• **key**: *[Maybe](io.md#const-maybe)‹string›*

*Defined in [packages/io/source/decoder/Decoder.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L26)*

### `Const` create

▸ **create**(`expected`: string, `actual`: string, `options`: object): *[DecodeError](io.md#decodeerror)*

*Defined in [packages/io/source/decoder/Decoder.ts:33](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L33)*

**Parameters:**

▪ **expected**: *string*

▪ **actual**: *string*

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`errors?` | ReadonlyArray‹[DecodeError](io.md#decodeerror)› |
`key?` | undefined &#124; string |

**Returns:** *[DecodeError](io.md#decodeerror)*

___

###  Decoder

• **Decoder**:

*Defined in [packages/io/source/decoder/Decoder.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L9)*

*Defined in [packages/io/source/decoder/Decoder.ts:54](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L54)*

### `Readonly` decode

• **decode**: *function*

*Defined in [packages/io/source/decoder/Decoder.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L11)*

#### Type declaration:

▸ (`i`: unknown): *[DecodeEffect](io.md#decodeeffect)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`i` | unknown |

### `Readonly` expected

• **expected**: *string*

*Defined in [packages/io/source/decoder/Decoder.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L10)*

### `Const` fromGuard

▸ **fromGuard**<**A**>(`guard`: [Guard](io.md#guard)‹A›, `expected`: string): *[Decoder](io.md#decoder)‹A›*

*Defined in [packages/io/source/decoder/Decoder.ts:55](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L55)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`guard` | [Guard](io.md#guard)‹A› |
`expected` | string |

**Returns:** *[Decoder](io.md#decoder)‹A›*

___

###  Encoder

• **Encoder**:

*Defined in [packages/io/source/encoder/Encoder.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L4)*

*Defined in [packages/io/source/encoder/Encoder.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L11)*

### `Readonly` encode

• **encode**: *function*

*Defined in [packages/io/source/encoder/Encoder.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L5)*

#### Type declaration:

▸ (`i`: I): *O*

**Parameters:**

Name | Type |
------ | ------ |
`i` | I |

### `Const` id

▸ **id**<**A**>(): *[Encoder](io.md#encoder)‹A, A›*

*Defined in [packages/io/source/encoder/Encoder.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L14)*

**Type parameters:**

▪ **A**: *any*

**Returns:** *[Encoder](io.md#encoder)‹A, A›*

### ▪ **_id**: *object*

*Defined in [packages/io/source/encoder/Encoder.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L12)*

* **encode**(): *function*

  * <**A**>(`value`: A): *A*

___

###  Guard

• **Guard**:

*Defined in [packages/io/source/guard/Guard.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Guard.ts#L3)*

*Defined in [packages/io/source/guard/Guard.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Guard.ts#L7)*

### `Readonly` `Const` is

▸ **is**<**A**>(`is`: [Is](lambda.md#is)‹A›): *[Guard](io.md#guard)‹A›*

*Defined in [packages/io/source/guard/Guard.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Guard.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`is` | [Is](lambda.md#is)‹A› |

**Returns:** *[Guard](io.md#guard)‹A›*

___

###  Type

• **Type**:

*Defined in [packages/io/source/types/Type.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Type.ts#L6)*

*Defined in [packages/io/source/types/Type.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Type.ts#L12)*

###  Encoding

Ƭ **Encoding**: *E.OutputOf‹A›*

*Defined in [packages/io/source/types/Type.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Type.ts#L14)*

###  Of

Ƭ **Of**: *G.TypeOf‹A›*

*Defined in [packages/io/source/types/Type.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Type.ts#L13)*

### `Readonly` decode

• **decode**: *function*

*Inherited from [Decoder](io.md#decoder).[decode](io.md#readonly-decode)*

*Defined in [packages/io/source/decoder/Decoder.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L11)*

#### Type declaration:

▸ (`i`: unknown): *[DecodeEffect](io.md#decodeeffect)‹I›*

**Parameters:**

Name | Type |
------ | ------ |
`i` | unknown |

### `Readonly` encode

• **encode**: *function*

*Inherited from [Encoder](io.md#encoder).[encode](io.md#readonly-encode)*

*Defined in [packages/io/source/encoder/Encoder.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L5)*

#### Type declaration:

▸ (`i`: I): *O*

**Parameters:**

Name | Type |
------ | ------ |
`i` | I |

### `Readonly` expected

• **expected**: *string*

*Inherited from [Decoder](io.md#decoder).[expected](io.md#readonly-expected)*

*Defined in [packages/io/source/decoder/Decoder.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L10)*

### `Readonly` name

• **name**: *string*

*Defined in [packages/io/source/types/Type.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Type.ts#L7)*

### `Const` fromGuard

▸ **fromGuard**<**A**>(`guard`: [Guard](io.md#guard)‹A›, `expected`: string): *[Decoder](io.md#decoder)‹A›*

*Defined in [packages/io/source/decoder/Decoder.ts:55](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L55)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`guard` | [Guard](io.md#guard)‹A› |
`expected` | string |

**Returns:** *[Decoder](io.md#decoder)‹A›*

▸ **fromGuard**<**A**>(`guard`: [Guard](io.md#guard)‹A›, `name`: string, `expected`: string): *[Type](io.md#type)‹A›*

*Defined in [packages/io/source/types/Type.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Type.ts#L16)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`guard` | [Guard](io.md#guard)‹A› | - |
`name` | string | - |
`expected` | string | name |

**Returns:** *[Type](io.md#type)‹A›*

###  id

▸ **id**<**A**>(): *[Encoder](io.md#encoder)‹A, A›*

*Defined in [packages/io/source/encoder/Encoder.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L14)*

**Type parameters:**

▪ **A**: *any*

**Returns:** *[Encoder](io.md#encoder)‹A, A›*

### `Readonly` is

▸ **is**<**A**>(`is`: [Is](lambda.md#is)‹A›): *[Guard](io.md#guard)‹A›*

*Inherited from [Guard](io.md#guard).[is](io.md#readonly-const-is)*

*Defined in [packages/io/source/guard/Guard.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Guard.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`is` | [Is](lambda.md#is)‹A› |

**Returns:** *[Guard](io.md#guard)‹A›*

### ▪ **_id**: *object*

*Defined in [packages/io/source/encoder/Encoder.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L12)*

* **encode**(): *function*

  * <**A**>(`value`: A): *A*

## Type aliases

###  ArrayType

Ƭ **ArrayType**: *[Type](io.md#type)‹ReadonlyArray‹A››*

*Defined in [packages/io/source/types/Array.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Array.ts#L11)*

___

###  DecodeEffect

Ƭ **DecodeEffect**: *Effects‹[DecodeFailure](../interfaces/io.decodefailure.md), A›*

*Defined in [packages/io/source/decoder/Decoder.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L16)*

___

###  DecoderInputConsList

Ƭ **DecoderInputConsList**: *[] extends A ? unknown : function extends function ? [D.TypeOf<T>, DecoderInputConsList<TS>] : unknown*

*Defined in [packages/io/source/types/Intersection.ts:31](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Intersection.ts#L31)*

___

###  EncoderInputConsList

Ƭ **EncoderInputConsList**: *[] extends A ? unknown : function extends function ? [InputOf<T>, EncoderInputConsList<TS>] : unknown*

*Defined in [packages/io/source/encoder/Encoder.ts:89](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L89)*

___

###  EncoderOutputConsList

Ƭ **EncoderOutputConsList**: *[] extends A ? unknown : function extends function ? [OutputOf<T>, EncoderOutputConsList<TS>] : unknown*

*Defined in [packages/io/source/encoder/Encoder.ts:95](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L95)*

___

###  EncoderOutputConsList

Ƭ **EncoderOutputConsList**: *[] extends A ? unknown : function extends function ? [E.OutputOf<T>, EncoderOutputConsList<TS>] : unknown*

*Defined in [packages/io/source/types/Intersection.ts:36](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Intersection.ts#L36)*

___

###  InputIntersection

Ƭ **InputIntersection**: *[UnNest](common.md#unnest)‹[Flatten](common.md#flatten)‹[EncoderInputConsList](io.md#encoderinputconslist)‹A›, unknown››*

*Defined in [packages/io/source/encoder/Encoder.ts:84](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L84)*

___

###  InputOf

Ƭ **InputOf**: *E extends Encoder<infer R, any> ? R : never*

*Defined in [packages/io/source/encoder/Encoder.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L8)*

___

###  IntersectionType

Ƭ **IntersectionType**: *[UnNest](common.md#unnest)‹[Flatten](common.md#flatten)‹[ToGuardTypeConsList](io.md#toguardtypeconslist)‹A›, unknown››*

*Defined in [packages/io/source/guard/Intersection.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Intersection.ts#L10)*

___

###  IntersectionType

Ƭ **IntersectionType**: *[UnNest](common.md#unnest)‹[Flatten](common.md#flatten)‹[ToDecoderTypeConsList](io.md#todecodertypeconslist)‹A›, unknown››*

*Defined in [packages/io/source/decoder/Intersection.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Intersection.ts#L20)*

___

###  IntersectionType

Ƭ **IntersectionType**: *[Type](io.md#type)‹[UnNest](common.md#unnest)‹[Flatten](common.md#flatten)‹[DecoderInputConsList](io.md#decoderinputconslist)‹A›, unknown››, [UnNest](common.md#unnest)‹[Flatten](common.md#flatten)‹[EncoderOutputConsList](io.md#encoderoutputconslist)‹A›, unknown›››*

*Defined in [packages/io/source/types/Intersection.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Intersection.ts#L7)*

___

###  MapType

Ƭ **MapType**: *[Type](io.md#type)‹ReadonlyMap‹K, V››*

*Defined in [packages/io/source/types/Map.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Map.ts#L6)*

___

###  Mixed

Ƭ **Mixed**: *[Type](io.md#type)‹any, any›*

*Defined in [packages/io/source/types/Type.ts:28](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Type.ts#L28)*

___

###  NeverType

Ƭ **NeverType**: *[Type](io.md#type)‹never›*

*Defined in [packages/io/source/types/Never.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Never.ts#L6)*

___

###  OutputIntersection

Ƭ **OutputIntersection**: *[UnNest](common.md#unnest)‹[Flatten](common.md#flatten)‹[EncoderOutputConsList](io.md#encoderoutputconslist)‹A›, unknown››*

*Defined in [packages/io/source/encoder/Encoder.ts:85](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L85)*

___

###  OutputOf

Ƭ **OutputOf**: *E extends Encoder<any, infer R> ? R : never*

*Defined in [packages/io/source/encoder/Encoder.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L9)*

___

###  Props

Ƭ **Props**: *Readonly‹[Record](io.md#const-record)‹PropertyKey, [Mixed](io.md#mixed)››*

*Defined in [packages/io/source/types/helpers.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/helpers.ts#L8)*

___

###  ToDecoderTypeConsList

Ƭ **ToDecoderTypeConsList**: *[] extends A ? unknown : function extends function ? [TypeOf<T>, ToDecoderTypeConsList<TS>] : unknown*

*Defined in [packages/io/source/decoder/Intersection.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Intersection.ts#L22)*

___

###  ToGuardTypeConsList

Ƭ **ToGuardTypeConsList**: *[] extends A ? unknown : function extends function ? [TypeOf<T>, ToGuardTypeConsList<TS>] : unknown*

*Defined in [packages/io/source/guard/Intersection.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Intersection.ts#L12)*

___

###  TypeOf

Ƭ **TypeOf**: *A extends Guard<infer R> ? R : never*

*Defined in [packages/io/source/guard/Guard.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Guard.ts#L11)*

___

###  TypeOf

Ƭ **TypeOf**: *A extends Decoder<infer R> ? R : never*

*Defined in [packages/io/source/decoder/Decoder.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L14)*

___

###  TypeOf

Ƭ **TypeOf**: *[Of](io.md#of)‹A›*

*Defined in [packages/io/source/types/Type.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Type.ts#L10)*

## Variables

### `Const` Array

• **Array**: *[Guard](io.md#guard)‹ReadonlyArray‹unknown››* = Guard.is(isArray)

*Defined in [packages/io/source/guard/Array.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Array.ts#L5)*

___

### `Const` Array

• **Array**: *[Decoder](io.md#decoder)‹ReadonlyArray‹unknown››* = Decoder.fromGuard(
  G.Array,
  'ReadonlyArray<unknown>',
)

*Defined in [packages/io/source/decoder/Array.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Array.ts#L16)*

___

### `Const` Array

• **Array**: *[ArrayType](io.md#arraytype)‹unknown›* = Type.fromGuard(
  G.Array,
  `UnknownArray`,
  `ReadonlyArray<unknown>`,
)

*Defined in [packages/io/source/types/Array.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Array.ts#L5)*

___

### `Const` Boolean

• **Boolean**: *[Guard](io.md#guard)‹boolean›* = Guard.is(isBoolean)

*Defined in [packages/io/source/guard/Boolean.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Boolean.ts#L5)*

___

### `Const` Boolean

• **Boolean**: *[Decoder](io.md#decoder)‹boolean›* = Decoder.fromGuard(G.Boolean, 'boolean')

*Defined in [packages/io/source/decoder/Boolean.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Boolean.ts#L5)*

___

### `Const` Boolean

• **Boolean**: *[Type](io.md#type)‹boolean›* = Type.fromGuard(G.Boolean, `Boolean`, `boolean`)

*Defined in [packages/io/source/types/Boolean.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Boolean.ts#L5)*

___

### `Const` Character

• **Character**: *[Guard](io.md#guard)‹string & object & object›* = refinement(String, isCharacter)

*Defined in [packages/io/source/guard/new-types.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/new-types.ts#L24)*

___

### `Const` Character

• **Character**: *[Decoder](io.md#decoder)‹string & object & object›* = Decoder.fromGuard(G.Character, 'Character')

*Defined in [packages/io/source/decoder/new-types.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/new-types.ts#L6)*

___

### `Const` Character

• **Character**: *[Type](io.md#type)‹string & object & object, string & object & object›* = Type.fromGuard(G.Character, 'Character')

*Defined in [packages/io/source/types/new-types.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/new-types.ts#L6)*

___

### `Const` DecodeFailure

• **DecodeFailure**: *unique symbol* = Symbol.for('DecodeFailure')

*Defined in [packages/io/source/decoder/Decoder.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L18)*

___

### `Const` EmptyString

• **EmptyString**: *[Guard](io.md#guard)‹string & object & object›* = refinement(String, isEmptyString)

*Defined in [packages/io/source/guard/new-types.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/new-types.ts#L22)*

___

### `Const` EmptyString

• **EmptyString**: *[Decoder](io.md#decoder)‹string & object & object›* = Decoder.fromGuard(G.EmptyString, `EmptyString`)

*Defined in [packages/io/source/decoder/new-types.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/new-types.ts#L4)*

___

### `Const` EmptyString

• **EmptyString**: *[Type](io.md#type)‹string & object & object, string & object & object›* = Type.fromGuard(G.EmptyString, 'EmptyString')

*Defined in [packages/io/source/types/new-types.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/new-types.ts#L4)*

___

### `Const` False

• **False**: *[Guard](io.md#guard)‹false›* = Guard.is(isFalse)

*Defined in [packages/io/source/guard/Boolean.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Boolean.ts#L7)*

___

### `Const` False

• **False**: *[Decoder](io.md#decoder)‹boolean›* = Decoder.fromGuard(G.False, 'false')

*Defined in [packages/io/source/decoder/Boolean.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Boolean.ts#L7)*

___

### `Const` False

• **False**: *[Type](io.md#type)‹false›* = Type.fromGuard(G.False, `False`, `false`)

*Defined in [packages/io/source/types/Boolean.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Boolean.ts#L7)*

___

### `Const` Function

• **Function**: *[Guard](io.md#guard)‹Function›* = Guard.is(isFunction)

*Defined in [packages/io/source/guard/Function.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Function.ts#L4)*

___

### `Const` Function

• **Function**: *[Decoder](io.md#decoder)‹Function›* = Decoder.fromGuard(G.Function, 'Function')

*Defined in [packages/io/source/decoder/Function.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Function.ts#L4)*

___

### `Const` Function

• **Function**: *[Type](io.md#type)‹Function›* = Type.fromGuard(G.Function, `Function`)

*Defined in [packages/io/source/types/Function.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Function.ts#L4)*

___

### `Const` Integer

• **Integer**: *[Guard](io.md#guard)‹number & object›* = refinement(Number, isInteger)

*Defined in [packages/io/source/guard/new-types.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/new-types.ts#L26)*

___

### `Const` Integer

• **Integer**: *[Decoder](io.md#decoder)‹number & object›* = Decoder.fromGuard(G.Integer, 'Integer')

*Defined in [packages/io/source/decoder/new-types.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/new-types.ts#L8)*

___

### `Const` Integer

• **Integer**: *[Type](io.md#type)‹number & object, number & object›* = Type.fromGuard(G.Integer, 'Integer')

*Defined in [packages/io/source/types/new-types.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/new-types.ts#L8)*

___

### `Const` Map

• **Map**: *[Guard](io.md#guard)‹ReadonlyMap‹unknown, unknown››* = Guard.is(isMap)

*Defined in [packages/io/source/guard/Map.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Map.ts#L6)*

___

### `Const` Map

• **Map**: *[MapType](io.md#maptype)‹unknown, unknown›* = Type.fromGuard(G.Map, `ReadonlyMap<unknown, unknown>`)

*Defined in [packages/io/source/types/Map.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Map.ts#L4)*

___

### `Const` Maybe

• **Maybe**: *[Type](io.md#type)‹Nothing | Just‹unknown›, Nothing | Just‹unknown››* = Type.fromGuard(G.Maybe, `Maybe<unknown>`)

*Defined in [packages/io/source/types/Maybe.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Maybe.ts#L4)*

___

### `Const` Negative

• **Negative**: *[Guard](io.md#guard)‹number & object›* = refinement(Number, isNegative)

*Defined in [packages/io/source/guard/new-types.ts:27](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/new-types.ts#L27)*

___

### `Const` Negative

• **Negative**: *[Decoder](io.md#decoder)‹number & object›* = Decoder.fromGuard(G.Negative, 'Negative')

*Defined in [packages/io/source/decoder/new-types.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/new-types.ts#L9)*

___

### `Const` Negative

• **Negative**: *[Type](io.md#type)‹number & object, number & object›* = Type.fromGuard(G.Negative, 'Negative')

*Defined in [packages/io/source/types/new-types.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/new-types.ts#L9)*

___

### `Const` NegativeInteger

• **NegativeInteger**: *[Guard](io.md#guard)‹number & object›* = refinement(Number, isNegativeInteger)

*Defined in [packages/io/source/guard/new-types.ts:28](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/new-types.ts#L28)*

___

### `Const` NegativeInteger

• **NegativeInteger**: *[Decoder](io.md#decoder)‹number & object›* = Decoder.fromGuard(G.NegativeInteger, 'NegativeInteger')

*Defined in [packages/io/source/decoder/new-types.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/new-types.ts#L10)*

___

### `Const` NegativeInteger

• **NegativeInteger**: *[Type](io.md#type)‹number & object, number & object›* = Type.fromGuard(G.NegativeInteger, 'NegativeInteger')

*Defined in [packages/io/source/types/new-types.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/new-types.ts#L10)*

___

### `Const` Never

• **Never**: *[Guard](io.md#guard)* = { is: always(false) } as Guard

*Defined in [packages/io/source/guard/Never.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Never.ts#L4)*

___

### `Const` Never

• **Never**: *[Decoder](io.md#decoder)* = Decoder.fromGuard(G.Never, `never`)

*Defined in [packages/io/source/decoder/Never.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Never.ts#L4)*

___

### `Const` NonEmptyString

• **NonEmptyString**: *[Guard](io.md#guard)‹string & object & object›* = refinement(String, isNonEmptyString)

*Defined in [packages/io/source/guard/new-types.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/new-types.ts#L23)*

___

### `Const` NonEmptyString

• **NonEmptyString**: *[Decoder](io.md#decoder)‹string & object & object›* = Decoder.fromGuard(G.NonEmptyString, 'NonEmptyString')

*Defined in [packages/io/source/decoder/new-types.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/new-types.ts#L5)*

___

### `Const` NonEmptyString

• **NonEmptyString**: *[Type](io.md#type)‹string & object & object, string & object & object›* = Type.fromGuard(G.NonEmptyString, 'NonEmptyString')

*Defined in [packages/io/source/types/new-types.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/new-types.ts#L5)*

___

### `Const` NonNegative

• **NonNegative**: *[Guard](io.md#guard)‹number & object | number & object›* = refinement(Number, isNonNegative)

*Defined in [packages/io/source/guard/new-types.ts:29](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/new-types.ts#L29)*

___

### `Const` NonNegative

• **NonNegative**: *[Decoder](io.md#decoder)‹number & object | number & object›* = Decoder.fromGuard(G.NonNegative, 'NonNegative')

*Defined in [packages/io/source/decoder/new-types.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/new-types.ts#L11)*

___

### `Const` NonNegative

• **NonNegative**: *[Type](io.md#type)‹number & object | number & object, number & object | number & object›* = Type.fromGuard(G.NonNegative, 'NonNegative')

*Defined in [packages/io/source/types/new-types.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/new-types.ts#L11)*

___

### `Const` NonNegativeInteger

• **NonNegativeInteger**: *[Guard](io.md#guard)‹number & object | number & object›* = refinement(Number, isNonNegativeInteger)

*Defined in [packages/io/source/guard/new-types.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/new-types.ts#L30)*

___

### `Const` NonNegativeInteger

• **NonNegativeInteger**: *[Decoder](io.md#decoder)‹number & object | number & object›* = Decoder.fromGuard(G.NonNegativeInteger, 'NonNegativeInteger')

*Defined in [packages/io/source/decoder/new-types.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/new-types.ts#L12)*

___

### `Const` NonNegativeInteger

• **NonNegativeInteger**: *[Type](io.md#type)‹number & object | number & object, number & object | number & object›* = Type.fromGuard(G.NonNegativeInteger, 'NonNegativeInteger')

*Defined in [packages/io/source/types/new-types.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/new-types.ts#L12)*

___

### `Const` NonPositive

• **NonPositive**: *[Guard](io.md#guard)‹number & object | number & object›* = refinement(Number, isNonPositive)

*Defined in [packages/io/source/guard/new-types.ts:31](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/new-types.ts#L31)*

___

### `Const` NonPositive

• **NonPositive**: *[Decoder](io.md#decoder)‹number & object | number & object›* = Decoder.fromGuard(G.NonPositive, 'NonPositive')

*Defined in [packages/io/source/decoder/new-types.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/new-types.ts#L13)*

___

### `Const` NonPositive

• **NonPositive**: *[Type](io.md#type)‹number & object | number & object, number & object | number & object›* = Type.fromGuard(G.NonPositive, 'NonPositive')

*Defined in [packages/io/source/types/new-types.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/new-types.ts#L13)*

___

### `Const` NonPositiveInteger

• **NonPositiveInteger**: *[Guard](io.md#guard)‹number & object | number & object›* = refinement(Number, isNonPositiveInteger)

*Defined in [packages/io/source/guard/new-types.ts:32](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/new-types.ts#L32)*

___

### `Const` NonPositiveInteger

• **NonPositiveInteger**: *[Decoder](io.md#decoder)‹number & object | number & object›* = Decoder.fromGuard(G.NonPositiveInteger, 'NonPositiveInteger')

*Defined in [packages/io/source/decoder/new-types.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/new-types.ts#L14)*

___

### `Const` NonPositiveInteger

• **NonPositiveInteger**: *[Type](io.md#type)‹number & object | number & object, number & object | number & object›* = Type.fromGuard(G.NonPositiveInteger, 'NonPositiveInteger')

*Defined in [packages/io/source/types/new-types.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/new-types.ts#L14)*

___

### `Const` NonZero

• **NonZero**: *[Guard](io.md#guard)‹number & object›* = refinement(Number, isNonZero)

*Defined in [packages/io/source/guard/new-types.ts:33](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/new-types.ts#L33)*

___

### `Const` NonZero

• **NonZero**: *[Decoder](io.md#decoder)‹number & object›* = Decoder.fromGuard(G.NonZero, 'NonZero')

*Defined in [packages/io/source/decoder/new-types.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/new-types.ts#L15)*

___

### `Const` NonZero

• **NonZero**: *[Type](io.md#type)‹number & object, number & object›* = Type.fromGuard(G.NonZero, 'NonZero')

*Defined in [packages/io/source/types/new-types.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/new-types.ts#L15)*

___

### `Const` NonZeroInteger

• **NonZeroInteger**: *[Guard](io.md#guard)‹number & object›* = refinement(Number, isNonZeroInteger)

*Defined in [packages/io/source/guard/new-types.ts:34](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/new-types.ts#L34)*

___

### `Const` NonZeroInteger

• **NonZeroInteger**: *[Decoder](io.md#decoder)‹number & object›* = Decoder.fromGuard(G.NonZeroInteger, 'NonZeroInteger')

*Defined in [packages/io/source/decoder/new-types.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/new-types.ts#L16)*

___

### `Const` NonZeroInteger

• **NonZeroInteger**: *[Type](io.md#type)‹number & object, number & object›* = Type.fromGuard(G.NonZeroInteger, 'NonZeroInteger')

*Defined in [packages/io/source/types/new-types.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/new-types.ts#L16)*

___

### `Const` Null

• **Null**: *[Guard](io.md#guard)‹null›* = Guard.is(isNull)

*Defined in [packages/io/source/guard/Null.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Null.ts#L5)*

___

### `Const` Null

• **Null**: *[Decoder](io.md#decoder)‹null›* = Decoder.fromGuard(G.Null, `null`)

*Defined in [packages/io/source/decoder/Null.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Null.ts#L5)*

___

### `Const` Null

• **Null**: *[Type](io.md#type)‹null›* = Type.fromGuard(G.Null, `Null`, `null`)

*Defined in [packages/io/source/types/Null.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Null.ts#L5)*

___

### `Const` Number

• **Number**: *[Guard](io.md#guard)‹number›* = Guard.is(isNumber)

*Defined in [packages/io/source/guard/Number.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Number.ts#L5)*

___

### `Const` Number

• **Number**: *[Decoder](io.md#decoder)‹number›* = Decoder.fromGuard(G.Number, `number`)

*Defined in [packages/io/source/decoder/Number.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Number.ts#L5)*

___

### `Const` Number

• **Number**: *[Type](io.md#type)‹number›* = Type.fromGuard(G.Number, 'Number', 'number')

*Defined in [packages/io/source/types/Number.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Number.ts#L5)*

___

### `Const` Positive

• **Positive**: *[Guard](io.md#guard)‹number & object›* = refinement(Number, isPositive)

*Defined in [packages/io/source/guard/new-types.ts:35](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/new-types.ts#L35)*

___

### `Const` Positive

• **Positive**: *[Decoder](io.md#decoder)‹number & object›* = Decoder.fromGuard(G.Positive, 'Positive')

*Defined in [packages/io/source/decoder/new-types.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/new-types.ts#L17)*

___

### `Const` Positive

• **Positive**: *[Type](io.md#type)‹number & object, number & object›* = Type.fromGuard(G.Positive, 'Positive')

*Defined in [packages/io/source/types/new-types.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/new-types.ts#L17)*

___

### `Const` PositiveInteger

• **PositiveInteger**: *[Guard](io.md#guard)‹number & object›* = refinement(Number, isPositiveInteger)

*Defined in [packages/io/source/guard/new-types.ts:36](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/new-types.ts#L36)*

___

### `Const` PositiveInteger

• **PositiveInteger**: *[Decoder](io.md#decoder)‹number & object›* = Decoder.fromGuard(G.PositiveInteger, 'PositiveInteger')

*Defined in [packages/io/source/decoder/new-types.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/new-types.ts#L18)*

___

### `Const` PositiveInteger

• **PositiveInteger**: *[Type](io.md#type)‹number & object, number & object›* = Type.fromGuard(G.PositiveInteger, 'PositiveInteger')

*Defined in [packages/io/source/types/new-types.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/new-types.ts#L18)*

___

### `Const` Record

• **Record**: *[Guard](io.md#guard)‹Readonly‹[Record](io.md#const-record)‹PropertyKey, unknown›››* = Guard.is(isRecord)

*Defined in [packages/io/source/guard/Record.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Record.ts#L5)*

___

### `Const` Record

• **Record**: *[Decoder](io.md#decoder)‹object›* = Decoder.fromGuard(G.Record, 'Record<PropertyKey, unknown>')

*Defined in [packages/io/source/decoder/Record.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Record.ts#L10)*

___

### `Const` Record

• **Record**: *[Type](io.md#type)‹object, object›* = Type.fromGuard(G.Record, `Record<unknown, unknown>`)

*Defined in [packages/io/source/types/Record.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Record.ts#L8)*

___

### `Const` Set

• **Set**: *[Type](io.md#type)‹ReadonlySet‹unknown››* = Type.fromGuard(
  G.Set,
  `ReadonlySet<unknown, unknown>`,
)

*Defined in [packages/io/source/types/Set.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Set.ts#L6)*

___

### `Const` String

• **String**: *[Guard](io.md#guard)‹string›* = Guard.is(isString)

*Defined in [packages/io/source/guard/String.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/String.ts#L5)*

___

### `Const` String

• **String**: *[Type](io.md#type)‹string›* = Type.fromGuard(G.String, `String`, `string`)

*Defined in [packages/io/source/types/String.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/String.ts#L5)*

___

### `Const` True

• **True**: *[Guard](io.md#guard)‹true›* = Guard.is(isTrue)

*Defined in [packages/io/source/guard/Boolean.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Boolean.ts#L6)*

___

### `Const` True

• **True**: *[Decoder](io.md#decoder)‹boolean›* = Decoder.fromGuard(G.True, 'true')

*Defined in [packages/io/source/decoder/Boolean.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Boolean.ts#L6)*

___

### `Const` True

• **True**: *[Type](io.md#type)‹true›* = Type.fromGuard(G.True, `True`, `true`)

*Defined in [packages/io/source/types/Boolean.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Boolean.ts#L6)*

___

### `Const` Undefined

• **Undefined**: *[Guard](io.md#guard)‹undefined›* = Guard.is(isUndefined)

*Defined in [packages/io/source/guard/Undefined.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Undefined.ts#L5)*

___

### `Const` Undefined

• **Undefined**: *[Decoder](io.md#decoder)‹undefined›* = Decoder.fromGuard(G.Undefined, 'undefined')

*Defined in [packages/io/source/decoder/Undefined.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Undefined.ts#L5)*

___

### `Const` Undefined

• **Undefined**: *[Type](io.md#type)‹undefined›* = Type.fromGuard(G.Undefined, `Undefined`, `undefined`)

*Defined in [packages/io/source/types/Undefined.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Undefined.ts#L5)*

___

### `Const` UnknownEither

• **UnknownEither**: *[Guard](io.md#guard)‹[Either](either.md#either)‹unknown, unknown››* = refinement(
  Record,
  (e): e is Either<unknown, unknown> => isLeft(e as any) || isRight(e as any),
)

*Defined in [packages/io/source/guard/Either.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Either.ts#L6)*

___

### `Const` UnknownEither

• **UnknownEither**: *[Decoder](io.md#decoder)‹[Either](either.md#either)‹unknown, unknown››* = Decoder.fromGuard(
  G.Either,
  'Either<unknown, unknown>',
)

*Defined in [packages/io/source/decoder/Either.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Either.ts#L6)*

___

### `Const` UnknownMap

• **UnknownMap**: *[Decoder](io.md#decoder)‹ReadonlyMap‹unknown, unknown››* = Decoder.fromGuard(
  G.Map,
  `ReadonlyMap<unknown, unknown>`,
)

*Defined in [packages/io/source/decoder/Map.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Map.ts#L15)*

___

### `Const` Uuid

• **Uuid**: *[Guard](io.md#guard)‹UUID›* = refinement(String, isUuid)

*Defined in [packages/io/source/guard/Uuid.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Uuid.ts#L6)*

___

### `Const` Uuid

• **Uuid**: *[Decoder](io.md#decoder)‹UUID›* = Decoder.fromGuard(G.Uuid, `Uuid`)

*Defined in [packages/io/source/decoder/Uuid.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Uuid.ts#L5)*

___

### `Const` Uuid

• **Uuid**: *[Type](io.md#type)‹UUID›* = Type.fromGuard(G.Uuid, `Uuid`)

*Defined in [packages/io/source/types/Uuid.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Uuid.ts#L5)*

___

### `Const` Void

• **Void**: *[Guard](io.md#guard)‹void›* = Guard.is(isUndefined)

*Defined in [packages/io/source/guard/Undefined.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Undefined.ts#L6)*

___

### `Const` Void

• **Void**: *[Decoder](io.md#decoder)‹void›* = Decoder.fromGuard(G.Void, 'void')

*Defined in [packages/io/source/decoder/Undefined.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Undefined.ts#L6)*

___

### `Const` Void

• **Void**: *[Type](io.md#type)‹void›* = Type.fromGuard(G.Void, `Void`, `void`)

*Defined in [packages/io/source/types/Void.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Void.ts#L5)*

___

### `Const` Zero

• **Zero**: *[Guard](io.md#guard)‹number & object›* = refinement(Number, isZero)

*Defined in [packages/io/source/guard/new-types.ts:37](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/new-types.ts#L37)*

___

### `Const` Zero

• **Zero**: *[Decoder](io.md#decoder)‹number & object›* = Decoder.fromGuard(G.Zero, 'Zero')

*Defined in [packages/io/source/decoder/new-types.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/new-types.ts#L19)*

___

### `Const` Zero

• **Zero**: *[Type](io.md#type)‹number & object, number & object›* = Type.fromGuard(G.Zero, 'Zero')

*Defined in [packages/io/source/types/new-types.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/new-types.ts#L19)*

___

### `Const` _Either

• **_Either**: *[Type](io.md#type)‹Left‹unknown› | Right‹unknown›, Left‹unknown› | Right‹unknown››* = Type.fromGuard(G.Either, `Either<unknown, unknown>`)

*Defined in [packages/io/source/types/Either.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Either.ts#L5)*

___

### `Const` _Maybe

• **_Maybe**: *[Decoder](io.md#decoder)‹Nothing | Just‹unknown››* = Decoder.fromGuard(G.Maybe, 'Maybe<unknown>')

*Defined in [packages/io/source/decoder/Maybe.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Maybe.ts#L8)*

___

### `Const` _RemoteData

• **_RemoteData**: *[Guard](io.md#guard)‹object | object | Failure‹unknown› | Success‹unknown››* = refinement(
  Record,
  (r): r is RemoteData<unknown, unknown> =>
    isNoData(r) ||
    isLoading(r as RemoteData<unknown, unknown>) ||
    isFailure(r as RemoteData<unknown, unknown>) ||
    isSuccess(r as RemoteData<unknown, unknown>),
)

*Defined in [packages/io/source/guard/RemoteData.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/RemoteData.ts#L9)*

___

### `Const` _RemoteData

• **_RemoteData**: *[Decoder](io.md#decoder)‹[RemoteData](remote_data.md#remotedata)‹unknown, unknown››* = Decoder.fromGuard(
  G.RemoteData,
  `RemoteData<unknown unknown>`,
)

*Defined in [packages/io/source/decoder/RemoteData.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/RemoteData.ts#L8)*

___

### `Const` _RemoteData

• **_RemoteData**: *[Type](io.md#type)‹[RemoteData](remote_data.md#remotedata)‹unknown, unknown››* = Type.fromGuard(
  G.RemoteData,
  `RemoteData<unknown, unknown>`,
)

*Defined in [packages/io/source/types/RemoteData.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/RemoteData.ts#L7)*

___

### `Const` _Set

• **_Set**: *[Decoder](io.md#decoder)‹ReadonlySet‹unknown››* = Decoder.fromGuard(G.Set, `ReadonlySet<unknown>`)

*Defined in [packages/io/source/decoder/Set.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Set.ts#L6)*

___

### `Const` decode

• **decode**: *function* = curry(__decode)

*Defined in [packages/io/source/decoder/Decoder.ts:45](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L45)*

#### Type declaration:

▸ <**A**>(`decoder`: [Decoder](io.md#decoder)‹A›, `input`: unknown): *Effects‹[DecodeFailure](../interfaces/io.decodefailure.md), A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`decoder` | [Decoder](io.md#decoder)‹A› |
`input` | unknown |

▸ <**A**>(`decoder`: [Decoder](io.md#decoder)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`decoder` | [Decoder](io.md#decoder)‹A› |

▸ (`input`: unknown): *Effects‹[DecodeFailure](../interfaces/io.decodefailure.md), A›*

**Parameters:**

Name | Type |
------ | ------ |
`input` | unknown |

___

### `Const` guard

• **guard**: *function* = curry(__guard) as {
  <A>(guard: Guard<A>, value: unknown): value is A
  <A>(guard: Guard<A>): Is<A>
}

*Defined in [packages/io/source/guard/Guard.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Guard.ts#L13)*

#### Type declaration:

▸ <**A**>(`guard`: [Guard](io.md#guard)‹A›, `value`: unknown): *value is A*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`guard` | [Guard](io.md#guard)‹A› |
`value` | unknown |

▸ <**A**>(`guard`: [Guard](io.md#guard)‹A›): *[Is](lambda.md#is)‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`guard` | [Guard](io.md#guard)‹A› |

___

### `Const` isNoData

• **isNoData**: *function* = equals(NoData)

*Defined in [packages/io/source/guard/RemoteData.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/RemoteData.ts#L7)*

#### Type declaration:

▸ (`value`: unknown): *value is A*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

## Functions

###  __decode

▸ **__decode**<**A**>(`decoder`: [Decoder](io.md#decoder)‹A›, `input`: unknown): *Generator‹Env‹[DecodeFailure](../interfaces/io.decodefailure.md)‹›, any›, A, any›*

*Defined in [packages/io/source/decoder/Decoder.ts:50](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L50)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`decoder` | [Decoder](io.md#decoder)‹A› |
`input` | unknown |

**Returns:** *Generator‹Env‹[DecodeFailure](../interfaces/io.decodefailure.md)‹›, any›, A, any›*

___

###  __guard

▸ **__guard**<**A**>(`guard`: [Guard](io.md#guard)‹A›, `value`: unknown): *boolean*

*Defined in [packages/io/source/guard/Guard.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Guard.ts#L18)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`guard` | [Guard](io.md#guard)‹A› |
`value` | unknown |

**Returns:** *boolean*

___

### `Const` array

▸ **array**<**G**>(`g`: G): *[Guard](io.md#guard)‹ReadonlyArray‹[TypeOf](io.md#typeof)‹G›››*

*Defined in [packages/io/source/guard/Array.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Array.ts#L7)*

**Type parameters:**

▪ **G**: *[Guard](io.md#guard)*

**Parameters:**

Name | Type |
------ | ------ |
`g` | G |

**Returns:** *[Guard](io.md#guard)‹ReadonlyArray‹[TypeOf](io.md#typeof)‹G›››*

___

### `Const` array

▸ **array**<**A**>(`decoder`: A): *[Decoder](io.md#decoder)‹ReadonlyArray‹[TypeOf](io.md#typeof)‹A›››*

*Defined in [packages/io/source/decoder/Array.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Array.ts#L21)*

**Type parameters:**

▪ **A**: *[Decoder](io.md#decoder)*

**Parameters:**

Name | Type |
------ | ------ |
`decoder` | A |

**Returns:** *[Decoder](io.md#decoder)‹ReadonlyArray‹[TypeOf](io.md#typeof)‹A›››*

___

###  array

▸ **array**<**I**, **O**>(`items`: [Encoder](io.md#encoder)‹I, O›): *[Encoder](io.md#encoder)‹keyof I[], keyof O[]›*

*Defined in [packages/io/source/encoder/Encoder.ts:59](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L59)*

**Type parameters:**

▪ **I**

▪ **O**

**Parameters:**

Name | Type |
------ | ------ |
`items` | [Encoder](io.md#encoder)‹I, O› |

**Returns:** *[Encoder](io.md#encoder)‹keyof I[], keyof O[]›*

___

###  array

▸ **array**<**A**>(`type`: A, `name`: string): *[ArrayType](io.md#arraytype)‹[Of](io.md#of)‹A››*

*Defined in [packages/io/source/types/Array.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Array.ts#L13)*

**Type parameters:**

▪ **A**: *[Mixed](io.md#mixed)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`type` | A | - |
`name` | string | `ReadonlyArray<${type.name}>` |

**Returns:** *[ArrayType](io.md#arraytype)‹[Of](io.md#of)‹A››*

___

###  catchDecodeFailure

▸ **catchDecodeFailure**<**A**>(`effect`: [DecodeEffect](io.md#decodeeffect)‹A›): *[PureEffect](effects.md#pureeffect)‹[Either](either.md#either)‹[DecodeError](io.md#decodeerror), A››*

*Defined in [packages/io/source/decoder/Decoder.ts:69](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L69)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`effect` | [DecodeEffect](io.md#decodeeffect)‹A› |

**Returns:** *[PureEffect](effects.md#pureeffect)‹[Either](either.md#either)‹[DecodeError](io.md#decodeerror), A››*

▸ **catchDecodeFailure**<**A**, **B**>(`effect`: [DecodeEffect](io.md#decodeeffect)‹A›, `onError`: function): *[PureEffect](effects.md#pureeffect)‹[Either](either.md#either)‹keyof [DecodeError, B], A››*

*Defined in [packages/io/source/decoder/Decoder.ts:70](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L70)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **effect**: *[DecodeEffect](io.md#decodeeffect)‹A›*

▪ **onError**: *function*

▸ (`error`: [DecodeError](io.md#decodeerror)): *B*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [DecodeError](io.md#decodeerror) |

**Returns:** *[PureEffect](effects.md#pureeffect)‹[Either](either.md#either)‹keyof [DecodeError, B], A››*

___

### `Const` decodeFailure

▸ **decodeFailure**(`e`: [DecodeError](io.md#decodeerror)): *Effects‹object, any›*

*Defined in [packages/io/source/decoder/Decoder.ts:67](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Decoder.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | [DecodeError](io.md#decodeerror) |

**Returns:** *Effects‹object, any›*

___

###  decodePartialError

▸ **decodePartialError**(`errors`: ReadonlyArray‹keyof [DecodeError, keyof any]›, `expected`: string, `value`: string): *[DecodeError](io.md#decodeerror)*

*Defined in [packages/io/source/decoder/Partial.ts:53](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Partial.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`errors` | ReadonlyArray‹keyof [DecodeError, keyof any]› |
`expected` | string |
`value` | string |

**Returns:** *[DecodeError](io.md#decodeerror)*

___

###  decodeRecordError

▸ **decodeRecordError**(`errors`: ReadonlyArray‹keyof [DecodeError, keyof any]›, `expected`: string, `value`: string): *[DecodeError](io.md#decodeerror)*

*Defined in [packages/io/source/decoder/Record.ts:56](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Record.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`errors` | ReadonlyArray‹keyof [DecodeError, keyof any]› |
`expected` | string |
`value` | string |

**Returns:** *[DecodeError](io.md#decodeerror)*

___

### `Const` either

▸ **either**<**L**, **R**>(`left`: L, `right`: R): *[Guard](io.md#guard)‹[Either](either.md#either)‹[TypeOf](io.md#typeof)‹L›, [TypeOf](io.md#typeof)‹R›››*

*Defined in [packages/io/source/guard/Either.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Either.ts#L13)*

**Type parameters:**

▪ **L**: *[Guard](io.md#guard)*

▪ **R**: *[Guard](io.md#guard)*

**Parameters:**

Name | Type |
------ | ------ |
`left` | L |
`right` | R |

**Returns:** *[Guard](io.md#guard)‹[Either](either.md#either)‹[TypeOf](io.md#typeof)‹L›, [TypeOf](io.md#typeof)‹R›››*

___

### `Const` either

▸ **either**<**A**, **B**>(`left`: [Decoder](io.md#decoder)‹A›, `right`: [Decoder](io.md#decoder)‹B›): *[Decoder](io.md#decoder)‹[Either](either.md#either)‹A, B››*

*Defined in [packages/io/source/decoder/Either.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Either.ts#L11)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`left` | [Decoder](io.md#decoder)‹A› |
`right` | [Decoder](io.md#decoder)‹B› |

**Returns:** *[Decoder](io.md#decoder)‹[Either](either.md#either)‹A, B››*

___

### `Const` either

▸ **either**<**A**, **B**>(`a`: A, `b`: B): *[Type](io.md#type)‹[Either](either.md#either)‹[Of](io.md#of)‹A›, [Of](io.md#of)‹B›››*

*Defined in [packages/io/source/types/Either.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Either.ts#L9)*

**Type parameters:**

▪ **A**: *[Type](io.md#type)*

▪ **B**: *[Type](io.md#type)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |

**Returns:** *[Type](io.md#type)‹[Either](either.md#either)‹[Of](io.md#of)‹A›, [Of](io.md#of)‹B›››*

___

###  formatArrayErrors

▸ **formatArrayErrors**(`errors`: ReadonlyArray‹keyof [DecodeError, number]›, `value`: string, `expected`: string): *[DecodeError](io.md#decodeerror)*

*Defined in [packages/io/source/decoder/Array.ts:44](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Array.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`errors` | ReadonlyArray‹keyof [DecodeError, number]› |
`value` | string |
`expected` | string |

**Returns:** *[DecodeError](io.md#decodeerror)*

___

###  getDefaultPartialExpected

▸ **getDefaultPartialExpected**<**A**>(`decoders`: A): *string*

*Defined in [packages/io/source/decoder/Partial.ts:44](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Partial.ts#L44)*

**Type parameters:**

▪ **A**: *Readonly‹[Record](io.md#const-record)‹PropertyKey, [Decoder](io.md#decoder)››*

**Parameters:**

Name | Type |
------ | ------ |
`decoders` | A |

**Returns:** *string*

___

###  getDefaultRecordExpected

▸ **getDefaultRecordExpected**<**A**>(`decoders`: A): *string*

*Defined in [packages/io/source/decoder/Record.ts:48](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Record.ts#L48)*

**Type parameters:**

▪ **A**: *Readonly‹[Record](io.md#const-record)‹PropertyKey, [Decoder](io.md#decoder)››*

**Parameters:**

Name | Type |
------ | ------ |
`decoders` | A |

**Returns:** *string*

___

###  getDefaultRecordExpected

▸ **getDefaultRecordExpected**<**A**>(`decoders`: A): *string*

*Defined in [packages/io/source/types/Record.ts:33](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Record.ts#L33)*

**Type parameters:**

▪ **A**: *Readonly‹[Record](io.md#const-record)‹PropertyKey, [Type](io.md#type)››*

**Parameters:**

Name | Type |
------ | ------ |
`decoders` | A |

**Returns:** *string*

___

### `Const` getIntersectionName

▸ **getIntersectionName**(`types`: keyof Mixed[]): *string*

*Defined in [packages/io/source/types/Intersection.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Intersection.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`types` | keyof Mixed[] |

**Returns:** *string*

___

### `Const` getUnionName

▸ **getUnionName**(`types`: keyof Mixed[]): *string*

*Defined in [packages/io/source/types/Union.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Union.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`types` | keyof Mixed[] |

**Returns:** *string*

___

### `Const` intersection

▸ **intersection**<**A**>(`guards`: A): *[Guard](io.md#guard)‹[IntersectionType](io.md#intersectiontype)‹A››*

*Defined in [packages/io/source/guard/Intersection.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Intersection.ts#L4)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[Guard](io.md#guard)›*

**Parameters:**

Name | Type |
------ | ------ |
`guards` | A |

**Returns:** *[Guard](io.md#guard)‹[IntersectionType](io.md#intersectiontype)‹A››*

___

### `Const` intersection

▸ **intersection**<**A**>(`decoders`: A): *[Decoder](io.md#decoder)‹[IntersectionType](io.md#intersectiontype)‹A››*

*Defined in [packages/io/source/decoder/Intersection.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Intersection.ts#L7)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[Decoder](io.md#decoder)‹any››*

**Parameters:**

Name | Type |
------ | ------ |
`decoders` | A |

**Returns:** *[Decoder](io.md#decoder)‹[IntersectionType](io.md#intersectiontype)‹A››*

___

###  intersection

▸ **intersection**<**A**>(`encoders`: A): *[Encoder](io.md#encoder)‹[InputIntersection](io.md#inputintersection)‹A›, [OutputIntersection](io.md#outputintersection)‹A››*

*Defined in [packages/io/source/encoder/Encoder.ts:76](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L76)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[Encoder](io.md#encoder)›*

**Parameters:**

Name | Type |
------ | ------ |
`encoders` | A |

**Returns:** *[Encoder](io.md#encoder)‹[InputIntersection](io.md#inputintersection)‹A›, [OutputIntersection](io.md#outputintersection)‹A››*

___

###  intersection

▸ **intersection**<**A**>(`types`: A, `name`: string): *[IntersectionType](io.md#intersectiontype)‹A›*

*Defined in [packages/io/source/types/Intersection.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Intersection.ts#L15)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[Mixed](io.md#mixed)›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`types` | A | - |
`name` | string | getIntersectionName(types) |

**Returns:** *[IntersectionType](io.md#intersectiontype)‹A›*

___

###  literal

▸ **literal**<**A**>(...`values`: A): *[Guard](io.md#guard)‹A[number]›*

*Defined in [packages/io/source/guard/Literal.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Literal.ts#L4)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[ComparableValues](lambda.md#comparablevalues)›*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | A |

**Returns:** *[Guard](io.md#guard)‹A[number]›*

___

###  literal

▸ **literal**<**A**>(...`values`: A): *[Decoder](io.md#decoder)‹A[number]›*

*Defined in [packages/io/source/decoder/Literal.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Literal.ts#L6)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[ComparableValues](lambda.md#comparablevalues)›*

**Parameters:**

Name | Type |
------ | ------ |
`...values` | A |

**Returns:** *[Decoder](io.md#decoder)‹A[number]›*

___

###  literal

▸ **literal**<**A**>(`value`: A, `name`: string): *[Type](io.md#type)‹A›*

*Defined in [packages/io/source/types/Literal.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Literal.ts#L5)*

**Type parameters:**

▪ **A**: *[ComparableValues](lambda.md#comparablevalues)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | A | - |
`name` | string | typeof value |

**Returns:** *[Type](io.md#type)‹A›*

___

### `Const` map

▸ **map**<**K**, **V**>(`key`: K, `value`: V): *[Guard](io.md#guard)‹ReadonlyMap‹[TypeOf](io.md#typeof)‹K›, [TypeOf](io.md#typeof)‹V›››*

*Defined in [packages/io/source/guard/Map.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Map.ts#L8)*

**Type parameters:**

▪ **K**: *[Guard](io.md#guard)*

▪ **V**: *[Guard](io.md#guard)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | V |

**Returns:** *[Guard](io.md#guard)‹ReadonlyMap‹[TypeOf](io.md#typeof)‹K›, [TypeOf](io.md#typeof)‹V›››*

___

### `Const` map

▸ **map**<**K**, **V**>(`key`: K, `value`: V): *[Decoder](io.md#decoder)‹ReadonlyMap‹[TypeOf](io.md#typeof)‹K›, [TypeOf](io.md#typeof)‹V›››*

*Defined in [packages/io/source/decoder/Map.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Map.ts#L22)*

**Type parameters:**

▪ **K**: *[Decoder](io.md#decoder)*

▪ **V**: *[Decoder](io.md#decoder)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | V |

**Returns:** *[Decoder](io.md#decoder)‹ReadonlyMap‹[TypeOf](io.md#typeof)‹K›, [TypeOf](io.md#typeof)‹V›››*

___

###  map

▸ **map**<**K**, **V**>(`key`: K, `value`: V, `name`: string, `expected`: string): *[MapType](io.md#maptype)‹[Of](io.md#of)‹K›, [Of](io.md#of)‹V››*

*Defined in [packages/io/source/types/Map.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Map.ts#L8)*

**Type parameters:**

▪ **K**: *[Mixed](io.md#mixed)*

▪ **V**: *[Mixed](io.md#mixed)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`key` | K | - |
`value` | V | - |
`name` | string | `ReadonlyMap<${key.name}, ${value.name}>` |
`expected` | string | `ReadonlyMap<${key.expected}, ${value.expected}>` |

**Returns:** *[MapType](io.md#maptype)‹[Of](io.md#of)‹K›, [Of](io.md#of)‹V››*

___

### `Const` maybe

▸ **maybe**<**A**>(`guard`: [Guard](io.md#guard)‹A›): *[Guard](io.md#guard)‹[Maybe](io.md#const-maybe)‹A››*

*Defined in [packages/io/source/guard/Maybe.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Maybe.ts#L12)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`guard` | [Guard](io.md#guard)‹A› |

**Returns:** *[Guard](io.md#guard)‹[Maybe](io.md#const-maybe)‹A››*

___

### `Const` maybe

▸ **maybe**<**A**>(`a`: A): *[Decoder](io.md#decoder)‹[Maybe](io.md#const-maybe)‹[TypeOf](io.md#typeof)‹A›››*

*Defined in [packages/io/source/decoder/Maybe.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Maybe.ts#L12)*

**Type parameters:**

▪ **A**: *[Decoder](io.md#decoder)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *[Decoder](io.md#decoder)‹[Maybe](io.md#const-maybe)‹[TypeOf](io.md#typeof)‹A›››*

___

### `Const` maybe

▸ **maybe**<**A**>(`type`: A, `name`: string, `expected`: string): *[Type](io.md#type)‹Nothing | Just‹any›, Nothing | Just‹any››*

*Defined in [packages/io/source/types/Maybe.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Maybe.ts#L6)*

**Type parameters:**

▪ **A**: *[Mixed](io.md#mixed)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`type` | A | - |
`name` | string | `Maybe<${type.name}>` |
`expected` | string | `Maybe<${type.expected}>` |

**Returns:** *[Type](io.md#type)‹Nothing | Just‹any›, Nothing | Just‹any››*

___

### `Const` nullable

▸ **nullable**<**A**>(`g`: A): *[Guard](io.md#guard)‹[TypeOf](io.md#typeof)‹A› | null›*

*Defined in [packages/io/source/guard/Null.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Null.ts#L6)*

**Type parameters:**

▪ **A**: *[Guard](io.md#guard)‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`g` | A |

**Returns:** *[Guard](io.md#guard)‹[TypeOf](io.md#typeof)‹A› | null›*

___

### `Const` nullable

▸ **nullable**<**A**>(`d`: A): *[Decoder](io.md#decoder)‹[TypeOf](io.md#typeof)‹A› | null›*

*Defined in [packages/io/source/decoder/Null.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Null.ts#L7)*

**Type parameters:**

▪ **A**: *[Decoder](io.md#decoder)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | A |

**Returns:** *[Decoder](io.md#decoder)‹[TypeOf](io.md#typeof)‹A› | null›*

___

### `Const` nullable

▸ **nullable**<**A**>(`type`: A): *[Type](io.md#type)‹null | [Of](io.md#of)‹A››*

*Defined in [packages/io/source/types/Null.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Null.ts#L6)*

**Type parameters:**

▪ **A**: *[Type](io.md#type)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | A |

**Returns:** *[Type](io.md#type)‹null | [Of](io.md#of)‹A››*

___

###  partial

▸ **partial**<**R**>(`props`: R): *[Guard](io.md#guard)‹object›*

*Defined in [packages/io/source/guard/Partial.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Partial.ts#L5)*

**Type parameters:**

▪ **R**: *Readonly‹[Record](io.md#const-record)‹PropertyKey, [Guard](io.md#guard)››*

**Parameters:**

Name | Type |
------ | ------ |
`props` | R |

**Returns:** *[Guard](io.md#guard)‹object›*

___

### `Const` partial

▸ **partial**<**A**>(`decoders`: A, `expected`: string): *[Decoder](io.md#decoder)‹object›*

*Defined in [packages/io/source/decoder/Partial.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Partial.ts#L10)*

**Type parameters:**

▪ **A**: *Readonly‹[Record](io.md#const-record)‹PropertyKey, [Decoder](io.md#decoder)››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`decoders` | A | - |
`expected` | string | getDefaultPartialExpected(decoders) |

**Returns:** *[Decoder](io.md#decoder)‹object›*

___

###  partial

▸ **partial**<**P**>(`properties`: P): *[Encoder](io.md#encoder)‹Partial‹object›, Partial‹object››*

*Defined in [packages/io/source/encoder/Encoder.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L17)*

**Type parameters:**

▪ **P**: *Readonly‹[Record](io.md#const-record)‹PropertyKey, [Encoder](io.md#encoder)‹any, any›››*

**Parameters:**

Name | Type |
------ | ------ |
`properties` | P |

**Returns:** *[Encoder](io.md#encoder)‹Partial‹object›, Partial‹object››*

___

### `Const` partial

▸ **partial**<**A**>(`props`: A, `name`: string, `expected`: string): *[Type](io.md#type)‹Partial‹object››*

*Defined in [packages/io/source/types/Partial.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Partial.ts#L7)*

**Type parameters:**

▪ **A**: *[Props](io.md#props)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`props` | A | - |
`name` | string | - |
`expected` | string | name |

**Returns:** *[Type](io.md#type)‹Partial‹object››*

___

### `Const` record

▸ **record**<**R**>(`props`: R): *[Guard](io.md#guard)‹object›*

*Defined in [packages/io/source/guard/Record.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Record.ts#L7)*

**Type parameters:**

▪ **R**: *Readonly‹[Record](io.md#const-record)‹PropertyKey, [Guard](io.md#guard)››*

**Parameters:**

Name | Type |
------ | ------ |
`props` | R |

**Returns:** *[Guard](io.md#guard)‹object›*

___

### `Const` record

▸ **record**<**A**>(`decoders`: A, `expected`: string): *[Decoder](io.md#decoder)‹object›*

*Defined in [packages/io/source/decoder/Record.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Record.ts#L12)*

**Type parameters:**

▪ **A**: *Readonly‹[Record](io.md#const-record)‹PropertyKey, [Decoder](io.md#decoder)››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`decoders` | A | - |
`expected` | string | getDefaultRecordExpected(decoders) |

**Returns:** *[Decoder](io.md#decoder)‹object›*

___

###  record

▸ **record**<**P**>(`properties`: P): *[Encoder](io.md#encoder)‹object, object›*

*Defined in [packages/io/source/encoder/Encoder.ts:39](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L39)*

**Type parameters:**

▪ **P**: *Readonly‹[Record](io.md#const-record)‹PropertyKey, [Encoder](io.md#encoder)‹any, any›››*

**Parameters:**

Name | Type |
------ | ------ |
`properties` | P |

**Returns:** *[Encoder](io.md#encoder)‹object, object›*

___

### `Const` record

▸ **record**<**A**>(`props`: A, `name`: string, `expected`: string): *[Type](io.md#type)‹object, object›*

*Defined in [packages/io/source/types/Record.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Record.ts#L10)*

**Type parameters:**

▪ **A**: *[Props](io.md#props)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`props` | A | - |
`name` | string | getDefaultRecordExpected(props) |
`expected` | string | name |

**Returns:** *[Type](io.md#type)‹object, object›*

___

###  refinement

▸ **refinement**<**A**, **B**>(`from`: [Guard](io.md#guard)‹A›, `refinement`: [Refinement](lambda.md#refinement)‹A, B›): *[Guard](io.md#guard)‹B›*

*Defined in [packages/io/source/guard/refinement.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/refinement.ts#L4)*

**Type parameters:**

▪ **A**

▪ **B**: *A*

**Parameters:**

Name | Type |
------ | ------ |
`from` | [Guard](io.md#guard)‹A› |
`refinement` | [Refinement](lambda.md#refinement)‹A, B› |

**Returns:** *[Guard](io.md#guard)‹B›*

___

### `Const` refinement

▸ **refinement**<**A**, **B**>(`decoder`: A, `refined`: function, `expected`: string): *[Decoder](io.md#decoder)‹B›*

*Defined in [packages/io/source/decoder/refinement.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/refinement.ts#L12)*

**Type parameters:**

▪ **A**: *[Decoder](io.md#decoder)‹any›*

▪ **B**: *[TypeOf](io.md#typeof)‹A›*

**Parameters:**

▪ **decoder**: *A*

▪ **refined**: *function*

▸ (`value`: [TypeOf](io.md#typeof)‹A›): *[DecodeEffect](io.md#decodeeffect)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [TypeOf](io.md#typeof)‹A› |

▪ **expected**: *string*

**Returns:** *[Decoder](io.md#decoder)‹B›*

___

###  refinement

▸ **refinement**<**A**, **B**>(`type`: A, `refinementF`: [Refinement](lambda.md#refinement)‹[Of](io.md#of)‹A›, B›, `name`: string): *[Type](io.md#type)‹B, Type.Encoding<A> extends Type.Of<A> ? B : Type.Encoding<A>›*

*Defined in [packages/io/source/types/refinement.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/refinement.ts#L5)*

**Type parameters:**

▪ **A**: *[Mixed](io.md#mixed)*

▪ **B**: *[Of](io.md#of)‹A›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`type` | A | - |
`refinementF` | [Refinement](lambda.md#refinement)‹[Of](io.md#of)‹A›, B› | - |
`name` | string | type.name |

**Returns:** *[Type](io.md#type)‹B, Type.Encoding<A> extends Type.Of<A> ? B : Type.Encoding<A>›*

___

###  remoteData

▸ **remoteData**<**L**, **R**>(`left`: L, `right`: R): *[Guard](io.md#guard)‹[RemoteData](remote_data.md#remotedata)‹[TypeOf](io.md#typeof)‹L›, [TypeOf](io.md#typeof)‹R›››*

*Defined in [packages/io/source/guard/RemoteData.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/RemoteData.ts#L20)*

**Type parameters:**

▪ **L**: *[Guard](io.md#guard)*

▪ **R**: *[Guard](io.md#guard)*

**Parameters:**

Name | Type |
------ | ------ |
`left` | L |
`right` | R |

**Returns:** *[Guard](io.md#guard)‹[RemoteData](remote_data.md#remotedata)‹[TypeOf](io.md#typeof)‹L›, [TypeOf](io.md#typeof)‹R›››*

___

### `Const` remoteData

▸ **remoteData**<**L**, **R**>(`l`: L, `r`: R): *[Decoder](io.md#decoder)‹[RemoteData](remote_data.md#remotedata)‹[TypeOf](io.md#typeof)‹L›, [TypeOf](io.md#typeof)‹R›››*

*Defined in [packages/io/source/decoder/RemoteData.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/RemoteData.ts#L15)*

**Type parameters:**

▪ **L**: *[Decoder](io.md#decoder)*

▪ **R**: *[Decoder](io.md#decoder)*

**Parameters:**

Name | Type |
------ | ------ |
`l` | L |
`r` | R |

**Returns:** *[Decoder](io.md#decoder)‹[RemoteData](remote_data.md#remotedata)‹[TypeOf](io.md#typeof)‹L›, [TypeOf](io.md#typeof)‹R›››*

___

### `Const` remoteData

▸ **remoteData**<**L**, **R**>(`l`: L, `r`: R, `name`: string): *[Type](io.md#type)‹[RemoteData](remote_data.md#remotedata)‹[Of](io.md#of)‹L›, [Of](io.md#of)‹R›››*

*Defined in [packages/io/source/types/RemoteData.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/RemoteData.ts#L14)*

**Type parameters:**

▪ **L**: *[Type](io.md#type)*

▪ **R**: *[Type](io.md#type)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`l` | L | - |
`r` | R | - |
`name` | string | `RemoteData<${l.name}, ${r.name}>` |

**Returns:** *[Type](io.md#type)‹[RemoteData](remote_data.md#remotedata)‹[Of](io.md#of)‹L›, [Of](io.md#of)‹R›››*

___

### `Const` set

▸ **set**<**A**>(`g`: A): *[Guard](io.md#guard)‹ReadonlySet‹A extends Guard<R> ? R : never››*

*Defined in [packages/io/source/guard/Set.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Set.ts#L7)*

**Type parameters:**

▪ **A**: *[Guard](io.md#guard)*

**Parameters:**

Name | Type |
------ | ------ |
`g` | A |

**Returns:** *[Guard](io.md#guard)‹ReadonlySet‹A extends Guard<R> ? R : never››*

___

### `Const` set

▸ **set**<**A**>(`d`: A): *[Decoder](io.md#decoder)‹ReadonlySet‹[TypeOf](io.md#typeof)‹A›››*

*Defined in [packages/io/source/decoder/Set.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Set.ts#L10)*

**Type parameters:**

▪ **A**: *[Decoder](io.md#decoder)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | A |

**Returns:** *[Decoder](io.md#decoder)‹ReadonlySet‹[TypeOf](io.md#typeof)‹A›››*

___

### `Const` set

▸ **set**<**A**>(`a`: A, `name`: string): *[Type](io.md#type)‹ReadonlySet‹[Of](io.md#of)‹A›››*

*Defined in [packages/io/source/types/Set.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Set.ts#L11)*

**Type parameters:**

▪ **A**: *[Type](io.md#type)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`a` | A | - |
`name` | string | `ReadonlySet<${a.name}>` |

**Returns:** *[Type](io.md#type)‹ReadonlySet‹[Of](io.md#of)‹A›››*

___

### `Const` shouldUseIdentity

▸ **shouldUseIdentity**(`types`: keyof Mixed[]): *boolean*

*Defined in [packages/io/source/types/helpers.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/helpers.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`types` | keyof Mixed[] |

**Returns:** *boolean*

___

### `Const` tuple

▸ **tuple**<**A**>(`types`: A): *[Guard](io.md#guard)‹object›*

*Defined in [packages/io/source/guard/Tuple.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Tuple.ts#L5)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[Guard](io.md#guard)›*

**Parameters:**

Name | Type |
------ | ------ |
`types` | A |

**Returns:** *[Guard](io.md#guard)‹object›*

___

### `Const` tuple

▸ **tuple**<**A**>(`decoders`: A): *[Decoder](io.md#decoder)‹object›*

*Defined in [packages/io/source/decoder/Tuple.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Tuple.ts#L7)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[Decoder](io.md#decoder)›*

**Parameters:**

Name | Type |
------ | ------ |
`decoders` | A |

**Returns:** *[Decoder](io.md#decoder)‹object›*

___

###  tuple

▸ **tuple**<**A**>(`encoders`: A): *[Encoder](io.md#encoder)‹object, object›*

*Defined in [packages/io/source/encoder/Encoder.ts:65](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/encoder/Encoder.ts#L65)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[Encoder](io.md#encoder)›*

**Parameters:**

Name | Type |
------ | ------ |
`encoders` | A |

**Returns:** *[Encoder](io.md#encoder)‹object, object›*

___

### `Const` tuple

▸ **tuple**<**A**>(`types`: A): *[Type](io.md#type)‹object, object›*

*Defined in [packages/io/source/types/Tuple.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Tuple.ts#L6)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[Type](io.md#type)›*

**Parameters:**

Name | Type |
------ | ------ |
`types` | A |

**Returns:** *[Type](io.md#type)‹object, object›*

___

### `Const` union

▸ **union**<**A**>(`guards`: A): *[Guard](io.md#guard)‹[TypeOf](io.md#typeof)‹A[number]››*

*Defined in [packages/io/source/guard/Union.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Union.ts#L4)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[Guard](io.md#guard)‹any››*

**Parameters:**

Name | Type |
------ | ------ |
`guards` | A |

**Returns:** *[Guard](io.md#guard)‹[TypeOf](io.md#typeof)‹A[number]››*

___

### `Const` union

▸ **union**<**A**>(`decoders`: A, `expected`: string): *[Decoder](io.md#decoder)‹[TypeOf](io.md#typeof)‹A[number]››*

*Defined in [packages/io/source/decoder/Union.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/decoder/Union.ts#L5)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[Decoder](io.md#decoder)›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`decoders` | A | - |
`expected` | string | decoders.map((d) => d.expected).join(' | ') |

**Returns:** *[Decoder](io.md#decoder)‹[TypeOf](io.md#typeof)‹A[number]››*

___

### `Const` union

▸ **union**<**A**>(`types`: A, `name`: string): *[Type](io.md#type)‹object[number]›*

*Defined in [packages/io/source/types/Union.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Union.ts#L6)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[Type](io.md#type)›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`types` | A | - |
`name` | string | getUnionName(types) |

**Returns:** *[Type](io.md#type)‹object[number]›*

## Object literals

### `Const` Never

### ▪ **Never**: *object*

*Defined in [packages/io/source/types/Never.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Never.ts#L7)*

###  encode

• **encode**: *function* = id

*Defined in [packages/io/source/types/Never.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Never.ts#L14)*

#### Type declaration:

▸ <**A**>(`value`: A): *A*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

###  expected

• **expected**: *string* = "never"

*Defined in [packages/io/source/types/Never.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Never.ts#L9)*

###  name

• **name**: *string* = "Never"

*Defined in [packages/io/source/types/Never.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Never.ts#L8)*

###  decode

▸ **decode**(`i`: unknown): *Effects‹[DecodeFailure](../interfaces/io.decodefailure.md)‹›, never›*

*Defined in [packages/io/source/types/Never.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Never.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | unknown |

**Returns:** *Effects‹[DecodeFailure](../interfaces/io.decodefailure.md)‹›, never›*

###  is

▸ **is**(`_`: unknown): *_ is never*

*Defined in [packages/io/source/types/Never.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/types/Never.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | unknown |

**Returns:** *_ is never*

___

### `Const` Set

### ▪ **Set**: *object*

*Defined in [packages/io/source/guard/Set.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Set.ts#L5)*

###  is

• **is**: *isSet* = isSet

*Defined in [packages/io/source/guard/Set.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Set.ts#L5)*

___

### `Const` _Maybe

### ▪ **_Maybe**: *object*

*Defined in [packages/io/source/guard/Maybe.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Maybe.ts#L6)*

###  is

▸ **is**(`u`: unknown): *u is Maybe<unknown>*

*Defined in [packages/io/source/guard/Maybe.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/io/source/guard/Maybe.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`u` | unknown |

**Returns:** *u is Maybe<unknown>*
