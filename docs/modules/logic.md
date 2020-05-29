[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [logic](logic.md)

# Package: logic

# @typed/logic

> Composable logic operations

## Index

### Namespaces

* [Match](logic.md#match)

### Enumerations

* [Tag](../enums/logic.tag.md)

### Interfaces

* [IfElseFn](../interfaces/logic.ifelsefn.md)
* [JsonSerializableRecord](../interfaces/logic.jsonserializablerecord.md)

### Type aliases

* [Conditional](logic.md#conditional)
* [Equals](logic.md#equals)
* [JSON_TAG](logic.md#json_tag)
* [JsonSerializable](logic.md#jsonserializable)
* [TaggedJson](logic.md#taggedjson)
* [TaggedJsonValues](logic.md#taggedjsonvalues)
* [VALUES_TAG](logic.md#values_tag)

### Variables

* [JSON_TAG](logic.md#const-json_tag)
* [VALUES_TAG](logic.md#const-values_tag)
* [all](logic.md#const-all)
* [allPass](logic.md#const-allpass)
* [and](logic.md#const-and)
* [any](logic.md#const-any)
* [anyPass](logic.md#const-anypass)
* [cond](logic.md#const-cond)
* [equals](logic.md#const-equals)
* [equalsBy](logic.md#const-equalsby)
* [greaterThan](logic.md#const-greaterthan)
* [greaterThanOrEqual](logic.md#const-greaterthanorequal)
* [ifElse](logic.md#const-ifelse)
* [isBoolean](logic.md#const-isboolean)
* [isFalse](logic.md#isfalse)
* [isJson](logic.md#const-isjson)
* [isJsonPrimitive](logic.md#const-isjsonprimitive)
* [isNotArray](logic.md#const-isnotarray)
* [isNotArrayLike](logic.md#const-isnotarraylike)
* [isNotBoolean](logic.md#const-isnotboolean)
* [isNotFalse](logic.md#isnotfalse)
* [isNotFunction](logic.md#const-isnotfunction)
* [isNotGenerator](logic.md#const-isnotgenerator)
* [isNotIterable](logic.md#const-isnotiterable)
* [isNotIterator](logic.md#const-isnotiterator)
* [isNotJson](logic.md#const-isnotjson)
* [isNotJsonArray](logic.md#const-isnotjsonarray)
* [isNotJsonObject](logic.md#const-isnotjsonobject)
* [isNotJsonPrimitive](logic.md#const-isnotjsonprimitive)
* [isNotMap](logic.md#const-isnotmap)
* [isNotNull](logic.md#isnotnull)
* [isNotNumber](logic.md#const-isnotnumber)
* [isNotObject](logic.md#const-isnotobject)
* [isNotPromiseLie](logic.md#const-isnotpromiselie)
* [isNotRecord](logic.md#const-isnotrecord)
* [isNotSet](logic.md#const-isnotset)
* [isNotString](logic.md#const-isnotstring)
* [isNotTrue](logic.md#isnottrue)
* [isNotUndefined](logic.md#isnotundefined)
* [isNull](logic.md#isnull)
* [isTrue](logic.md#istrue)
* [isUndefined](logic.md#isundefined)
* [lessThan](logic.md#const-lessthan)
* [lessThanOrEqual](logic.md#const-lessthanorequal)
* [or](logic.md#const-or)
* [propEq](logic.md#const-propeq)
* [propOr](logic.md#const-propor)
* [test](logic.md#const-test)
* [toggleOrSet](logic.md#const-toggleorset)

### Functions

* [__all](logic.md#__all)
* [__allPass](logic.md#__allpass)
* [__and](logic.md#__and)
* [__any](logic.md#__any)
* [__anyPass](logic.md#__anypass)
* [__cond](logic.md#__cond)
* [__ifElse](logic.md#__ifelse)
* [__or](logic.md#__or)
* [__propOr](logic.md#__propor)
* [complement](logic.md#const-complement)
* [exec](logic.md#const-exec)
* [fromJson](logic.md#fromjson)
* [hasJsonTag](logic.md#const-hasjsontag)
* [hasValuesTag](logic.md#const-hasvaluestag)
* [is](logic.md#const-is)
* [isAndIsNot](logic.md#const-isandisnot)
* [isArray](logic.md#isarray)
* [isArrayLike](logic.md#const-isarraylike)
* [isGenerator](logic.md#const-isgenerator)
* [isIterable](logic.md#isiterable)
* [isIterator](logic.md#isiterator)
* [isJsonArray](logic.md#const-isjsonarray)
* [isJsonObject](logic.md#const-isjsonobject)
* [isNot](logic.md#const-isnot)
* [isNumber](logic.md#const-isnumber)
* [isObject](logic.md#const-isobject)
* [isPromiseLike](logic.md#const-ispromiselike)
* [isRecord](logic.md#const-isrecord)
* [isString](logic.md#const-isstring)
* [not](logic.md#not)
* [oneOf](logic.md#oneof)
* [replaceJson](logic.md#replacejson)
* [reviveJson](logic.md#revivejson)
* [reviveMapEntries](logic.md#revivemapentries)
* [reviveSetEntries](logic.md#revivesetentries)
* [toJson](logic.md#tojson)

## Namespaces

###  Match

▸ (`value`: A): *B*

Defined in packages/lambda/esm/types.d.ts:3

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *B*

### `Const` map

• **map**: *function* = curry(
    <A, B, C>(fn: (value: B) => C, match: Match<A, B>): Match<A, C> => (value: A) =>
      maybeMap(fn, match(value)),
  ) as {
    <A, B, C>(fn: (value: B) => C, match: Match<A, B>): Match<A, C>
    <B, C>(fn: (value: B) => C): <A>(match: Match<A, B>) => Match<A, C>
  }

*Defined in [packages/logic/source/types.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/types.ts#L7)*

#### Type declaration:

▸ <**A**, **B**, **C**>(`fn`: function, `match`: [Match](logic.md#match)‹A, B›): *[Match](logic.md#match)‹A, C›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **match**: *[Match](logic.md#match)‹A, B›*

▸ <**B**, **C**>(`fn`: function): *function*

**Type parameters:**

▪ **B**

▪ **C**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ <**A**>(`match`: [Match](logic.md#match)‹A, B›): *[Match](logic.md#match)‹A, C›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`match` | [Match](logic.md#match)‹A, B› |

###  fromPredicate

▸ **fromPredicate**<**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›): *[Match](logic.md#match)‹A, A›*

*Defined in [packages/logic/source/types.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/types.ts#L15)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |

**Returns:** *[Match](logic.md#match)‹A, A›*

▸ **fromPredicate**<**A**, **B**>(`predicate`: [Is](lambda.md#is)‹B›): *[Match](logic.md#match)‹A, B›*

*Defined in [packages/logic/source/types.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/types.ts#L16)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Is](lambda.md#is)‹B› |

**Returns:** *[Match](logic.md#match)‹A, B›*

## Type aliases

###  Conditional

Ƭ **Conditional**: *[[Predicate](lambda.md#predicate)‹A›, function]*

*Defined in [packages/logic/source/cond.ts:36](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/cond.ts#L36)*

**`name`** Conditional

___

###  Equals

Ƭ **Equals**: *function*

*Defined in [packages/logic/source/equals.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/equals.ts#L12)*

#### Type declaration:

▸ <**A**>(`a`: A, `b`: unknown): *b is A*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | unknown |

▸ <**A**>(`a`: A): *[Is](lambda.md#is)‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

___

###  JSON_TAG

Ƭ **JSON_TAG**: *typeof JSON_TAG*

*Defined in [packages/logic/source/json.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/json.ts#L22)*

___

###  JsonSerializable

Ƭ **JsonSerializable**: *[JsonPrimitive](common.md#jsonprimitive) | ReadonlyArray‹[JsonSerializable](logic.md#jsonserializable)› | [JsonSerializableRecord](../interfaces/logic.jsonserializablerecord.md) | ReadonlyMap‹[JsonSerializable](logic.md#jsonserializable), [JsonSerializable](logic.md#jsonserializable)› | ReadonlySet‹[JsonSerializable](logic.md#jsonserializable)›*

*Defined in [packages/logic/source/json.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/json.ts#L4)*

___

###  TaggedJson

Ƭ **TaggedJson**: *object*

*Defined in [packages/logic/source/json.ts:37](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/json.ts#L37)*

#### Type declaration:

* **[JSON_TAG]**: *A*

* **[VALUES_TAG]**: *TaggedJsonValues[A]*

___

###  TaggedJsonValues

Ƭ **TaggedJsonValues**: *object*

*Defined in [packages/logic/source/json.ts:32](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/json.ts#L32)*

#### Type declaration:

* **[Tag.Map]**: *ReadonlyArray‹keyof [Json, Json]›*

* **[Tag.Set]**: *ReadonlyArray‹[Json](common.md#json)›*

___

###  VALUES_TAG

Ƭ **VALUES_TAG**: *typeof VALUES_TAG*

*Defined in [packages/logic/source/json.ts:25](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/json.ts#L25)*

## Variables

### `Const` JSON_TAG

• **JSON_TAG**: *"__json_tag__"* = '__json_tag__' as const

*Defined in [packages/logic/source/json.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/json.ts#L21)*

___

### `Const` VALUES_TAG

• **VALUES_TAG**: *"__values_tag__"* = '__values_tag__' as const

*Defined in [packages/logic/source/json.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/json.ts#L24)*

___

### `Const` all

• **all**: *function* = curry(__all)

*Defined in [packages/logic/source/all.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/all.ts#L10)*

Returns true if all values in a list match a predicate, false otherwise.

**`param`** :: (a -> boolean)

**`param`** :: [a]

**`returns`** :: boolean

#### Type declaration:

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `value`: ReadonlyArray‹A›): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`value` | ReadonlyArray‹A› |

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›): *[Predicate](lambda.md#predicate)‹ReadonlyArray‹A››*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |

___

### `Const` allPass

• **allPass**: *function* = curry(__allPass) as {
  <A>(predicates: ReadonlyArray<Predicate<A>>, value: A): boolean
  <A>(predicates: ReadonlyArray<Predicate<A>>): Predicate<A>
}

*Defined in [packages/logic/source/allPass.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/allPass.ts#L10)*

Returns true if value matches a list of predicates.

**`param`** :: [(a -> boolean)]

**`param`** :: a

**`returns`** :: boolean

#### Type declaration:

▸ <**A**>(`predicates`: ReadonlyArray‹[Predicate](lambda.md#predicate)‹A››, `value`: A): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicates` | ReadonlyArray‹[Predicate](lambda.md#predicate)‹A›› |
`value` | A |

▸ <**A**>(`predicates`: ReadonlyArray‹[Predicate](lambda.md#predicate)‹A››): *[Predicate](lambda.md#predicate)‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicates` | ReadonlyArray‹[Predicate](lambda.md#predicate)‹A›› |

___

### `Const` and

• **and**: *function* = curry(__and) as {
  <C, A extends C, B extends C>(predicate1: Is<A>, predicate2: Is<B>, value: C): value is A & B
  <C, A extends C, B extends C>(predicate1: Is<A>, predicate2: Is<B>): (value: C) => value is A & B
  <C, A extends C>(predicate1: Is<A>): {
    <B extends C>(predicate2: Is<B>, value: C): value is A & B
    <B extends C>(predicate2: Is<B>): (value: C) => value is A & B
  }

  <A>(predicate1: Predicate<A>, predicate2: Predicate<A>, value: A): boolean
  <A>(predicate1: Predicate<A>, predicate2: Predicate<A>): Predicate<A>
  <A>(predicate1: Predicate<A>): {
    (predicate2: Predicate<A>, value: A): boolean
    (predicate2: Predicate<A>): Predicate<A>
  }
}

*Defined in [packages/logic/source/and.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/and.ts#L10)*

Returns true if both predicates return true.

**`param`** :: (a -> boolean)

**`param`** :: (a -> boolean)

**`param`** :: a

**`returns`** :: boolean

#### Type declaration:

▸ <**A**, **B**>(`predicate1`: [Is](lambda.md#is)‹A›, `predicate2`: [Is](lambda.md#is)‹B›, `value`: unknown): *value is A & B*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`predicate1` | [Is](lambda.md#is)‹A› |
`predicate2` | [Is](lambda.md#is)‹B› |
`value` | unknown |

▸ <**A**, **B**>(`predicate1`: [Is](lambda.md#is)‹A›, `predicate2`: [Is](lambda.md#is)‹B›): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`predicate1` | [Is](lambda.md#is)‹A› |
`predicate2` | [Is](lambda.md#is)‹B› |

▸ (`value`: unknown): *value is A & B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

▸ <**A**>(`predicate1`: [Is](lambda.md#is)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate1` | [Is](lambda.md#is)‹A› |

▸ <**B**>(`predicate2`: [Is](lambda.md#is)‹B›, `value`: unknown): *value is A & B*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`predicate2` | [Is](lambda.md#is)‹B› |
`value` | unknown |

▸ <**B**>(`predicate2`: [Is](lambda.md#is)‹B›): *function*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`predicate2` | [Is](lambda.md#is)‹B› |

▸ (`value`: unknown): *value is A & B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

▸ <**A**>(`predicate1`: [Predicate](lambda.md#predicate)‹A›, `predicate2`: [Predicate](lambda.md#predicate)‹A›, `value`: A): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate1` | [Predicate](lambda.md#predicate)‹A› |
`predicate2` | [Predicate](lambda.md#predicate)‹A› |
`value` | A |

▸ <**A**>(`predicate1`: [Predicate](lambda.md#predicate)‹A›, `predicate2`: [Predicate](lambda.md#predicate)‹A›): *[Predicate](lambda.md#predicate)‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate1` | [Predicate](lambda.md#predicate)‹A› |
`predicate2` | [Predicate](lambda.md#predicate)‹A› |

▸ <**A**>(`predicate1`: [Predicate](lambda.md#predicate)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate1` | [Predicate](lambda.md#predicate)‹A› |

▸ (`predicate2`: [Predicate](lambda.md#predicate)‹A›, `value`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`predicate2` | [Predicate](lambda.md#predicate)‹A› |
`value` | A |

▸ (`predicate2`: [Predicate](lambda.md#predicate)‹A›): *[Predicate](lambda.md#predicate)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`predicate2` | [Predicate](lambda.md#predicate)‹A› |

___

### `Const` any

• **any**: *function* = curry(__any) as {
  <A>(predicate: Predicate<A>, list: readonly A[]): boolean
  <A>(predicate: Predicate<A>): (list: readonly A[]) => boolean
}

*Defined in [packages/logic/source/any.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/any.ts#L10)*

Returns true if any values in a list pass the given predicate.

**`param`** :: (a -> boolean)

**`param`** :: [a]

**`returns`** :: boolean

#### Type declaration:

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `list`: keyof A[]): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`list` | keyof A[] |

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |

▸ (`list`: keyof A[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`list` | keyof A[] |

___

### `Const` anyPass

• **anyPass**: *function* = curry(__anyPass) as {
  <A>(predicates: ReadonlyArray<Predicate<A>>, value: A): boolean
  <A>(predicates: ReadonlyArray<Predicate<A>>): (value: A) => boolean
}

*Defined in [packages/logic/source/anyPass.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/anyPass.ts#L9)*

Returns true if value matches any predicates

**`param`** :: [(a -> boolean)]

**`param`** :: a

**`returns`** :: boolean

#### Type declaration:

▸ <**A**>(`predicates`: ReadonlyArray‹[Predicate](lambda.md#predicate)‹A››, `value`: A): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicates` | ReadonlyArray‹[Predicate](lambda.md#predicate)‹A›› |
`value` | A |

▸ <**A**>(`predicates`: ReadonlyArray‹[Predicate](lambda.md#predicate)‹A››): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicates` | ReadonlyArray‹[Predicate](lambda.md#predicate)‹A›› |

▸ (`value`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

___

### `Const` cond

• **cond**: *function* = curry(__cond) as {
  <A, B>(conditions: ReadonlyArray<Conditional<A, B>>, value: A): Maybe<B>
  <A, B>(conditions: ReadonlyArray<Conditional<A, B>>): (value: A) => Maybe<B>
}

*Defined in [packages/logic/source/cond.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/cond.ts#L10)*

Basic pattern matching

**`param`** :: [((a -> boolean), (a -> b))]

**`param`** :: a

**`returns`** :: Maybe b

#### Type declaration:

▸ <**A**, **B**>(`conditions`: ReadonlyArray‹[Conditional](logic.md#conditional)‹A, B››, `value`: A): *[Maybe](io.md#const-maybe)‹B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`conditions` | ReadonlyArray‹[Conditional](logic.md#conditional)‹A, B›› |
`value` | A |

▸ <**A**, **B**>(`conditions`: ReadonlyArray‹[Conditional](logic.md#conditional)‹A, B››): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`conditions` | ReadonlyArray‹[Conditional](logic.md#conditional)‹A, B›› |

▸ (`value`: A): *[Maybe](io.md#const-maybe)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

___

### `Const` equals

• **equals**: *[Equals](logic.md#equals)* = curry(<A>(a: A, b: A) => _equals(a, b, [], [])) as Equals

*Defined in [packages/logic/source/equals.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/equals.ts#L10)*

Check if two values have value-equality.

**`param`** :: a

**`param`** :: a

**`returns`** :: boolean

___

### `Const` equalsBy

• **equalsBy**: *function* = curry(<A, B>(by: Arity1<A, B>, a: A, b: A): boolean => equals(by(a), by(b)))

*Defined in [packages/logic/source/equals.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/equals.ts#L17)*

#### Type declaration:

▸ <**A**, **B**>(`by`: [Arity1](lambda.md#arity1)‹A, B›, `a`: A, `b`: A): *boolean*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`by` | [Arity1](lambda.md#arity1)‹A, B› |
`a` | A |
`b` | A |

▸ <**A**, **B**>(`by`: [Arity1](lambda.md#arity1)‹A, B›, `a`: A): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`by` | [Arity1](lambda.md#arity1)‹A, B› |
`a` | A |

▸ (`b`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`b` | A |

▸ <**A**, **B**>(`by`: [Arity1](lambda.md#arity1)‹A, B›): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`by` | [Arity1](lambda.md#arity1)‹A, B› |

▸ (`a`: A, `b`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | A |

▸ (`a`: A): *function*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▸ (`b`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`b` | A |

___

### `Const` greaterThan

• **greaterThan**: *function* = curry(<A>(right: A, left: A) => left > right) as {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
}

*Defined in [packages/logic/source/greaterThan.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/greaterThan.ts#L9)*

Compares two values with >

**`param`** :: a

**`param`** :: b

**`returns`** :: boolean

#### Type declaration:

▸ <**A**>(`right`: A, `left`: A): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`right` | A |
`left` | A |

▸ <**A**>(`right`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`right` | A |

▸ (`left`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`left` | A |

___

### `Const` greaterThanOrEqual

• **greaterThanOrEqual**: *function* = curry(<A>(right: A, left: A) => left >= right) as {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
}

*Defined in [packages/logic/source/greaterThanOrEqual.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/greaterThanOrEqual.ts#L9)*

Compares two values with >=

**`param`** :: a

**`param`** :: b

**`returns`** :: boolean

#### Type declaration:

▸ <**A**>(`right`: A, `left`: A): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`right` | A |
`left` | A |

▸ <**A**>(`right`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`right` | A |

▸ (`left`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`left` | A |

___

### `Const` ifElse

• **ifElse**: *[IfElseFn](../interfaces/logic.ifelsefn.md)* = curry(__ifElse) as IfElseFn

*Defined in [packages/logic/source/ifElse.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/ifElse.ts#L11)*

If-else statement for functions.

**`param`** :: (a -> boolean)

**`param`** :: (a -> b)

**`param`** :: (a -> b)

**`param`** :: a

**`returns`** :: b

___

### `Const` isBoolean

• **isBoolean**: *[Is](lambda.md#is)‹boolean›* = or(isTrue, isFalse)

*Defined in [packages/logic/source/is.ts:99](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L99)*

___

###  isFalse

• **isFalse**: *function*

*Defined in [packages/logic/source/is.ts:97](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L97)*

#### Type declaration:

▸ (`value`: unknown): *value is A*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

___

### `Const` isJson

• **isJson**: *[Is](lambda.md#is)‹[Json](common.md#json)›* = or(isJsonPrimitive, or(isJsonArray, isJsonObject))

*Defined in [packages/logic/source/is.ts:117](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L117)*

___

### `Const` isJsonPrimitive

• **isJsonPrimitive**: *[Is](lambda.md#is)‹[JsonPrimitive](common.md#jsonprimitive)›* = or(isString, or(isNumber, or(isBoolean, isNull)))

*Defined in [packages/logic/source/is.ts:114](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L114)*

___

### `Const` isNotArray

• **isNotArray**: *function* = pipe2(isArray, not) as IsNot<ReadonlyArray<unknown>>

*Defined in [packages/logic/source/is.ts:27](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L27)*

#### Type declaration:

▸ <**B**>(`value`: A | B): *value is B*

**Type parameters:**

▪ **B**: *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A &#124; B |

___

### `Const` isNotArrayLike

• **isNotArrayLike**: *function* = complement(isArrayLike)

*Defined in [packages/logic/source/is.ts:75](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L75)*

#### Type declaration:

▸ <**B**>(`value`: A | B): *value is B*

**Type parameters:**

▪ **B**: *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A &#124; B |

___

### `Const` isNotBoolean

• **isNotBoolean**: *[IsNot](lambda.md#isnot)‹boolean›* = complement(isBoolean)

*Defined in [packages/logic/source/is.ts:100](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L100)*

___

###  isNotFalse

• **isNotFalse**: *function*

*Defined in [packages/logic/source/is.ts:97](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L97)*

#### Type declaration:

▸ <**B**>(`value`: A | B): *value is B*

**Type parameters:**

▪ **B**: *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A &#124; B |

___

### `Const` isNotFunction

• **isNotFunction**: *[IsNot](lambda.md#isnot)‹Function›* = complement(isFunction)

*Defined in [packages/logic/source/is.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L17)*

___

### `Const` isNotGenerator

• **isNotGenerator**: *function* = complement(isGenerator)

*Defined in [packages/logic/source/is.ts:49](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L49)*

#### Type declaration:

▸ <**B**>(`value`: A | B): *value is B*

**Type parameters:**

▪ **B**: *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A &#124; B |

___

### `Const` isNotIterable

• **isNotIterable**: *[IsNot](lambda.md#isnot)‹Iterable‹unknown››* = complement(isIterable)

*Defined in [packages/logic/source/is.ts:37](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L37)*

___

### `Const` isNotIterator

• **isNotIterator**: *[IsNot](lambda.md#isnot)‹Iterator‹unknown››* = complement(isIterable)

*Defined in [packages/logic/source/is.ts:32](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L32)*

___

### `Const` isNotJson

• **isNotJson**: *[IsNot](lambda.md#isnot)‹[Json](common.md#json)›* = complement(isJson)

*Defined in [packages/logic/source/is.ts:118](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L118)*

___

### `Const` isNotJsonArray

• **isNotJsonArray**: *[IsNot](lambda.md#isnot)‹[JsonArray](common.md#jsonarray)›* = complement(isJsonArray)

*Defined in [packages/logic/source/is.ts:105](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L105)*

___

### `Const` isNotJsonObject

• **isNotJsonObject**: *[IsNot](lambda.md#isnot)‹JsonObject›* = complement(isJsonObject)

*Defined in [packages/logic/source/is.ts:112](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L112)*

___

### `Const` isNotJsonPrimitive

• **isNotJsonPrimitive**: *[IsNot](lambda.md#isnot)‹[JsonPrimitive](common.md#jsonprimitive)›* = complement(isJsonPrimitive)

*Defined in [packages/logic/source/is.ts:115](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L115)*

___

### `Const` isNotMap

• **isNotMap**: *[IsNot](lambda.md#isnot)‹[Map](../interfaces/objects.mutablemap.md#map)‹unknown, unknown››* = complement(isMap)

*Defined in [packages/logic/source/is.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L18)*

___

###  isNotNull

• **isNotNull**: *function*

*Defined in [packages/logic/source/is.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L22)*

#### Type declaration:

▸ <**B**>(`value`: A | B): *value is B*

**Type parameters:**

▪ **B**: *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A &#124; B |

___

### `Const` isNotNumber

• **isNotNumber**: *[IsNot](lambda.md#isnot)‹number›* = complement(isNumber)

*Defined in [packages/logic/source/is.ts:78](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L78)*

___

### `Const` isNotObject

• **isNotObject**: *[IsNot](lambda.md#isnot)‹object›* = complement(isObject)

*Defined in [packages/logic/source/is.ts:84](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L84)*

___

### `Const` isNotPromiseLie

• **isNotPromiseLie**: *[IsNot](lambda.md#isnot)‹PromiseLike‹unknown››* = complement(isPromiseLike)

*Defined in [packages/logic/source/is.ts:94](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L94)*

___

### `Const` isNotRecord

• **isNotRecord**: *[IsNot](lambda.md#isnot)‹Readonly‹[Record](io.md#const-record)‹PropertyKey, unknown›››* = complement(isRecord)

*Defined in [packages/logic/source/is.ts:90](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L90)*

___

### `Const` isNotSet

• **isNotSet**: *[IsNot](lambda.md#isnot)‹[Set](../interfaces/objects.mutableset.md#set)‹unknown››* = complement(isSet)

*Defined in [packages/logic/source/is.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L19)*

___

### `Const` isNotString

• **isNotString**: *[IsNot](lambda.md#isnot)‹string›* = complement(isString)

*Defined in [packages/logic/source/is.ts:81](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L81)*

___

###  isNotTrue

• **isNotTrue**: *function*

*Defined in [packages/logic/source/is.ts:96](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L96)*

#### Type declaration:

▸ <**B**>(`value`: A | B): *value is B*

**Type parameters:**

▪ **B**: *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A &#124; B |

___

###  isNotUndefined

• **isNotUndefined**: *function*

*Defined in [packages/logic/source/is.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L21)*

#### Type declaration:

▸ <**B**>(`value`: A | B): *value is B*

**Type parameters:**

▪ **B**: *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A &#124; B |

___

###  isNull

• **isNull**: *function*

*Defined in [packages/logic/source/is.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L22)*

#### Type declaration:

▸ (`value`: unknown): *value is A*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

___

###  isTrue

• **isTrue**: *function*

*Defined in [packages/logic/source/is.ts:96](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L96)*

#### Type declaration:

▸ (`value`: unknown): *value is A*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

___

###  isUndefined

• **isUndefined**: *function*

*Defined in [packages/logic/source/is.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L21)*

#### Type declaration:

▸ (`value`: unknown): *value is A*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

___

### `Const` lessThan

• **lessThan**: *function* = curry(<A>(right: A, left: A) => left < right) as {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
}

*Defined in [packages/logic/source/lessThan.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/lessThan.ts#L9)*

Compare two values using <

**`param`** :: a

**`param`** :: a

**`returns`** :: boolean

#### Type declaration:

▸ <**A**>(`right`: A, `left`: A): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`right` | A |
`left` | A |

▸ <**A**>(`right`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`right` | A |

▸ (`left`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`left` | A |

___

### `Const` lessThanOrEqual

• **lessThanOrEqual**: *function* = curry(<A>(right: A, left: A) => left <= right) as {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
}

*Defined in [packages/logic/source/lessThanOrEqual.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/lessThanOrEqual.ts#L9)*

Compare two values using <=

**`param`** :: a

**`param`** :: a

**`returns`** :: boolean

#### Type declaration:

▸ <**A**>(`right`: A, `left`: A): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`right` | A |
`left` | A |

▸ <**A**>(`right`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`right` | A |

▸ (`left`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`left` | A |

___

### `Const` or

• **or**: *function* = curry(__or) as {
  <C, A extends C, B extends C>(predicate1: Is<A>, predicate2: Is<B>, value: C): value is A | B
  <C, A extends C, B extends C>(predicate1: Is<A>, predicate2: Is<B>): (value: C) => value is A | B
  <C, A extends C>(predicate1: Is<A>): {
    <B extends C>(predicate2: Is<B>, value: C): value is A | B
    <B extends C>(predicate2: Is<B>): (value: C) => value is A | B
  }

  <A>(predicate1: Predicate<A>, predicate2: Predicate<A>, value: A): boolean
  <A>(predicate1: Predicate<A>, predicate2: Predicate<A>): Predicate<A>
  <A>(predicate1: Predicate<A>): {
    (predicate2: Predicate<A>, value: A): boolean
    (predicate2: Predicate<A>): Predicate<A>
  }
}

*Defined in [packages/logic/source/or.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/or.ts#L10)*

Returns true if either predicates return true.

**`param`** :: (a -> boolean)

**`param`** :: (a -> boolean)

**`param`** :: a

**`returns`** :: boolean

#### Type declaration:

▸ <**A**, **B**>(`predicate1`: [Is](lambda.md#is)‹A›, `predicate2`: [Is](lambda.md#is)‹B›, `value`: unknown): *value is A | B*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`predicate1` | [Is](lambda.md#is)‹A› |
`predicate2` | [Is](lambda.md#is)‹B› |
`value` | unknown |

▸ <**A**, **B**>(`predicate1`: [Is](lambda.md#is)‹A›, `predicate2`: [Is](lambda.md#is)‹B›): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`predicate1` | [Is](lambda.md#is)‹A› |
`predicate2` | [Is](lambda.md#is)‹B› |

▸ (`value`: unknown): *value is A | B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

▸ <**A**>(`predicate1`: [Is](lambda.md#is)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate1` | [Is](lambda.md#is)‹A› |

▸ <**B**>(`predicate2`: [Is](lambda.md#is)‹B›, `value`: unknown): *value is A | B*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`predicate2` | [Is](lambda.md#is)‹B› |
`value` | unknown |

▸ <**B**>(`predicate2`: [Is](lambda.md#is)‹B›): *[Is](lambda.md#is)‹A | B›*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`predicate2` | [Is](lambda.md#is)‹B› |

▸ <**A**>(`predicate1`: [Predicate](lambda.md#predicate)‹A›, `predicate2`: [Predicate](lambda.md#predicate)‹A›, `value`: A): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate1` | [Predicate](lambda.md#predicate)‹A› |
`predicate2` | [Predicate](lambda.md#predicate)‹A› |
`value` | A |

▸ <**A**>(`predicate1`: [Predicate](lambda.md#predicate)‹A›, `predicate2`: [Predicate](lambda.md#predicate)‹A›): *[Predicate](lambda.md#predicate)‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate1` | [Predicate](lambda.md#predicate)‹A› |
`predicate2` | [Predicate](lambda.md#predicate)‹A› |

▸ <**A**>(`predicate1`: [Predicate](lambda.md#predicate)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate1` | [Predicate](lambda.md#predicate)‹A› |

▸ (`predicate2`: [Predicate](lambda.md#predicate)‹A›, `value`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`predicate2` | [Predicate](lambda.md#predicate)‹A› |
`value` | A |

▸ (`predicate2`: [Predicate](lambda.md#predicate)‹A›): *[Predicate](lambda.md#predicate)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`predicate2` | [Predicate](lambda.md#predicate)‹A› |

___

### `Const` propEq

• **propEq**: *function* = (curry(<O, K extends keyof O>(key: K, value: O[K], obj: O): boolean =>
  equals(obj[key], value),
) as any) as {
  <K extends PropertyKey, A, O extends Readonly<Record<K, A>>>(key: K, value: A, object: O): boolean
  <K extends PropertyKey, A>(key: K, value: A): <O extends Readonly<Record<K, A>>>(
    object: O,
  ) => boolean
  <K extends PropertyKey>(key: K): {
    <A, O extends Readonly<Record<K, A>>>(value: A, object: O): boolean
    <A>(value: A): <O extends Readonly<Record<K, A>>>(object: O) => boolean
  }
}

*Defined in [packages/logic/source/propEq.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/propEq.ts#L11)*

Returns true if a property is equal to a given value

**`param`** :: PropertyKey

**`param`** :: a

**`param`** :: { [PropertyKey]: a }

**`returns`** :: boolean

#### Type declaration:

▸ <**K**, **A**, **O**>(`key`: K, `value`: A, `object`: O): *boolean*

**Type parameters:**

▪ **K**: *PropertyKey*

▪ **A**

▪ **O**: *Readonly‹[Record](io.md#const-record)‹K, A››*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | A |
`object` | O |

▸ <**K**, **A**>(`key`: K, `value`: A): *function*

**Type parameters:**

▪ **K**: *PropertyKey*

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | A |

▸ <**O**>(`object`: O): *boolean*

**Type parameters:**

▪ **O**: *Readonly‹[Record](io.md#const-record)‹K, A››*

**Parameters:**

Name | Type |
------ | ------ |
`object` | O |

▸ <**K**>(`key`: K): *function*

**Type parameters:**

▪ **K**: *PropertyKey*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

▸ <**A**, **O**>(`value`: A, `object`: O): *boolean*

**Type parameters:**

▪ **A**

▪ **O**: *Readonly‹[Record](io.md#const-record)‹K, A››*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`object` | O |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ <**O**>(`object`: O): *boolean*

**Type parameters:**

▪ **O**: *Readonly‹[Record](io.md#const-record)‹K, A››*

**Parameters:**

Name | Type |
------ | ------ |
`object` | O |

___

### `Const` propOr

• **propOr**: *function* = curry(__propOr) as {
  <A, K extends PropertyKey>(defaultValue: A, key: K, obj: { [Key in K]: A }): A
  <A, K extends PropertyKey>(defaultValue: A, key: K): (obj: { [Key in K]: A }) => A
  <A>(defaultValue: A): {
    <K extends PropertyKey>(key: K, obj: { [Key in K]: A }): A
    <K extends PropertyKey>(key: K): (obj: { [Key in K]: A }) => A
  }
}

*Defined in [packages/logic/source/propOr.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/propOr.ts#L10)*

Get the value of a property if present or use default value.

**`param`** :: a

**`param`** :: PropertyKey

**`param`** :: { [PropertyKey]?: a }

**`returns`** :: a

#### Type declaration:

▸ <**A**, **K**>(`defaultValue`: A, `key`: K, `obj`: object): *A*

**Type parameters:**

▪ **A**

▪ **K**: *PropertyKey*

**Parameters:**

Name | Type |
------ | ------ |
`defaultValue` | A |
`key` | K |
`obj` | object |

▸ <**A**, **K**>(`defaultValue`: A, `key`: K): *function*

**Type parameters:**

▪ **A**

▪ **K**: *PropertyKey*

**Parameters:**

Name | Type |
------ | ------ |
`defaultValue` | A |
`key` | K |

▸ (`obj`: object): *A*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | object |

▸ <**A**>(`defaultValue`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`defaultValue` | A |

▸ <**K**>(`key`: K, `obj`: object): *A*

**Type parameters:**

▪ **K**: *PropertyKey*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`obj` | object |

▸ <**K**>(`key`: K): *function*

**Type parameters:**

▪ **K**: *PropertyKey*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

▸ (`obj`: object): *A*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | object |

___

### `Const` test

• **test**: *Curry2‹RegExp, string, boolean›* = curry((regex: RegExp, str: string): boolean =>
  regex.test(str),
)

*Defined in [packages/logic/source/regexTest.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/regexTest.ts#L3)*

___

### `Const` toggleOrSet

• **toggleOrSet**: *function* = curry((bool: boolean | undefined, toggleableBoolean: boolean): boolean =>
  bool === void 0 ? !toggleableBoolean : bool,
) as {
  (bool: boolean | undefined, toggleableBoolean: boolean): boolean
  (bool: boolean | undefined): (toggleableBoolean: boolean) => boolean
}

*Defined in [packages/logic/source/toggleOrSet.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/toggleOrSet.ts#L9)*

Toggle a boolean off/on if given boolean is undefined or sets the value if boolean is not undefined.

**`param`** :: boolean | undefined

**`param`** :: boolean

**`returns`** :: boolean

#### Type declaration:

▸ (`bool`: boolean | undefined, `toggleableBoolean`: boolean): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`bool` | boolean &#124; undefined |
`toggleableBoolean` | boolean |

▸ (`bool`: boolean | undefined): *function*

**Parameters:**

Name | Type |
------ | ------ |
`bool` | boolean &#124; undefined |

▸ (`toggleableBoolean`: boolean): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`toggleableBoolean` | boolean |

## Functions

###  __all

▸ **__all**<**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `list`: ReadonlyArray‹A›): *boolean*

*Defined in [packages/logic/source/all.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/all.ts#L15)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`list` | ReadonlyArray‹A› |

**Returns:** *boolean*

___

###  __allPass

▸ **__allPass**<**A**>(`predicates`: ReadonlyArray‹[Predicate](lambda.md#predicate)‹A››, `value`: A): *boolean*

*Defined in [packages/logic/source/allPass.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/allPass.ts#L18)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicates` | ReadonlyArray‹[Predicate](lambda.md#predicate)‹A›› |
`value` | A |

**Returns:** *boolean*

___

###  __and

▸ **__and**<**A**>(`predicate1`: [Predicate](lambda.md#predicate)‹A›, `predicate2`: [Predicate](lambda.md#predicate)‹A›, `value`: A): *boolean*

*Defined in [packages/logic/source/and.ts:40](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/and.ts#L40)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate1` | [Predicate](lambda.md#predicate)‹A› |
`predicate2` | [Predicate](lambda.md#predicate)‹A› |
`value` | A |

**Returns:** *boolean*

___

###  __any

▸ **__any**<**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `list`: keyof A[]): *boolean*

*Defined in [packages/logic/source/any.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/any.ts#L18)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`list` | keyof A[] |

**Returns:** *boolean*

___

###  __anyPass

▸ **__anyPass**<**A**>(`predicates`: ReadonlyArray‹[Predicate](lambda.md#predicate)‹A››, `value`: A): *boolean*

*Defined in [packages/logic/source/anyPass.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/anyPass.ts#L17)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicates` | ReadonlyArray‹[Predicate](lambda.md#predicate)‹A›› |
`value` | A |

**Returns:** *boolean*

___

###  __cond

▸ **__cond**<**A**, **B**>(`conditionals`: ReadonlyArray‹[Conditional](logic.md#conditional)‹A, B››, `value`: A): *[Maybe](io.md#const-maybe)‹B›*

*Defined in [packages/logic/source/cond.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/cond.ts#L18)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`conditionals` | ReadonlyArray‹[Conditional](logic.md#conditional)‹A, B›› |
`value` | A |

**Returns:** *[Maybe](io.md#const-maybe)‹B›*

___

###  __ifElse

▸ **__ifElse**<**A**, **B**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `thenFn`: [Arity1](lambda.md#arity1)‹A, B›, `elseFn`: [Arity1](lambda.md#arity1)‹A, B›, `value`: A): *B*

*Defined in [packages/logic/source/ifElse.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/ifElse.ts#L13)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`thenFn` | [Arity1](lambda.md#arity1)‹A, B› |
`elseFn` | [Arity1](lambda.md#arity1)‹A, B› |
`value` | A |

**Returns:** *B*

___

###  __or

▸ **__or**<**A**>(`predicate1`: [Predicate](lambda.md#predicate)‹A›, `predicate2`: [Predicate](lambda.md#predicate)‹A›, `value`: A): *boolean*

*Defined in [packages/logic/source/or.ts:40](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/or.ts#L40)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate1` | [Predicate](lambda.md#predicate)‹A› |
`predicate2` | [Predicate](lambda.md#predicate)‹A› |
`value` | A |

**Returns:** *boolean*

___

###  __propOr

▸ **__propOr**<**A**, **K**>(`defaultValue`: A, `key`: K, `obj`: object): *A*

*Defined in [packages/logic/source/propOr.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/propOr.ts#L26)*

**Type parameters:**

▪ **A**

▪ **K**: *PropertyKey*

**Parameters:**

Name | Type |
------ | ------ |
`defaultValue` | A |
`key` | K |
`obj` | object |

**Returns:** *A*

___

### `Const` complement

▸ **complement**<**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›): *any*

*Defined in [packages/logic/source/complement.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/complement.ts#L13)*

Wrap a function in a negation

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |

**Returns:** *any*

:: (a -> boolean)

___

### `Const` exec

▸ **exec**(`regex`: RegExp, `str`: string): *Nothing | Just‹RegExpExecArray‹››*

*Defined in [packages/logic/source/exec.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/exec.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`regex` | RegExp |
`str` | string |

**Returns:** *Nothing | Just‹RegExpExecArray‹››*

___

###  fromJson

▸ **fromJson**(`jsonString`: string): *[JsonSerializable](logic.md#jsonserializable)*

*Defined in [packages/logic/source/json.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/json.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`jsonString` | string |

**Returns:** *[JsonSerializable](logic.md#jsonserializable)*

___

### `Const` hasJsonTag

▸ **hasJsonTag**(`x`: unknown): *boolean*

*Defined in [packages/logic/source/json.ts:42](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/json.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *boolean*

___

### `Const` hasValuesTag

▸ **hasValuesTag**(`x`: unknown): *boolean*

*Defined in [packages/logic/source/json.ts:43](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/json.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *boolean*

___

### `Const` is

▸ **is**<**A**>(`value`: A): *[Is](lambda.md#is)‹A›*

*Defined in [packages/logic/source/is.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L11)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *[Is](lambda.md#is)‹A›*

___

### `Const` isAndIsNot

▸ **isAndIsNot**<**A**>(`value`: A): *keyof [Is<A>, IsNot<A>]*

*Defined in [packages/logic/source/is.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L14)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *keyof [Is<A>, IsNot<A>]*

___

###  isArray

▸ **isArray**(`x`: unknown): *x is unknown[]*

*Defined in [packages/logic/source/is.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *x is unknown[]*

___

### `Const` isArrayLike

▸ **isArrayLike**(`x`: unknown): *x is ArrayLike<unknown>*

*Defined in [packages/logic/source/is.ts:51](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *x is ArrayLike<unknown>*

___

### `Const` isGenerator

▸ **isGenerator**(`x`: unknown): *x is Generator<unknown, unknown, unknown>*

*Defined in [packages/logic/source/is.ts:39](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *x is Generator<unknown, unknown, unknown>*

___

###  isIterable

▸ **isIterable**(`x`: unknown): *x is Iterable<unknown>*

*Defined in [packages/logic/source/is.ts:34](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *x is Iterable<unknown>*

___

###  isIterator

▸ **isIterator**(`x`: unknown): *x is Iterator<unknown>*

*Defined in [packages/logic/source/is.ts:29](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *x is Iterator<unknown>*

___

### `Const` isJsonArray

▸ **isJsonArray**(`x`: unknown): *x is JsonArray*

*Defined in [packages/logic/source/is.ts:102](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *x is JsonArray*

___

### `Const` isJsonObject

▸ **isJsonObject**(`x`: unknown): *x is JsonObject*

*Defined in [packages/logic/source/is.ts:107](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *x is JsonObject*

___

### `Const` isNot

▸ **isNot**<**A**>(`a`: A): *[IsNot](lambda.md#isnot)‹A›*

*Defined in [packages/logic/source/is.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L12)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *[IsNot](lambda.md#isnot)‹A›*

___

### `Const` isNumber

▸ **isNumber**(`u`: unknown): *u is number*

*Defined in [packages/logic/source/is.ts:77](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`u` | unknown |

**Returns:** *u is number*

___

### `Const` isObject

▸ **isObject**(`u`: unknown): *u is object*

*Defined in [packages/logic/source/is.ts:83](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`u` | unknown |

**Returns:** *u is object*

___

### `Const` isPromiseLike

▸ **isPromiseLike**(`x`: unknown): *x is PromiseLike<unknown>*

*Defined in [packages/logic/source/is.ts:92](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | unknown |

**Returns:** *x is PromiseLike<unknown>*

___

### `Const` isRecord

▸ **isRecord**(`u`: unknown): *u is Readonly<Record<PropertyKey, unknown>>*

*Defined in [packages/logic/source/is.ts:86](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`u` | unknown |

**Returns:** *u is Readonly<Record<PropertyKey, unknown>>*

___

### `Const` isString

▸ **isString**(`u`: unknown): *u is string*

*Defined in [packages/logic/source/is.ts:80](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/is.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`u` | unknown |

**Returns:** *u is string*

___

###  not

▸ **not**<**A**>(`x`: A): *boolean*

*Defined in [packages/logic/source/not.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/not.ts#L6)*

Negates a value

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | A | :: a |

**Returns:** *boolean*

:: boolean

___

###  oneOf

▸ **oneOf**<**A**, **B**>(`matches`: ReadonlyArray‹[Match](logic.md#match)‹A, B››): *[Match](logic.md#match)‹A, B›*

*Defined in [packages/logic/source/oneOf.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/oneOf.ts#L9)*

Combine a list of matches into one.

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matches` | ReadonlyArray‹[Match](logic.md#match)‹A, B›› | :: [Match a b] |

**Returns:** *[Match](logic.md#match)‹A, B›*

:: Match a b

___

###  replaceJson

▸ **replaceJson**(`_`: [JsonSerializable](logic.md#jsonserializable), `value`: [JsonSerializable](logic.md#jsonserializable)): *[Json](common.md#json)*

*Defined in [packages/logic/source/json.ts:46](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/json.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | [JsonSerializable](logic.md#jsonserializable) |
`value` | [JsonSerializable](logic.md#jsonserializable) |

**Returns:** *[Json](common.md#json)*

___

###  reviveJson

▸ **reviveJson**(`_`: [Json](common.md#json), `value`: [Json](common.md#json)): *[JsonSerializable](logic.md#jsonserializable)*

*Defined in [packages/logic/source/json.ts:65](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/json.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | [Json](common.md#json) |
`value` | [Json](common.md#json) |

**Returns:** *[JsonSerializable](logic.md#jsonserializable)*

___

###  reviveMapEntries

▸ **reviveMapEntries**(`entries`: ReadonlyArray‹keyof [Json, Json]›): *ReadonlyArray‹keyof [JsonSerializable, JsonSerializable]›*

*Defined in [packages/logic/source/json.ts:85](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/json.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`entries` | ReadonlyArray‹keyof [Json, Json]› |

**Returns:** *ReadonlyArray‹keyof [JsonSerializable, JsonSerializable]›*

___

###  reviveSetEntries

▸ **reviveSetEntries**(`entries`: ReadonlyArray‹[Json](common.md#json)›): *ReadonlyArray‹[JsonSerializable](logic.md#jsonserializable)›*

*Defined in [packages/logic/source/json.ts:81](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/json.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`entries` | ReadonlyArray‹[Json](common.md#json)› |

**Returns:** *ReadonlyArray‹[JsonSerializable](logic.md#jsonserializable)›*

___

###  toJson

▸ **toJson**<**A**>(`x`: A, `space?`: string | number): *string*

*Defined in [packages/logic/source/json.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/json.ts#L17)*

**Type parameters:**

▪ **A**: *[JsonSerializable](logic.md#jsonserializable)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | A |
`space?` | string &#124; number |

**Returns:** *string*
