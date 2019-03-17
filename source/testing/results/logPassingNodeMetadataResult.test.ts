import { blue, bold } from '@typed/common/colors'
import { describe, given, it } from '@typed/test'
import { uuid } from '@typed/uuid'
import { NodeMetadataWithResult, TestModifier } from '../types'
import { logPassingNodeMetadataResult } from './logPassingNodeMetadataResult'

export const test = describe(`logPassingNodeMetadataResult`, [
  given(`a NodeMetadataResult`, [
    it(`returns a passing test result string`, ({ equal }) => {
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
          type: 'pass',
        },
        text,
        additionalTests: [],
        position: [startingPosition, endingPosition],
        startLine: 3,
        endLine: 3,
        numberOfLines: 1,
      }

      equal(bold(`${blue('describe')} Things`), logPassingNodeMetadataResult(result))
    }),
  ]),
])
