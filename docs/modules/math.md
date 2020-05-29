[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [math](math.md)

# Package: math

# @typed/math

> Composable math operations

## Index

### Variables

* [add](math.md#const-add)
* [between](math.md#const-between)
* [decrement](math.md#const-decrement)
* [divide](math.md#const-divide)
* [divideBy](math.md#const-divideby)
* [increment](math.md#const-increment)
* [modulo](math.md#const-modulo)
* [multiply](math.md#const-multiply)
* [pow](math.md#const-pow)
* [subtract](math.md#const-subtract)
* [subtractBy](math.md#const-subtractby)

### Functions

* [__modulo](math.md#__modulo)
* [__multiply](math.md#__multiply)
* [__subtract](math.md#__subtract)
* [__subtractBy](math.md#__subtractby)
* [mean](math.md#const-mean)
* [median](math.md#median)
* [negate](math.md#const-negate)
* [numberToMaybe](math.md#numbertomaybe)
* [product](math.md#const-product)
* [sum](math.md#const-sum)

## Variables

### `Const` add

• **add**: *function* = curry((left: number, right: number): number => left + right) as {
  (left: number, right: number): number
  (left: number): (right: number) => number
}

*Defined in [packages/math/source/add.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/add.ts#L6)*

Add together two values

#### Type declaration:

▸ (`left`: number, `right`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`left` | number |
`right` | number |

▸ (`left`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`left` | number |

▸ (`right`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`right` | number |

___

### `Const` between

• **between**: *function* = curry((from: number, to: number, num: number): number => Math.min(to, Math.max(from, num))) as {
  (from: number, to: number, num: number): number
  (from: number, to: number): (num: number) => number
  (from: number): {
    (to: number, num: number): number
    (to: number): (num: number) => number
  }
}

*Defined in [packages/math/source/between.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/between.ts#L10)*

Ensure a number is between two others

**`param`** :: number

**`param`** :: number

**`param`** :: number

**`returns`** :: number

#### Type declaration:

▸ (`from`: number, `to`: number, `num`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`to` | number |
`num` | number |

▸ (`from`: number, `to`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`to` | number |

▸ (`num`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

▸ (`from`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |

▸ (`to`: number, `num`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`to` | number |
`num` | number |

▸ (`to`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`to` | number |

▸ (`num`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

___

### `Const` decrement

• **decrement**: *function* = add(-1)

*Defined in [packages/math/source/decrement.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/decrement.ts#L4)*

Subtract 1 from a number

#### Type declaration:

▸ (`right`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`right` | number |

___

### `Const` divide

• **divide**: *function* = curry((left: number, right: number) => left / right)

*Defined in [packages/math/source/divide.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/divide.ts#L4)*

Divide a number by another

#### Type declaration:

▸ (`left`: number, `right`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`left` | number |
`right` | number |

▸ (`left`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`left` | number |

▸ (`right`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`right` | number |

___

### `Const` divideBy

• **divideBy**: *function* = curry((right: number, left: number): number => left / right)

*Defined in [packages/math/source/divide.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/divide.ts#L10)*

Composition-ready division

#### Type declaration:

▸ (`left`: number, `right`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`left` | number |
`right` | number |

▸ (`left`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`left` | number |

▸ (`right`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`right` | number |

___

### `Const` increment

• **increment**: *function* = add(1)

*Defined in [packages/math/source/increment.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/increment.ts#L4)*

Add 1 to a number

#### Type declaration:

▸ (`right`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`right` | number |

___

### `Const` modulo

• **modulo**: *function* = curry(__modulo)

*Defined in [packages/math/source/modulo.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/modulo.ts#L4)*

Modulus division

#### Type declaration:

▸ (`left`: number, `right`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`left` | number |
`right` | number |

▸ (`left`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`left` | number |

▸ (`right`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`right` | number |

___

### `Const` multiply

• **multiply**: *function* = curry(__multiply) as {
  (left: number, right: number): number
  (left: number): (right: number) => number
}

*Defined in [packages/math/source/multiply.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/multiply.ts#L4)*

Multiply 2 numbers

#### Type declaration:

▸ (`left`: number, `right`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`left` | number |
`right` | number |

▸ (`left`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`left` | number |

▸ (`right`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`right` | number |

___

### `Const` pow

• **pow**: *function* = curry((exponent: number, base: number): number => Math.pow(base, exponent))

*Defined in [packages/math/source/pow.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/pow.ts#L9)*

Raise a number to a given power

**`param`** :: number

**`param`** :: number

**`returns`** :: number

#### Type declaration:

▸ (`exponent`: number, `base`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`exponent` | number |
`base` | number |

▸ (`exponent`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`exponent` | number |

▸ (`base`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`base` | number |

___

### `Const` subtract

• **subtract**: *function* = curry(__subtract)

*Defined in [packages/math/source/subtract.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/subtract.ts#L4)*

Subtract two number

#### Type declaration:

▸ (`left`: number, `right`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`left` | number |
`right` | number |

▸ (`left`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`left` | number |

▸ (`right`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`right` | number |

___

### `Const` subtractBy

• **subtractBy**: *function* = curry(__subtractBy)

*Defined in [packages/math/source/subtract.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/subtract.ts#L10)*

Composition-ready subtraction

#### Type declaration:

▸ (`right`: number, `left`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`right` | number |
`left` | number |

▸ (`right`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`right` | number |

▸ (`left`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`left` | number |

## Functions

###  __modulo

▸ **__modulo**(`left`: number, `right`: number): *number*

*Defined in [packages/math/source/modulo.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/modulo.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`left` | number |
`right` | number |

**Returns:** *number*

___

###  __multiply

▸ **__multiply**(`left`: number, `right`: number): *number*

*Defined in [packages/math/source/multiply.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/multiply.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`left` | number |
`right` | number |

**Returns:** *number*

___

###  __subtract

▸ **__subtract**(`left`: number, `right`: number): *number*

*Defined in [packages/math/source/subtract.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/subtract.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`left` | number |
`right` | number |

**Returns:** *number*

___

###  __subtractBy

▸ **__subtractBy**(`right`: number, `left`: number): *number*

*Defined in [packages/math/source/subtract.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/subtract.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`right` | number |
`left` | number |

**Returns:** *number*

___

### `Const` mean

▸ **mean**(`numbers`: ReadonlyArray‹number›): *number*

*Defined in [packages/math/source/mean.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/mean.ts#L5)*

Get the mean of a list of numbers

**Parameters:**

Name | Type |
------ | ------ |
`numbers` | ReadonlyArray‹number› |

**Returns:** *number*

___

###  median

▸ **median**(`numbers`: ReadonlyArray‹number›): *[Maybe](io.md#const-maybe)‹number›*

*Defined in [packages/math/source/median.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/median.ts#L5)*

Get the median of a list of numbers

**Parameters:**

Name | Type |
------ | ------ |
`numbers` | ReadonlyArray‹number› |

**Returns:** *[Maybe](io.md#const-maybe)‹number›*

___

### `Const` negate

▸ **negate**(`num`: number): *number*

*Defined in [packages/math/source/negate.ts:2](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/negate.ts#L2)*

Negate a number

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

**Returns:** *number*

___

###  numberToMaybe

▸ **numberToMaybe**(`num`: number): *[Maybe](io.md#const-maybe)‹number›*

*Defined in [packages/math/source/median.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/median.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

**Returns:** *[Maybe](io.md#const-maybe)‹number›*

___

### `Const` product

▸ **product**(`numbers`: ReadonlyArray‹number›): *number*

*Defined in [packages/math/source/product.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/product.ts#L4)*

Get the product of a list of numbers

**Parameters:**

Name | Type |
------ | ------ |
`numbers` | ReadonlyArray‹number› |

**Returns:** *number*

___

### `Const` sum

▸ **sum**(`numbers`: ReadonlyArray‹number›): *number*

*Defined in [packages/math/source/sum.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/math/source/sum.ts#L4)*

Get the sum of a list of numbers

**Parameters:**

Name | Type |
------ | ------ |
`numbers` | ReadonlyArray‹number› |

**Returns:** *number*
