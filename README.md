# Typed [![CircleCI](https://circleci.com/gh/TylorS/typed-prelude/tree/master.svg?style=svg)](https://circleci.com/gh/TylorS/typed-prelude/tree/master) [![Total alerts](https://img.shields.io/lgtm/alerts/g/TylorS/typed-prelude.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/TylorS/typed-prelude/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/TylorS/typed-prelude.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/TylorS/typed-prelude/context:javascript) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)


> Reliable, Standards-oriented software for browsers & Node. Designed for TypeScript and progressive web applications.

Typed is a TypeScript toolkit composed of many à-la-carte single purposed libraries to help build applications
that work in both browsers & Node. All Typed libraries are side-effect free, and provides 
a tree-shakable API around (mostly) curried functions and expressive data-types. While many of these libraries individually should support many *different* use-cases, the general purpose of the whole is to streamline PWA development in a way that can be thoroughly tested and easily server rendered.

Only modern environments are supported out of the box. The last 2 major versions of Chrome, Firefox, Safari, and Edge are 
supported, as well as the lastest stable and long-term-support releases for Node. Lets keep the web improving.

## Packages

Right now this package is under very active development. Take a look inside the packages folder if you're interested in more or open an issue if you'd like. There's rather sparse documentation at the moment, but a large amount of these packages are being used over a millions of times a month.

## Helpful information

Typed is designed to work in modern browsers and Node. This means that there are some code paths that are not used in one or the other. This is more important when making bundles for the browser as every byte parsed is impacting your time to load. To get around this you can use a plugin for your particular bundler to replace some of the conditionals used with `true/false` values to ensure unused code paths are removed.

| Value to replace | Browser | Node | Packages |
| ----------- | ------------------- | ---------------- | -------- |
| `typeof window !== 'undefined' && typeof document !== 'undefined'` | `true` | `false` | `dom`, `env`, `history`, `http`, `timer` |
| `typeof crypto !== 'undefined'` | `true` | `false` | `uuid` |
| `typeof process !== 'undefined'` | `false` | `true` | `dom` |

Here's some examples of a replace plugin

| Bundler | Replace Plugin |
| ------- | -------------- |
| Rollup | https://github.com/rollup/rollup-plugin-replace |
| Webpack | https://www.npmjs.com/package/webpack-plugin-replace |


## License [![Licence](https://licensezero.com/ids/52afd698-c5c7-4034-b229-ef1243d4caeb/badge.svg)](https://licensezero.com/ids/52afd698-c5c7-4034-b229-ef1243d4caeb/)

These set of packages are released freely for all OSS under the [`Parity Public License 6.0.0`](./LICENSE). Feel free to visit [License Zero](https://licensezero.com/ids/52afd698-c5c7-4034-b229-ef1243d4caeb) for info on how you or your company can obtain a license to distribute this software in close-sourced software.
