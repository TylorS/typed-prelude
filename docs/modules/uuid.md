[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [uuid](uuid.md)

# Package: uuid

# @typed/uuid

> Cross-platform UUID v4 implementation

## Index

### Classes

* [BrowserGenerator](../classes/uuid.browsergenerator.md)
* [NodeGenerator](../classes/uuid.nodegenerator.md)

### Interfaces

* [UuidEnv](../interfaces/uuid.uuidenv.md)

### Type aliases

* [Uuid](uuid.md#uuid)
* [UuidSeed](uuid.md#uuidseed)

### Variables

* [VALID_UUID_LENGTH](uuid.md#const-valid_uuid_length)
* [isBrowser](uuid.md#const-isbrowser)
* [isUuid](uuid.md#const-isuuid)
* [uuidPattern](uuid.md#const-uuidpattern)

### Functions

* [uuid](uuid.md#uuid)
* [uuid4](uuid.md#uuid4)
* [withUuid](uuid.md#withuuid)

## Type aliases

###  Uuid

Ƭ **Uuid**: *[NewType](new_type.md#newtype)‹string, "Uuid"›*

*Defined in [packages/uuid/source/types.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/uuid/source/types.ts#L3)*

___

###  UuidSeed

Ƭ **UuidSeed**: *keyof [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]*

*Defined in [packages/uuid/source/types.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/uuid/source/types.ts#L5)*

## Variables

### `Const` VALID_UUID_LENGTH

• **VALID_UUID_LENGTH**: *16* = 16

*Defined in [packages/uuid/source/randomUuidSeed/constants.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/uuid/source/randomUuidSeed/constants.ts#L1)*

___

### `Const` isBrowser

• **isBrowser**: *boolean* = typeof crypto !== 'undefined'

*Defined in [packages/uuid/source/randomUuidSeed/constants.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/uuid/source/randomUuidSeed/constants.ts#L3)*

___

### `Const` isUuid

• **isUuid**: *function* = isNewType((value: string): value is Uuid =>
  uuidPattern.test(value),
)

*Defined in [packages/uuid/source/isUuid.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/uuid/source/isUuid.ts#L10)*

Returns `true` if a string is a UUID.

**`name`** isUuid(value: string): value is Uuid

#### Type declaration:

▸ (`value`: string): *value is Uuid*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

___

### `Const` uuidPattern

• **uuidPattern**: *RegExp‹›* = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/

*Defined in [packages/uuid/source/isUuid.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/uuid/source/isUuid.ts#L4)*

## Functions

###  uuid

▸ **uuid**(): *Effects‹[UuidEnv](../interfaces/uuid.uuidenv.md), [Uuid](uuid.md#uuid)›*

*Defined in [packages/uuid/source/uuid.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/uuid/source/uuid.ts#L6)*

Create a random uuid

**Returns:** *Effects‹[UuidEnv](../interfaces/uuid.uuidenv.md), [Uuid](uuid.md#uuid)›*

___

###  uuid4

▸ **uuid4**(`seed`: [UuidSeed](uuid.md#uuidseed)): *[Uuid](uuid.md#uuid)*

*Defined in [packages/uuid/source/uuid4/uuid4.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/uuid/source/uuid4/uuid4.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`seed` | [UuidSeed](uuid.md#uuidseed) |

**Returns:** *[Uuid](uuid.md#uuid)*

___

###  withUuid

▸ **withUuid**<**A**>(`f`: function): *Effects‹[UuidEnv](../interfaces/uuid.uuidenv.md), A›*

*Defined in [packages/uuid/source/withUuid.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/uuid/source/withUuid.ts#L5)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **f**: *function*

▸ (`uuid`: [Uuid](uuid.md#uuid)): *A*

**Parameters:**

Name | Type |
------ | ------ |
`uuid` | [Uuid](uuid.md#uuid) |

**Returns:** *Effects‹[UuidEnv](../interfaces/uuid.uuidenv.md), A›*
