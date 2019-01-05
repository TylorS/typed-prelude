import { join } from 'path'
import { CodeNode, SourceListMap } from 'source-list-map'
import { ArgsOf } from '../../lambda'
import { createModulesObject } from '../createModulesObject'
import { MemoryResult, SourceAndSourceMap } from '../types'

const IIFE_OPEN = new CodeNode(`(function() {`)
const IIFE_CLOSE = new CodeNode(`}())`)
const NEW_LINE = new CodeNode(`\n`)
const INSTALLED_MODULES = new CodeNode(`var installedModules = {};`)
const SUBSCRIPTIONS = new CodeNode(`var subscriptions = {};`)

const ADD_SUBSCRIPTION = new CodeNode(`function addSubscription(moduleId, cb) {
  var isFirstSubscription = false;

  if (!subscriptions[moduleId]) {
    subscriptions[moduleId] = [];
    isFirstSubscription = true;
  }

  subscriptions[moduleId].push(cb);

  return isFirstSubscription;
}`)

const TYPED_REQUIRE = new CodeNode(`function typedRequire(moduleId) {
  var installedModule = installedModules[moduleId];

  return installedModule || installModule(modules[moduleId], moduleId);
}`)

const INSTALL_MODULE = new CodeNode(`function installModule(factory, moduleId) {
  var _module = { id: moduleId, exports: {} };
  factory(typedRequire, _module, _module.exports, importModule);

  installedModules[moduleId] = _module.exports;

  return _module.exports;
}`)

const IMPORT_MODULE = new CodeNode(`function importModule(url) {
  var moduleId = urlToModuleId[url];

  if (installedModules[moduleId]) {
    return Promise.resolve(installedModules[moduleId]);
  }

  if (modules[moduleId]) {
    return Promise.resolve(installModule(modules[moduleId], moduleId));
  }

  var head = document.head;

  return new Promise(function moduleImport(resolve, reject) {
    var isFirst = addSubscription(moduleId, resolve);

    if (!isFirst) {
      return;
    }

    var script = document.createElement('script');

    function cleanup() {
      script.onload = null;
      script.removeEventListener('error', error);

      head.removeChild(script);
    }

    function error(error) {
      cleanup();
      reject(error);
    }

    head.appendChild(script);
    script.onload = cleanup;
    script.addEventListener('error', error);
    script.src = url;
  })
}`)

const JSONP_CALLBACK = new CodeNode(`function jsonpCallback() {
  for (let i = 0; i < arguments.length; ++i) {
    var arg = arguments[i];
    var id = arg[1];

    if (!installedModules[id]) {
      installModule(arg[0], id);
    }

    var _exports = installedModules[id];

    if (subscriptions[id]) {
      subscriptions[id].forEach(function subscriptionCall(cb) {
        cb(_exports);
      })

      delete subscriptions[id];
    }
  }
}`)

const JSONP_SETUP = new CodeNode(`
var TYPED_JSONP = window.typedJsonp = (window.typedJsonp || []);
var jsonpArray = TYPED_JSONP.slice();
var TYPED_JSONP_PUSH = TYPED_JSONP.push.bind(TYPED_JSONP);
TYPED_JSONP.push = jsonpCallback;
for(var i = 0; i < jsonpArray.length; i++) { jsonpCallback(jsonpArray[i]); }
`)

const START_APP = new CodeNode(`typedRequire("0");`)

export type CreateEntryBundleOptions = {
  directory: string
  fileName: string
  results: MemoryResult[]
  moduleIds: Map<string, number>
  dynamicImportPaths: Record<string, string>
  publicPath: string
}

export function createEntryBundle({
  directory,
  fileName,
  results,
  moduleIds,
  dynamicImportPaths,
  publicPath,
}: CreateEntryBundleOptions): SourceAndSourceMap {
  const sourceList = new SourceListMap([IIFE_OPEN, NEW_LINE])
  const urlToModuleId = createUrlToModuleId(dynamicImportPaths, moduleIds, publicPath)
  const modules = createModulesObject({ directory, results })

  addNewLine(urlToModuleId, sourceList)
  addNewLine(INSTALLED_MODULES, sourceList)
  addNewLine(SUBSCRIPTIONS, sourceList)
  addNewLine(ADD_SUBSCRIPTION, sourceList)
  addNewLine(JSONP_CALLBACK, sourceList)
  addNewLine(JSONP_SETUP, sourceList)
  addNewLine(modules, sourceList)
  addNewLine(TYPED_REQUIRE, sourceList)
  addNewLine(IMPORT_MODULE, sourceList)
  addNewLine(INSTALL_MODULE, sourceList)
  addNewLine(NEW_LINE, sourceList)
  addNewLine(START_APP, sourceList)
  addNewLine(NEW_LINE, sourceList)
  addNewLine(IIFE_CLOSE, sourceList)

  const { source, map } = sourceList.toStringWithSourceMap({ file: fileName })

  return { source, map }
}

function addNewLine(code: ArgsOf<SourceListMap['add']>[0], sourceList: SourceListMap) {
  sourceList.add(code)
  sourceList.add(NEW_LINE)
}

function createUrlToModuleId(
  dynamicImportPaths: Record<string, string>,
  moduleIds: Map<string, number>,
  publicPath: string,
) {
  const code = Object.keys(dynamicImportPaths)
    .reduce(
      (acc, key) => {
        const moduleId = moduleIds.get(key)!

        acc.push(`\n "${join(`/`, publicPath, dynamicImportPaths[key])}": ${moduleId}`)

        return acc
      },
      [] as string[],
    )
    .join(`,`)

  return new SourceListMap([
    new CodeNode(`var urlToModuleId = {`),
    new CodeNode(code),
    NEW_LINE,
    new CodeNode(`};`),
  ])
}
