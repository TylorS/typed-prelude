import { createHttpEnv, HttpEnv, WithHttpManagementOptions } from '@typed/http'
import { createContext, createElement, PropsWithChildren, useCallback, useContext } from 'react'

export const HttpContext = createContext(createHttpEnv())

export function HttpProvider({ options, children }: PropsWithChildren<HttpProviderProps>) {
  const createHttp = useCallback(() => createHttpEnv(options), [options])

  return createElement(HttpContext.Provider, { value: createHttp() }, children)
}

export type HttpProviderProps = {
  readonly options?: WithHttpManagementOptions
}

export const useHttpContext = (): HttpEnv => useContext(HttpContext)
