[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [effects](../modules/effects.md) › [Effects](effects.effects-1.md)

# Interface: Effects <**A, B**>

## Type parameters

▪ **A**

▪ **B**

## Hierarchy

  ↳ [Effect](../modules/effects.md#effect)‹Env‹A, any›, B›

  ↳ **Effects**

## Index

### Methods

* [[Symbol.iterator]](effects.effects-1.md#[symbol.iterator])
* [fromEnv](effects.effects-1.md#fromenv)
* [next](effects.effects-1.md#next)
* [of](effects.effects-1.md#of)
* [return](effects.effects-1.md#return)
* [throw](effects.effects-1.md#throw)
* [withEnv](effects.effects-1.md#withenv)

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Generator‹Env‹A, any›, B, any›*

*Inherited from [Effects](effects.effects-1.md).[[Symbol.iterator]](effects.effects-1.md#[symbol.iterator])*

Defined in node_modules/typescript/lib/lib.es2015.generator.d.ts:28

**Returns:** *Generator‹Env‹A, any›, B, any›*

___

###  fromEnv

▸ **fromEnv**<**A**, **B**>(`env`: Env‹A, B›): *[Effect](../modules/effects.md#effect)‹Env‹A, B›, B›*

*Defined in [packages/effects/source/Effect.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L30)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`env` | Env‹A, B› |

**Returns:** *[Effect](../modules/effects.md#effect)‹Env‹A, B›, B›*

▸ **fromEnv**<**A**>(`pure`: Pure‹A›): *[Effect](../modules/effects.md#effect)‹Pure‹A›, A›*

*Defined in [packages/effects/source/Effect.ts:31](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L31)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`pure` | Pure‹A› |

**Returns:** *[Effect](../modules/effects.md#effect)‹Pure‹A›, A›*

___

###  next

▸ **next**(...`args`: [] | [any]): *IteratorResult‹Env‹A, any›, B›*

*Inherited from [Effects](effects.effects-1.md).[next](effects.effects-1.md#next)*

*Overrides void*

Defined in node_modules/typescript/lib/lib.es2015.generator.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [] &#124; [any] |

**Returns:** *IteratorResult‹Env‹A, any›, B›*

___

###  of

▸ **of**<**A**>(`value`: A): *[PureEffect](../modules/effects.md#pureeffect)‹A›*

*Defined in [packages/effects/source/Effect.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L26)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *[PureEffect](../modules/effects.md#pureeffect)‹A›*

___

###  return

▸ **return**(`value`: B): *IteratorResult‹Env‹A, any›, B›*

*Inherited from [Effects](effects.effects-1.md).[return](effects.effects-1.md#return)*

*Overrides void*

Defined in node_modules/typescript/lib/lib.es2015.generator.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

**Returns:** *IteratorResult‹Env‹A, any›, B›*

___

###  throw

▸ **throw**(`e`: any): *IteratorResult‹Env‹A, any›, B›*

*Inherited from [Effects](effects.effects-1.md).[throw](effects.effects-1.md#throw)*

*Overrides void*

Defined in node_modules/typescript/lib/lib.es2015.generator.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

**Returns:** *IteratorResult‹Env‹A, any›, B›*

___

###  withEnv

▸ **withEnv**<**A**, **B**>(`fn`: function): *[Effects](effects.effects-1.md)‹A, B›*

*Defined in [packages/effects/source/Effect.ts:36](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/effects/source/Effect.ts#L36)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`env`: A): *[Effects](effects.effects-1.md)‹A, B›*

**Parameters:**

Name | Type |
------ | ------ |
`env` | A |

**Returns:** *[Effects](effects.effects-1.md)‹A, B›*
