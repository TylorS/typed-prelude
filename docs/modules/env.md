[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [env](env.md)

# Package: env

# @typed/env

> A data-type for environment-dependent computations.

## Index

### Namespaces

* [Pure](env.md#pure)
* [Resume](env.md#resume)

### Interfaces

* [Env](../interfaces/env.env-1.md)

### Type aliases

* [CapabilitiesOf](env.md#capabilitiesof)
* [LazyResume](env.md#lazyresume)
* [Provide](env.md#provide)
* [ValueOf](env.md#valueof)
* [ValueResume](env.md#valueresume)

### Variables

* [chain](env.md#const-chain)
* [noOp](env.md#const-noop)
* [runEnv](env.md#const-runenv)
* [runPure](env.md#const-runpure)

### Functions

* [__chain](env.md#__chain)
* [execPure](env.md#const-execpure)
* [provide](env.md#provide)
* [withEnv](env.md#withenv)

## Namespaces

###  Pure

▸ <**C**>(`capabilities`: C): *[Resume](env.md#resume)‹A›*

*Defined in [packages/env/source/Env.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/Env.ts#L7)*

A computation that has all capabilities supplied

**Type parameters:**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`capabilities` | C |

**Returns:** *[Resume](env.md#resume)‹A›*

### `Const` fromIO

▸ **fromIO**<**A**>(`io`: [IO](lambda.md#io)‹A›): *[Pure](env.md#pure)‹A›*

*Defined in [packages/env/source/Env.ts:33](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/Env.ts#L33)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`io` | [IO](lambda.md#io)‹A› |

**Returns:** *[Pure](env.md#pure)‹A›*

### `Const` of

▸ **of**<**A**>(`value`: A): *[Pure](env.md#pure)‹A›*

*Defined in [packages/env/source/Env.ts:32](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/Env.ts#L32)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *[Pure](env.md#pure)‹A›*

___

###  Resume

• **Resume**: *[ValueResume](env.md#valueresume)‹A› | [LazyResume](env.md#lazyresume)‹A›*

*Defined in [packages/env/source/Resume.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/Resume.ts#L3)*

*Defined in [packages/env/source/Resume.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/Resume.ts#L11)*

### `Const` chain

▸ **chain**<**A**, **B**>(`fn`: function, `resume`: [Resume](env.md#resume)‹A›): *[Resume](env.md#resume)‹B›*

*Defined in [packages/env/source/Resume.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/Resume.ts#L21)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: A): *[Resume](env.md#resume)‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **resume**: *[Resume](env.md#resume)‹A›*

**Returns:** *[Resume](env.md#resume)‹B›*

### `Const` create

▸ **create**<**A**>(`resume`: function): *[Resume](env.md#resume)‹A›*

*Defined in [packages/env/source/Resume.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/Resume.ts#L13)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **resume**: *function*

▸ (`cb`: function): *Disposable*

**Parameters:**

▪ **cb**: *function*

▸ (`value`: A): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *[Resume](env.md#resume)‹A›*

### `Const` isLazy

▸ **isLazy**<**A**>(`resume`: [Resume](env.md#resume)‹A›): *resume is LazyResume<A>*

*Defined in [packages/env/source/Resume.ts:25](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/Resume.ts#L25)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`resume` | [Resume](env.md#resume)‹A› |

**Returns:** *resume is LazyResume<A>*

### `Const` isValue

▸ **isValue**<**A**>(`resume`: [Resume](env.md#resume)‹A›): *resume is ValueResume<A>*

*Defined in [packages/env/source/Resume.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/Resume.ts#L24)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`resume` | [Resume](env.md#resume)‹A› |

**Returns:** *resume is ValueResume<A>*

### `Const` of

▸ **of**<**A**>(`value`: A): *[Resume](env.md#resume)‹A›*

*Defined in [packages/env/source/Resume.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/Resume.ts#L12)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *[Resume](env.md#resume)‹A›*

### `Const` run

▸ **run**<**A**>(`f`: function, `resume`: [Resume](env.md#resume)‹A›): *Disposable*

*Defined in [packages/env/source/Resume.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/Resume.ts#L18)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **f**: *function*

▸ (`value`: A): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **resume**: *[Resume](env.md#resume)‹A›*

**Returns:** *Disposable*

## Type aliases

###  CapabilitiesOf

Ƭ **CapabilitiesOf**: *A extends Env<infer R, any> ? R : never*

*Defined in [packages/env/source/Env.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/Env.ts#L24)*

Extracts the capabilities required to satisfy an environment

___

###  LazyResume

Ƭ **LazyResume**: *object*

*Defined in [packages/env/source/Resume.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/Resume.ts#L6)*

#### Type declaration:

* **resume**(): *function*

  * (`cb`: function): *Disposable*

* **type**: *"lazy"*

___

###  Provide

Ƭ **Provide**: *[keyof Omit<CapabilitiesOf<E>, keyof C>] extends [never] ? Pure<ValueOf<E>> : Env<Omit<CapabilitiesOf<E>, keyof C>, ValueOf<E>>*

*Defined in [packages/env/source/provide.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/provide.ts#L3)*

___

###  ValueOf

Ƭ **ValueOf**: *A extends Env<any, infer R> ? R : A extends Pure<infer R> ? R : never*

*Defined in [packages/env/source/Env.ts:29](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/Env.ts#L29)*

Get the return value of an Env

___

###  ValueResume

Ƭ **ValueResume**: *object*

*Defined in [packages/env/source/Resume.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/Resume.ts#L5)*

#### Type declaration:

* **type**: *"value"*

* **value**: *A*

## Variables

### `Const` chain

• **chain**: *function* = curry(__chain) as {
  <A, E1, B, E2>(fn: (value: A) => Env<E1, B>, env: Env<E2, A>): Env<E1 & E2, B>
  <A, E1, B>(fn: (value: A) => Env<E1, B>): <E2>(env: Env<E2, A>) => Env<E1 & E2, B>
}

*Defined in [packages/env/source/chain.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/chain.ts#L5)*

#### Type declaration:

▸ <**A**, **E1**, **B**, **E2**>(`fn`: function, `env`: [Env](../interfaces/env.env-1.md)‹E2, A›): *[Env](../interfaces/env.env-1.md)‹E1 & E2, B›*

**Type parameters:**

▪ **A**

▪ **E1**

▪ **B**

▪ **E2**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: A): *[Env](../interfaces/env.env-1.md)‹E1, B›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **env**: *[Env](../interfaces/env.env-1.md)‹E2, A›*

▸ <**A**, **E1**, **B**>(`fn`: function): *function*

**Type parameters:**

▪ **A**

▪ **E1**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: A): *[Env](../interfaces/env.env-1.md)‹E1, B›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ <**E2**>(`env`: [Env](../interfaces/env.env-1.md)‹E2, A›): *[Env](../interfaces/env.env-1.md)‹E1 & E2, B›*

**Type parameters:**

▪ **E2**

**Parameters:**

Name | Type |
------ | ------ |
`env` | [Env](../interfaces/env.env-1.md)‹E2, A› |

___

### `Const` noOp

• **noOp**: *function* = always(Disposable.None)

*Defined in [packages/env/source/execPure.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/execPure.ts#L6)*

#### Type declaration:

▸ (...`_`: any[]): *A*

**Parameters:**

Name | Type |
------ | ------ |
`..._` | any[] |

___

### `Const` runEnv

• **runEnv**: *function* = curry(
  <A extends {}, B>(fn: (value: B) => Disposable, resources: A, env: Env<A, B>): Disposable =>
    Resume.run(fn, env(resources)),
) as {
  <A extends {}, B>(fn: (value: B) => Disposable, resources: A, env: Env<A, B>): Disposable
  <A extends {}, B>(fn: (value: B) => Disposable, resources: A): (env: Env<A, B>) => Disposable
  <B>(fn: (value: B) => Disposable): {
    <A extends {}>(resources: A, env: Env<A, B>): Disposable
    <A extends {}>(resources: A): (env: Env<A, B>) => Disposable
  }
}

*Defined in [packages/env/source/runEnv.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/runEnv.ts#L6)*

#### Type declaration:

▸ <**A**, **B**>(`fn`: function, `resources`: A, `env`: [Env](../interfaces/env.env-1.md)‹A, B›): *Disposable*

**Type parameters:**

▪ **A**: *object*

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: B): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **resources**: *A*

▪ **env**: *[Env](../interfaces/env.env-1.md)‹A, B›*

▸ <**A**, **B**>(`fn`: function, `resources`: A): *function*

**Type parameters:**

▪ **A**: *object*

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: B): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **resources**: *A*

▸ (`env`: [Env](../interfaces/env.env-1.md)‹A, B›): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`env` | [Env](../interfaces/env.env-1.md)‹A, B› |

▸ <**B**>(`fn`: function): *function*

**Type parameters:**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: B): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ <**A**>(`resources`: A, `env`: [Env](../interfaces/env.env-1.md)‹A, B›): *Disposable*

**Type parameters:**

▪ **A**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`resources` | A |
`env` | [Env](../interfaces/env.env-1.md)‹A, B› |

▸ <**A**>(`resources`: A): *function*

**Type parameters:**

▪ **A**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`resources` | A |

▸ (`env`: [Env](../interfaces/env.env-1.md)‹A, B›): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`env` | [Env](../interfaces/env.env-1.md)‹A, B› |

___

### `Const` runPure

• **runPure**: *function* = curry(function runPure<A>(f: (value: A) => Disposable, pure: Pure<A>): Disposable {
  return runEnv(f, {}, pure)
})

*Defined in [packages/env/source/runPure.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/runPure.ts#L12)*

Runs a Pure Env with the given callback

**`param`** :: (a -> Disposable) Callback for pure Value

**`param`** :: Pure<A>  Pure to run

**`returns`** :: Disposable

#### Type declaration:

▸ <**A**>(`f`: function, `pure`: [Pure](env.md#pure)‹A›): *Disposable*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **f**: *function*

▸ (`value`: A): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **pure**: *[Pure](env.md#pure)‹A›*

▸ <**A**>(`f`: function): *function*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **f**: *function*

▸ (`value`: A): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`pure`: [Pure](env.md#pure)‹A›): *Disposable*

**Parameters:**

Name | Type |
------ | ------ |
`pure` | [Pure](env.md#pure)‹A› |

## Functions

###  __chain

▸ **__chain**<**A**, **E1**, **B**, **E2**>(`fn`: function, `env`: [Env](../interfaces/env.env-1.md)‹E2, A›): *[Env](../interfaces/env.env-1.md)‹E1 & E2, B›*

*Defined in [packages/env/source/chain.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/chain.ts#L10)*

**Type parameters:**

▪ **A**

▪ **E1**

▪ **B**

▪ **E2**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: A): *[Env](../interfaces/env.env-1.md)‹E1, B›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **env**: *[Env](../interfaces/env.env-1.md)‹E2, A›*

**Returns:** *[Env](../interfaces/env.env-1.md)‹E1 & E2, B›*

___

### `Const` execPure

▸ **execPure**(`pure`: [Pure](env.md#pure)‹any›): *Disposable*

*Defined in [packages/env/source/execPure.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/execPure.ts#L13)*

Execute a pure ignoring the value it produces.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pure` | [Pure](env.md#pure)‹any› | :: Pure * |

**Returns:** *Disposable*

:: Disposable

___

###  provide

▸ **provide**<**E**, **C**>(`env`: E, `capabilities`: C): *[Provide](env.md#provide)‹E, C›*

*Defined in [packages/env/source/provide.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/provide.ts#L9)*

**Type parameters:**

▪ **E**: *[Env](../interfaces/env.env-1.md)‹any, any›*

▪ **C**: *Partial‹[CapabilitiesOf](env.md#capabilitiesof)‹E››*

**Parameters:**

Name | Type |
------ | ------ |
`env` | E |
`capabilities` | C |

**Returns:** *[Provide](env.md#provide)‹E, C›*

___

###  withEnv

▸ **withEnv**<**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›): *[Env](../interfaces/env.env-1.md)‹A, B›*

*Defined in [packages/env/source/withEnv.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/env/source/withEnv.ts#L9)*

Create an environment-dependent calculation

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› | :: (a -> b)  |

**Returns:** *[Env](../interfaces/env.env-1.md)‹A, B›*
