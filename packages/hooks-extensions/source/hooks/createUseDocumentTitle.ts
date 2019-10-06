import { Disposable } from '@typed/disposable'
import { createUseEffect, createUseState, InitialValue, withCreateHook } from '@typed/hooks'
import { createUseDomEnv } from '../channels'

export const createUseDocumentTitle = withCreateHook(
  createHook =>
    [createHook(createUseDomEnv), createHook(createUseEffect), createHook(createUseState)] as const,
  ([useDomEnv, useEffect, useState], initial?: InitialValue<string>) => {
    const { document } = useDomEnv()
    const state = useState<string>(initial || document.title)

    useEffect(setDocumentTitle, { args: [document, state[0]] })

    return state
  },
)

function setDocumentTitle(document: Document, title: string) {
  if (document.title !== title) {
    document.title = title
  }

  return Disposable.None
}
