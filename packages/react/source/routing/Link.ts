import { execPure } from '@typed/env'
import { Path, pushPath } from '@typed/history'
import { ArgsOf } from '@typed/lambda'
import { Overwrite } from '@typed/objects'
import { createElement, FunctionComponent, useCallback } from 'react'
import { withMemo } from '../withMemo'
import { useHistory } from './HistoryContext'

export type AProps = JSX.IntrinsicElements['a']
export type AOnClickArgs = ArgsOf<NonNullable<AProps['onClick']>>

export const Link: FunctionComponent<LinkProps> = withMemo<LinkProps>(function Link(
  props: LinkProps,
) {
  const { updateLocation } = useHistory<null>()
  const getPushPath = useCallback(() => pushPath(props.href), [props.href])

  return createElement(
    'a',
    {
      ...props,
      onClick: (...args: AOnClickArgs) => {
        // Call onClick
        if (props.onClick) {
          props.onClick(...args)
        }

        // If prevented don't continue
        if (args.some(x => x.defaultPrevented)) {
          return
        }

        args[0].preventDefault()

        execPure(updateLocation(getPushPath()))
      },
    },
    props.children,
  )
})

export type LinkProps = Overwrite<AProps, { readonly href: Path }>
export { Path }
