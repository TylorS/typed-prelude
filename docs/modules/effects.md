[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [effects](effects.md)

# Package: effects

# @typed/effects

Generator-based effect management and reverse dependency injection.

## Index

### Namespaces

* [Effect](effects.md#effect)

### Enumerations

* [FiberState](../enums/effects.fiberstate.md)

### Classes

* [Failure](../classes/effects.failure.md)
* [KillError](../classes/effects.killerror.md)

### Interfaces

* [Computation](../interfaces/effects.computation.md)
* [Effects](../interfaces/effects.effects-1.md)
* [Fiber](../interfaces/effects.fiber.md)

### Type aliases

* [Capabilities](effects.md#capabilities)
* [CombinedCapabilities](effects.md#combinedcapabilities)
* [CombinedValues](effects.md#combinedvalues)
* [ErrorOf](effects.md#errorof)
* [Fail](effects.md#fail)
* [FailEnv](effects.md#failenv)
* [FailureKeys](effects.md#failurekeys)
* [FailureTypes](effects.md#failuretypes)
* [FailuresOf](effects.md#failuresof)
* [FiberFailure](effects.md#fiberfailure)
* [FiberInfo](effects.md#fiberinfo)
* [Fork](effects.md#fork)
* [ForkAll](effects.md#forkall)
* [IteratorResultOf](effects.md#iteratorresultof)
* [Join](effects.md#join)
* [JoinAll](effects.md#joinall)
* [Kill](effects.md#kill)
* [PureEffect](effects.md#pureeffect)
* [Return](effects.md#return)
* [RunWith](effects.md#runwith)
* [TimerEnv](effects.md#timerenv)
* [ToConsList](effects.md#toconslist)
* [TypeOf](effects.md#typeof)
* [Yield](effects.md#yield)

### Variables

* [FiberFailure](effects.md#const-fiberfailure)

### Functions

* [Fail](effects.md#const-fail)
* [catchFailure](effects.md#catchfailure)
* [combine](effects.md#combine)
* [combineEnvs](effects.md#combineenvs)
* [createFiber](effects.md#createfiber)
* [createIfNotResolved](effects.md#createifnotresolved)
* [delay](effects.md#const-delay)
* [fail](effects.md#fail)
* [fork](effects.md#fork)
* [forkAll](effects.md#forkall)
* [get](effects.md#const-get)
* [join](effects.md#join)
* [joinAll](effects.md#joinall)
* [kill](effects.md#kill)
* [killAll](effects.md#killall)
* [map](effects.md#map)
* [nextResult](effects.md#const-nextresult)
* [orFail](effects.md#orfail)
* [race](effects.md#race)
* [runEffect](effects.md#const-runeffect)
* [runEffectGenerator](effects.md#const-runeffectgenerator)
* [runEffects](effects.md#runeffects)
* [runWith](effects.md#runwith)
* [sequence](effects.md#sequence)
* [startEffect](effects.md#const-starteffect)

### Object literals

* [Fork](effects.md#const-fork)
* [Join](effects.md#const-join)
* [Kill](effects.md#const-kill)

## Namespaces

###  Effect

• **Effect**:

*Defined in [packages/effects/source/Effect.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L7)*

*Defined in [packages/effects/source/Effect.ts:25](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L25)*

###  fromEnv

▸ **fromEnv**<**A**, **B**>(`env`: Env‹A, B›): *[Effect](effects.md#effect)‹Env‹A, B›, B›*

*Defined in [packages/effects/source/Effect.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L30)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`env` | Env‹A, B› |

**Returns:** *[Effect](effects.md#effect)‹Env‹A, B›, B›*

▸ **fromEnv**<**A**>(`pure`: Pure‹A›): *[Effect](effects.md#effect)‹Pure‹A›, A›*

*Defined in [packages/effects/source/Effect.ts:31](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L31)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`pure` | Pure‹A› |

**Returns:** *[Effect](effects.md#effect)‹Pure‹A›, A›*

###  of

▸ **of**<**A**>(`value`: A): *[PureEffect](effects.md#pureeffect)‹A›*

*Defined in [packages/effects/source/Effect.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L26)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *[PureEffect](effects.md#pureeffect)‹A›*

###  withEnv

▸ **withEnv**<**A**, **B**>(`fn`: function): *[Effects](../interfaces/effects.effects-1.md)‹A, B›*

*Defined in [packages/effects/source/Effect.ts:36](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L36)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`env`: A): *[Effects](../interfaces/effects.effects-1.md)‹A, B›*

**Parameters:**

Name | Type |
------ | ------ |
`env` | A |

**Returns:** *[Effects](../interfaces/effects.effects-1.md)‹A, B›*

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Generator‹A, B, any›*

*Inherited from [Effects](../interfaces/effects.effects-1.md).[[Symbol.iterator]](../interfaces/effects.effects-1.md#[symbol.iterator])*

Defined in node_modules/typescript/lib/lib.es2015.generator.d.ts:28

**Returns:** *Generator‹A, B, any›*

###  next

▸ **next**(...`args`: [] | [any]): *IteratorResult‹A, B›*

*Inherited from [Effects](../interfaces/effects.effects-1.md).[next](../interfaces/effects.effects-1.md#next)*

*Overrides void*

Defined in node_modules/typescript/lib/lib.es2015.generator.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [] &#124; [any] |

**Returns:** *IteratorResult‹A, B›*

###  return

▸ **return**(`value`: B): *IteratorResult‹A, B›*

*Inherited from [Effects](../interfaces/effects.effects-1.md).[return](../interfaces/effects.effects-1.md#return)*

*Overrides void*

Defined in node_modules/typescript/lib/lib.es2015.generator.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

**Returns:** *IteratorResult‹A, B›*

###  throw

▸ **throw**(`e`: any): *IteratorResult‹A, B›*

*Inherited from [Effects](../interfaces/effects.effects-1.md).[throw](../interfaces/effects.effects-1.md#throw)*

*Overrides void*

Defined in node_modules/typescript/lib/lib.es2015.generator.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

**Returns:** *IteratorResult‹A, B›*

## Type aliases

###  Capabilities

Ƭ **Capabilities**: *A extends Effects<infer R, any> ? R : never*

*Defined in [packages/effects/source/Effect.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L23)*

___

###  CombinedCapabilities

Ƭ **CombinedCapabilities**: *[UnNest](common.md#unnest)‹[Flatten](common.md#flatten)‹[ToConsList](effects.md#toconslist)‹A›, object››*

*Defined in [packages/effects/source/Effect.ts:45](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L45)*

___

###  CombinedValues

Ƭ **CombinedValues**: *object*

*Defined in [packages/effects/source/Effect.ts:49](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L49)*

#### Type declaration:

___

###  ErrorOf

Ƭ **ErrorOf**: *FailuresOf<E>[K] extends Fail<infer R> ? R : never*

*Defined in [packages/effects/source/failures/Failure.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/failures/Failure.ts#L16)*

___

###  Fail

Ƭ **Fail**: *function*

*Defined in [packages/effects/source/failures/Failure.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/failures/Failure.ts#L7)*

#### Type declaration:

▸ <**A**>(`error`: Err): *[Resume](env.md#resume)‹[Failure](../classes/effects.failure.md)‹Err, A››*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`error` | Err |

___

###  FailEnv

Ƭ **FailEnv**: *object*

*Defined in [packages/effects/source/failures/Failure.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/failures/Failure.ts#L5)*

#### Type declaration:

___

###  FailureKeys

Ƭ **FailureKeys**: *object[keyof A]*

*Defined in [packages/effects/source/failures/Failure.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/failures/Failure.ts#L22)*

___

###  FailureTypes

Ƭ **FailureTypes**: *keyof FailuresOf<E>*

*Defined in [packages/effects/source/failures/Failure.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/failures/Failure.ts#L11)*

___

###  FailuresOf

Ƭ **FailuresOf**: *Pick‹[Capabilities](effects.md#capabilities)‹E›, [FailureKeys](effects.md#failurekeys)‹[Capabilities](effects.md#capabilities)‹E›››*

*Defined in [packages/effects/source/failures/Failure.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/failures/Failure.ts#L12)*

___

###  FiberFailure

Ƭ **FiberFailure**: *[FailEnv](effects.md#failenv)‹typeof FiberFailure, [Error](../classes/effects.killerror.md#static-error)›*

*Defined in [packages/effects/source/fibers/Fiber.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/Fiber.ts#L9)*

___

###  FiberInfo

Ƭ **FiberInfo**: *object | object | object*

*Defined in [packages/effects/source/fibers/Fiber.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/Fiber.ts#L17)*

___

###  Fork

Ƭ **Fork**: *object*

*Defined in [packages/effects/source/fibers/fork.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/fork.ts#L8)*

#### Type declaration:

* **fork**(): *function*

  * <**A**>(`effect`: A, `c`: [Capabilities](effects.md#capabilities)‹A› & [FiberFailure](effects.md#fiberfailure)): *[Resume](env.md#resume)‹[Fiber](../interfaces/effects.fiber.md)‹[Return](effects.md#return)‹A›››*

___

###  ForkAll

Ƭ **ForkAll**: *object*

*Defined in [packages/effects/source/fibers/forkAll.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/forkAll.ts#L12)*

#### Type declaration:

___

###  IteratorResultOf

Ƭ **IteratorResultOf**: *IteratorResult‹[Yield](effects.md#yield)‹A›, [Return](effects.md#return)‹A››*

*Defined in [packages/effects/source/Effect.ts:43](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L43)*

___

###  Join

Ƭ **Join**: *object*

*Defined in [packages/effects/source/fibers/join.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/join.ts#L8)*

#### Type declaration:

* **join**(): *function*

  * <**A**>(`fiber`: [Fiber](../interfaces/effects.fiber.md)‹A›): *[Resume](env.md#resume)‹[Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), A››*

___

###  JoinAll

Ƭ **JoinAll**: *object*

*Defined in [packages/effects/source/fibers/joinAll.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/joinAll.ts#L14)*

#### Type declaration:

___

###  Kill

Ƭ **Kill**: *object*

*Defined in [packages/effects/source/fibers/kill.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/kill.ts#L5)*

#### Type declaration:

* **kill**(): *function*

  * <**A**>(`f`: [Fiber](../interfaces/effects.fiber.md)‹A›): *[Resume](env.md#resume)‹boolean›*

___

###  PureEffect

Ƭ **PureEffect**: *[Effect](effects.md#effect)‹Pure‹any›, A›*

*Defined in [packages/effects/source/Effect.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L18)*

___

###  Return

Ƭ **Return**: *A extends Effect<any, infer R> ? R : never*

*Defined in [packages/effects/source/Effect.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L21)*

___

###  RunWith

Ƭ **RunWith**: *C extends Capabilities<A> ? PureEffect<Return<A>> : Effects<Omit<Capabilities<A>, keyof C>, Return<A>>*

*Defined in [packages/effects/source/run/runWith.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/run/runWith.ts#L5)*

___

###  TimerEnv

Ƭ **TimerEnv**: *object*

*Defined in [packages/effects/source/factories/delay.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/factories/delay.ts#L5)*

#### Type declaration:

* **timer**: *Timer*

___

###  ToConsList

Ƭ **ToConsList**: *[] extends A ? unknown : function extends function ? [Capabilities<T>, ToConsList<TS>] : never*

*Defined in [packages/effects/source/Effect.ts:53](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L53)*

___

###  TypeOf

Ƭ **TypeOf**: *A extends Effect<any, any> ? Effects<Capabilities<A>, Return<A>> : A extends function ? Effects<Capabilities<ReturnType<A>>, Return<ReturnType<A>>> : unknown*

*Defined in [packages/effects/source/Effect.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L9)*

___

###  Yield

Ƭ **Yield**: *A extends Effect<infer R, any> ? R : never*

*Defined in [packages/effects/source/Effect.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L20)*

## Variables

### `Const` FiberFailure

• **FiberFailure**: *unique symbol* = Symbol.for('FiberFailure')

*Defined in [packages/effects/source/fibers/Fiber.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/Fiber.ts#L8)*

## Functions

### `Const` Fail

▸ **Fail**<**A**>(`error`: any): *object | object*

*Defined in [packages/effects/source/failures/Failure.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/failures/Failure.ts#L9)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *object | object*

___

###  catchFailure

▸ **catchFailure**<**A**, **K**>(`effect`: A, `errorType`: K, `onError`: function)

*Defined in [packages/effects/source/failures/fail.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/failures/fail.ts#L14)*

**Type parameters:**

▪ **A**: *[Effect](effects.md#effect)‹any, any›*

▪ **K**: *[FailureTypes](effects.md#failuretypes)‹A›*

**Parameters:**

▪ **effect**: *A*

▪ **errorType**: *K*

▪ **onError**: *function*

▸ (`error`: [ErrorOf](effects.md#errorof)‹A, K›): *[Return](effects.md#return)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [ErrorOf](effects.md#errorof)‹A, K› |

___

###  combine

▸ **combine**<**E**>(...`effects`: E): *[Effects](../interfaces/effects.effects-1.md)‹[CombinedCapabilities](effects.md#combinedcapabilities)‹E›, [CombinedValues](effects.md#combinedvalues)‹E››*

*Defined in [packages/effects/source/combinators/combine.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/combinators/combine.ts#L6)*

**Type parameters:**

▪ **E**: *ReadonlyArray‹[Effects](../interfaces/effects.effects-1.md)‹any, any››*

**Parameters:**

Name | Type |
------ | ------ |
`...effects` | E |

**Returns:** *[Effects](../interfaces/effects.effects-1.md)‹[CombinedCapabilities](effects.md#combinedcapabilities)‹E›, [CombinedValues](effects.md#combinedvalues)‹E››*

___

###  combineEnvs

▸ **combineEnvs**<**A**, **B**>(`envs`: Env‹any, any›[]): *Env‹A, B›*

*Defined in [packages/effects/source/combinators/combine.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/combinators/combine.ts#L16)*

**Type parameters:**

▪ **A**

▪ **B**: *any[]*

**Parameters:**

Name | Type |
------ | ------ |
`envs` | Env‹any, any›[] |

**Returns:** *Env‹A, B›*

___

###  createFiber

▸ **createFiber**<**A**>(): *[Fiber](../interfaces/effects.fiber.md)‹A›*

*Defined in [packages/effects/source/fibers/createFiber.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/createFiber.ts#L7)*

**Type parameters:**

▪ **A**

**Returns:** *[Fiber](../interfaces/effects.fiber.md)‹A›*

___

###  createIfNotResolved

▸ **createIfNotResolved**<**A**>(`cb`: function, `disposable`: Disposable): *(Anonymous function)*

*Defined in [packages/effects/source/combinators/race.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/combinators/race.ts#L26)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **cb**: *function*

▸ (`value`: A): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **disposable**: *Disposable*

**Returns:** *(Anonymous function)*

___

### `Const` delay

▸ **delay**(`ms`: number): *[Effects](../interfaces/effects.effects-1.md)‹[TimerEnv](effects.md#timerenv), number›*

*Defined in [packages/effects/source/factories/delay.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/factories/delay.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`ms` | number |

**Returns:** *[Effects](../interfaces/effects.effects-1.md)‹[TimerEnv](effects.md#timerenv), number›*

___

###  fail

▸ **fail**<**A**, **Err**>(`errorType`: A, `error`: Err): *[Effects](../interfaces/effects.effects-1.md)‹[FailEnv](effects.md#failenv)‹A, Err›, any›*

*Defined in [packages/effects/source/failures/fail.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/failures/fail.ts#L7)*

**Type parameters:**

▪ **A**: *keyof any*

▪ **Err**

**Parameters:**

Name | Type |
------ | ------ |
`errorType` | A |
`error` | Err |

**Returns:** *[Effects](../interfaces/effects.effects-1.md)‹[FailEnv](effects.md#failenv)‹A, Err›, any›*

___

###  fork

▸ **fork**<**A**>(`effect`: A): *[Effects](../interfaces/effects.effects-1.md)‹[Capabilities](effects.md#capabilities)‹A› & [Fork](effects.md#fork) & [FiberFailure](effects.md#fiberfailure), [Fiber](../interfaces/effects.fiber.md)‹[Return](effects.md#return)‹A›››*

*Defined in [packages/effects/source/fibers/fork.ts:35](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/fork.ts#L35)*

**Type parameters:**

▪ **A**: *[Effects](../interfaces/effects.effects-1.md)*

**Parameters:**

Name | Type |
------ | ------ |
`effect` | A |

**Returns:** *[Effects](../interfaces/effects.effects-1.md)‹[Capabilities](effects.md#capabilities)‹A› & [Fork](effects.md#fork) & [FiberFailure](effects.md#fiberfailure), [Fiber](../interfaces/effects.fiber.md)‹[Return](effects.md#return)‹A›››*

___

###  forkAll

▸ **forkAll**<**A**>(...`effects`: A): *[Effects](../interfaces/effects.effects-1.md)‹[CombinedCapabilities](effects.md#combinedcapabilities)‹A› & [FiberFailure](effects.md#fiberfailure) & [Fork](effects.md#fork), [ForkAll](effects.md#forkall)‹A››*

*Defined in [packages/effects/source/fibers/forkAll.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/forkAll.ts#L6)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[Effect](effects.md#effect)‹any, any››*

**Parameters:**

Name | Type |
------ | ------ |
`...effects` | A |

**Returns:** *[Effects](../interfaces/effects.effects-1.md)‹[CombinedCapabilities](effects.md#combinedcapabilities)‹A› & [FiberFailure](effects.md#fiberfailure) & [Fork](effects.md#fork), [ForkAll](effects.md#forkall)‹A››*

___

### `Const` get

▸ **get**<**A**>(): *[Effect](effects.md#effect)‹Env‹A, A›, A›*

*Defined in [packages/effects/source/factories/get.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/factories/get.ts#L5)*

**Type parameters:**

▪ **A**

**Returns:** *[Effect](effects.md#effect)‹Env‹A, A›, A›*

___

###  join

▸ **join**<**A**>(`f`: [Fiber](../interfaces/effects.fiber.md)‹A›): *[Effects](../interfaces/effects.effects-1.md)‹[Join](effects.md#join) & [FiberFailure](effects.md#fiberfailure), A›*

*Defined in [packages/effects/source/fibers/join.ts:37](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/join.ts#L37)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fiber](../interfaces/effects.fiber.md)‹A› |

**Returns:** *[Effects](../interfaces/effects.effects-1.md)‹[Join](effects.md#join) & [FiberFailure](effects.md#fiberfailure), A›*

___

###  joinAll

▸ **joinAll**<**A**>(...`fibers`: A): *[Effects](../interfaces/effects.effects-1.md)‹[FiberFailure](effects.md#fiberfailure) & [Join](effects.md#join), [JoinAll](effects.md#joinall)‹A››*

*Defined in [packages/effects/source/fibers/joinAll.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/joinAll.ts#L6)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[Fiber](../interfaces/effects.fiber.md)‹any››*

**Parameters:**

Name | Type |
------ | ------ |
`...fibers` | A |

**Returns:** *[Effects](../interfaces/effects.effects-1.md)‹[FiberFailure](effects.md#fiberfailure) & [Join](effects.md#join), [JoinAll](effects.md#joinall)‹A››*

___

###  kill

▸ **kill**<**A**>(`f`: [Fiber](../interfaces/effects.fiber.md)‹A›): *[Effects](../interfaces/effects.effects-1.md)‹[Kill](effects.md#kill), void›*

*Defined in [packages/effects/source/fibers/kill.ts:25](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/kill.ts#L25)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Fiber](../interfaces/effects.fiber.md)‹A› |

**Returns:** *[Effects](../interfaces/effects.effects-1.md)‹[Kill](effects.md#kill), void›*

___

###  killAll

▸ **killAll**<**A**>(...`fibers`: A): *[Effects](../interfaces/effects.effects-1.md)‹[FiberFailure](effects.md#fiberfailure) & [Kill](effects.md#kill), void›*

*Defined in [packages/effects/source/fibers/killAll.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/killAll.ts#L6)*

**Type parameters:**

▪ **A**: *ReadonlyArray‹[Fiber](../interfaces/effects.fiber.md)‹any››*

**Parameters:**

Name | Type |
------ | ------ |
`...fibers` | A |

**Returns:** *[Effects](../interfaces/effects.effects-1.md)‹[FiberFailure](effects.md#fiberfailure) & [Kill](effects.md#kill), void›*

___

###  map

▸ **map**<**E**, **A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›, `effect`: [Effects](../interfaces/effects.effects-1.md)‹E, A›): *[Effects](../interfaces/effects.effects-1.md)‹E, B›*

*Defined in [packages/effects/source/combinators/map.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/combinators/map.ts#L4)*

**Type parameters:**

▪ **E**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |
`effect` | [Effects](../interfaces/effects.effects-1.md)‹E, A› |

**Returns:** *[Effects](../interfaces/effects.effects-1.md)‹E, B›*

___

### `Const` nextResult

▸ **nextResult**<**A**>(`value`: any, `generator`: A): *[IteratorResultOf](effects.md#iteratorresultof)‹A›*

*Defined in [packages/effects/source/run/runEffect.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/run/runEffect.ts#L13)*

**Type parameters:**

▪ **A**: *[Effect](effects.md#effect)‹any, any›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`generator` | A |

**Returns:** *[IteratorResultOf](effects.md#iteratorresultof)‹A›*

___

###  orFail

▸ **orFail**<**F**, **A**, **B**, **C**>(`key`: F, `effect`: [Effects](../interfaces/effects.effects-1.md)‹A, [Either](either.md#either)‹B, C››): *[Effect](effects.md#effect)‹Env‹A, any› | Env‹[FailEnv](effects.md#failenv)‹F, B›, any›, C›*

*Defined in [packages/effects/source/failures/orFail.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/failures/orFail.ts#L7)*

**Type parameters:**

▪ **F**: *PropertyKey*

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`key` | F |
`effect` | [Effects](../interfaces/effects.effects-1.md)‹A, [Either](either.md#either)‹B, C›› |

**Returns:** *[Effect](effects.md#effect)‹Env‹A, any› | Env‹[FailEnv](effects.md#failenv)‹F, B›, any›, C›*

___

###  race

▸ **race**<**E**>(...`effects`: E): *[Effect](effects.md#effect)‹Env‹[CombinedCapabilities](effects.md#combinedcapabilities)‹E›, [Return](effects.md#return)‹E[keyof E]››, [Return](effects.md#return)‹E[keyof E]››*

*Defined in [packages/effects/source/combinators/race.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/combinators/race.ts#L6)*

**Type parameters:**

▪ **E**: *ReadonlyArray‹[Effect](effects.md#effect)‹any, any››*

**Parameters:**

Name | Type |
------ | ------ |
`...effects` | E |

**Returns:** *[Effect](effects.md#effect)‹Env‹[CombinedCapabilities](effects.md#combinedcapabilities)‹E›, [Return](effects.md#return)‹E[keyof E]››, [Return](effects.md#return)‹E[keyof E]››*

___

### `Const` runEffect

▸ **runEffect**<**A**>(`effect`: A): *Env‹[Capabilities](effects.md#capabilities)‹A›, [Return](effects.md#return)‹A››*

*Defined in [packages/effects/source/run/runEffect.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/run/runEffect.ts#L5)*

**Type parameters:**

▪ **A**: *[Effect](effects.md#effect)‹any, any›*

**Parameters:**

Name | Type |
------ | ------ |
`effect` | A |

**Returns:** *Env‹[Capabilities](effects.md#capabilities)‹A›, [Return](effects.md#return)‹A››*

___

### `Const` runEffectGenerator

▸ **runEffectGenerator**<**A**>(`generator`: A, `result`: [IteratorResultOf](effects.md#iteratorresultof)‹A›, `capabilities`: [Capabilities](effects.md#capabilities)‹A›): *[Resume](env.md#resume)‹[Return](effects.md#return)‹A››*

*Defined in [packages/effects/source/run/runEffect.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/run/runEffect.ts#L24)*

**Type parameters:**

▪ **A**: *[Effect](effects.md#effect)‹any, any›*

**Parameters:**

Name | Type |
------ | ------ |
`generator` | A |
`result` | [IteratorResultOf](effects.md#iteratorresultof)‹A› |
`capabilities` | [Capabilities](effects.md#capabilities)‹A› |

**Returns:** *[Resume](env.md#resume)‹[Return](effects.md#return)‹A››*

___

###  runEffects

▸ **runEffects**<**A**>(`effect`: A): *Disposable*

*Defined in [packages/effects/source/run/runEffects.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/run/runEffects.ts#L6)*

**Type parameters:**

▪ **A**: *[PureEffect](effects.md#pureeffect)‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`effect` | A |

**Returns:** *Disposable*

▸ **runEffects**<**A**>(`effect`: A, `resources`: [Capabilities](effects.md#capabilities)‹A›, `onReturn?`: undefined | function): *Disposable*

*Defined in [packages/effects/source/run/runEffects.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/run/runEffects.ts#L8)*

**Type parameters:**

▪ **A**: *[Effects](../interfaces/effects.effects-1.md)‹any, any›*

**Parameters:**

Name | Type |
------ | ------ |
`effect` | A |
`resources` | [Capabilities](effects.md#capabilities)‹A› |
`onReturn?` | undefined &#124; function |

**Returns:** *Disposable*

___

###  runWith

▸ **runWith**<**A**, **C**>(`effect`: A, `capabilities`: C): *[RunWith](effects.md#runwith)‹A, C›*

*Defined in [packages/effects/source/run/runWith.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/run/runWith.ts#L9)*

**Type parameters:**

▪ **A**: *[Effects](../interfaces/effects.effects-1.md)‹any, any›*

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`effect` | A |
`capabilities` | C |

**Returns:** *[RunWith](effects.md#runwith)‹A, C›*

___

###  sequence

▸ **sequence**<**E**, **A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, [Effect](effects.md#effect)‹E, B››, `as`: keyof A[]): *[Effect](effects.md#effect)‹E, keyof B[]›*

*Defined in [packages/effects/source/factories/sequence.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/factories/sequence.ts#L4)*

**Type parameters:**

▪ **E**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, [Effect](effects.md#effect)‹E, B›› |
`as` | keyof A[] |

**Returns:** *[Effect](effects.md#effect)‹E, keyof B[]›*

___

### `Const` startEffect

▸ **startEffect**<**A**>(`effect`: A): *Env‹[Capabilities](effects.md#capabilities)‹A›, A›*

*Defined in [packages/effects/source/run/startEffect.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/run/startEffect.ts#L4)*

**Type parameters:**

▪ **A**: *[Effect](effects.md#effect)‹any, any›*

**Parameters:**

Name | Type |
------ | ------ |
`effect` | A |

**Returns:** *Env‹[Capabilities](effects.md#capabilities)‹A›, A›*

## Object literals

### `Const` Fork

### ▪ **Fork**: *object*

*Defined in [packages/effects/source/fibers/fork.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/fork.ts#L15)*

###  fork

▸ **fork**<**A**>(`effect`: A, `c`: [Capabilities](effects.md#capabilities)‹A› & [FiberFailure](effects.md#fiberfailure)): *object | object*

*Defined in [packages/effects/source/fibers/fork.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/fork.ts#L16)*

**Type parameters:**

▪ **A**: *[Effects](../interfaces/effects.effects-1.md)*

**Parameters:**

Name | Type |
------ | ------ |
`effect` | A |
`c` | [Capabilities](effects.md#capabilities)‹A› & [FiberFailure](effects.md#fiberfailure) |

**Returns:** *object | object*

___

### `Const` Join

### ▪ **Join**: *object*

*Defined in [packages/effects/source/fibers/join.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/join.ts#L10)*

###  join

▸ **join**<**A**>(`fiber`: [Fiber](../interfaces/effects.fiber.md)‹A›): *[Resume](env.md#resume)‹[Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), A››*

*Defined in [packages/effects/source/fibers/join.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/join.ts#L11)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`fiber` | [Fiber](../interfaces/effects.fiber.md)‹A› |

**Returns:** *[Resume](env.md#resume)‹[Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), A››*

___

### `Const` Kill

### ▪ **Kill**: *object*

*Defined in [packages/effects/source/fibers/kill.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/kill.ts#L9)*

###  kill

▸ **kill**<**A**>(`fiber`: [Fiber](../interfaces/effects.fiber.md)‹A›): *[Resume](env.md#resume)‹boolean›*

*Defined in [packages/effects/source/fibers/kill.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/fibers/kill.ts#L10)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`fiber` | [Fiber](../interfaces/effects.fiber.md)‹A› |

**Returns:** *[Resume](env.md#resume)‹boolean›*
