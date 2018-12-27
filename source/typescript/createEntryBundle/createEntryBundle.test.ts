import { describe, given, it } from '@typed/test'
import { join } from 'path'
import Project from 'ts-simple-ast'
import { adjustTsConfig } from '../common/adjustTsConfig'
import { generateDynamicImportPaths } from '../common/generateDynamicImportPaths'
import { createImportRemapTransformer } from '../createImportRemapTransformer'
import { emitResults } from '../emitResults'
import { findSourceFileDependencies } from '../findSourceFileDependencies'
import { findTsConfig } from '../findTsConfig'
import { createEntryBundle } from './createEntryBundle'

const testFixtures = join(__dirname, 'test-fixtures')

export const test = describe(`createEntryBundle`, [
  given(`some stuff`, [
    it(`returns a bundle`, ({ equal }) => {
      const math = join(testFixtures, 'math.ts')
      const tsConfig = adjustTsConfig(findTsConfig({ directory: testFixtures }))
      const project = new Project({
        compilerOptions: { ...tsConfig.compilerOptions, sourceMap: true },
      })
      const sourceFile = project.addExistingSourceFile(math)
      const { dependencyMap, moduleIds } = findSourceFileDependencies({ sourceFile, project })
      const dynamicImportPaths = generateDynamicImportPaths({ dependencyMap, publicPath: '/' })
      const results = emitResults({
        directory: testFixtures,
        sourceFiles: Array.from(dependencyMap.values()).map(x => x.sourceFile),
        project,
        transformers: {
          before: [createImportRemapTransformer({ tsConfig, moduleIds })],
        },
      })
      const { source } = createEntryBundle({
        fileName: 'whatever.js',
        results,
        moduleIds,
        dynamicImportPaths,
      })

      equal(
        `(function() {
var urlToModuleId = {

}
var installedModules = {};
var subscriptions = {}
function addSubscription(moduleId, cb) {
  var isFirstSubscription = false;

  if (!subscriptions[moduleId]) {
    subscriptions[moduleId] = []
    isFirstSubscription = true
  }

  subscriptions[moduleId].push(cb)

  return isFirstSubscription
}
function jsonpCallback() {
  for (let i = 0; i < arguments.length; ++i) {
    var arg = arguments[i]
    var id = arg[1]

    if (!installedModules[id]) {
      installModule(arg[0], id)
    }

    var _exports = installedModules[id]

    if (subscriptions[id]) {
      subscriptions[id].forEach(function subscriptionCall(cb) {
        cb(_exports)
      })

      delete subscriptions[id]
    }
  }
}

var TYPED_JSONP = window.typedJsonp = (window.typedJsonp || []);
var jsonpArray = TYPED_JSONP.slice();
var TYPED_JSONP_PUSH = TYPED_JSONP.push.bind(TYPED_JSONP);
TYPED_JSONP.push = jsonpCallback
for(var i = 0; i < jsonpArray.length; i++) { jsonpCallback(jsonpArray[i]); }

var modules = {
0: function (require, module, exports, __typedRequire) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add_1 = require("1");
var divide_1 = require("2");
var multiply_1 = require("3");
var subtract_1 = require("4");
console.log(add_1.add(1, subtract_1.subtract(2, multiply_1.multiply(30, divide_1.divide(2, 33)))));
//# sourceMappingURL=math.js.map
},1: function (require, module, exports, __typedRequire) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = function (x, y) { return x + y; };
//# sourceMappingURL=add.js.map
},2: function (require, module, exports, __typedRequire) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = function (x, y) { return x / y; };
//# sourceMappingURL=divide.js.map
},3: function (require, module, exports, __typedRequire) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = function (x, y) { return x * y; };
//# sourceMappingURL=multiply.js.map
},4: function (require, module, exports, __typedRequire) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = function (x, y) { return x - y; };
//# sourceMappingURL=subtract.js.map
}
}
function typedRequire(moduleId) {
  var installedModule = installedModules[moduleId]

  return installedModule || installModule(modules[moduleId], moduleId)
}
function importModule(url) {
  var moduleId = urlToModuleId[url]

  if (installedModules[moduleId]) {
    return Promise.resolve(installedModules[moduleId])
  }

  var head = document.head;

  return new Promise(function moduleImport(resolve, reject) {
    var isFirst = addSubscription(moduleId, resolve)

    if (!isFirst) {
      return
    }

    var script = document.createElement('script')

    function cleanup() {
      script.onload = null
      script.removeEventListener('error', error);

      head.removeChild(script)
    }

    function error(error) {
      cleanup()
      reject(error)
    }

    head.appendChild(script)
    script.onload = cleanup
    script.addEventListener('error', error);
    script.src = url
  })
}
function installModule(factory, moduleId) {
  var _module = { id: moduleId, exports: {} }
  factory(typedRequire, _module, _module.exports, importModule)

  installedModules[moduleId] = _module.exports

  return _module.exports
}


typedRequire("0")


}())`,
        source.trim(),
      )
    }),
  ]),
])
