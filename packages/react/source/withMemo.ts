import { equals } from '@typed/logic'
import * as React from 'react'

/**
 * Use deep equals logic to memo React Function Component
 */
export function withMemo<A>(Component: React.FunctionComponent<A>): React.FunctionComponent<A> {
  return (React.memo(Component, equals) as any) as React.FunctionComponent<A>
}
