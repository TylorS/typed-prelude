[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [logic](../modules/logic.md) › [IfElseFn](logic.ifelsefn.md)

# Interface: IfElseFn

## Hierarchy

* **IfElseFn**

## Callable

▸ <**A**, **B**, **C**>(`predicate`: [Is](../modules/lambda.md#is)‹B›, `thenFn`: [Arity1](../modules/lambda.md#arity1)‹B, C›, `elseFn`: [Arity1](../modules/lambda.md#arity1)‹A, C›, `value`: A): *C*

*Defined in [packages/logic/source/ifElse.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/ifElse.ts#L26)*

**Type parameters:**

▪ **A**

▪ **B**: *A*

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Is](../modules/lambda.md#is)‹B› |
`thenFn` | [Arity1](../modules/lambda.md#arity1)‹B, C› |
`elseFn` | [Arity1](../modules/lambda.md#arity1)‹A, C› |
`value` | A |

**Returns:** *C*

▸ <**A**, **B**>(`predicate`: [Predicate](../modules/lambda.md#predicate)‹A›, `thenFn`: [Arity1](../modules/lambda.md#arity1)‹A, B›, `elseFn`: [Arity1](../modules/lambda.md#arity1)‹A, B›, `value`: A): *B*

*Defined in [packages/logic/source/ifElse.ts:27](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/ifElse.ts#L27)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](../modules/lambda.md#predicate)‹A› |
`thenFn` | [Arity1](../modules/lambda.md#arity1)‹A, B› |
`elseFn` | [Arity1](../modules/lambda.md#arity1)‹A, B› |
`value` | A |

**Returns:** *B*

▸ <**A**, **B**, **C**>(`predicate`: [Is](../modules/lambda.md#is)‹B›, `thenFn`: [Arity1](../modules/lambda.md#arity1)‹B, C›, `elseFn`: [Arity1](../modules/lambda.md#arity1)‹A, C›): *function*

*Defined in [packages/logic/source/ifElse.ts:28](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/ifElse.ts#L28)*

**Type parameters:**

▪ **A**

▪ **B**: *A*

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Is](../modules/lambda.md#is)‹B› |
`thenFn` | [Arity1](../modules/lambda.md#arity1)‹B, C› |
`elseFn` | [Arity1](../modules/lambda.md#arity1)‹A, C› |

**Returns:** *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ <**A**, **B**>(`predicate`: [Predicate](../modules/lambda.md#predicate)‹A›, `thenFn`: [Arity1](../modules/lambda.md#arity1)‹A, B›, `elseFn`: [Arity1](../modules/lambda.md#arity1)‹A, B›): *function*

*Defined in [packages/logic/source/ifElse.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/ifElse.ts#L30)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](../modules/lambda.md#predicate)‹A› |
`thenFn` | [Arity1](../modules/lambda.md#arity1)‹A, B› |
`elseFn` | [Arity1](../modules/lambda.md#arity1)‹A, B› |

**Returns:** *function*

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ <**A**, **B**, **C**>(`predicate`: [Is](../modules/lambda.md#is)‹B›, `thenFn`: [Arity1](../modules/lambda.md#arity1)‹B, C›): *function*

*Defined in [packages/logic/source/ifElse.ts:31](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/ifElse.ts#L31)*

**Type parameters:**

▪ **A**

▪ **B**: *A*

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Is](../modules/lambda.md#is)‹B› |
`thenFn` | [Arity1](../modules/lambda.md#arity1)‹B, C› |

**Returns:** *function*

▸ (`elseFn`: [Arity1](../modules/lambda.md#arity1)‹A, C›, `value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`elseFn` | [Arity1](../modules/lambda.md#arity1)‹A, C› |
`value` | A |

▸ (`elseFn`: [Arity1](../modules/lambda.md#arity1)‹A, C›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`elseFn` | [Arity1](../modules/lambda.md#arity1)‹A, C› |

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ <**A**, **B**>(`predicate`: [Predicate](../modules/lambda.md#predicate)‹A›, `thenFn`: [Arity1](../modules/lambda.md#arity1)‹A, B›): *function*

*Defined in [packages/logic/source/ifElse.ts:36](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/ifElse.ts#L36)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](../modules/lambda.md#predicate)‹A› |
`thenFn` | [Arity1](../modules/lambda.md#arity1)‹A, B› |

**Returns:** *function*

▸ (`elseFn`: [Arity1](../modules/lambda.md#arity1)‹A, B›, `value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`elseFn` | [Arity1](../modules/lambda.md#arity1)‹A, B› |
`value` | A |

▸ (`elseFn`: [Arity1](../modules/lambda.md#arity1)‹A, B›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`elseFn` | [Arity1](../modules/lambda.md#arity1)‹A, B› |

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ <**A**, **B**>(`predicate`: [Is](../modules/lambda.md#is)‹B›): *function*

*Defined in [packages/logic/source/ifElse.ts:40](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/ifElse.ts#L40)*

**Type parameters:**

▪ **A**

▪ **B**: *A*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Is](../modules/lambda.md#is)‹B› |

**Returns:** *function*

▸ <**C**>(`thenFn`: [Arity1](../modules/lambda.md#arity1)‹B, C›, `elseFn`: [Arity1](../modules/lambda.md#arity1)‹A, C›, `value`: A): *C*

**Type parameters:**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`thenFn` | [Arity1](../modules/lambda.md#arity1)‹B, C› |
`elseFn` | [Arity1](../modules/lambda.md#arity1)‹A, C› |
`value` | A |

▸ <**C**>(`thenFn`: [Arity1](../modules/lambda.md#arity1)‹B, C›, `elseFn`: [Arity1](../modules/lambda.md#arity1)‹A, C›): *function*

**Type parameters:**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`thenFn` | [Arity1](../modules/lambda.md#arity1)‹B, C› |
`elseFn` | [Arity1](../modules/lambda.md#arity1)‹A, C› |

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ <**C**>(`thenFn`: [Arity1](../modules/lambda.md#arity1)‹B, C›): *function*

**Type parameters:**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`thenFn` | [Arity1](../modules/lambda.md#arity1)‹B, C› |

▸ (`elseFn`: [Arity1](../modules/lambda.md#arity1)‹A, C›, `value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`elseFn` | [Arity1](../modules/lambda.md#arity1)‹A, C› |
`value` | A |

▸ (`elseFn`: [Arity1](../modules/lambda.md#arity1)‹A, C›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`elseFn` | [Arity1](../modules/lambda.md#arity1)‹A, C› |

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ <**A**>(`predicate`: [Predicate](../modules/lambda.md#predicate)‹A›): *function*

*Defined in [packages/logic/source/ifElse.ts:49](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/logic/source/ifElse.ts#L49)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](../modules/lambda.md#predicate)‹A› |

**Returns:** *function*

▸ <**B**>(`thenFn`: [Arity1](../modules/lambda.md#arity1)‹A, B›, `elseFn`: [Arity1](../modules/lambda.md#arity1)‹A, B›, `value`: A): *B*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`thenFn` | [Arity1](../modules/lambda.md#arity1)‹A, B› |
`elseFn` | [Arity1](../modules/lambda.md#arity1)‹A, B› |
`value` | A |

▸ <**B**>(`thenFn`: [Arity1](../modules/lambda.md#arity1)‹A, B›, `elseFn`: [Arity1](../modules/lambda.md#arity1)‹A, B›): *function*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`thenFn` | [Arity1](../modules/lambda.md#arity1)‹A, B› |
`elseFn` | [Arity1](../modules/lambda.md#arity1)‹A, B› |

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ <**B**>(`thenFn`: [Arity1](../modules/lambda.md#arity1)‹A, B›): *function*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`thenFn` | [Arity1](../modules/lambda.md#arity1)‹A, B› |

▸ (`elseFn`: [Arity1](../modules/lambda.md#arity1)‹A, B›, `value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`elseFn` | [Arity1](../modules/lambda.md#arity1)‹A, B› |
`value` | A |

▸ (`elseFn`: [Arity1](../modules/lambda.md#arity1)‹A, B›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`elseFn` | [Arity1](../modules/lambda.md#arity1)‹A, B› |

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
