import { NewType } from '@typed/new-type'

/*
  foo://example.com:8042/over/there?name=ferret#nose
  \_/   \______________/\_________/ \_________/ \__/
  |           |            |            |        |
  scheme     authority       path        query   fragment
  |   _____________________|__
  / \ /                        \
  urn:example:animal:ferret:nose
*/
export type DocumentUri = NewType<string, 'DocumentUri'>

export type Environment = NewType<string, 'Environment'>

export interface Workspace {
  readonly uri: DocumentUri
  readonly name?: string // Optional name to identify this workspace
}
