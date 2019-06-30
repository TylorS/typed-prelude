import { ArgsOf, curry, Fn } from '@typed/lambda'
import {
  createContext,
  default as augmentor,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'dom-augmentor'
import { hook, html as lHtml, render as lRender, svg as lSvg } from 'lighterhtml-plus'

export const { html, svg } = hook(useRef) as {
  readonly html: <A = HTMLElement>(...args: ArgsOf<typeof lHtml>) => A
  readonly svg: <A extends SVGElement = SVGElement>(...args: ArgsOf<typeof lSvg>) => A
}

export {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
}

export const render = curry(lRender) as {
  <A extends HTMLElement = HTMLElement>(node: HTMLElement, renderer: () => A): A
  (node: HTMLElement): <A extends HTMLElement = HTMLElement>(renderer: () => A) => A
}

export function withHooks<A extends any[], B>(fn: Fn<A, B>): Fn<A, B> {
  return augmentor(function(this: any, ...args: A): B {
    const { current } = useRef({ i: 0, $: [] as Array<Fn<A, B>> })
    const { i, $ } = current

    useEffect(() => {
      const { i, $ } = current

      if (i > $.length) {
        $.splice(i)
      }

      current.i = 0
    })

    current.i++

    if (i === $.length) {
      $.push(augmentor(fn))
    }

    return $[i].apply(this, args)
  })
}
