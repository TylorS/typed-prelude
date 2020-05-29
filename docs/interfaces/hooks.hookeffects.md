[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [hooks](../modules/hooks.md) › [HookEffects](hooks.hookeffects.md)

# Interface: HookEffects <**A, B**>

## Type parameters

▪ **A**

▪ **B**

## Hierarchy

* Effects‹[HookEnv](hooks.hookenv.md) & A, B›

  ↳ **HookEffects**

## Index

### Methods

* [[Symbol.iterator]](hooks.hookeffects.md#[symbol.iterator])
* [next](hooks.hookeffects.md#next)
* [return](hooks.hookeffects.md#return)
* [throw](hooks.hookeffects.md#throw)

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Generator‹Env‹[HookEnv](hooks.hookenv.md) & A, any›, B, any›*

*Inherited from [Effects](effects.effects-1.md).[[Symbol.iterator]](effects.effects-1.md#[symbol.iterator])*

Defined in node_modules/typescript/lib/lib.es2015.generator.d.ts:28

**Returns:** *Generator‹Env‹[HookEnv](hooks.hookenv.md) & A, any›, B, any›*

___

###  next

▸ **next**(...`args`: [] | [any]): *IteratorResult‹Env‹[HookEnv](hooks.hookenv.md) & A, any›, B›*

*Inherited from [Effects](effects.effects-1.md).[next](effects.effects-1.md#next)*

*Overrides void*

Defined in node_modules/typescript/lib/lib.es2015.generator.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [] &#124; [any] |

**Returns:** *IteratorResult‹Env‹[HookEnv](hooks.hookenv.md) & A, any›, B›*

___

###  return

▸ **return**(`value`: B): *IteratorResult‹Env‹[HookEnv](hooks.hookenv.md) & A, any›, B›*

*Inherited from [Effects](effects.effects-1.md).[return](effects.effects-1.md#return)*

*Overrides void*

Defined in node_modules/typescript/lib/lib.es2015.generator.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

**Returns:** *IteratorResult‹Env‹[HookEnv](hooks.hookenv.md) & A, any›, B›*

___

###  throw

▸ **throw**(`e`: any): *IteratorResult‹Env‹[HookEnv](hooks.hookenv.md) & A, any›, B›*

*Inherited from [Effects](effects.effects-1.md).[throw](effects.effects-1.md#throw)*

*Overrides void*

Defined in node_modules/typescript/lib/lib.es2015.generator.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

**Returns:** *IteratorResult‹Env‹[HookEnv](hooks.hookenv.md) & A, any›, B›*
