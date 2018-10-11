import { isBrowser } from '../common/executionEnvironment'
import { serverStorage } from './serverStorage'
import { wrapStorage } from './wrapStorage'

export const sessionStorage = wrapStorage(!isBrowser ? serverStorage() : window.sessionStorage)
