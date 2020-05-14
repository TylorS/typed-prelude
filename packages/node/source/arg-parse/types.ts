import { Effects, PureEffect } from '@typed/effects'
import { LoggerEnv } from '@typed/logger'
import { Maybe, Nothing } from '@typed/maybe'

export interface ArgsEnv extends LoggerEnv {
  readonly args: readonly string[]
}

export interface ArgParser<A extends string, B> {
  readonly help: () => PureEffect<string>
  readonly parse: () => Effects<ArgsEnv, ArgParserResult<A, B>>
}

export type ParseOptions = {
  readonly aliases?: readonly string[]
  readonly help?: string
}

export type ArgParserResult<A extends string, B> = readonly [
  readonly number[],
  Maybe<{ [K in A]: B }>,
]

export type ArgParserResultValue<A> = A extends ArgParserResult<any, infer R> ? R : never

export namespace ArgParserResult {
  export const none: ArgParserResult<never, never> = [[], Nothing]
}

export type ArgParserNameValue<A> = A extends ArgParser<infer Name, infer Value>
  ? { readonly [K in Name]: Value }
  : never

export type ArgParserValue<A> = A extends ArgParser<any, infer Value> ? Value : never
export type ArgParserName<A> = A extends ArgParser<infer Name, any> ? Name : never
