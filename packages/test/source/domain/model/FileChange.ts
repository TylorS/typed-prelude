import * as t from '@typed/io'
import { DocumentUri } from './DocumentUri'

export enum FileChangeType {
  Updated = 'fileChange/updated',
  Deleted = 'fileChange/deleted',
  Renamed = 'fileChange/renamed',
}

export const FileChange = t.lazy(() => t.union([FileUpdated, FileDeleted, FileRenamed]))
export type FileChange = t.TypeOf<typeof FileChange>

export const FileUpdated = t.record({
  type: t.literal(FileChangeType.Updated),
  documentUri: DocumentUri,
})
export type FileUpdated = t.TypeOf<typeof FileUpdated>

export const FileDeleted = t.record({
  type: t.literal(FileChangeType.Deleted),
  documentUri: DocumentUri,
})
export type FileDeleted = t.TypeOf<typeof FileDeleted>

export const FileRenamed = t.record({
  type: t.literal(FileChangeType.Renamed),
  current: DocumentUri,
  updated: DocumentUri,
})
export type FileRenamed = t.TypeOf<typeof FileRenamed>
