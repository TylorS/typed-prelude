import { Disposable } from './Disposable'

/**
 * Cleanup a disposable
 * @param disposable :: Disposable
 */
export const dispose = (disposable: Disposable) => disposable.dispose()
