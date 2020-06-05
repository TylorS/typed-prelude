import { DocumentUri } from '../domain'

export type ApplicationEvent = DocumentUpdated | DocumentDeleted | DocumentRenamed

export enum ApplicationEventName {
  DocumentUpdated,
  DocumentDeleted,
  DocumentRenamed,
}

export type DocumentUpdated = {
  readonly name: ApplicationEventName.DocumentUpdated
  readonly documentUri: DocumentUri
}

export type DocumentDeleted = {
  readonly name: ApplicationEventName.DocumentDeleted
  readonly documentUri: DocumentUri
}

export type DocumentRenamed = {
  readonly name: ApplicationEventName.DocumentRenamed
  readonly documentUri: DocumentUri
  readonly updatedDocumentUri: DocumentUri
}
