[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [list](../modules/list.md) › [ReduceByArity3](list.reducebyarity3.md)

# Interface: ReduceByArity3 <**A, B**>

## Type parameters

▪ **A**

▪ **B**

## Hierarchy

* **ReduceByArity3**

## Callable

▸ (`seed`: B, `by`: function, `list`: ReadonlyArray‹A›): *object*

*Defined in [packages/list/source/reduceBy/index.ts:47](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/reduceBy/index.ts#L47)*

**Parameters:**

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

▸ (`seed`: B, `by`: function): *[ReduceByArity1](../modules/list.md#reducebyarity1)‹A, B›*

*Defined in [packages/list/source/reduceBy/index.ts:50](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/reduceBy/index.ts#L50)*

**Parameters:**

▪ **seed**: *B*

▪ **by**: *function*

▸ (`a`: A): *PropertyKey | number*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *[ReduceByArity1](../modules/list.md#reducebyarity1)‹A, B›*

▸ (`seed`: B): *[ReduceByArity2](list.reducebyarity2.md)‹A, B›*

*Defined in [packages/list/source/reduceBy/index.ts:51](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/reduceBy/index.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`seed` | B |

**Returns:** *[ReduceByArity2](list.reducebyarity2.md)‹A, B›*
