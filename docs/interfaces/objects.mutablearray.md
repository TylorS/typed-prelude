[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [objects](../modules/objects.md) › [MutableArray](objects.mutablearray.md)

# Interface: MutableArray <**A**>

## Type parameters

▪ **A**

## Hierarchy

* [Array](objects.mutablearray.md#array)‹[Mutable](../modules/objects.md#mutable)‹A››

  ↳ **MutableArray**

## Indexable

* \[ **n**: *number*\]: [Mutable](../modules/objects.md#mutable)‹A›

## Index

### Properties

* [Array](objects.mutablearray.md#array)
* [length](objects.mutablearray.md#length)

### Methods

* [[Symbol.iterator]](objects.mutablearray.md#[symbol.iterator])
* [[Symbol.unscopables]](objects.mutablearray.md#[symbol.unscopables])
* [concat](objects.mutablearray.md#concat)
* [copyWithin](objects.mutablearray.md#copywithin)
* [entries](objects.mutablearray.md#entries)
* [every](objects.mutablearray.md#every)
* [fill](objects.mutablearray.md#fill)
* [filter](objects.mutablearray.md#filter)
* [find](objects.mutablearray.md#find)
* [findIndex](objects.mutablearray.md#findindex)
* [forEach](objects.mutablearray.md#foreach)
* [includes](objects.mutablearray.md#includes)
* [indexOf](objects.mutablearray.md#indexof)
* [join](objects.mutablearray.md#join)
* [keys](objects.mutablearray.md#keys)
* [lastIndexOf](objects.mutablearray.md#lastindexof)
* [map](objects.mutablearray.md#map)
* [pop](objects.mutablearray.md#pop)
* [push](objects.mutablearray.md#push)
* [reduce](objects.mutablearray.md#reduce)
* [reduceRight](objects.mutablearray.md#reduceright)
* [reverse](objects.mutablearray.md#reverse)
* [shift](objects.mutablearray.md#shift)
* [slice](objects.mutablearray.md#slice)
* [some](objects.mutablearray.md#some)
* [sort](objects.mutablearray.md#sort)
* [splice](objects.mutablearray.md#splice)
* [toLocaleString](objects.mutablearray.md#tolocalestring)
* [toString](objects.mutablearray.md#tostring)
* [unshift](objects.mutablearray.md#unshift)
* [values](objects.mutablearray.md#values)

## Properties

###  Array

• **Array**: *ArrayConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1385

___

###  length

• **length**: *number*

*Inherited from [MutableArray](objects.mutablearray.md).[length](objects.mutablearray.md#length)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1215

Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[Mutable](../modules/objects.md#mutable)‹A››*

*Inherited from [MutableArray](objects.mutablearray.md).[[Symbol.iterator]](objects.mutablearray.md#[symbol.iterator])*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

Iterator

**Returns:** *IterableIterator‹[Mutable](../modules/objects.md#mutable)‹A››*

___

###  [Symbol.unscopables]

▸ **[Symbol.unscopables]**(): *object*

*Inherited from [MutableArray](objects.mutablearray.md).[[Symbol.unscopables]](objects.mutablearray.md#[symbol.unscopables])*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:94

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

**Returns:** *object*

* **copyWithin**: *boolean*

* **entries**: *boolean*

* **fill**: *boolean*

* **find**: *boolean*

* **findIndex**: *boolean*

* **keys**: *boolean*

* **values**: *boolean*

___

###  concat

▸ **concat**(...`items`: ConcatArray‹[Mutable](../modules/objects.md#mutable)‹A››[]): *[Mutable](../modules/objects.md#mutable)‹A›[]*

*Inherited from [MutableArray](objects.mutablearray.md).[concat](objects.mutablearray.md#concat)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1237

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | ConcatArray‹[Mutable](../modules/objects.md#mutable)‹A››[] | Additional items to add to the end of array1.  |

**Returns:** *[Mutable](../modules/objects.md#mutable)‹A›[]*

▸ **concat**(...`items`: T | ConcatArray‹T›[]): *[Mutable](../modules/objects.md#mutable)‹A›[]*

*Inherited from [MutableArray](objects.mutablearray.md).[concat](objects.mutablearray.md#concat)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1242

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | T &#124; ConcatArray‹T›[] | Additional items to add to the end of array1.  |

**Returns:** *[Mutable](../modules/objects.md#mutable)‹A›[]*

___

###  copyWithin

▸ **copyWithin**(`target`: number, `start`: number, `end?`: undefined | number): *this*

*Inherited from [MutableArray](objects.mutablearray.md).[copyWithin](objects.mutablearray.md#copywithin)*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:64

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | number | If target is negative, it is treated as length+target where length is the length of the array. |
`start` | number | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
`end?` | undefined &#124; number | If not specified, length of the this object is used as its default value.  |

**Returns:** *this*

___

###  entries

▸ **entries**(): *IterableIterator‹[number, [Mutable](../modules/objects.md#mutable)‹A›]›*

*Inherited from [MutableArray](objects.mutablearray.md).[entries](objects.mutablearray.md#entries)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

Returns an iterable of key, value pairs for every entry in the array

**Returns:** *IterableIterator‹[number, [Mutable](../modules/objects.md#mutable)‹A›]›*

___

###  every

▸ **every**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from [MutableArray](objects.mutablearray.md).[every](objects.mutablearray.md#every)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1310

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The every method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value false, or until the end of the array.

▸ (`value`: [Mutable](../modules/objects.md#mutable)‹A›, `index`: number, `array`: [Mutable](../modules/objects.md#mutable)‹A›[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Mutable](../modules/objects.md#mutable)‹A› |
`index` | number |
`array` | [Mutable](../modules/objects.md#mutable)‹A›[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  fill

▸ **fill**(`value`: [Mutable](../modules/objects.md#mutable)‹A›, `start?`: undefined | number, `end?`: undefined | number): *this*

*Inherited from [MutableArray](objects.mutablearray.md).[fill](objects.mutablearray.md#fill)*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:53

Returns the this object after filling the section identified by start and end with value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | [Mutable](../modules/objects.md#mutable)‹A› | value to fill array section with |
`start?` | undefined &#124; number | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
`end?` | undefined &#124; number | index to stop filling the array at. If end is negative, it is treated as length+end.  |

**Returns:** *this*

___

###  filter

▸ **filter**<**S**>(`callbackfn`: function, `thisArg?`: any): *S[]*

*Inherited from [MutableArray](objects.mutablearray.md).[filter](objects.mutablearray.md#filter)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1337

Returns the elements of an array that meet the condition specified in a callback function.

**Type parameters:**

▪ **S**: *[Mutable](../modules/objects.md#mutable)‹A›*

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: [Mutable](../modules/objects.md#mutable)‹A›, `index`: number, `array`: [Mutable](../modules/objects.md#mutable)‹A›[]): *value is S*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Mutable](../modules/objects.md#mutable)‹A› |
`index` | number |
`array` | [Mutable](../modules/objects.md#mutable)‹A›[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *S[]*

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[Mutable](../modules/objects.md#mutable)‹A›[]*

*Inherited from [MutableArray](objects.mutablearray.md).[filter](objects.mutablearray.md#filter)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1343

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: [Mutable](../modules/objects.md#mutable)‹A›, `index`: number, `array`: [Mutable](../modules/objects.md#mutable)‹A›[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Mutable](../modules/objects.md#mutable)‹A› |
`index` | number |
`array` | [Mutable](../modules/objects.md#mutable)‹A›[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *[Mutable](../modules/objects.md#mutable)‹A›[]*

___

###  find

▸ **find**<**S**>(`predicate`: function, `thisArg?`: any): *S | undefined*

*Inherited from [MutableArray](objects.mutablearray.md).[find](objects.mutablearray.md#find)*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:31

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Type parameters:**

▪ **S**: *[Mutable](../modules/objects.md#mutable)‹A›*

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

▸ (`this`: void, `value`: [Mutable](../modules/objects.md#mutable)‹A›, `index`: number, `obj`: [Mutable](../modules/objects.md#mutable)‹A›[]): *value is S*

**Parameters:**

Name | Type |
------ | ------ |
`this` | void |
`value` | [Mutable](../modules/objects.md#mutable)‹A› |
`index` | number |
`obj` | [Mutable](../modules/objects.md#mutable)‹A›[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *S | undefined*

▸ **find**(`predicate`: function, `thisArg?`: any): *[Mutable](../modules/objects.md#mutable)‹A› | undefined*

*Inherited from [MutableArray](objects.mutablearray.md).[find](objects.mutablearray.md#find)*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:32

**Parameters:**

▪ **predicate**: *function*

▸ (`value`: [Mutable](../modules/objects.md#mutable)‹A›, `index`: number, `obj`: [Mutable](../modules/objects.md#mutable)‹A›[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Mutable](../modules/objects.md#mutable)‹A› |
`index` | number |
`obj` | [Mutable](../modules/objects.md#mutable)‹A›[] |

▪`Optional`  **thisArg**: *any*

**Returns:** *[Mutable](../modules/objects.md#mutable)‹A› | undefined*

___

###  findIndex

▸ **findIndex**(`predicate`: function, `thisArg?`: any): *number*

*Inherited from [MutableArray](objects.mutablearray.md).[findIndex](objects.mutablearray.md#findindex)*

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:43

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

▸ (`value`: [Mutable](../modules/objects.md#mutable)‹A›, `index`: number, `obj`: [Mutable](../modules/objects.md#mutable)‹A›[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Mutable](../modules/objects.md#mutable)‹A› |
`index` | number |
`obj` | [Mutable](../modules/objects.md#mutable)‹A›[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [MutableArray](objects.mutablearray.md).[forEach](objects.mutablearray.md#foreach)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1325

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

▸ (`value`: [Mutable](../modules/objects.md#mutable)‹A›, `index`: number, `array`: [Mutable](../modules/objects.md#mutable)‹A›[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Mutable](../modules/objects.md#mutable)‹A› |
`index` | number |
`array` | [Mutable](../modules/objects.md#mutable)‹A›[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

###  includes

▸ **includes**(`searchElement`: [Mutable](../modules/objects.md#mutable)‹A›, `fromIndex?`: undefined | number): *boolean*

*Inherited from [MutableArray](objects.mutablearray.md).[includes](objects.mutablearray.md#includes)*

Defined in node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | [Mutable](../modules/objects.md#mutable)‹A› | The element to search for. |
`fromIndex?` | undefined &#124; number | The position in this array at which to begin searching for searchElement.  |

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`searchElement`: [Mutable](../modules/objects.md#mutable)‹A›, `fromIndex?`: undefined | number): *number*

*Inherited from [MutableArray](objects.mutablearray.md).[indexOf](objects.mutablearray.md#indexof)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1295

Returns the index of the first occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | [Mutable](../modules/objects.md#mutable)‹A› | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.  |

**Returns:** *number*

___

###  join

▸ **join**(`separator?`: undefined | string): *string*

*Inherited from [MutableArray](objects.mutablearray.md).[join](objects.mutablearray.md#join)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1247

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator?` | undefined &#124; string | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.  |

**Returns:** *string*

___

###  keys

▸ **keys**(): *IterableIterator‹number›*

*Inherited from [MutableArray](objects.mutablearray.md).[keys](objects.mutablearray.md#keys)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

Returns an iterable of keys in the array

**Returns:** *IterableIterator‹number›*

___

###  lastIndexOf

▸ **lastIndexOf**(`searchElement`: [Mutable](../modules/objects.md#mutable)‹A›, `fromIndex?`: undefined | number): *number*

*Inherited from [MutableArray](objects.mutablearray.md).[lastIndexOf](objects.mutablearray.md#lastindexof)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1301

Returns the index of the last occurrence of a specified value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | [Mutable](../modules/objects.md#mutable)‹A› | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.  |

**Returns:** *number*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *U[]*

*Inherited from [MutableArray](objects.mutablearray.md).[map](objects.mutablearray.md#map)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1331

Calls a defined callback function on each element of an array, and returns an array that contains the results.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

▸ (`value`: [Mutable](../modules/objects.md#mutable)‹A›, `index`: number, `array`: [Mutable](../modules/objects.md#mutable)‹A›[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Mutable](../modules/objects.md#mutable)‹A› |
`index` | number |
`array` | [Mutable](../modules/objects.md#mutable)‹A›[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *U[]*

___

###  pop

▸ **pop**(): *[Mutable](../modules/objects.md#mutable)‹A› | undefined*

*Inherited from [MutableArray](objects.mutablearray.md).[pop](objects.mutablearray.md#pop)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1227

Removes the last element from an array and returns it.

**Returns:** *[Mutable](../modules/objects.md#mutable)‹A› | undefined*

___

###  push

▸ **push**(...`items`: [Mutable](../modules/objects.md#mutable)‹A›[]): *number*

*Inherited from [MutableArray](objects.mutablearray.md).[push](objects.mutablearray.md#push)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1232

Appends new elements to an array, and returns the new length of the array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | [Mutable](../modules/objects.md#mutable)‹A›[] | New elements of the Array.  |

**Returns:** *number*

___

###  reduce

▸ **reduce**(`callbackfn`: function): *[Mutable](../modules/objects.md#mutable)‹A›*

*Inherited from [MutableArray](objects.mutablearray.md).[reduce](objects.mutablearray.md#reduce)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1349

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: [Mutable](../modules/objects.md#mutable)‹A›, `currentValue`: [Mutable](../modules/objects.md#mutable)‹A›, `currentIndex`: number, `array`: [Mutable](../modules/objects.md#mutable)‹A›[]): *[Mutable](../modules/objects.md#mutable)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [Mutable](../modules/objects.md#mutable)‹A› |
`currentValue` | [Mutable](../modules/objects.md#mutable)‹A› |
`currentIndex` | number |
`array` | [Mutable](../modules/objects.md#mutable)‹A›[] |

**Returns:** *[Mutable](../modules/objects.md#mutable)‹A›*

▸ **reduce**(`callbackfn`: function, `initialValue`: [Mutable](../modules/objects.md#mutable)‹A›): *[Mutable](../modules/objects.md#mutable)‹A›*

*Inherited from [MutableArray](objects.mutablearray.md).[reduce](objects.mutablearray.md#reduce)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1350

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: [Mutable](../modules/objects.md#mutable)‹A›, `currentValue`: [Mutable](../modules/objects.md#mutable)‹A›, `currentIndex`: number, `array`: [Mutable](../modules/objects.md#mutable)‹A›[]): *[Mutable](../modules/objects.md#mutable)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [Mutable](../modules/objects.md#mutable)‹A› |
`currentValue` | [Mutable](../modules/objects.md#mutable)‹A› |
`currentIndex` | number |
`array` | [Mutable](../modules/objects.md#mutable)‹A›[] |

▪ **initialValue**: *[Mutable](../modules/objects.md#mutable)‹A›*

**Returns:** *[Mutable](../modules/objects.md#mutable)‹A›*

▸ **reduce**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from [MutableArray](objects.mutablearray.md).[reduce](objects.mutablearray.md#reduce)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1356

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: [Mutable](../modules/objects.md#mutable)‹A›, `currentIndex`: number, `array`: [Mutable](../modules/objects.md#mutable)‹A›[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | [Mutable](../modules/objects.md#mutable)‹A› |
`currentIndex` | number |
`array` | [Mutable](../modules/objects.md#mutable)‹A›[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  reduceRight

▸ **reduceRight**(`callbackfn`: function): *[Mutable](../modules/objects.md#mutable)‹A›*

*Inherited from [MutableArray](objects.mutablearray.md).[reduceRight](objects.mutablearray.md#reduceright)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1362

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: [Mutable](../modules/objects.md#mutable)‹A›, `currentValue`: [Mutable](../modules/objects.md#mutable)‹A›, `currentIndex`: number, `array`: [Mutable](../modules/objects.md#mutable)‹A›[]): *[Mutable](../modules/objects.md#mutable)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [Mutable](../modules/objects.md#mutable)‹A› |
`currentValue` | [Mutable](../modules/objects.md#mutable)‹A› |
`currentIndex` | number |
`array` | [Mutable](../modules/objects.md#mutable)‹A›[] |

**Returns:** *[Mutable](../modules/objects.md#mutable)‹A›*

▸ **reduceRight**(`callbackfn`: function, `initialValue`: [Mutable](../modules/objects.md#mutable)‹A›): *[Mutable](../modules/objects.md#mutable)‹A›*

*Inherited from [MutableArray](objects.mutablearray.md).[reduceRight](objects.mutablearray.md#reduceright)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1363

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: [Mutable](../modules/objects.md#mutable)‹A›, `currentValue`: [Mutable](../modules/objects.md#mutable)‹A›, `currentIndex`: number, `array`: [Mutable](../modules/objects.md#mutable)‹A›[]): *[Mutable](../modules/objects.md#mutable)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [Mutable](../modules/objects.md#mutable)‹A› |
`currentValue` | [Mutable](../modules/objects.md#mutable)‹A› |
`currentIndex` | number |
`array` | [Mutable](../modules/objects.md#mutable)‹A›[] |

▪ **initialValue**: *[Mutable](../modules/objects.md#mutable)‹A›*

**Returns:** *[Mutable](../modules/objects.md#mutable)‹A›*

▸ **reduceRight**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from [MutableArray](objects.mutablearray.md).[reduceRight](objects.mutablearray.md#reduceright)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1369

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: [Mutable](../modules/objects.md#mutable)‹A›, `currentIndex`: number, `array`: [Mutable](../modules/objects.md#mutable)‹A›[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | [Mutable](../modules/objects.md#mutable)‹A› |
`currentIndex` | number |
`array` | [Mutable](../modules/objects.md#mutable)‹A›[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  reverse

▸ **reverse**(): *[Mutable](../modules/objects.md#mutable)‹A›[]*

*Inherited from [MutableArray](objects.mutablearray.md).[reverse](objects.mutablearray.md#reverse)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1251

Reverses the elements in an Array.

**Returns:** *[Mutable](../modules/objects.md#mutable)‹A›[]*

___

###  shift

▸ **shift**(): *[Mutable](../modules/objects.md#mutable)‹A› | undefined*

*Inherited from [MutableArray](objects.mutablearray.md).[shift](objects.mutablearray.md#shift)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1255

Removes the first element from an array and returns it.

**Returns:** *[Mutable](../modules/objects.md#mutable)‹A› | undefined*

___

###  slice

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): *[Mutable](../modules/objects.md#mutable)‹A›[]*

*Inherited from [MutableArray](objects.mutablearray.md).[slice](objects.mutablearray.md#slice)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1261

Returns a section of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start?` | undefined &#124; number | The beginning of the specified portion of the array. |
`end?` | undefined &#124; number | The end of the specified portion of the array. This is exclusive of the element at the index 'end'.  |

**Returns:** *[Mutable](../modules/objects.md#mutable)‹A›[]*

___

###  some

▸ **some**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from [MutableArray](objects.mutablearray.md).[some](objects.mutablearray.md#some)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1319

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The some method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value true, or until the end of the array.

▸ (`value`: [Mutable](../modules/objects.md#mutable)‹A›, `index`: number, `array`: [Mutable](../modules/objects.md#mutable)‹A›[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Mutable](../modules/objects.md#mutable)‹A› |
`index` | number |
`array` | [Mutable](../modules/objects.md#mutable)‹A›[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  sort

▸ **sort**(`compareFn?`: undefined | function): *this*

*Inherited from [MutableArray](objects.mutablearray.md).[sort](objects.mutablearray.md#sort)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1271

Sorts an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`compareFn?` | undefined &#124; function | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ```  |

**Returns:** *this*

___

###  splice

▸ **splice**(`start`: number, `deleteCount?`: undefined | number): *[Mutable](../modules/objects.md#mutable)‹A›[]*

*Inherited from [MutableArray](objects.mutablearray.md).[splice](objects.mutablearray.md#splice)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1277

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The zero-based location in the array from which to start removing elements. |
`deleteCount?` | undefined &#124; number | The number of elements to remove.  |

**Returns:** *[Mutable](../modules/objects.md#mutable)‹A›[]*

▸ **splice**(`start`: number, `deleteCount`: number, ...`items`: [Mutable](../modules/objects.md#mutable)‹A›[]): *[Mutable](../modules/objects.md#mutable)‹A›[]*

*Inherited from [MutableArray](objects.mutablearray.md).[splice](objects.mutablearray.md#splice)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1284

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The zero-based location in the array from which to start removing elements. |
`deleteCount` | number | The number of elements to remove. |
`...items` | [Mutable](../modules/objects.md#mutable)‹A›[] | Elements to insert into the array in place of the deleted elements.  |

**Returns:** *[Mutable](../modules/objects.md#mutable)‹A›[]*

___

###  toLocaleString

▸ **toLocaleString**(): *string*

*Inherited from [MutableArray](objects.mutablearray.md).[toLocaleString](objects.mutablearray.md#tolocalestring)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1223

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [MutableArray](objects.mutablearray.md).[toString](objects.mutablearray.md#tostring)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1219

Returns a string representation of an array.

**Returns:** *string*

___

###  unshift

▸ **unshift**(...`items`: [Mutable](../modules/objects.md#mutable)‹A›[]): *number*

*Inherited from [MutableArray](objects.mutablearray.md).[unshift](objects.mutablearray.md#unshift)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1289

Inserts new elements at the start of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | [Mutable](../modules/objects.md#mutable)‹A›[] | Elements to insert at the start of the Array.  |

**Returns:** *number*

___

###  values

▸ **values**(): *IterableIterator‹[Mutable](../modules/objects.md#mutable)‹A››*

*Inherited from [MutableArray](objects.mutablearray.md).[values](objects.mutablearray.md#values)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:75

Returns an iterable of values in the array

**Returns:** *IterableIterator‹[Mutable](../modules/objects.md#mutable)‹A››*
