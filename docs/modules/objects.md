[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [objects](objects.md)

# Package: objects

# @typed/objects

> Useful functions for working with regular ole objects.

## Index

### Interfaces

* [ImmutableArray](../interfaces/objects.immutablearray.md)
* [ImmutableMap](../interfaces/objects.immutablemap.md)
* [ImmutableSet](../interfaces/objects.immutableset.md)
* [MutableArray](../interfaces/objects.mutablearray.md)
* [MutableMap](../interfaces/objects.mutablemap.md)
* [MutableSet](../interfaces/objects.mutableset.md)

### Type aliases

* [ExtractUnionMember](objects.md#extractunionmember)
* [Immutable](objects.md#immutable)
* [ImmutableObject](objects.md#immutableobject)
* [MergeObjects](objects.md#mergeobjects)
* [Mutable](objects.md#mutable)
* [MutableObject](objects.md#mutableobject)
* [ObjectPath](objects.md#objectpath)
* [OptionalKeys](objects.md#optionalkeys)
* [OptionalProperties](objects.md#optionalproperties)
* [OptionalPropertyNames](objects.md#optionalpropertynames)
* [Overwrite](objects.md#overwrite)
* [Prop](objects.md#prop)
* [RequiredProperties](objects.md#requiredproperties)
* [RequiredPropertyNames](objects.md#requiredpropertynames)
* [ValuesOf](objects.md#valuesof)

### Variables

* [dissoc](objects.md#const-dissoc)
* [hasOwnProperty](objects.md#const-hasownproperty)
* [mapObj](objects.md#const-mapobj)
* [mapToList](objects.md#const-maptolist)
* [path](objects.md#const-path)
* [prop](objects.md#const-prop)
* [propOf](objects.md#const-propof)
* [set](objects.md#const-set)

### Functions

* [__mapToList](objects.md#__maptolist)
* [__set](objects.md#__set)
* [_dissoc](objects.md#_dissoc)
* [clone](objects.md#const-clone)
* [isEmpty](objects.md#isempty)
* [keysOf](objects.md#const-keysof)
* [valuesOf](objects.md#const-valuesof)

## Type aliases

###  ExtractUnionMember

Ƭ **ExtractUnionMember**: *Extract‹A, [Record](io.md#const-record)‹Tag, Value››*

*Defined in [packages/objects/source/types.ts:68](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/types.ts#L68)*

___

###  Immutable

Ƭ **Immutable**:

*Defined in [packages/objects/source/types.ts:53](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/types.ts#L53)*

___

###  ImmutableObject

Ƭ **ImmutableObject**: *object*

*Defined in [packages/objects/source/types.ts:66](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/types.ts#L66)*

#### Type declaration:

___

###  MergeObjects

Ƭ **MergeObjects**: *object & object*

*Defined in [packages/objects/source/types.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/types.ts#L30)*

___

###  Mutable

Ƭ **Mutable**: *A extends Primitive ? A : A extends ImmutableArray<infer V> ? MutableArray<V> : A extends ReadonlyArray<infer V> ? MutableArray<V> : A extends ImmutableMap<infer K, infer V> ? MutableMap<K, V> : A extends ReadonlyMap<infer K, infer V> ? MutableMap<K, V> : A extends ImmutableSet<infer V> ? MutableSet<V> : A extends ReadonlySet<infer V> ? MutableSet<V> : MutableObject<A>*

*Defined in [packages/objects/source/types.ts:74](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/types.ts#L74)*

___

###  MutableObject

Ƭ **MutableObject**: *object*

*Defined in [packages/objects/source/types.ts:93](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/types.ts#L93)*

#### Type declaration:

___

###  ObjectPath

Ƭ **ObjectPath**: *Keys extends [] ? T : Keys extends [keyof T] ? Prop<T, Keys[0]> : Keys extends [PropertyKey, PropertyKey] ? Prop<Prop<T, Keys[0]>, Keys[1]> : Keys extends [PropertyKey, PropertyKey, PropertyKey] ? Prop<Prop<Prop<T, Keys[0]>, Keys[1]>, Keys[2]> : Keys extends [PropertyKey, PropertyKey, PropertyKey, PropertyKey] ? Prop<Prop<Prop<Prop<T, Keys[0]>, Keys[1]>, Keys[2]>, Keys[3]> : Keys extends [PropertyKey, PropertyKey, PropertyKey, PropertyKey, PropertyKey] ? Prop<Prop<Prop<Prop<Prop<T, Keys[0]>, Keys[1]>, Keys[2]>, Keys[3]>, Keys[4]> : undefined*

*Defined in [packages/objects/source/types.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/types.ts#L5)*

___

###  OptionalKeys

Ƭ **OptionalKeys**: *[DropKeys](common.md#dropkeys)‹A, K› & Partial‹Pick‹A, K››*

*Defined in [packages/objects/source/types.ts:51](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/types.ts#L51)*

___

###  OptionalProperties

Ƭ **OptionalProperties**: *Pick‹A, [OptionalPropertyNames](objects.md#optionalpropertynames)‹A››*

*Defined in [packages/objects/source/types.ts:27](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/types.ts#L27)*

___

###  OptionalPropertyNames

Ƭ **OptionalPropertyNames**: *object[keyof A]*

*Defined in [packages/objects/source/types.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/types.ts#L21)*

___

###  Overwrite

Ƭ **Overwrite**: *B & [MergeObjects](objects.md#mergeobjects)‹[DropKeys](common.md#dropkeys)‹A, keyof B›, B›*

*Defined in [packages/objects/source/types.ts:49](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/types.ts#L49)*

___

###  Prop

Ƭ **Prop**: *K extends keyof T ? T[K] : undefined*

*Defined in [packages/objects/source/types.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/types.ts#L4)*

___

###  RequiredProperties

Ƭ **RequiredProperties**: *Pick‹A, [RequiredPropertyNames](objects.md#requiredpropertynames)‹A››*

*Defined in [packages/objects/source/types.ts:28](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/types.ts#L28)*

___

###  RequiredPropertyNames

Ƭ **RequiredPropertyNames**: *object[keyof A]*

*Defined in [packages/objects/source/types.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/types.ts#L24)*

___

###  ValuesOf

Ƭ **ValuesOf**: *object[keyof A]*

*Defined in [packages/objects/source/types.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/types.ts#L19)*

## Variables

### `Const` dissoc

• **dissoc**: *function* = curry(_dissoc) as {
  <K extends PropertyKey, A extends Record<K, any>>(key: K, obj: A): DropKeys<A, K>
  <K extends PropertyKey>(key: K): <A extends Record<K, any>>(obj: A) => DropKeys<A, K>
}

*Defined in [packages/objects/source/dissoc.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/dissoc.ts#L8)*

Disassociate a key from an object

#### Type declaration:

▸ <**K**, **A**>(`key`: K, `obj`: A): *[DropKeys](common.md#dropkeys)‹A, K›*

**Type parameters:**

▪ **K**: *PropertyKey*

▪ **A**: *[Record](io.md#const-record)‹K, any›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`obj` | A |

▸ <**K**>(`key`: K): *function*

**Type parameters:**

▪ **K**: *PropertyKey*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

▸ <**A**>(`obj`: A): *[DropKeys](common.md#dropkeys)‹A, K›*

**Type parameters:**

▪ **A**: *[Record](io.md#const-record)‹K, any›*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | A |

___

### `Const` hasOwnProperty

• **hasOwnProperty**: *function* = curry(
  <A extends PropertyKey, B extends object>(
    key: A,
    obj: B,
  ): obj is B & { readonly [K in A]: unknown } =>
    obj && Object.prototype.hasOwnProperty.call(obj, key),
) as {
  <A extends PropertyKey, B extends object>(key: A, obj: B): obj is B &
    { readonly [K in A]: unknown }
  <A extends PropertyKey>(key: A): <B extends object>(
    obj: B,
  ) => obj is B & { readonly [K in A]: unknown }
}

*Defined in [packages/objects/source/hasOwnProperty.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/hasOwnProperty.ts#L6)*

Check if an object has a given property.

#### Type declaration:

▸ <**A**, **B**>(`key`: A, `obj`: B): *obj is B & object*

**Type parameters:**

▪ **A**: *PropertyKey*

▪ **B**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`key` | A |
`obj` | B |

▸ <**A**>(`key`: A): *function*

**Type parameters:**

▪ **A**: *PropertyKey*

**Parameters:**

Name | Type |
------ | ------ |
`key` | A |

▸ <**B**>(`obj`: B): *obj is B & object*

**Type parameters:**

▪ **B**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | B |

___

### `Const` mapObj

• **mapObj**: *function* = curry(__mapObj) as {
  <A, B, C extends Record<PropertyKey, A>>(
    fn: <K extends keyof C>(key: K, value: C[K]) => B,
    obj: C,
  ): { [K in keyof C]: B }

  <A, B, C extends Record<PropertyKey, A>>(fn: <K extends keyof C>(key: K, value: C[K]) => B): (
    obj: C,
  ) => { [K in keyof C]: B }
}

*Defined in [packages/objects/source/mapObj.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/mapObj.ts#L7)*

Map over values contained in an object.

#### Type declaration:

▸ <**A**, **B**, **C**>(`fn`: function, `obj`: C): *object*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**: *[Record](io.md#const-record)‹PropertyKey, A›*

**Parameters:**

▪ **fn**: *function*

▸ <**K**>(`key`: K, `value`: C[K]): *B*

**Type parameters:**

▪ **K**: *keyof C*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | C[K] |

▪ **obj**: *C*

▸ <**A**, **B**, **C**>(`fn`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**: *[Record](io.md#const-record)‹PropertyKey, A›*

**Parameters:**

▪ **fn**: *function*

▸ <**K**>(`key`: K, `value`: C[K]): *B*

**Type parameters:**

▪ **K**: *keyof C*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | C[K] |

▸ (`obj`: C): *object*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | C |

___

### `Const` mapToList

• **mapToList**: *function* = curry(__mapToList)

*Defined in [packages/objects/source/mapToList.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/mapToList.ts#L6)*

Map over an object into a list of values.

#### Type declaration:

▸ <**A**, **B**, **C**>(`fn`: function, `obj`: [Record](io.md#const-record)‹A, B›): *C[]*

**Type parameters:**

▪ **A**: *keyof any*

▪ **B**

▪ **C**

**Parameters:**

▪ **fn**: *function*

▸ (`key`: A, `value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`key` | A |
`value` | B |

▪ **obj**: *[Record](io.md#const-record)‹A, B›*

▸ <**A**, **B**, **C**>(`fn`: function): *function*

**Type parameters:**

▪ **A**: *keyof any*

▪ **B**

▪ **C**

**Parameters:**

▪ **fn**: *function*

▸ (`key`: A, `value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`key` | A |
`value` | B |

▸ (`obj`: [Record](io.md#const-record)‹A, B›): *C[]*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [Record](io.md#const-record)‹A, B› |

___

### `Const` path

• **path**: *function* = curry(
  <Keys extends PropertyKey[], A extends object>(keys: Keys, obj: A): Maybe<ObjectPath<A, Keys>> =>
    (keys.length === 0
      ? Maybe.of(obj)
      : keys.length === 1
      ? prop(keys[0], obj)
      : keys
          .slice(1)
          .reduce(
            (maybe, key) => chain(prop(key) as any, maybe) as any,
            prop(keys[0], obj),
          )) as Maybe<ObjectPath<A, Keys>>,
) as {
  <Keys extends PropertyKey[], A extends object>(keys: Keys, obj: A): Maybe<ObjectPath<A, Keys>>
  <Keys extends PropertyKey[]>(keys: Keys): <A extends object>(obj: A) => Maybe<ObjectPath<A, Keys>>
}

*Defined in [packages/objects/source/path.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/path.ts#L9)*

Get value at a given path.

#### Type declaration:

▸ <**Keys**, **A**>(`keys`: Keys, `obj`: A): *[Maybe](io.md#const-maybe)‹[ObjectPath](objects.md#objectpath)‹A, Keys››*

**Type parameters:**

▪ **Keys**: *PropertyKey[]*

▪ **A**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | Keys |
`obj` | A |

▸ <**Keys**>(`keys`: Keys): *function*

**Type parameters:**

▪ **Keys**: *PropertyKey[]*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | Keys |

▸ <**A**>(`obj`: A): *[Maybe](io.md#const-maybe)‹[ObjectPath](objects.md#objectpath)‹A, Keys››*

**Type parameters:**

▪ **A**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | A |

___

### `Const` prop

• **prop**: *function* = curry(
  <K extends PropertyKey, O extends Partial<{ [_ in K]: any }>>(key: K, obj: O): Maybe<O[K]> =>
    hasOwnProperty(key, obj) ? Maybe.of(obj[key]) : Nothing,
) as {
  <K extends PropertyKey, O extends Partial<{ [_ in K]: any }>>(key: K, obj: O): Maybe<O[K]>
  <K extends PropertyKey>(key: K): <O extends Partial<{ [_ in K]: any }>>(obj: O) => Maybe<O[K]>
}

*Defined in [packages/objects/source/prop.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/prop.ts#L8)*

Get a value from an object.

#### Type declaration:

▸ <**K**, **O**>(`key`: K, `obj`: O): *[Maybe](io.md#const-maybe)‹O[K]›*

**Type parameters:**

▪ **K**: *PropertyKey*

▪ **O**: *Partial‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`obj` | O |

▸ <**K**>(`key`: K): *function*

**Type parameters:**

▪ **K**: *PropertyKey*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

▸ <**O**>(`obj`: O): *[Maybe](io.md#const-maybe)‹O[K]›*

**Type parameters:**

▪ **O**: *Partial‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | O |

___

### `Const` propOf

• **propOf**: *function* = curry(
  <K extends PropertyKey, O extends Record<K, any>>(key: K, obj: O): O[K] => obj[key],
) as {
  <K extends PropertyKey, O extends Record<K, any>>(key: K, obj: O): O[K]
  <K extends PropertyKey>(key: K): <O extends Record<K, any>>(obj: O) => O[K]
}

*Defined in [packages/objects/source/prop.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/prop.ts#L16)*

#### Type declaration:

▸ <**K**, **O**>(`key`: K, `obj`: O): *O[K]*

**Type parameters:**

▪ **K**: *PropertyKey*

▪ **O**: *[Record](io.md#const-record)‹K, any›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`obj` | O |

▸ <**K**>(`key`: K): *function*

**Type parameters:**

▪ **K**: *PropertyKey*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

▸ <**O**>(`obj`: O): *O[K]*

**Type parameters:**

▪ **O**: *[Record](io.md#const-record)‹K, any›*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | O |

___

### `Const` set

• **set**: *function* = curry(__set) as {
  <K extends PropertyKey, V, O extends { [Key in K]: V }>(key: K, value: V, obj: O): O
  <K extends PropertyKey, V>(key: K, value: V): <O extends { [Key in K]: V }>(obj: O) => O
  <K extends PropertyKey>(key: K): {
    <V, O extends { [Key in K]: V }>(value: V, obj: O): O
    <V>(value: V): <O extends { [Key in K]: V }>(obj: O) => O
  }
}

*Defined in [packages/objects/source/set.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/set.ts#L7)*

Set the value of an object

#### Type declaration:

▸ <**K**, **V**, **O**>(`key`: K, `value`: V, `obj`: O): *O*

**Type parameters:**

▪ **K**: *PropertyKey*

▪ **V**

▪ **O**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | V |
`obj` | O |

▸ <**K**, **V**>(`key`: K, `value`: V): *function*

**Type parameters:**

▪ **K**: *PropertyKey*

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | V |

▸ <**O**>(`obj`: O): *O*

**Type parameters:**

▪ **O**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | O |

▸ <**K**>(`key`: K): *function*

**Type parameters:**

▪ **K**: *PropertyKey*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

▸ <**V**, **O**>(`value`: V, `obj`: O): *O*

**Type parameters:**

▪ **V**

▪ **O**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |
`obj` | O |

▸ <**V**>(`value`: V): *function*

**Type parameters:**

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`value` | V |

▸ <**O**>(`obj`: O): *O*

**Type parameters:**

▪ **O**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | O |

## Functions

###  __mapToList

▸ **__mapToList**<**A**, **B**, **C**>(`fn`: function, `obj`: [Record](io.md#const-record)‹A, B›): *C[]*

*Defined in [packages/objects/source/mapToList.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/mapToList.ts#L11)*

**Type parameters:**

▪ **A**: *keyof any*

▪ **B**

▪ **C**

**Parameters:**

▪ **fn**: *function*

▸ (`key`: A, `value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`key` | A |
`value` | B |

▪ **obj**: *[Record](io.md#const-record)‹A, B›*

**Returns:** *C[]*

___

###  __set

▸ **set __set**<**K**, **V**, **O**>(`key`: K, `value`: V, `obj`: O): *O*

*Defined in [packages/objects/source/set.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/set.ts#L16)*

**Type parameters:**

▪ **K**: *PropertyKey*

▪ **V**

▪ **O**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | V |
`obj` | O |

**Returns:** *O*

___

###  _dissoc

▸ **_dissoc**<**K**, **A**>(`key`: K, `obj`: A): *[DropKeys](common.md#dropkeys)‹A, K›*

*Defined in [packages/objects/source/dissoc.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/dissoc.ts#L13)*

**Type parameters:**

▪ **K**: *PropertyKey*

▪ **A**: *[Record](io.md#const-record)‹K, any›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`obj` | A |

**Returns:** *[DropKeys](common.md#dropkeys)‹A, K›*

___

### `Const` clone

▸ **clone**<**A**>(`value`: A): *A*

*Defined in [packages/objects/source/clone.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/clone.ts#L8)*

Make a deep clone of a given value

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | A | :: a |

**Returns:** *A*

:: a

___

###  isEmpty

▸ **isEmpty**(`x`: any): *boolean*

*Defined in [packages/objects/source/isEmpty.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/isEmpty.ts#L4)*

Returns true if an object has no keys.

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |

**Returns:** *boolean*

___

### `Const` keysOf

▸ **keysOf**<**A**>(`obj`: A): *ReadonlyArray‹keyof A›*

*Defined in [packages/objects/source/keysOf.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/keysOf.ts#L4)*

Return the keys of a given object.

**Type parameters:**

▪ **A**: *Partial‹Readonly‹[Record](io.md#const-record)‹PropertyKey, any›››*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | A |

**Returns:** *ReadonlyArray‹keyof A›*

___

### `Const` valuesOf

▸ **valuesOf**<**A**>(`obj`: A): *A extends Record<any, infer R> ? R[] : []*

*Defined in [packages/objects/source/valuesOf.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/objects/source/valuesOf.ts#L6)*

Get all the values contained in an object.

**Type parameters:**

▪ **A**: *[Record](io.md#const-record)‹any, any›*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | A |

**Returns:** *A extends Record<any, infer R> ? R[] : []*
