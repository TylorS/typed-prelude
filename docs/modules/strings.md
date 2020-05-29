[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [strings](strings.md)

# Package: strings

# @typed/strings

> Composable string functions

## Index

### Variables

* [plural](strings.md#const-plural)
* [repeat](strings.md#const-repeat)
* [split](strings.md#const-split)
* [substr](strings.md#const-substr)
* [substring](strings.md#const-substring)

### Functions

* [__plural](strings.md#__plural)
* [__split](strings.md#__split)
* [__substr](strings.md#__substr)
* [__substring](strings.md#__substring)
* [capitalize](strings.md#capitalize)
* [capitalizeFirst](strings.md#capitalizefirst)
* [toLowerCase](strings.md#const-tolowercase)
* [toUpperCase](strings.md#const-touppercase)
* [trim](strings.md#const-trim)
* [trimLeft](strings.md#const-trimleft)
* [trimRight](strings.md#const-trimright)

## Variables

### `Const` plural

• **plural**: *function* = curry(__plural) as {
  (str: string, numOfItems: number): string
  (str: string): (numOfItems: number) => string
}

*Defined in [packages/strings/source/plural.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/strings/source/plural.ts#L9)*

Append 's' to a value if numOfItems != 1

**`param`** :: string

**`param`** :: number

**`returns`** :: string

#### Type declaration:

▸ (`str`: string, `numOfItems`: number): *string*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`numOfItems` | number |

▸ (`str`: string): *function*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

▸ (`numOfItems`: number): *string*

**Parameters:**

Name | Type |
------ | ------ |
`numOfItems` | number |

___

### `Const` repeat

• **repeat**: *Curry2‹number, string, string›* = curry((n: number, str: string) =>
  str.repeat(n),
)

*Defined in [packages/strings/source/repeat.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/strings/source/repeat.ts#L3)*

___

### `Const` split

• **split**: *function* = curry(__split)

*Defined in [packages/strings/source/split.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/strings/source/split.ts#L6)*

Split a string

#### Type declaration:

▸ (`separator`: string | RegExp, `str`: string): *string[]*

**Parameters:**

Name | Type |
------ | ------ |
`separator` | string &#124; RegExp |
`str` | string |

▸ (`separator`: string | RegExp): *function*

**Parameters:**

Name | Type |
------ | ------ |
`separator` | string &#124; RegExp |

▸ (`str`: string): *string[]*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

___

### `Const` substr

• **substr**: *function* = curry(__substr)

*Defined in [packages/strings/source/substr.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/strings/source/substr.ts#L6)*

Get the substring of a string

#### Type declaration:

▸ (`from`: number, `length`: number | undefined, `str`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`length` | number &#124; undefined |
`str` | string |

▸ (`from`: number, `length`: number | undefined): *function*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`length` | number &#124; undefined |

▸ (`str`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

___

### `Const` substring

• **substring**: *function* = curry(__substring)

*Defined in [packages/strings/source/substring.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/strings/source/substring.ts#L6)*

Get the substring of a string

#### Type declaration:

▸ (`from`: number, `to`: number | undefined, `str`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`to` | number &#124; undefined |
`str` | string |

▸ (`from`: number, `to`: number | undefined): *function*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`to` | number &#124; undefined |

▸ (`str`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

## Functions

###  __plural

▸ **__plural**(`str`: string, `num`: number): *string*

*Defined in [packages/strings/source/plural.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/strings/source/plural.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`num` | number |

**Returns:** *string*

___

###  __split

▸ **__split**(`separator`: string | RegExp, `str`: string): *string[]*

*Defined in [packages/strings/source/split.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/strings/source/split.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`separator` | string &#124; RegExp |
`str` | string |

**Returns:** *string[]*

___

###  __substr

▸ **__substr**(`from`: number, `length`: number | undefined, `str`: string): *string*

*Defined in [packages/strings/source/substr.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/strings/source/substr.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`length` | number &#124; undefined |
`str` | string |

**Returns:** *string*

___

###  __substring

▸ **__substring**(`from`: number, `to`: number | undefined, `str`: string): *string*

*Defined in [packages/strings/source/substring.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/strings/source/substring.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`to` | number &#124; undefined |
`str` | string |

**Returns:** *string*

___

###  capitalize

▸ **capitalize**(`str`: string): *string*

*Defined in [packages/strings/source/capitalize.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/strings/source/capitalize.ts#L6)*

Capitalize a string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | string | :: string |

**Returns:** *string*

:: string

___

###  capitalizeFirst

▸ **capitalizeFirst**(`str`: string): *string*

*Defined in [packages/strings/source/capitalize.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/strings/source/capitalize.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

### `Const` toLowerCase

▸ **toLowerCase**(`str`: string): *string*

*Defined in [packages/strings/source/toLowerCase.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/strings/source/toLowerCase.ts#L6)*

Convert a string to lowercase

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | string | :: string |

**Returns:** *string*

:: string

___

### `Const` toUpperCase

▸ **toUpperCase**(`str`: string): *string*

*Defined in [packages/strings/source/toUpperCase.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/strings/source/toUpperCase.ts#L6)*

Convert a string to all uppercase

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | string | :: string |

**Returns:** *string*

:: string

___

### `Const` trim

▸ **trim**(`str`: string): *string*

*Defined in [packages/strings/source/trim.ts:2](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/strings/source/trim.ts#L2)*

Trim a string

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

### `Const` trimLeft

▸ **trimLeft**(`str`: string): *string*

*Defined in [packages/strings/source/trim.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/strings/source/trim.ts#L5)*

Trim the start of a string

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

### `Const` trimRight

▸ **trimRight**(`str`: string): *string*

*Defined in [packages/strings/source/trim.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/strings/source/trim.ts#L8)*

Trim the end of a string

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*
