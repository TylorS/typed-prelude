[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [validation](validation.md)

# Package: validation

# @typed/validation 

A data structure, built atop [@typed/either](./either) for capturing 
more than one error.

## Index

### Namespaces

* [Validation](validation.md#validation)

### Variables

* [validate](validation.md#const-validate)

### Functions

* [__validate](validation.md#__validate)
* [concat](validation.md#concat)

## Namespaces

###  Validation

• **Validation**: *[Either](either.md#either)‹keyof A[], B›*

*Defined in [packages/validation/source/Validation.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/validation/source/Validation.ts#L3)*

*Defined in [packages/validation/source/Validation.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/validation/source/Validation.ts#L5)*

### `Const` error

▸ **error**<**A**, **B**>(`error`: A): *[Validation](validation.md#validation)‹A, B›*

*Defined in [packages/validation/source/Validation.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/validation/source/Validation.ts#L7)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`error` | A |

**Returns:** *[Validation](validation.md#validation)‹A, B›*

### `Const` fromEither

▸ **fromEither**<**A**, **B**>(`either`: [Either](either.md#either)‹A, B›): *[Validation](validation.md#validation)‹A, B›*

*Defined in [packages/validation/source/Validation.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/validation/source/Validation.ts#L9)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`either` | [Either](either.md#either)‹A, B› |

**Returns:** *[Validation](validation.md#validation)‹A, B›*

### `Const` of

▸ **of**<**A**, **B**>(`value`: B): *[Validation](validation.md#validation)‹A, B›*

*Defined in [packages/validation/source/Validation.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/validation/source/Validation.ts#L6)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

**Returns:** *[Validation](validation.md#validation)‹A, B›*

## Variables

### `Const` validate

• **validate**: *function* = curry(__validate) as {
  <A, B, C>(error: A, match: Match<B, C>, value: B): Validation<A, C>
  <A, B, C>(error: A, match: Match<B, C>): (value: B) => Validation<A, C>
  <A>(error: A): {
    <B, C>(match: Match<B, C>, value: B): Validation<A, C>
    <B, C>(match: Match<B, C>): (value: B) => Validation<A, C>
  }
}

*Defined in [packages/validation/source/validate.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/validation/source/validate.ts#L6)*

#### Type declaration:

▸ <**A**, **B**, **C**>(`error`: A, `match`: Match‹B, C›, `value`: B): *[Validation](validation.md#validation)‹A, C›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`error` | A |
`match` | Match‹B, C› |
`value` | B |

▸ <**A**, **B**, **C**>(`error`: A, `match`: Match‹B, C›): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`error` | A |
`match` | Match‹B, C› |

▸ (`value`: B): *[Validation](validation.md#validation)‹A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ <**A**>(`error`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`error` | A |

▸ <**B**, **C**>(`match`: Match‹B, C›, `value`: B): *[Validation](validation.md#validation)‹A, C›*

**Type parameters:**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`match` | Match‹B, C› |
`value` | B |

▸ <**B**, **C**>(`match`: Match‹B, C›): *function*

**Type parameters:**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`match` | Match‹B, C› |

▸ (`value`: B): *[Validation](validation.md#validation)‹A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

## Functions

###  __validate

▸ **__validate**<**A**, **B**, **C**>(`error`: A, `match`: Match‹B, C›, `value`: B): *[Validation](validation.md#validation)‹A, C›*

*Defined in [packages/validation/source/validate.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/validation/source/validate.ts#L15)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`error` | A |
`match` | Match‹B, C› |
`value` | B |

**Returns:** *[Validation](validation.md#validation)‹A, C›*

___

###  concat

▸ **concat**<**A**, **B**>(...`validations`: ReadonlyArray‹[Validation](validation.md#validation)‹A, B››): *[Validation](validation.md#validation)‹A, B›*

*Defined in [packages/validation/source/concat.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/validation/source/concat.ts#L5)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`...validations` | ReadonlyArray‹[Validation](validation.md#validation)‹A, B›› |

**Returns:** *[Validation](validation.md#validation)‹A, B›*
