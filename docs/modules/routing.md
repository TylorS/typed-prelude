[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [routing](routing.md)

# Package: routing

# @typed/routing

> Useful abstractions for routing

## Index

### Interfaces

* [Route](../interfaces/routing.route.md)

### Type aliases

* [RouteOptions](routing.md#routeoptions)
* [RouteParams](routing.md#routeparams)
* [RouteValue](routing.md#routevalue)

### Variables

* [combineRoutes](routing.md#const-combineroutes)
* [map](routing.md#const-map)
* [nestMatch](routing.md#const-nestmatch)
* [stripRouteFromPath](routing.md#const-striproutefrompath)

### Functions

* [__combineRoutes](routing.md#__combineroutes)
* [__map](routing.md#__map)
* [__nestMatch](routing.md#__nestmatch)
* [basePathFromRoute](routing.md#basepathfromroute)
* [createRoute](routing.md#createroute)

## Type aliases

###  RouteOptions

Ƭ **RouteOptions**: *object*

*Defined in [packages/routing/source/createRoute.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/routing/source/createRoute.ts#L6)*

#### Type declaration:

* **decode**? : *undefined | function*

* **encode**? : *undefined | function*

* **exact**? : *undefined | false | true*

___

###  RouteParams

Ƭ **RouteParams**: *A extends Route<infer R> ? R : never*

*Defined in [packages/routing/source/types.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/routing/source/types.ts#L11)*

___

###  RouteValue

Ƭ **RouteValue**: *A extends Route<any, infer R> ? R : never*

*Defined in [packages/routing/source/types.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/routing/source/types.ts#L12)*

## Variables

### `Const` combineRoutes

• **combineRoutes**: *function* = curry(__combineRoutes) as {
  <A extends Record<string, string>, B extends Record<string, string>>(
    routeA: Route<A>,
    routeB: Route<B>,
  ): Route<A & B>
  <A extends Record<string, string>>(routeA: Route<A>): <B extends Record<string, string>>(
    routeB: Route<B>,
  ) => Route<A & B>
}

*Defined in [packages/routing/source/combineRoutes.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/routing/source/combineRoutes.ts#L6)*

#### Type declaration:

▸ <**A**, **B**>(`routeA`: [Route](../interfaces/routing.route.md)‹A›, `routeB`: [Route](../interfaces/routing.route.md)‹B›): *[Route](../interfaces/routing.route.md)‹A & B›*

**Type parameters:**

▪ **A**: *[Record](io.md#const-record)‹string, string›*

▪ **B**: *[Record](io.md#const-record)‹string, string›*

**Parameters:**

Name | Type |
------ | ------ |
`routeA` | [Route](../interfaces/routing.route.md)‹A› |
`routeB` | [Route](../interfaces/routing.route.md)‹B› |

▸ <**A**>(`routeA`: [Route](../interfaces/routing.route.md)‹A›): *function*

**Type parameters:**

▪ **A**: *[Record](io.md#const-record)‹string, string›*

**Parameters:**

Name | Type |
------ | ------ |
`routeA` | [Route](../interfaces/routing.route.md)‹A› |

▸ <**B**>(`routeB`: [Route](../interfaces/routing.route.md)‹B›): *[Route](../interfaces/routing.route.md)‹A & B›*

**Type parameters:**

▪ **B**: *[Record](io.md#const-record)‹string, string›*

**Parameters:**

Name | Type |
------ | ------ |
`routeB` | [Route](../interfaces/routing.route.md)‹B› |

___

### `Const` map

• **map**: *function* = curry(__map) as {
  <A extends Record<string, string>, B, C>(fn: Arity1<B, C>, route: Route<A, B>): Route<A, C>
  <B, C>(fn: Arity1<B, C>): <A extends Record<string, string>>(route: Route<A, B>) => Route<A, C>
}

*Defined in [packages/routing/source/map.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/routing/source/map.ts#L5)*

#### Type declaration:

▸ <**A**, **B**, **C**>(`fn`: [Arity1](lambda.md#arity1)‹B, C›, `route`: [Route](../interfaces/routing.route.md)‹A, B›): *[Route](../interfaces/routing.route.md)‹A, C›*

**Type parameters:**

▪ **A**: *[Record](io.md#const-record)‹string, string›*

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹B, C› |
`route` | [Route](../interfaces/routing.route.md)‹A, B› |

▸ <**B**, **C**>(`fn`: [Arity1](lambda.md#arity1)‹B, C›): *function*

**Type parameters:**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹B, C› |

▸ <**A**>(`route`: [Route](../interfaces/routing.route.md)‹A, B›): *[Route](../interfaces/routing.route.md)‹A, C›*

**Type parameters:**

▪ **A**: *[Record](io.md#const-record)‹string, string›*

**Parameters:**

Name | Type |
------ | ------ |
`route` | [Route](../interfaces/routing.route.md)‹A, B› |

___

### `Const` nestMatch

• **nestMatch**: *function* = curry(__nestMatch) as {
  <A, B, C>(route: Route<A, B>, match: Match<Path, C>): Match<Path, readonly [B, C]>
  <A, B>(route: Route<A, B>): <C>(match: Match<Path, C>) => Match<Path, readonly [B, C]>
}

*Defined in [packages/routing/source/nestMatch.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/routing/source/nestMatch.ts#L8)*

#### Type declaration:

▸ <**A**, **B**, **C**>(`route`: [Route](../interfaces/routing.route.md)‹A, B›, `match`: Match‹[Path](history.md#path), C›): *Match‹[Path](history.md#path), keyof [B, C]›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`route` | [Route](../interfaces/routing.route.md)‹A, B› |
`match` | Match‹[Path](history.md#path), C› |

▸ <**A**, **B**>(`route`: [Route](../interfaces/routing.route.md)‹A, B›): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`route` | [Route](../interfaces/routing.route.md)‹A, B› |

▸ <**C**>(`match`: Match‹[Path](history.md#path), C›): *Match‹[Path](history.md#path), keyof [B, C]›*

**Type parameters:**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`match` | Match‹[Path](history.md#path), C› |

___

### `Const` stripRouteFromPath

• **stripRouteFromPath**: *function* = curry(function stripRoute(route: Route<any>, path: Path): Path {
  return pathJoin([path.replace(basePathFromRoute(path, route), '')])
})

*Defined in [packages/routing/source/stripRouteFromPath.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/routing/source/stripRouteFromPath.ts#L6)*

#### Type declaration:

▸ (`route`: [Route](../interfaces/routing.route.md)‹any›, `path`: [Path](history.md#path)): *[Path](history.md#path)*

**Parameters:**

Name | Type |
------ | ------ |
`route` | [Route](../interfaces/routing.route.md)‹any› |
`path` | [Path](history.md#path) |

▸ (`route`: [Route](../interfaces/routing.route.md)‹any›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`route` | [Route](../interfaces/routing.route.md)‹any› |

▸ (`path`: [Path](history.md#path)): *[Path](history.md#path)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](history.md#path) |

## Functions

###  __combineRoutes

▸ **__combineRoutes**<**A**, **B**>(`routeA`: [Route](../interfaces/routing.route.md)‹A›, `routeB`: [Route](../interfaces/routing.route.md)‹B›): *[Route](../interfaces/routing.route.md)‹A & B›*

*Defined in [packages/routing/source/combineRoutes.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/routing/source/combineRoutes.ts#L16)*

**Type parameters:**

▪ **A**: *[Record](io.md#const-record)‹string, string›*

▪ **B**: *[Record](io.md#const-record)‹string, string›*

**Parameters:**

Name | Type |
------ | ------ |
`routeA` | [Route](../interfaces/routing.route.md)‹A› |
`routeB` | [Route](../interfaces/routing.route.md)‹B› |

**Returns:** *[Route](../interfaces/routing.route.md)‹A & B›*

___

###  __map

▸ **__map**<**A**, **B**, **C**>(`fn`: [Arity1](lambda.md#arity1)‹B, C›, `route`: [Route](../interfaces/routing.route.md)‹A, B›): *[Route](../interfaces/routing.route.md)‹A, C›*

*Defined in [packages/routing/source/map.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/routing/source/map.ts#L10)*

**Type parameters:**

▪ **A**: *[Record](io.md#const-record)‹string, string›*

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹B, C› |
`route` | [Route](../interfaces/routing.route.md)‹A, B› |

**Returns:** *[Route](../interfaces/routing.route.md)‹A, C›*

___

###  __nestMatch

▸ **__nestMatch**<**A**, **B**, **C**>(`route`: [Route](../interfaces/routing.route.md)‹A, B›, `match`: Match‹[Path](history.md#path), C›): *Match‹[Path](history.md#path), keyof [B, C]›*

*Defined in [packages/routing/source/nestMatch.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/routing/source/nestMatch.ts#L16)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`route` | [Route](../interfaces/routing.route.md)‹A, B› |
`match` | Match‹[Path](history.md#path), C› |

**Returns:** *Match‹[Path](history.md#path), keyof [B, C]›*

___

###  basePathFromRoute

▸ **basePathFromRoute**<**A**>(`path`: [Path](history.md#path), `__namedParameters`: object): *[Path](history.md#path)*

*Defined in [packages/routing/source/basePathFromRoute.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/routing/source/basePathFromRoute.ts#L5)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **path**: *[Path](history.md#path)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`createPath` | function |
`match` | Match‹string & object, A› |

**Returns:** *[Path](history.md#path)*

___

###  createRoute

▸ **createRoute**<**A**>(`path`: string, `__namedParameters`: object): *[Route](../interfaces/routing.route.md)‹A›*

*Defined in [packages/routing/source/createRoute.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/routing/source/createRoute.ts#L12)*

**Type parameters:**

▪ **A**: *[Record](io.md#const-record)‹string, string›*

**Parameters:**

▪ **path**: *string*

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`decode` | function | decodeURIComponent |
`encode` | function | encodeURIComponent |
`exact` | boolean | false |

**Returns:** *[Route](../interfaces/routing.route.md)‹A›*
