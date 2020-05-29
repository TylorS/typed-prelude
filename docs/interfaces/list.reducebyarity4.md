[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [list](../modules/list.md) › [ReduceByArity4](list.reducebyarity4.md)

# Interface: ReduceByArity4

## Hierarchy

* **ReduceByArity4**

## Callable

▸ <**A**, **B**>(`f`: function, `seed`: B, `by`: function, `list`: ReadonlyArray‹A›): *object*

*Defined in [packages/list/source/reduceBy/index.ts:32](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/reduceBy/index.ts#L32)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`acc`: B, `value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | B |
`value` | A |

▪ **seed**: *B*

▪ **by**: *function*

▸ (`a`: A): *PropertyKey | number*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **list**: *ReadonlyArray‹A›*

**Returns:** *object*

* \[ **key**: *string*\]: B

▸ <**A**, **B**>(`f`: function): *[ReduceByArity3](list.reducebyarity3.md)‹A, B›*

*Defined in [packages/list/source/reduceBy/index.ts:40](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/reduceBy/index.ts#L40)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`acc`: B, `value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | B |
`value` | A |

**Returns:** *[ReduceByArity3](list.reducebyarity3.md)‹A, B›*

▸ <**A**, **B**>(`f`: function, `seed`: B): *[ReduceByArity2](list.reducebyarity2.md)‹A, B›*

*Defined in [packages/list/source/reduceBy/index.ts:42](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/reduceBy/index.ts#L42)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`acc`: B, `value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | B |
`value` | A |

▪ **seed**: *B*

**Returns:** *[ReduceByArity2](list.reducebyarity2.md)‹A, B›*

▸ <**A**, **B**>(`f`: function, `seed`: B, `by`: function): *[ReduceByArity1](../modules/list.md#reducebyarity1)‹A, B›*

*Defined in [packages/list/source/reduceBy/index.ts:43](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/reduceBy/index.ts#L43)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`acc`: B, `value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | B |
`value` | A |

▪ **seed**: *B*

▪ **by**: *function*

▸ (`a`: A): *PropertyKey*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *[ReduceByArity1](../modules/list.md#reducebyarity1)‹A, B›*
