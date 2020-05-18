import { Id, JsonRpcNotification, JsonRpcRequest, JsonRpcResponse } from '@typed/json-rpc'
import { Uuid } from '@typed/uuid'
import {
  DocumentUri,
  Environment,
  TestMetadata,
  TestResult,
  TestResults,
  Workspace,
} from '../domain'

// Used to cancel an unfulfilled request
export type CancellationNotification = JsonRpcNotification<
  'cancel', // Bi-directional
  {
    readonly id: Id // Request Id
  }
>

// Server should tell new clients about it's environments on connect and if they change
export type EnvironmentNotification = JsonRpcNotification<
  'server/environments', // Server -> Client
  readonly Environment[]
>

// Client should send list of workspaces upon connection and when there are new workspaces available
export type WorkspacesNotification = JsonRpcNotification<
  'client/workspaces', // Client -> Server
  readonly Workspace[]
>

// Emitted at the beginning of a test run
// There SHOULD only ever be one active test run per environment to save resources
export type TestsStartNotification = JsonRpcNotification<
  'tests/start', // Server -> Client
  {
    readonly id: Uuid
    readonly workspace: Workspace
    readonly environment: Environment
  }
>

// Emitted when a file is starting
// Note: More than one file can be running at a time
export type TestDocumentStartNotification = JsonRpcNotification<
  'tests/document/start', // Server -> Client
  {
    readonly testsStartId: Uuid
    readonly id: Uuid
    readonly documentUri: DocumentUri
  }
>

// Emitted when a test starts
export type TestStartNotification = JsonRpcNotification<
  'tests/test/start', // Server -> Client
  {
    readonly testDocumentStartId: Uuid
    readonly id: Uuid
    readonly metadataId: Id
  }
>

// Emitted when a test completes
export type TestResultNotification = JsonRpcNotification<
  'tests/test/result', // Server -> Client
  {
    readonly id: Uuid
    readonly result: TestResult
  }
>

// Emitted when a file has completed being run
export type TestDocumentResultsNotification = JsonRpcNotification<
  'tests/document/results', // Server -> Client
  {
    readonly id: Uuid
    readonly results: TestResults
  }
>

// Emitted when all tests for an environment are completed
export type TestResultsNotification = JsonRpcNotification<
  'tests/results', // Server -> Client
  {
    readonly id: Uuid
    readonly results: TestResults
  }
>

// Clients can ask for current state of results
export type TestResultsRequest = JsonRpcRequest<
  'tests/results' // Client -> Server
>

// Server -> Client
export type TestResultsResponse = JsonRpcResponse<
  ReadonlyArray<{
    readonly workspace: Workspace
    readonly environment: Environment
    readonly results: readonly [DocumentUri, readonly TestResult[]]
  }>
>

export type TestsRestartRequest = JsonRpcNotification<
  'tests/restart', // Client -> Server
  {
    readonly workspace: Workspace
    readonly documentUris: readonly DocumentUri[]
  }
>

/**
 * Send log notifications over-the-wire
 */
export type LogNotification<A extends LogType> = JsonRpcNotification<
  A, // Server -> Client
  {
    readonly testsStartId: Uuid
    readonly message: string
  }
>

export type LogType =
  | 'log/log'
  | 'log/error'
  | 'log/info'
  | 'log/warn'
  | 'log/debug'
  | 'log/clear'
  | 'log/timeStart'
  | 'log/timeEnd'

// Emitted every time the metadata changes
export type MetadataNotification = JsonRpcNotification<
  'tests/metadata', // Server -> Client
  readonly TestMetadata[]
>
