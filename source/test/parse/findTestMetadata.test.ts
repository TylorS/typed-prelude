import { createLanguageService, findTsConfig } from '@typed/typescript'
import { join } from 'path'
import { Program, SourceFile } from 'typescript'
import { dissoc } from '../../objects'
import { describe, given, it } from '../test-api'
import { NodeMetadata, Test } from '../types'
import { findTestMetadata } from './findTestMetadata'

export const test: Test = describe(`findTestMetadata`, [
  given(`sourceFiles and a Program`, [
    it(`finds all Test nodes`, ({ equal }) => {
      const filePath = join(__dirname, '../../effect/Effect.test.ts')
      const tsConfig = findTsConfig({ directory: __dirname })
      const { languageService } = createLanguageService({ tsConfig })
      const program = languageService.getProgram() as Program
      const sourceFile = program.getSourceFile(filePath) as SourceFile
      const testNodes = findTestMetadata({ sourceFiles: [sourceFile], program })
      const expectedTestNodes: any[] = [
        {
          startLine: 5,
          endLine: 48,
          numberOfLines: 43,
          filePath: '/Users/tylors/code/tylors/typed-prelude-next/source/effect/Effect.test.ts',
          children: [
            {
              startLine: 6,
              endLine: 30,
              numberOfLines: 24,
              filePath: '/Users/tylors/code/tylors/typed-prelude-next/source/effect/Effect.test.ts',
              children: [
                {
                  startLine: 7,
                  endLine: 29,
                  numberOfLines: 22,
                  filePath:
                    '/Users/tylors/code/tylors/typed-prelude-next/source/effect/Effect.test.ts',
                  children: [
                    {
                      startLine: 8,
                      endLine: 28,
                      numberOfLines: 20,
                      filePath:
                        '/Users/tylors/code/tylors/typed-prelude-next/source/effect/Effect.test.ts',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              startLine: 31,
              endLine: 47,
              numberOfLines: 16,
              filePath: '/Users/tylors/code/tylors/typed-prelude-next/source/effect/Effect.test.ts',
              children: [
                {
                  startLine: 32,
                  endLine: 46,
                  numberOfLines: 14,
                  filePath:
                    '/Users/tylors/code/tylors/typed-prelude-next/source/effect/Effect.test.ts',
                  children: [
                    {
                      startLine: 33,
                      endLine: 45,
                      numberOfLines: 12,
                      filePath:
                        '/Users/tylors/code/tylors/typed-prelude-next/source/effect/Effect.test.ts',
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
          exportNames: ['test'],
        },
      ]

      equal(expectedTestNodes, testNodes.map(dropTextFromMetadata))
    }),
  ]),
])

function dropTextFromMetadata(metadata: NodeMetadata): any {
  return {
    ...dissoc('id', dissoc('text', dissoc('position', metadata))),
    children: metadata.children.map(dropTextFromMetadata),
  }
}
