import { Uuid } from '@typed/uuid'
import { Test } from '../types'
import { getTestConfig } from './getTestConfig'

export const getTestId = (test: Test): Uuid => getTestConfig(test).id
