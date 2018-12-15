#!/usr/bin/env node

// tslint:disable:no-var-requires
const { createProgram } = require('typescript')
const { makeAbsolute } = require('../common/makeAbsolute')
const { findTsConfig } = require('../findTsConfig')
const { typeCheckFiles } = require('./typeCheckFiles')
// tslint:enable:no-var-requires

const cwd = process.argv[2]
const files = process.argv.slice(3).map(x => makeAbsolute(cwd, x))
const { compilerOptions } = findTsConfig(cwd)
const program = createProgram(files, compilerOptions)
const result = typeCheckFiles(cwd, files, program)

if (result === '') {
  process.exit(0)
}

console.error(result)
process.exit(1)
