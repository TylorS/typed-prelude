[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [new-type](new_type.md)

# Package: new-type

# @typed/new-type

> New types for TypeScript

## Index

### Type aliases

* [Base](new_type.md#base)
* [Character](new_type.md#character)
* [Combine](new_type.md#combine)
* [EmptyString](new_type.md#emptystring)
* [Integer](new_type.md#integer)
* [Negative](new_type.md#negative)
* [NegativeInteger](new_type.md#negativeinteger)
* [NewType](new_type.md#newtype)
* [NonEmptyString](new_type.md#nonemptystring)
* [NonNegative](new_type.md#nonnegative)
* [NonNegativeInteger](new_type.md#nonnegativeinteger)
* [NonPositive](new_type.md#nonpositive)
* [NonPositiveInteger](new_type.md#nonpositiveinteger)
* [NonZero](new_type.md#nonzero)
* [NonZeroInteger](new_type.md#nonzerointeger)
* [Positive](new_type.md#positive)
* [PositiveInteger](new_type.md#positiveinteger)
* [TypeName](new_type.md#typename)
* [Zero](new_type.md#zero)

### Variables

* [_isNegativeInteger](new_type.md#const-_isnegativeinteger)
* [_isNonNegative](new_type.md#const-_isnonnegative)
* [_isNonNegativeInteger](new_type.md#const-_isnonnegativeinteger)
* [_isNonPositive](new_type.md#const-_isnonpositive)
* [_isNonPositiveInteger](new_type.md#const-_isnonpositiveinteger)
* [_isNonZeroInteger](new_type.md#const-_isnonzerointeger)
* [_isPositiveInteger](new_type.md#const-_ispositiveinteger)
* [isCharacter](new_type.md#const-ischaracter)
* [isEmptyString](new_type.md#const-isemptystring)
* [isInteger](new_type.md#const-isinteger)
* [isNegative](new_type.md#const-isnegative)
* [isNegativeInteger](new_type.md#const-isnegativeinteger)
* [isNonEmptyString](new_type.md#const-isnonemptystring)
* [isNonNegative](new_type.md#const-isnonnegative)
* [isNonNegativeInteger](new_type.md#const-isnonnegativeinteger)
* [isNonPositive](new_type.md#const-isnonpositive)
* [isNonPositiveInteger](new_type.md#const-isnonpositiveinteger)
* [isNonZero](new_type.md#const-isnonzero)
* [isNonZeroInteger](new_type.md#const-isnonzerointeger)
* [isPositive](new_type.md#const-ispositive)
* [isPositiveInteger](new_type.md#const-ispositiveinteger)
* [isZero](new_type.md#const-iszero)

### Functions

* [and](new_type.md#const-and)
* [isNewType](new_type.md#const-isnewtype)
* [or](new_type.md#const-or)
* [unsafeCoerce](new_type.md#const-unsafecoerce)

## Type aliases

###  Base

Ƭ **Base**: *A extends NewType<infer R, any> ? R : never*

*Defined in [packages/new-type/source/new-type.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-type.ts#L9)*

Get the underlying type of a NewType

___

###  Character

Ƭ **Character**: *[NewType](new_type.md#newtype)‹string & object, "Character"›*

*Defined in [packages/new-type/source/new-types.ts:74](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L74)*

___

###  Combine

Ƭ **Combine**: *A extends NewType<infer AB, infer AT> ? B extends NewType<infer BB, infer BT> ? NewType<AB | BB, AT & BT> : never : never*

*Defined in [packages/new-type/source/new-types.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L8)*

___

###  EmptyString

Ƭ **EmptyString**: *[NewType](new_type.md#newtype)‹string & object, "EmptyString"›*

*Defined in [packages/new-type/source/new-types.ts:65](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L65)*

___

###  Integer

Ƭ **Integer**: *[NewType](new_type.md#newtype)‹number, "Integer"›*

*Defined in [packages/new-type/source/new-types.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L14)*

___

###  Negative

Ƭ **Negative**: *[NewType](new_type.md#newtype)‹number, "Negative"›*

*Defined in [packages/new-type/source/new-types.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L30)*

___

###  NegativeInteger

Ƭ **NegativeInteger**: *[Combine](new_type.md#combine)‹[Negative](new_type.md#negative), [Integer](new_type.md#integer)›*

*Defined in [packages/new-type/source/new-types.ts:47](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L47)*

___

###  NewType

Ƭ **NewType**: *A & object*

*Defined in [packages/new-type/source/new-type.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-type.ts#L4)*

Helper type for creating ad-hoc new types

___

###  NonEmptyString

Ƭ **NonEmptyString**: *[NewType](new_type.md#newtype)‹string & object, "NonEmptyString"›*

*Defined in [packages/new-type/source/new-types.ts:68](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L68)*

___

###  NonNegative

Ƭ **NonNegative**: *[Zero](new_type.md#zero) | [Positive](new_type.md#positive)*

*Defined in [packages/new-type/source/new-types.ts:33](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L33)*

___

###  NonNegativeInteger

Ƭ **NonNegativeInteger**: *[Zero](new_type.md#zero) | [PositiveInteger](new_type.md#positiveinteger)*

*Defined in [packages/new-type/source/new-types.ts:53](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L53)*

___

###  NonPositive

Ƭ **NonPositive**: *[Zero](new_type.md#zero) | [Negative](new_type.md#negative)*

*Defined in [packages/new-type/source/new-types.ts:37](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L37)*

___

###  NonPositiveInteger

Ƭ **NonPositiveInteger**: *[Zero](new_type.md#zero) | [NegativeInteger](new_type.md#negativeinteger)*

*Defined in [packages/new-type/source/new-types.ts:59](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L59)*

___

###  NonZero

Ƭ **NonZero**: *[NewType](new_type.md#newtype)‹number, "NonZero"›*

*Defined in [packages/new-type/source/new-types.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L20)*

___

###  NonZeroInteger

Ƭ **NonZeroInteger**: *[Combine](new_type.md#combine)‹[NonZero](new_type.md#nonzero), [Integer](new_type.md#integer)›*

*Defined in [packages/new-type/source/new-types.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L23)*

___

###  Positive

Ƭ **Positive**: *[NewType](new_type.md#newtype)‹number, "Positive"›*

*Defined in [packages/new-type/source/new-types.ts:27](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L27)*

___

###  PositiveInteger

Ƭ **PositiveInteger**: *[Combine](new_type.md#combine)‹[Positive](new_type.md#positive), [Integer](new_type.md#integer)›*

*Defined in [packages/new-type/source/new-types.ts:41](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L41)*

___

###  TypeName

Ƭ **TypeName**: *A extends NewType<any, infer R> ? R : never*

*Defined in [packages/new-type/source/new-type.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-type.ts#L13)*

Get type name from a NewType

___

###  Zero

Ƭ **Zero**: *[NewType](new_type.md#newtype)‹number, "Zero"›*

*Defined in [packages/new-type/source/new-types.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L17)*

## Variables

### `Const` _isNegativeInteger

• **_isNegativeInteger**: *(Anonymous function)* = and(isNegative, isInteger)

*Defined in [packages/new-type/source/new-types.ts:48](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L48)*

___

### `Const` _isNonNegative

• **_isNonNegative**: *(Anonymous function)* = or(isZero, isPositive)

*Defined in [packages/new-type/source/new-types.ts:34](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L34)*

___

### `Const` _isNonNegativeInteger

• **_isNonNegativeInteger**: *(Anonymous function)* = or<number>(isZero, isPositiveInteger)

*Defined in [packages/new-type/source/new-types.ts:54](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L54)*

___

### `Const` _isNonPositive

• **_isNonPositive**: *(Anonymous function)* = or(isZero, isNegative)

*Defined in [packages/new-type/source/new-types.ts:38](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L38)*

___

### `Const` _isNonPositiveInteger

• **_isNonPositiveInteger**: *(Anonymous function)* = or<number>(isZero, isNegativeInteger)

*Defined in [packages/new-type/source/new-types.ts:60](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L60)*

___

### `Const` _isNonZeroInteger

• **_isNonZeroInteger**: *(Anonymous function)* = and(isNonZero, isInteger)

*Defined in [packages/new-type/source/new-types.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L24)*

___

### `Const` _isPositiveInteger

• **_isPositiveInteger**: *(Anonymous function)* = and(isInteger, isPositive)

*Defined in [packages/new-type/source/new-types.ts:42](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L42)*

___

### `Const` isCharacter

• **isCharacter**: *(Anonymous function)* = isNewType((x: string): x is Character => x.length === 1)

*Defined in [packages/new-type/source/new-types.ts:75](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L75)*

___

### `Const` isEmptyString

• **isEmptyString**: *(Anonymous function)* = isNewType((x: string): x is EmptyString => x === '')

*Defined in [packages/new-type/source/new-types.ts:66](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L66)*

___

### `Const` isInteger

• **isInteger**: *(Anonymous function)* = isNewType<number, Integer>((n): n is Integer => Number.isInteger(n))

*Defined in [packages/new-type/source/new-types.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L15)*

___

### `Const` isNegative

• **isNegative**: *(Anonymous function)* = isNewType((x: number): x is Negative => x < 0)

*Defined in [packages/new-type/source/new-types.ts:31](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L31)*

___

### `Const` isNegativeInteger

• **isNegativeInteger**: *(Anonymous function)* = isNewType((n: number): n is NegativeInteger =>
  _isNegativeInteger(n),
)

*Defined in [packages/new-type/source/new-types.ts:49](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L49)*

___

### `Const` isNonEmptyString

• **isNonEmptyString**: *(Anonymous function)* = isNewType((x: string): x is NonEmptyString => x !== '')

*Defined in [packages/new-type/source/new-types.ts:72](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L72)*

___

### `Const` isNonNegative

• **isNonNegative**: *(Anonymous function)* = isNewType((x: number): x is NonNegative => _isNonNegative(x))

*Defined in [packages/new-type/source/new-types.ts:35](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L35)*

___

### `Const` isNonNegativeInteger

• **isNonNegativeInteger**: *(Anonymous function)* = isNewType((n: number): n is NonNegativeInteger =>
  _isNonNegativeInteger(n),
)

*Defined in [packages/new-type/source/new-types.ts:55](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L55)*

___

### `Const` isNonPositive

• **isNonPositive**: *(Anonymous function)* = isNewType((n: number): n is NonPositive => _isNonPositive(n))

*Defined in [packages/new-type/source/new-types.ts:39](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L39)*

___

### `Const` isNonPositiveInteger

• **isNonPositiveInteger**: *(Anonymous function)* = isNewType((n: number): n is NonPositiveInteger =>
  _isNonPositiveInteger(n),
)

*Defined in [packages/new-type/source/new-types.ts:61](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L61)*

___

### `Const` isNonZero

• **isNonZero**: *(Anonymous function)* = isNewType((x: number): x is NonZero => x !== 0)

*Defined in [packages/new-type/source/new-types.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L21)*

___

### `Const` isNonZeroInteger

• **isNonZeroInteger**: *(Anonymous function)* = isNewType((x: number): x is NonZeroInteger => _isNonZeroInteger(x))

*Defined in [packages/new-type/source/new-types.ts:25](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L25)*

___

### `Const` isPositive

• **isPositive**: *(Anonymous function)* = isNewType((x: number): x is Positive => x > 0)

*Defined in [packages/new-type/source/new-types.ts:28](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L28)*

___

### `Const` isPositiveInteger

• **isPositiveInteger**: *(Anonymous function)* = isNewType((n: number): n is PositiveInteger =>
  _isPositiveInteger(n),
)

*Defined in [packages/new-type/source/new-types.ts:43](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L43)*

___

### `Const` isZero

• **isZero**: *(Anonymous function)* = isNewType((x: number): x is Zero => x === 0)

*Defined in [packages/new-type/source/new-types.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L18)*

## Functions

### `Const` and

▸ **and**<**A**>(`f`: function, `g`: function): *(Anonymous function)*

*Defined in [packages/new-type/source/new-types.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L3)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **f**: *function*

▸ (`value`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **g**: *function*

▸ (`value`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *(Anonymous function)*

___

### `Const` isNewType

▸ **isNewType**<**A**, **B**>(`refinement`: function): *(Anonymous function)*

*Defined in [packages/new-type/source/new-type.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-type.ts#L23)*

Validate a NewType

**Type parameters:**

▪ **A**

▪ **B**: *[NewType](new_type.md#newtype)‹A, any›*

**Parameters:**

▪ **refinement**: *function*

▸ (`value`: A): *value is B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *(Anonymous function)*

:: boolean

___

### `Const` or

▸ **or**<**A**>(`f`: function, `g`: function): *(Anonymous function)*

*Defined in [packages/new-type/source/new-types.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-types.ts#L5)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **f**: *function*

▸ (`value`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **g**: *function*

▸ (`value`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *(Anonymous function)*

___

### `Const` unsafeCoerce

▸ **unsafeCoerce**<**A**>(`value`: [Base](new_type.md#base)‹A›): *A*

*Defined in [packages/new-type/source/new-type.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/new-type/source/new-type.ts#L15)*

**Type parameters:**

▪ **A**: *[NewType](new_type.md#newtype)‹any, any›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Base](new_type.md#base)‹A› |

**Returns:** *A*
