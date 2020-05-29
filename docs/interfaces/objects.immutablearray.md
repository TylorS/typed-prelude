[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [objects](../modules/objects.md) › [ImmutableArray](objects.immutablearray.md)

# Interface: ImmutableArray <**A**>

## Type parameters

▪ **A**

## Hierarchy

* ReadonlyArray‹[Immutable](../modules/objects.md#immutable)‹A››

  ↳ **ImmutableArray**

## Indexable

* \[ **n**: *number*\]: [Immutable](../modules/objects.md#immutable)‹A›

## Index

### Properties

* [length](objects.immutablearray.md#readonly-length)

### Methods

* [[Symbol.iterator]](objects.immutablearray.md#[symbol.iterator])
* [concat](objects.immutablearray.md#concat)
* [entries](objects.immutablearray.md#entries)
* [every](objects.immutablearray.md#every)
* [filter](objects.immutablearray.md#filter)
* [find](objects.immutablearray.md#find)
* [findIndex](objects.immutablearray.md#findindex)
* [forEach](objects.immutablearray.md#foreach)
* [includes](objects.immutablearray.md#includes)
* [indexOf](objects.immutablearray.md#indexof)
* [join](objects.immutablearray.md#join)
* [keys](objects.immutablearray.md#keys)
* [lastIndexOf](objects.immutablearray.md#lastindexof)
* [map](objects.immutablearray.md#map)
* [reduce](objects.immutablearray.md#reduce)
* [reduceRight](objects.immutablearray.md#reduceright)
* [slice](objects.immutablearray.md#slice)
* [some](objects.immutablearray.md#some)
* [toLocaleString](objects.immutablearray.md#tolocalestring)
* [toString](objects.immutablearray.md#tostring)
* [values](objects.immutablearray.md#values)

## Properties

### `Readonly` length

• **length**: *number*

*Inherited from [VNodeChildren](html.vnodechildren.md).[length](html.vnodechildren.md#readonly-length)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1090

Gets the length of the array. This is a number one higher than the highest element defined in an array.

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[Immutable](../modules/objects.md#immutable)‹A››*

*Inherited from [VNodeChildren](html.vnodechildren.md).[[Symbol.iterator]](html.vnodechildren.md#[symbol.iterator])*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:96

Iterator of values in the array.

**Returns:** *IterableIterator‹[Immutable](../modules/objects.md#immutable)‹A››*

___

###  concat

▸ **concat**(...`items`: ConcatArray‹[Immutable](../modules/objects.md#immutable)‹A››[]): *[Immutable](../modules/objects.md#immutable)‹A›[]*

*Inherited from [VNodeChildren](html.vnodechildren.md).[concat](html.vnodechildren.md#concat)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1103

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | ConcatArray‹[Immutable](../modules/objects.md#immutable)‹A››[] | Additional items to add to the end of array1.  |

**Returns:** *[Immutable](../modules/objects.md#immutable)‹A›[]*

▸ **concat**(...`items`: T | ConcatArray‹T›[]): *[Immutable](../modules/objects.md#immutable)‹A›[]*

*Inherited from [VNodeChildren](html.vnodechildren.md).[concat](html.vnodechildren.md#concat)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1108

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | T &#124; ConcatArray‹T›[] | Additional items to add to the end of array1.  |

**Returns:** *[Immutable](../modules/objects.md#immutable)‹A›[]*

___

###  entries

▸ **entries**(): *IterableIterator‹[number, [Immutable](../modules/objects.md#immutable)‹A›]›*

*Inherited from [VNodeChildren](html.vnodechildren.md).[entries](html.vnodechildren.md#entries)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:101

Returns an iterable of key, value pairs for every entry in the array

**Returns:** *IterableIterator‹[number, [Immutable](../modules/objects.md#immutable)‹A›]›*

___

###  every

▸ **every**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from [VNodeChildren](html.vnodechildren.md).[every](html.vnodechildren.md#every)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1140

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The every method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value false, or until the end of the array.

▸ (`value`: [Immutable](../modules/objects.md#immutable)‹A›, `index`: number, `array`: keyof Immutable<A>[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Immutable](../modules/objects.md#immutable)‹A› |
`index` | number |
`array` | keyof Immutable<A>[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  filter

▸ **filter**<**S**>(`callbackfn`: function, `thisArg?`: any): *S[]*

*Inherited from [VNodeChildren](html.vnodechildren.md).[filter](html.vnodechildren.md#filter)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1167

Returns the elements of an array that meet the condition specified in a callback function.

**Type parameters:**

▪ **S**: *[Immutable](../modules/objects.md#immutable)‹A›*

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: [Immutable](../modules/objects.md#immutable)‹A›, `index`: number, `array`: keyof Immutable<A>[]): *value is S*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Immutable](../modules/objects.md#immutable)‹A› |
`index` | number |
`array` | keyof Immutable<A>[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *S[]*

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[Immutable](../modules/objects.md#immutable)‹A›[]*

*Inherited from [VNodeChildren](html.vnodechildren.md).[filter](html.vnodechildren.md#filter)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1173

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: [Immutable](../modules/objects.md#immutable)‹A›, `index`: number, `array`: keyof Immutable<A>[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Immutable](../modules/objects.md#immutable)‹A› |
`index` | number |
`array` | keyof Immutable<A>[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *[Immutable](../modules/objects.md#immutable)‹A›[]*

___

###  find

▸ **find**<**S**>(`predicate`: function, `thisArg?`: any): *S | undefined*

*Inherited from [VNodeChildren](html.vnodechildren.md).[find](html.vnodechildren.md#find)*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:352

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Type parameters:**

▪ **S**: *[Immutable](../modules/objects.md#immutable)‹A›*

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

▸ (`this`: void, `value`: [Immutable](../modules/objects.md#immutable)‹A›, `index`: number, `obj`: keyof Immutable<A>[]): *value is S*

**Parameters:**

Name | Type |
------ | ------ |
`this` | void |
`value` | [Immutable](../modules/objects.md#immutable)‹A› |
`index` | number |
`obj` | keyof Immutable<A>[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *S | undefined*

▸ **find**(`predicate`: function, `thisArg?`: any): *[Immutable](../modules/objects.md#immutable)‹A› | undefined*

*Inherited from [VNodeChildren](html.vnodechildren.md).[find](html.vnodechildren.md#find)*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:353

**Parameters:**

▪ **predicate**: *function*

▸ (`value`: [Immutable](../modules/objects.md#immutable)‹A›, `index`: number, `obj`: keyof Immutable<A>[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Immutable](../modules/objects.md#immutable)‹A› |
`index` | number |
`obj` | keyof Immutable<A>[] |

▪`Optional`  **thisArg**: *any*

**Returns:** *[Immutable](../modules/objects.md#immutable)‹A› | undefined*

___

###  findIndex

▸ **findIndex**(`predicate`: function, `thisArg?`: any): *number*

*Inherited from [VNodeChildren](html.vnodechildren.md).[findIndex](html.vnodechildren.md#findindex)*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:364

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

▸ (`value`: [Immutable](../modules/objects.md#immutable)‹A›, `index`: number, `obj`: keyof Immutable<A>[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Immutable](../modules/objects.md#immutable)‹A› |
`index` | number |
`obj` | keyof Immutable<A>[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [VNodeChildren](html.vnodechildren.md).[forEach](html.vnodechildren.md#foreach)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1155

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

▸ (`value`: [Immutable](../modules/objects.md#immutable)‹A›, `index`: number, `array`: keyof Immutable<A>[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Immutable](../modules/objects.md#immutable)‹A› |
`index` | number |
`array` | keyof Immutable<A>[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

###  includes

▸ **includes**(`searchElement`: [Immutable](../modules/objects.md#immutable)‹A›, `fromIndex?`: undefined | number): *boolean*

*Inherited from [VNodeChildren](html.vnodechildren.md).[includes](html.vnodechildren.md#includes)*

Defined in node_modules/typescript/lib/lib.es2016.array.include.d.ts:36

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | [Immutable](../modules/objects.md#immutable)‹A› | The element to search for. |
`fromIndex?` | undefined &#124; number | The position in this array at which to begin searching for searchElement.  |

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`searchElement`: [Immutable](../modules/objects.md#immutable)‹A›, `fromIndex?`: undefined | number): *number*

*Inherited from [VNodeChildren](html.vnodechildren.md).[indexOf](html.vnodechildren.md#indexof)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1125

Returns the index of the first occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | [Immutable](../modules/objects.md#immutable)‹A› | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.  |

**Returns:** *number*

___

###  join

▸ **join**(`separator?`: undefined | string): *string*

*Inherited from [VNodeChildren](html.vnodechildren.md).[join](html.vnodechildren.md#join)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1113

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator?` | undefined &#124; string | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.  |

**Returns:** *string*

___

###  keys

▸ **keys**(): *IterableIterator‹number›*

*Inherited from [VNodeChildren](html.vnodechildren.md).[keys](html.vnodechildren.md#keys)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:106

Returns an iterable of keys in the array

**Returns:** *IterableIterator‹number›*

___

###  lastIndexOf

▸ **lastIndexOf**(`searchElement`: [Immutable](../modules/objects.md#immutable)‹A›, `fromIndex?`: undefined | number): *number*

*Inherited from [VNodeChildren](html.vnodechildren.md).[lastIndexOf](html.vnodechildren.md#lastindexof)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1131

Returns the index of the last occurrence of a specified value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | [Immutable](../modules/objects.md#immutable)‹A› | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.  |

**Returns:** *number*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *U[]*

*Inherited from [VNodeChildren](html.vnodechildren.md).[map](html.vnodechildren.md#map)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1161

Calls a defined callback function on each element of an array, and returns an array that contains the results.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

▸ (`value`: [Immutable](../modules/objects.md#immutable)‹A›, `index`: number, `array`: keyof Immutable<A>[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Immutable](../modules/objects.md#immutable)‹A› |
`index` | number |
`array` | keyof Immutable<A>[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *U[]*

___

###  reduce

▸ **reduce**(`callbackfn`: function): *[Immutable](../modules/objects.md#immutable)‹A›*

*Inherited from [VNodeChildren](html.vnodechildren.md).[reduce](html.vnodechildren.md#reduce)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1179

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: [Immutable](../modules/objects.md#immutable)‹A›, `currentValue`: [Immutable](../modules/objects.md#immutable)‹A›, `currentIndex`: number, `array`: keyof Immutable<A>[]): *[Immutable](../modules/objects.md#immutable)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [Immutable](../modules/objects.md#immutable)‹A› |
`currentValue` | [Immutable](../modules/objects.md#immutable)‹A› |
`currentIndex` | number |
`array` | keyof Immutable<A>[] |

**Returns:** *[Immutable](../modules/objects.md#immutable)‹A›*

▸ **reduce**(`callbackfn`: function, `initialValue`: [Immutable](../modules/objects.md#immutable)‹A›): *[Immutable](../modules/objects.md#immutable)‹A›*

*Inherited from [VNodeChildren](html.vnodechildren.md).[reduce](html.vnodechildren.md#reduce)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1180

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: [Immutable](../modules/objects.md#immutable)‹A›, `currentValue`: [Immutable](../modules/objects.md#immutable)‹A›, `currentIndex`: number, `array`: keyof Immutable<A>[]): *[Immutable](../modules/objects.md#immutable)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [Immutable](../modules/objects.md#immutable)‹A› |
`currentValue` | [Immutable](../modules/objects.md#immutable)‹A› |
`currentIndex` | number |
`array` | keyof Immutable<A>[] |

▪ **initialValue**: *[Immutable](../modules/objects.md#immutable)‹A›*

**Returns:** *[Immutable](../modules/objects.md#immutable)‹A›*

▸ **reduce**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from [VNodeChildren](html.vnodechildren.md).[reduce](html.vnodechildren.md#reduce)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1186

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: [Immutable](../modules/objects.md#immutable)‹A›, `currentIndex`: number, `array`: keyof Immutable<A>[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | [Immutable](../modules/objects.md#immutable)‹A› |
`currentIndex` | number |
`array` | keyof Immutable<A>[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  reduceRight

▸ **reduceRight**(`callbackfn`: function): *[Immutable](../modules/objects.md#immutable)‹A›*

*Inherited from [VNodeChildren](html.vnodechildren.md).[reduceRight](html.vnodechildren.md#reduceright)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1192

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: [Immutable](../modules/objects.md#immutable)‹A›, `currentValue`: [Immutable](../modules/objects.md#immutable)‹A›, `currentIndex`: number, `array`: keyof Immutable<A>[]): *[Immutable](../modules/objects.md#immutable)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [Immutable](../modules/objects.md#immutable)‹A› |
`currentValue` | [Immutable](../modules/objects.md#immutable)‹A› |
`currentIndex` | number |
`array` | keyof Immutable<A>[] |

**Returns:** *[Immutable](../modules/objects.md#immutable)‹A›*

▸ **reduceRight**(`callbackfn`: function, `initialValue`: [Immutable](../modules/objects.md#immutable)‹A›): *[Immutable](../modules/objects.md#immutable)‹A›*

*Inherited from [VNodeChildren](html.vnodechildren.md).[reduceRight](html.vnodechildren.md#reduceright)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1193

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: [Immutable](../modules/objects.md#immutable)‹A›, `currentValue`: [Immutable](../modules/objects.md#immutable)‹A›, `currentIndex`: number, `array`: keyof Immutable<A>[]): *[Immutable](../modules/objects.md#immutable)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [Immutable](../modules/objects.md#immutable)‹A› |
`currentValue` | [Immutable](../modules/objects.md#immutable)‹A› |
`currentIndex` | number |
`array` | keyof Immutable<A>[] |

▪ **initialValue**: *[Immutable](../modules/objects.md#immutable)‹A›*

**Returns:** *[Immutable](../modules/objects.md#immutable)‹A›*

▸ **reduceRight**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from [VNodeChildren](html.vnodechildren.md).[reduceRight](html.vnodechildren.md#reduceright)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1199

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: [Immutable](../modules/objects.md#immutable)‹A›, `currentIndex`: number, `array`: keyof Immutable<A>[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | [Immutable](../modules/objects.md#immutable)‹A› |
`currentIndex` | number |
`array` | keyof Immutable<A>[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  slice

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): *[Immutable](../modules/objects.md#immutable)‹A›[]*

*Inherited from [VNodeChildren](html.vnodechildren.md).[slice](html.vnodechildren.md#slice)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1119

Returns a section of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start?` | undefined &#124; number | The beginning of the specified portion of the array. |
`end?` | undefined &#124; number | The end of the specified portion of the array. This is exclusive of the element at the index 'end'.  |

**Returns:** *[Immutable](../modules/objects.md#immutable)‹A›[]*

___

###  some

▸ **some**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from [VNodeChildren](html.vnodechildren.md).[some](html.vnodechildren.md#some)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1149

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The some method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value true, or until the end of the array.

▸ (`value`: [Immutable](../modules/objects.md#immutable)‹A›, `index`: number, `array`: keyof Immutable<A>[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Immutable](../modules/objects.md#immutable)‹A› |
`index` | number |
`array` | keyof Immutable<A>[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  toLocaleString

▸ **toLocaleString**(): *string*

*Inherited from [VNodeChildren](html.vnodechildren.md).[toLocaleString](html.vnodechildren.md#tolocalestring)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1098

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [VNodeChildren](html.vnodechildren.md).[toString](html.vnodechildren.md#tostring)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1094

Returns a string representation of an array.

**Returns:** *string*

___

###  values

▸ **values**(): *IterableIterator‹[Immutable](../modules/objects.md#immutable)‹A››*

*Inherited from [VNodeChildren](html.vnodechildren.md).[values](html.vnodechildren.md#values)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:111

Returns an iterable of values in the array

**Returns:** *IterableIterator‹[Immutable](../modules/objects.md#immutable)‹A››*
