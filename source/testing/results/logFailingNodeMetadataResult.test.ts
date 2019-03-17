import { blue, bold } from '@typed/common/colors'
import { describe, given, it } from '@typed/test'
import { uuid } from '@typed/uuid'
import { NodeMetadataWithResult, TestModifier } from '../types'
import { logFailingNodeMetadataResult } from './logFailingNodeMetadataResult'

export const test = describe(`logFailingNodeMetadataResult`, [
  given(`a NodeMetadataResult and a file path`, [
    it(`returns a failing test result string`, ({ equal }) => {
      const filePath = '/path/to/test.ts'
      const testId = uuid()
      const text = `describe('Things', [])`
      const startingPosition = 25
      const endingPosition = startingPosition + text.length
      const result: NodeMetadataWithResult = {
        config: {
          id: testId,
          name: 'describe Things',
          modifier: TestModifier.DEFAULT,
        },
        result: {
          testId,
          type: 'fail',
          error: new Error('failed'),
        },
        text,
        additionalTests: [],
        position: [startingPosition, endingPosition],
        startLine: 3,
        endLine: 3,
        numberOfLines: 1,
      }

      equal(bold(`${blue('describe')} Things`), logFailingNodeMetadataResult(result, filePath))
    }),
  ]),
])
