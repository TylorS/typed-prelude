[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [render](render.md)

# Package: render

# @typed/render 

An interface-driven rendering system for `@typed/hooks`, capable of integrating with many JS view/rendering libraries.

## Index

### Interfaces

* [PatchEnv](../interfaces/render.patchenv.md)
* [RafEnv](../interfaces/render.rafenv.md)

### Type aliases

* [KeyOf](render.md#keyof)

### Variables

* [DomEnvChannel](render.md#const-domenvchannel)

### Functions

* [createTestRafEnv](render.md#createtestrafenv)
* [patch](render.md#patch)
* [patchOnRaf](render.md#patchonraf)
* [raf](render.md#raf)
* [useDomEnv](render.md#usedomenv)
* [useHookEnvUpdated](render.md#usehookenvupdated)
* [useKeyManager](render.md#usekeymanager)
* [useListManager](render.md#uselistmanager)
* [useMatchManager](render.md#usematchmanager)

## Type aliases

###  KeyOf

Ƭ **KeyOf**: *object*

*Defined in [packages/render/source/useListManager.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/render/source/useListManager.ts#L16)*

#### Type declaration:

## Variables

### `Const` DomEnvChannel

• **DomEnvChannel**: *Channel‹DomEnv‹unknown›, DomEnv‹unknown››* = createChannel<DomEnv, DomEnv>(get)

*Defined in [packages/render/source/useDomEnv.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/render/source/useDomEnv.ts#L13)*

## Functions

###  createTestRafEnv

▸ **createTestRafEnv**(`timer`: Timer, `delayMs`: number): *[RafEnv](../interfaces/render.rafenv.md)*

*Defined in [packages/render/source/createTestRafEnv.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/render/source/createTestRafEnv.ts#L5)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`timer` | Timer | - |
`delayMs` | number | 1 |

**Returns:** *[RafEnv](../interfaces/render.rafenv.md)*

___

###  patch

▸ **patch**<**E**, **A**, **B**>(`previous`: A, `renderable`: B): *Effects‹E & [PatchEnv](../interfaces/render.patchenv.md)‹A, B›, A›*

*Defined in [packages/render/source/Patch.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/render/source/Patch.ts#L7)*

**Type parameters:**

▪ **E**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`previous` | A |
`renderable` | B |

**Returns:** *Effects‹E & [PatchEnv](../interfaces/render.patchenv.md)‹A, B›, A›*

___

###  patchOnRaf

▸ **patchOnRaf**<**E**, **A**, **B**, **C**>(`fn`: function, `initial`: C): *HookEffects‹E & A & [RafEnv](../interfaces/render.rafenv.md) & [PatchEnv](../interfaces/render.patchenv.md)‹C, B, E›, never›*

*Defined in [packages/render/source/patchOnRaf.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/render/source/patchOnRaf.ts#L5)*

**Type parameters:**

▪ **E**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **fn**: *function*

▸ (): *HookEffects‹A, B›*

▪ **initial**: *C*

**Returns:** *HookEffects‹E & A & [RafEnv](../interfaces/render.rafenv.md) & [PatchEnv](../interfaces/render.patchenv.md)‹C, B, E›, never›*

___

###  raf

▸ **raf**(): *Effects‹[RafEnv](../interfaces/render.rafenv.md), number›*

*Defined in [packages/render/source/raf.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/render/source/raf.ts#L9)*

**Returns:** *Effects‹[RafEnv](../interfaces/render.rafenv.md), number›*

___

###  useDomEnv

▸ **useDomEnv**<**A**>(): *ChannelEffects‹HookEnv & [TimerEnv](effects.md#timerenv) & DomEnv‹A›, DomEnv‹A››*

*Defined in [packages/render/source/useDomEnv.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/render/source/useDomEnv.ts#L15)*

**Type parameters:**

▪ **A**

**Returns:** *ChannelEffects‹HookEnv & [TimerEnv](effects.md#timerenv) & DomEnv‹A›, DomEnv‹A››*

___

###  useHookEnvUpdated

▸ **useHookEnvUpdated**(`env`: HookEnvironment, `onUpdated`: function): *Generator‹Env‹HooksManagerEnv, HooksManagerEnv› | Env‹HookEnv, any›, Disposable, any›*

*Defined in [packages/render/source/useHookEnvUpdated.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/render/source/useHookEnvUpdated.ts#L8)*

Listen for updated events regarding a particular hook environment.

**Parameters:**

▪ **env**: *HookEnvironment*

▪ **onUpdated**: *function*

▸ (): *Disposable*

**Returns:** *Generator‹Env‹HooksManagerEnv, HooksManagerEnv› | Env‹HookEnv, any›, Disposable, any›*

___

###  useKeyManager

▸ **useKeyManager**<**E**, **B**, **C**>(`key`: object, `render`: function, `initial?`: C | null): *ChannelEffects‹HookEnv & [TimerEnv](effects.md#timerenv) & [PatchEnv](../interfaces/render.patchenv.md)‹C, B› & E, B›*

*Defined in [packages/render/source/useKeyManager.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/render/source/useKeyManager.ts#L21)*

Used to manage a help manage re-rendering a patchable instance

**Type parameters:**

▪ **E**

▪ **B**

▪ **C**

**Parameters:**

▪ **key**: *object*

▪ **render**: *function*

▸ (...`ref`: [UseRef](hooks.md#useref)‹C›): *HookEffects‹E, B›*

**Parameters:**

Name | Type |
------ | ------ |
`...ref` | [UseRef](hooks.md#useref)‹C› |

▪`Optional`  **initial**: *C | null*

**Returns:** *ChannelEffects‹HookEnv & [TimerEnv](effects.md#timerenv) & [PatchEnv](../interfaces/render.patchenv.md)‹C, B› & E, B›*

___

###  useListManager

▸ **useListManager**<**A**, **B**, **E**, **C**, **D**>(`list`: ReadonlyArray‹A›, `identify`: [Arity1](lambda.md#arity1)‹A, B›, `computation`: function): *HookEffects‹E & [TimerEnv](effects.md#timerenv) & HooksManagerEnv & [PatchEnv](../interfaces/render.patchenv.md)‹D, C›, ReadonlyArray‹C››*

*Defined in [packages/render/source/useListManager.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/render/source/useListManager.ts#L19)*

**Type parameters:**

▪ **A**

▪ **B**: *PropertyKey*

▪ **E**

▪ **C**

▪ **D**

**Parameters:**

▪ **list**: *ReadonlyArray‹A›*

▪ **identify**: *[Arity1](lambda.md#arity1)‹A, B›*

▪ **computation**: *function*

▸ (`ref`: UseRef<D>[0], `setRef`: UseRef<D>[1], `value`: A, `index`: number): *HookEffects‹E, C›*

**Parameters:**

Name | Type |
------ | ------ |
`ref` | UseRef<D>[0] |
`setRef` | UseRef<D>[1] |
`value` | A |
`index` | number |

**Returns:** *HookEffects‹E & [TimerEnv](effects.md#timerenv) & HooksManagerEnv & [PatchEnv](../interfaces/render.patchenv.md)‹D, C›, ReadonlyArray‹C››*

___

###  useMatchManager

▸ **useMatchManager**<**A**, **E**, **B**, **C**>(`matchAgainst`: A, `matches`: ReadonlyArray‹Match‹A, function››, `initial?`: C | null): *ChannelEffects‹E & [TimerEnv](effects.md#timerenv) & HookEnv & [PatchEnv](../interfaces/render.patchenv.md)‹C, B›, [Maybe](io.md#const-maybe)‹B››*

*Defined in [packages/render/source/useMatchManager.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/render/source/useMatchManager.ts#L17)*

**Type parameters:**

▪ **A**

▪ **E**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`matchAgainst` | A |
`matches` | ReadonlyArray‹Match‹A, function›› |
`initial?` | C &#124; null |

**Returns:** *ChannelEffects‹E & [TimerEnv](effects.md#timerenv) & HookEnv & [PatchEnv](../interfaces/render.patchenv.md)‹C, B›, [Maybe](io.md#const-maybe)‹B››*
