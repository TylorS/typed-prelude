import { isBrowser } from '../common/executionEnvironment'
import { serverStorage } from './serverStorage'
import { wrapStorage } from './wrapStorage'

export const localStorage = wrapStorage(!isBrowser ? serverStorage() : window.localStorage)
