import { createHttpEnv, HttpEnv, WithHttpManagementOptions } from '@typed/http'
import { createContext, createElement, PropsWithChildren, useContext, useMemo } from 'react'

export const HttpContext = createContext(createHttpEnv())

export function HttpProvider({ options, children }: PropsWithChildren<HttpProviderProps>) {
  const value = useMemo(() => createHttpEnv(options), [options])

  return createElement(HttpContext.Provider, { value }, children)
}

export type HttpProviderProps = {
  readonly options?: WithHttpManagementOptions
}

export const useHttpContext = (): HttpEnv => useContext(HttpContext)
