import { describe, given, it } from '@typed/test'
import { join } from 'path'
import { isFunctionDeclaration, isFunctionExpression } from 'typescript'
import { createProject } from '../createProject'
import { findTsConfig } from '../findTsConfig'
import { findChildNodes } from './findChildNodes'

const directory = join(__dirname, 'test-fixtures')

export const test = describe(`findChildNodes`, [
  given(`a Predicate and SourceFiles`, [
    it(`returns a NodeTree of nodes matching predicate`, ({ equal }) => {
      const fixtureFilePath = join(directory, 'functions.ts')
      const tsConfig = findTsConfig({ directory })
      const { getSourceFiles } = createProject({
        directory,
        tsConfig,
        fileGlobs: [fixtureFilePath],
      })
      const {
        sourceFiles: [sourceFile],
      } = getSourceFiles()
      const nodes = findChildNodes(x => isFunctionDeclaration(x) || isFunctionExpression(x), [
        sourceFile,
      ])

      const expectedTopLevelNodes = 4
      const expectedChildrenOfFirstNode = 1
      const expectedChildrenOfFirstChildNode = 1

      equal(expectedTopLevelNodes, nodes.length)
      equal(expectedChildrenOfFirstNode, nodes[0].children.length)
      equal(expectedChildrenOfFirstChildNode, nodes[0].children[0].children.length)
    }),
  ]),
])
