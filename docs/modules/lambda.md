[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [lambda](lambda.md)

# Package: lambda

# @typed/lambda

> Functions for working with other functions.

## Index

### Interfaces

* [Curry2](../interfaces/lambda.curry2.md)
* [Curry3](../interfaces/lambda.curry3.md)
* [Curry4](../interfaces/lambda.curry4.md)
* [Curry5](../interfaces/lambda.curry5.md)
* [Pipe](../interfaces/lambda.pipe.md)

### Type aliases

* [Apply](lambda.md#apply)
* [ArgsOf](lambda.md#argsof)
* [Arity1](lambda.md#arity1)
* [Arity2](lambda.md#arity2)
* [Arity3](lambda.md#arity3)
* [Arity4](lambda.md#arity4)
* [Arity5](lambda.md#arity5)
* [CastArray](lambda.md#castarray)
* [ComparableValues](lambda.md#comparablevalues)
* [ComparisonNumbers](lambda.md#comparisonnumbers)
* [Curry](lambda.md#curry)
* [CurryObj](lambda.md#curryobj)
* [Defined](lambda.md#defined)
* [Flip](lambda.md#flip)
* [Fn](lambda.md#fn)
* [Head](lambda.md#head)
* [HeadArg](lambda.md#headarg)
* [IO](lambda.md#io)
* [Include](lambda.md#include)
* [Init](lambda.md#init)
* [InitArgsOf](lambda.md#initargsof)
* [Is](lambda.md#is)
* [IsNot](lambda.md#isnot)
* [Just](lambda.md#just)
* [Maybe](lambda.md#maybe)
* [NOTHING](lambda.md#nothing)
* [Nothing](lambda.md#nothing)
* [OrToAnd](lambda.md#ortoand)
* [PartialArgsOf](lambda.md#partialargsof)
* [Predicate](lambda.md#predicate)
* [Predicate2](lambda.md#predicate2)
* [Primitive](lambda.md#primitive)
* [Refinement](lambda.md#refinement)
* [RemoveUnknown](lambda.md#removeunknown)
* [Tail](lambda.md#tail)
* [TailArgsOf](lambda.md#tailargsof)
* [TypeGuard](lambda.md#typeguard)
* [Uncurry](lambda.md#uncurry)

### Variables

* [ALL_PROPERTIES_NOT_FOUND](lambda.md#const-all_properties_not_found)
* [NOTHING](lambda.md#const-nothing)
* [apply](lambda.md#const-apply)
* [defaultObject](lambda.md#const-defaultobject)
* [pipe](lambda.md#const-pipe)
* [tap](lambda.md#const-tap)
* [withPrevious](lambda.md#const-withprevious)

### Functions

* [_curryObj](lambda.md#_curryobj)
* [always](lambda.md#const-always)
* [curriedN](lambda.md#curriedn)
* [curry](lambda.md#const-curry)
* [curryObj](lambda.md#const-curryobj)
* [flip](lambda.md#const-flip)
* [id](lambda.md#const-id)
* [isNothing](lambda.md#isnothing)
* [memoize](lambda.md#const-memoize)
* [noOp](lambda.md#const-noop)
* [pipe2](lambda.md#const-pipe2)
* [pipeline](lambda.md#pipeline)
* [proxyObject](lambda.md#proxyobject)
* [uncurry](lambda.md#uncurry)

## Type aliases

###  Apply

Ƭ **Apply**: *T extends function ? R : never*

*Defined in [packages/lambda/source/types.ts:84](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L84)*

___

###  ArgsOf

Ƭ **ArgsOf**: *T extends Fn<infer Args, any> ? Args : []*

*Defined in [packages/lambda/source/types.ts:58](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L58)*

___

###  Arity1

Ƭ **Arity1**: *function*

*Defined in [packages/lambda/source/types.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L4)*

#### Type declaration:

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

___

###  Arity2

Ƭ **Arity2**: *function*

*Defined in [packages/lambda/source/types.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L5)*

#### Type declaration:

▸ (`a`: A, `b`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |

___

###  Arity3

Ƭ **Arity3**: *function*

*Defined in [packages/lambda/source/types.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L6)*

#### Type declaration:

▸ (`a`: A, `b`: B, `c`: C): *D*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |

___

###  Arity4

Ƭ **Arity4**: *function*

*Defined in [packages/lambda/source/types.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L7)*

#### Type declaration:

▸ (`a`: A, `b`: B, `c`: C, `d`: D): *E*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |

___

###  Arity5

Ƭ **Arity5**: *function*

*Defined in [packages/lambda/source/types.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L8)*

#### Type declaration:

▸ (`a`: A, `b`: B, `c`: C, `d`: D, `e`: E): *F*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | B |
`c` | C |
`d` | D |
`e` | E |

___

###  CastArray

Ƭ **CastArray**: *T extends keyof any[] ? T : []*

*Defined in [packages/lambda/source/types.ts:120](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L120)*

___

###  ComparableValues

Ƭ **ComparableValues**: *keyof any | boolean | Date*

*Defined in [packages/lambda/source/types.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L22)*

___

###  ComparisonNumbers

Ƭ **ComparisonNumbers**: *-1 | 0 | 1*

*Defined in [packages/lambda/source/types.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L21)*

___

###  Curry

Ƭ **Curry**: *ArgsOf<T> extends [infer A] ? Arity1<A, ReturnType<T>> : ArgsOf<T> extends [infer A, infer B] ? Curry2<A, B, ReturnType<T>> : ArgsOf<T> extends [infer A, infer B, infer C] ? Curry3<A, B, C, ReturnType<T>> : ArgsOf<T> extends [infer A, infer B, infer C, infer D] ? Curry4<A, B, C, D, ReturnType<T>> : ArgsOf<T> extends [infer A, infer B, infer C, infer D, infer E] ? Curry5<A, B, C, D, E, ReturnType<T>> : ArgsOf<T> extends never[] ? IO<ReturnType<T>> : never*

*Defined in [packages/lambda/source/types.ts:44](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L44)*

___

###  CurryObj

Ƭ **CurryObj**: *function*

*Defined in [packages/lambda/source/curryObj.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/curryObj.ts#L13)*

#### Type declaration:

▸ <**C**>(`c`: C): *C extends A ? B : CurryObj<Required<object>, B>*

**Type parameters:**

▪ **C**: *Partial‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`c` | C |

___

###  Defined

Ƭ **Defined**: *T extends undefined ? never : T*

*Defined in [packages/lambda/source/types.ts:107](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L107)*

___

###  Flip

Ƭ **Flip**: *ArgsOf<T> extends [] ? Fn<[], ReturnType<T>> : ArgsOf<T> extends [infer A] ? Fn<[A], ReturnType<T>> : ArgsOf<T> extends [infer A, infer B] ? Fn<[B, A], ReturnType<T>> : ArgsOf<T> extends [infer A, infer B, infer C] ? Fn<[B, A, C], ReturnType<T>> : ArgsOf<T> extends [infer A, infer B, infer C, infer D] ? Fn<[B, A, C, D], ReturnType<T>> : ArgsOf<T> extends [infer A, infer B, infer C, infer D, infer E] ? Fn<[B, A, C, D, E], ReturnType<T>> : never*

*Defined in [packages/lambda/source/types.ts:70](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L70)*

___

###  Fn

Ƭ **Fn**: *function*

*Defined in [packages/lambda/source/types.ts:41](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L41)*

#### Type declaration:

▸ (...`args`: Args): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Args |

___

###  Head

Ƭ **Head**: *[HeadArg](lambda.md#headarg)‹[Fn](lambda.md#fn)‹A››*

*Defined in [packages/lambda/source/types.ts:105](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L105)*

___

###  HeadArg

Ƭ **HeadArg**: *F extends function ? A : never*

*Defined in [packages/lambda/source/types.ts:65](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L65)*

___

###  IO

Ƭ **IO**: *function*

*Defined in [packages/lambda/source/types.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L3)*

#### Type declaration:

▸ (): *A*

___

###  Include

Ƭ **Include**: *A extends B ? A : never*

*Defined in [packages/lambda/source/types.ts:115](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L115)*

___

###  Init

Ƭ **Init**: *[CastArray](lambda.md#castarray)‹object›*

*Defined in [packages/lambda/source/types.ts:101](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L101)*

___

###  InitArgsOf

Ƭ **InitArgsOf**: *[Init](lambda.md#init)‹[ArgsOf](lambda.md#argsof)‹F››*

*Defined in [packages/lambda/source/types.ts:68](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L68)*

___

###  Is

Ƭ **Is**: *function*

*Defined in [packages/lambda/source/types.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L17)*

#### Type declaration:

▸ (`value`: unknown): *value is A*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

___

###  IsNot

Ƭ **IsNot**: *function*

*Defined in [packages/lambda/source/types.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L18)*

#### Type declaration:

▸ <**B**>(`value`: A | B): *value is B*

**Type parameters:**

▪ **B**: *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A &#124; B |

___

###  Just

Ƭ **Just**: *object*

*Defined in [packages/lambda/source/withPrevious.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/withPrevious.ts#L7)*

#### Type declaration:

* **[NOTHING]**: *false*

* **value**: *A*

___

###  Maybe

Ƭ **Maybe**: *[Just](lambda.md#just)‹A› | [Nothing](lambda.md#nothing)*

*Defined in [packages/lambda/source/withPrevious.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/withPrevious.ts#L8)*

___

###  NOTHING

Ƭ **NOTHING**: *typeof NOTHING*

*Defined in [packages/lambda/source/withPrevious.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/withPrevious.ts#L5)*

___

###  Nothing

Ƭ **Nothing**: *object*

*Defined in [packages/lambda/source/withPrevious.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/withPrevious.ts#L6)*

#### Type declaration:

* **[NOTHING]**: *true*

___

###  OrToAnd

Ƭ **OrToAnd**:

*Defined in [packages/lambda/source/types.ts:109](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L109)*

___

###  PartialArgsOf

Ƭ **PartialArgsOf**: *T extends function ? Partial<TArgs> : never*

*Defined in [packages/lambda/source/types.ts:59](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L59)*

___

###  Predicate

Ƭ **Predicate**: *[Arity1](lambda.md#arity1)‹A, boolean›*

*Defined in [packages/lambda/source/types.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L16)*

___

###  Predicate2

Ƭ **Predicate2**: *[Arity2](lambda.md#arity2)‹A, B, boolean›*

*Defined in [packages/lambda/source/types.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L20)*

___

###  Primitive

Ƭ **Primitive**: *undefined | null | boolean | string | number | Function*

*Defined in [packages/lambda/source/types.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L1)*

___

###  Refinement

Ƭ **Refinement**: *function*

*Defined in [packages/lambda/source/types.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L19)*

#### Type declaration:

▸ (`a`: A): *a is B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

___

###  RemoveUnknown

Ƭ **RemoveUnknown**: *[unknown] extends [A] ? never : A*

*Defined in [packages/lambda/source/types.ts:121](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L121)*

___

###  Tail

Ƭ **Tail**: *[TailArgsOf](lambda.md#tailargsof)‹[Fn](lambda.md#fn)‹A››*

*Defined in [packages/lambda/source/types.ts:104](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L104)*

___

###  TailArgsOf

Ƭ **TailArgsOf**: *F extends function ? TTail : never*

*Defined in [packages/lambda/source/types.ts:62](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L62)*

___

###  TypeGuard

Ƭ **TypeGuard**: *function*

*Defined in [packages/lambda/source/types.ts:117](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L117)*

#### Type declaration:

▸ (`value`: A): *value is B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

___

###  Uncurry

Ƭ **Uncurry**: *Fun extends function ? function : Fun extends function ? function : Fun extends function ? function : Fun extends function ? function : Fun*

*Defined in [packages/lambda/source/types.ts:89](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/types.ts#L89)*

## Variables

### `Const` ALL_PROPERTIES_NOT_FOUND

• **ALL_PROPERTIES_NOT_FOUND**: *[Error](../classes/effects.killerror.md#static-error)* = new Error('All Properties Not Found')

*Defined in [packages/lambda/source/curryObj.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/curryObj.ts#L3)*

___

### `Const` NOTHING

• **NOTHING**: *unique symbol* = Symbol('nothing')

*Defined in [packages/lambda/source/withPrevious.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/withPrevious.ts#L4)*

___

### `Const` apply

• **apply**: *function* = curry(
  <Args extends readonly any[], T extends Fn<Args>>(args: Args, fn: T): Apply<Args, T> =>
    fn(...args),
) as {
  <Args extends readonly any[], T extends Fn<Args>>(args: Args, fn: T): Apply<Args, T>
  <Args extends readonly any[]>(args: Args): <T extends Fn<Args>>(fn: T) => Apply<Args, T>
}

*Defined in [packages/lambda/source/apply.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/apply.ts#L9)*

Call a function with a list of arguments

**`param`** List of arguments

**`param`** Function to call

#### Type declaration:

▸ <**Args**, **T**>(`args`: Args, `fn`: T): *[Apply](lambda.md#apply)‹Args, T›*

**Type parameters:**

▪ **Args**: *keyof any[]*

▪ **T**: *[Fn](lambda.md#fn)‹Args›*

**Parameters:**

Name | Type |
------ | ------ |
`args` | Args |
`fn` | T |

▸ <**Args**>(`args`: Args): *function*

**Type parameters:**

▪ **Args**: *keyof any[]*

**Parameters:**

Name | Type |
------ | ------ |
`args` | Args |

▸ <**T**>(`fn`: T): *[Apply](lambda.md#apply)‹Args, T›*

**Type parameters:**

▪ **T**: *[Fn](lambda.md#fn)‹Args›*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | T |

___

### `Const` defaultObject

• **defaultObject**: *object* = Object.freeze(Object.create(null))

*Defined in [packages/lambda/source/curryObj.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/curryObj.ts#L4)*

#### Type declaration:

___

### `Const` pipe

• **pipe**: *[Pipe](../interfaces/lambda.pipe.md)* = ((...fns: Arity1[]) =>
  fns.length > 1 ? fns.slice(1).reduce(pipe2, fns[0]) : fns[0]) as Pipe

*Defined in [packages/lambda/source/pipe.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/pipe.ts#L9)*

Generic Left-to-right composition

___

### `Const` tap

• **tap**: *function* = curry(
  <A>(fn: Arity1<A>, value: A): A => {
    fn(value)

    return value
  },
)

*Defined in [packages/lambda/source/tap.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/tap.ts#L10)*

Perform a side-effect with a value and return the given value.

**`param`** :: (a -> *)

**`param`** :: a

**`returns`** a

#### Type declaration:

▸ <**A**>(`fn`: [Arity1](lambda.md#arity1)‹A›, `value`: A): *A*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A› |
`value` | A |

▸ <**A**>(`fn`: [Arity1](lambda.md#arity1)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A› |

▸ (`value`: A): *A*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

___

### `Const` withPrevious

• **withPrevious**: *function* = curry(function withPrevious<A, Args extends any[]>(
  withFn: Arity1<A, void>,
  fn: Fn<Args, A>,
): Fn<Args, A> {
  let previous: Maybe<A> = { [NOTHING]: true }
  return (...args: Args): A => {
    if (!isNothing(previous)) {
      withFn(previous.value)
    }

    const value = fn(...args)

    previous = { [NOTHING]: false, value }

    return value
  }
}) as {
  <A, Args extends any[]>(withFn: Arity1<A>, fn: Fn<Args, A>): Fn<Args, A>
  <A>(withFn: Arity1<A>): <Args extends any[]>(fn: Fn<Args, A>) => Fn<Args, A>
}

*Defined in [packages/lambda/source/withPrevious.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/withPrevious.ts#L16)*

Perform an operation with the previous value returned

**`param`** :: (a -> *)

**`param`** (...* -> a)

**`returns`** (...* -> a)

#### Type declaration:

▸ <**A**, **Args**>(`withFn`: [Arity1](lambda.md#arity1)‹A›, `fn`: [Fn](lambda.md#fn)‹Args, A›): *[Fn](lambda.md#fn)‹Args, A›*

**Type parameters:**

▪ **A**

▪ **Args**: *any[]*

**Parameters:**

Name | Type |
------ | ------ |
`withFn` | [Arity1](lambda.md#arity1)‹A› |
`fn` | [Fn](lambda.md#fn)‹Args, A› |

▸ <**A**>(`withFn`: [Arity1](lambda.md#arity1)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`withFn` | [Arity1](lambda.md#arity1)‹A› |

▸ <**Args**>(`fn`: [Fn](lambda.md#fn)‹Args, A›): *[Fn](lambda.md#fn)‹Args, A›*

**Type parameters:**

▪ **Args**: *any[]*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Fn](lambda.md#fn)‹Args, A› |

## Functions

###  _curryObj

▸ **_curryObj**<**A**, **B**, **C**>(`f`: [Arity1](lambda.md#arity1)‹A, B›, `previousObj`: C): *(Anonymous function)*

*Defined in [packages/lambda/source/curryObj.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/curryObj.ts#L17)*

**Type parameters:**

▪ **A**: *object*

▪ **B**

▪ **C**: *Partial‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Arity1](lambda.md#arity1)‹A, B› |
`previousObj` | C |

**Returns:** *(Anonymous function)*

___

### `Const` always

▸ **always**<**A**>(`value`: A): *(Anonymous function)*

*Defined in [packages/lambda/source/always.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/always.ts#L6)*

Create a function that always returns a given value

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | A | :: a |

**Returns:** *(Anonymous function)*

(...* -> a)

___

###  curriedN

▸ **curriedN**<**Args**, **R**>(`arity`: number, `f`: [Fn](lambda.md#fn)‹Args, R›, `previousArgs`: any[]): *any*

*Defined in [packages/lambda/source/curry.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/curry.ts#L11)*

**Type parameters:**

▪ **Args**: *any[]*

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`arity` | number |
`f` | [Fn](lambda.md#fn)‹Args, R› |
`previousArgs` | any[] |

**Returns:** *any*

___

### `Const` curry

▸ **curry**<**F**>(`f`: F): *[Curry](lambda.md#curry)‹F›*

*Defined in [packages/lambda/source/curry.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/curry.ts#L7)*

Allow a fixed length function to be partially applied.

**Type parameters:**

▪ **F**: *[Fn](lambda.md#fn)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`f` | F | Function you'd like to curry  |

**Returns:** *[Curry](lambda.md#curry)‹F›*

___

### `Const` curryObj

▸ **curryObj**<**A**, **B**>(`f`: [Arity1](lambda.md#arity1)‹A, B›): *[CurryObj](lambda.md#curryobj)‹A, B›*

*Defined in [packages/lambda/source/curryObj.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/curryObj.ts#L10)*

Uses ES2015 Proxy to partially apply a function that takes in an options object

**Type parameters:**

▪ **A**: *object*

▪ **B**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`f` | [Arity1](lambda.md#arity1)‹A, B› | :: Object a => (a -> b)  |

**Returns:** *[CurryObj](lambda.md#curryobj)‹A, B›*

___

### `Const` flip

▸ **flip**<**T**>(`fn`: T): *[Flip](lambda.md#flip)‹T›*

*Defined in [packages/lambda/source/flip.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/flip.ts#L9)*

Reverse the first two arguments of a function

**Type parameters:**

▪ **T**: *[Fn](lambda.md#fn)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | T |

**Returns:** *[Flip](lambda.md#flip)‹T›*

(b -> a -> c)

___

### `Const` id

▸ **id**<**A**>(`value`: A): *A*

*Defined in [packages/lambda/source/id.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/id.ts#L5)*

Identity function

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | A | :: a - Value to return  |

**Returns:** *A*

___

###  isNothing

▸ **isNothing**<**A**>(`maybe`: [Maybe](lambda.md#maybe)‹A›): *maybe is Nothing*

*Defined in [packages/lambda/source/withPrevious.ts:37](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/withPrevious.ts#L37)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`maybe` | [Maybe](lambda.md#maybe)‹A› |

**Returns:** *maybe is Nothing*

___

### `Const` memoize

▸ **memoize**<**F**>(`f`: F): *F*

*Defined in [packages/lambda/source/memoize.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/memoize.ts#L8)*

Memoize a function

**Type parameters:**

▪ **F**: *function*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`f` | F | Function to memoize  |

**Returns:** *F*

___

### `Const` noOp

▸ **noOp**(): *void*

*Defined in [packages/lambda/source/noOp.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/noOp.ts#L4)*

Function that does nothing

**Returns:** *void*

___

### `Const` pipe2

▸ **pipe2**<**A**, **B**, **C**>(`f`: [Arity1](lambda.md#arity1)‹A, B›, `g`: [Arity1](lambda.md#arity1)‹B, C›): *(Anonymous function)*

*Defined in [packages/lambda/source/pipe.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/pipe.ts#L4)*

Left-to-right composition for exactly two function

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Arity1](lambda.md#arity1)‹A, B› |
`g` | [Arity1](lambda.md#arity1)‹B, C› |

**Returns:** *(Anonymous function)*

___

###  pipeline

▸ **pipeline**<**A**, **B**>(`value`: A, `ab`: [Arity1](lambda.md#arity1)‹A, B›): *B*

*Defined in [packages/lambda/source/pipeline.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/pipeline.ts#L3)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`ab` | [Arity1](lambda.md#arity1)‹A, B› |

**Returns:** *B*

▸ **pipeline**<**A**, **B**, **C**>(`value`: A, `ab`: [Arity1](lambda.md#arity1)‹A, B›, `bc`: [Arity1](lambda.md#arity1)‹B, C›): *C*

*Defined in [packages/lambda/source/pipeline.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/pipeline.ts#L4)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`ab` | [Arity1](lambda.md#arity1)‹A, B› |
`bc` | [Arity1](lambda.md#arity1)‹B, C› |

**Returns:** *C*

▸ **pipeline**<**A**, **B**, **C**, **D**>(`value`: A, `ab`: [Arity1](lambda.md#arity1)‹A, B›, `bc`: [Arity1](lambda.md#arity1)‹B, C›, `cd`: [Arity1](lambda.md#arity1)‹C, D›): *D*

*Defined in [packages/lambda/source/pipeline.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/pipeline.ts#L5)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`ab` | [Arity1](lambda.md#arity1)‹A, B› |
`bc` | [Arity1](lambda.md#arity1)‹B, C› |
`cd` | [Arity1](lambda.md#arity1)‹C, D› |

**Returns:** *D*

▸ **pipeline**<**A**, **B**, **C**, **D**, **E**>(`value`: A, `ab`: [Arity1](lambda.md#arity1)‹A, B›, `bc`: [Arity1](lambda.md#arity1)‹B, C›, `cd`: [Arity1](lambda.md#arity1)‹C, D›, `de`: [Arity1](lambda.md#arity1)‹D, E›): *E*

*Defined in [packages/lambda/source/pipeline.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/pipeline.ts#L11)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`ab` | [Arity1](lambda.md#arity1)‹A, B› |
`bc` | [Arity1](lambda.md#arity1)‹B, C› |
`cd` | [Arity1](lambda.md#arity1)‹C, D› |
`de` | [Arity1](lambda.md#arity1)‹D, E› |

**Returns:** *E*

▸ **pipeline**<**A**, **B**, **C**, **D**, **E**, **F**>(`value`: A, `ab`: [Arity1](lambda.md#arity1)‹A, B›, `bc`: [Arity1](lambda.md#arity1)‹B, C›, `cd`: [Arity1](lambda.md#arity1)‹C, D›, `de`: [Arity1](lambda.md#arity1)‹D, E›, `ef`: [Arity1](lambda.md#arity1)‹E, F›): *F*

*Defined in [packages/lambda/source/pipeline.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/pipeline.ts#L18)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`ab` | [Arity1](lambda.md#arity1)‹A, B› |
`bc` | [Arity1](lambda.md#arity1)‹B, C› |
`cd` | [Arity1](lambda.md#arity1)‹C, D› |
`de` | [Arity1](lambda.md#arity1)‹D, E› |
`ef` | [Arity1](lambda.md#arity1)‹E, F› |

**Returns:** *F*

▸ **pipeline**<**A**, **B**, **C**, **D**, **E**, **F**, **G**>(`value`: A, `ab`: [Arity1](lambda.md#arity1)‹A, B›, `bc`: [Arity1](lambda.md#arity1)‹B, C›, `cd`: [Arity1](lambda.md#arity1)‹C, D›, `de`: [Arity1](lambda.md#arity1)‹D, E›, `ef`: [Arity1](lambda.md#arity1)‹E, F›, `fg`: [Arity1](lambda.md#arity1)‹F, G›): *G*

*Defined in [packages/lambda/source/pipeline.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/pipeline.ts#L26)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`ab` | [Arity1](lambda.md#arity1)‹A, B› |
`bc` | [Arity1](lambda.md#arity1)‹B, C› |
`cd` | [Arity1](lambda.md#arity1)‹C, D› |
`de` | [Arity1](lambda.md#arity1)‹D, E› |
`ef` | [Arity1](lambda.md#arity1)‹E, F› |
`fg` | [Arity1](lambda.md#arity1)‹F, G› |

**Returns:** *G*

▸ **pipeline**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**>(`value`: A, `ab`: [Arity1](lambda.md#arity1)‹A, B›, `bc`: [Arity1](lambda.md#arity1)‹B, C›, `cd`: [Arity1](lambda.md#arity1)‹C, D›, `de`: [Arity1](lambda.md#arity1)‹D, E›, `ef`: [Arity1](lambda.md#arity1)‹E, F›, `fg`: [Arity1](lambda.md#arity1)‹F, G›, `gh`: [Arity1](lambda.md#arity1)‹G, H›): *H*

*Defined in [packages/lambda/source/pipeline.ts:35](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/pipeline.ts#L35)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **H**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`ab` | [Arity1](lambda.md#arity1)‹A, B› |
`bc` | [Arity1](lambda.md#arity1)‹B, C› |
`cd` | [Arity1](lambda.md#arity1)‹C, D› |
`de` | [Arity1](lambda.md#arity1)‹D, E› |
`ef` | [Arity1](lambda.md#arity1)‹E, F› |
`fg` | [Arity1](lambda.md#arity1)‹F, G› |
`gh` | [Arity1](lambda.md#arity1)‹G, H› |

**Returns:** *H*

▸ **pipeline**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**>(`value`: A, `ab`: [Arity1](lambda.md#arity1)‹A, B›, `bc`: [Arity1](lambda.md#arity1)‹B, C›, `cd`: [Arity1](lambda.md#arity1)‹C, D›, `de`: [Arity1](lambda.md#arity1)‹D, E›, `ef`: [Arity1](lambda.md#arity1)‹E, F›, `fg`: [Arity1](lambda.md#arity1)‹F, G›, `gh`: [Arity1](lambda.md#arity1)‹G, H›, `hi`: [Arity1](lambda.md#arity1)‹H, I›): *I*

*Defined in [packages/lambda/source/pipeline.ts:45](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/pipeline.ts#L45)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **H**

▪ **I**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`ab` | [Arity1](lambda.md#arity1)‹A, B› |
`bc` | [Arity1](lambda.md#arity1)‹B, C› |
`cd` | [Arity1](lambda.md#arity1)‹C, D› |
`de` | [Arity1](lambda.md#arity1)‹D, E› |
`ef` | [Arity1](lambda.md#arity1)‹E, F› |
`fg` | [Arity1](lambda.md#arity1)‹F, G› |
`gh` | [Arity1](lambda.md#arity1)‹G, H› |
`hi` | [Arity1](lambda.md#arity1)‹H, I› |

**Returns:** *I*

▸ **pipeline**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**>(`value`: A, `ab`: [Arity1](lambda.md#arity1)‹A, B›, `bc`: [Arity1](lambda.md#arity1)‹B, C›, `cd`: [Arity1](lambda.md#arity1)‹C, D›, `de`: [Arity1](lambda.md#arity1)‹D, E›, `ef`: [Arity1](lambda.md#arity1)‹E, F›, `fg`: [Arity1](lambda.md#arity1)‹F, G›, `gh`: [Arity1](lambda.md#arity1)‹G, H›, `hi`: [Arity1](lambda.md#arity1)‹H, I›, `ij`: [Arity1](lambda.md#arity1)‹I, J›): *J*

*Defined in [packages/lambda/source/pipeline.ts:56](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/pipeline.ts#L56)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **H**

▪ **I**

▪ **J**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`ab` | [Arity1](lambda.md#arity1)‹A, B› |
`bc` | [Arity1](lambda.md#arity1)‹B, C› |
`cd` | [Arity1](lambda.md#arity1)‹C, D› |
`de` | [Arity1](lambda.md#arity1)‹D, E› |
`ef` | [Arity1](lambda.md#arity1)‹E, F› |
`fg` | [Arity1](lambda.md#arity1)‹F, G› |
`gh` | [Arity1](lambda.md#arity1)‹G, H› |
`hi` | [Arity1](lambda.md#arity1)‹H, I› |
`ij` | [Arity1](lambda.md#arity1)‹I, J› |

**Returns:** *J*

▸ **pipeline**<**A**, **B**, **C**, **D**, **E**, **F**, **G**, **H**, **I**, **J**, **K**>(`value`: A, `ab`: [Arity1](lambda.md#arity1)‹A, B›, `bc`: [Arity1](lambda.md#arity1)‹B, C›, `cd`: [Arity1](lambda.md#arity1)‹C, D›, `de`: [Arity1](lambda.md#arity1)‹D, E›, `ef`: [Arity1](lambda.md#arity1)‹E, F›, `fg`: [Arity1](lambda.md#arity1)‹F, G›, `gh`: [Arity1](lambda.md#arity1)‹G, H›, `hi`: [Arity1](lambda.md#arity1)‹H, I›, `ij`: [Arity1](lambda.md#arity1)‹I, J›, `jk`: [Arity1](lambda.md#arity1)‹J, K›): *K*

*Defined in [packages/lambda/source/pipeline.ts:68](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/pipeline.ts#L68)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

▪ **D**

▪ **E**

▪ **F**

▪ **G**

▪ **H**

▪ **I**

▪ **J**

▪ **K**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`ab` | [Arity1](lambda.md#arity1)‹A, B› |
`bc` | [Arity1](lambda.md#arity1)‹B, C› |
`cd` | [Arity1](lambda.md#arity1)‹C, D› |
`de` | [Arity1](lambda.md#arity1)‹D, E› |
`ef` | [Arity1](lambda.md#arity1)‹E, F› |
`fg` | [Arity1](lambda.md#arity1)‹F, G› |
`gh` | [Arity1](lambda.md#arity1)‹G, H› |
`hi` | [Arity1](lambda.md#arity1)‹H, I› |
`ij` | [Arity1](lambda.md#arity1)‹I, J› |
`jk` | [Arity1](lambda.md#arity1)‹J, K› |

**Returns:** *K*

▸ **pipeline**<**A**, **B**>(...`valueAndFunctions`: [A, function]): *B*

*Defined in [packages/lambda/source/pipeline.ts:81](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/pipeline.ts#L81)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`...valueAndFunctions` | [A, function] |

**Returns:** *B*

___

###  proxyObject

▸ **proxyObject**<**A**>(`a`: A | Partial‹A›): *A*

*Defined in [packages/lambda/source/curryObj.ts:33](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/curryObj.ts#L33)*

**Type parameters:**

▪ **A**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A &#124; Partial‹A› |

**Returns:** *A*

___

###  uncurry

▸ **uncurry**<**F**>(`f`: F): *[Uncurry](lambda.md#uncurry)‹F›*

*Defined in [packages/lambda/source/uncurry.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/lambda/source/uncurry.ts#L8)*

Convert a function like (a -> b -> c -> d) into ((a, b, c) -> d)

**Type parameters:**

▪ **F**: *[Fn](lambda.md#fn)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | F |

**Returns:** *[Uncurry](lambda.md#uncurry)‹F›*

Function that accepts all arguments at once.
