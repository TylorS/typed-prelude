[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [hooks](../modules/hooks.md) › [HooksManagerEnv](hooks.hooksmanagerenv.md)

# Interface: HooksManagerEnv

## Hierarchy

* **HooksManagerEnv**

## Index

### Properties

* [getEnvironmentByKey](hooks.hooksmanagerenv.md#readonly-getenvironmentbykey)
* [hooksManager](hooks.hooksmanagerenv.md#readonly-hooksmanager)
* [removeEnvironmentByKey](hooks.hooksmanagerenv.md#readonly-removeenvironmentbykey)

## Properties

### `Readonly` getEnvironmentByKey

• **getEnvironmentByKey**: *function*

*Defined in [packages/hooks/source/types.ts:31](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L31)*

#### Type declaration:

▸ (`key`: object): *[HookEffects](hooks.hookeffects.md)‹unknown, [HookEnvironment](hooks.hookenvironment.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | object |

___

### `Readonly` hooksManager

• **hooksManager**: *[HooksManager](hooks.hooksmanager.md)*

*Defined in [packages/hooks/source/types.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L30)*

___

### `Readonly` removeEnvironmentByKey

• **removeEnvironmentByKey**: *function*

*Defined in [packages/hooks/source/types.ts:32](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/hooks/source/types.ts#L32)*

#### Type declaration:

▸ (`key`: object): *[PureEffect](../modules/effects.md#pureeffect)‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | object |
