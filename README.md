# Typed [![CircleCI](https://circleci.com/gh/TylorS/typed-prelude/tree/master.svg?style=svg)](https://circleci.com/gh/TylorS/typed-prelude/tree/master)

> Reliable software for browsers & Node. Designed for TypeScript and progressive web applications.

Typed is TypeScript toolkit composed of many à-la-carte single purposed libraries to help build applications
that work in both browsers & Node. With few [documented exceptions](#exceptions), all the Typed libraries have no non-Typed dependencies,
are side-effect free, and provide a tree-shakable API around functions.

Only modern environments are supported out of the box. The last 2 major versions of Chrome, Firefox, Safari, and Edge are supported, as well as the lastest stable and long-term-support releases for Node.

## Packages

These Typed Packages have no non-typed dependencies.

> NOTE: All packages sizes include ALL (Node & Browser!) dependencies and were calculated using [bundlephobia.com](https://bundlephobia.com). 

#### AsyncIterable ![Minified](https://badgen.net/bundlephobia/min/@typed/asynciterable) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/asynciterable)

#### Common ![Minified](https://badgen.net/bundlephobia/min/@typed/common) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/common)

#### Disposable ![Minified](https://badgen.net/bundlephobia/min/@typed/disposable) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/disposable)

#### Either ![Minified](https://badgen.net/bundlephobia/min/@typed/either) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/either)

#### Env ![Minified](https://badgen.net/bundlephobia/min/@typed/env) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/env)

#### History ![Minified](https://badgen.net/bundlephobia/min/@typed/history) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/history)

#### Hooks ![Minified](https://badgen.net/bundlephobia/min/@typed/hooks) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/hooks)

#### HTTP ![Minified](https://badgen.net/bundlephobia/min/@typed/http) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/http)

#### Iterable ![Minified](https://badgen.net/bundlephobia/min/@typed/iterable) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/iterable)

#### Lambda ![Minified](https://badgen.net/bundlephobia/min/@typed/lambda) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/lambda)

#### List ![Minified](https://badgen.net/bundlephobia/min/@typed/list) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/list)

#### Logger ![Minified](https://badgen.net/bundlephobia/min/@typed/logger) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/logger)

#### Logic ![Minified](https://badgen.net/bundlephobia/min/@typed/logic) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/logic)

#### Map ![Minified](https://badgen.net/bundlephobia/min/@typed/map) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/map)

#### Math ![Minified](https://badgen.net/bundlephobia/min/@typed/math) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/math)

#### Maybe ![Minified](https://badgen.net/bundlephobia/min/@typed/maybe) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/maybe)

#### NewType ![Minified](https://badgen.net/bundlephobia/min/@typed/new-type) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/new-type)

#### Objects ![Minified](https://badgen.net/bundlephobia/min/@typed/objects) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/objects)

#### Promises ![Minified](https://badgen.net/bundlephobia/min/@typed/promises) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/promises)

#### RemoteData ![Minified](https://badgen.net/bundlephobia/min/@typed/remote-data) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/remote-data)

#### Routing ![Minified](https://badgen.net/bundlephobia/min/@typed/routing) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/routing)

#### Set ![Minified](https://badgen.net/bundlephobia/min/@typed/set) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/set)

#### Storage ![Minified](https://badgen.net/bundlephobia/min/@typed/storage) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/storage)

#### Strings ![Minified](https://badgen.net/bundlephobia/min/@typed/strings) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/strings)

#### Subscription ![Minified](https://badgen.net/bundlephobia/min/@typed/subscription) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/subscription)

#### Timer ![Minified](https://badgen.net/bundlephobia/min/@typed/timer) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/timer)

#### Tuple ![Minified](https://badgen.net/bundlephobia/min/@typed/tuple) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/tuple)

#### UUID ![Minified](https://badgen.net/bundlephobia/min/@typed/uuid) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/uuid)


### Exceptions

These Typed Packages have a few non-Typed dependencies which meet the following criteria:

- Well Tested
- Distribute with `module` in their `package.json`
- Have well-maintained types either in original repository or `@types/*`

#### DOM ![Minified](https://badgen.net/bundlephobia/min/@typed/dom) ![MinZip](https://badgen.net/bundlephobia/minzip/@typed/dom)

> Peer dependency on [basichtml](https://github.com/WebReflection/basicHTML) for node support. Adds 86.1KB Minified / 28.5KB Gzipped.

