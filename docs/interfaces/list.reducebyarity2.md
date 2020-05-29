[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [list](../modules/list.md) › [ReduceByArity2](list.reducebyarity2.md)

# Interface: ReduceByArity2 <**A, B**>

## Type parameters

▪ **A**

▪ **B**

## Hierarchy

* **ReduceByArity2**

## Callable

▸ (`by`: function, `list`: ReadonlyArray‹A›): *object*

*Defined in [packages/list/source/reduceBy/index.ts:55](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/reduceBy/index.ts#L55)*

**Parameters:**

▪ **by**: *function*

▸ (`a`: A): *PropertyKey | number*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **list**: *ReadonlyArray‹A›*

**Returns:** *object*

* \[ **key**: *string*\]: B

▸ (`by`: function): *[ReduceByArity1](../modules/list.md#reducebyarity1)‹A, B›*

*Defined in [packages/list/source/reduceBy/index.ts:56](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/reduceBy/index.ts#L56)*

**Parameters:**

▪ **by**: *function*

▸ (`a`: A): *PropertyKey | number*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *[ReduceByArity1](../modules/list.md#reducebyarity1)‹A, B›*
