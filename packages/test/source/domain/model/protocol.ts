import * as t from '@typed/io'
import {
  jsonRpcFailedResponse,
  jsonRpcNotification,
  jsonRpcRequest,
  jsonRpcSuccessResponse,
  UnknownJsonRpcFailedResponse,
} from '@typed/json-rpc'
import { Log } from '@typed/logger'
import { NewType } from '@typed/new-type'
import { DocumentUri, Environment, Key } from './common'
import { TestConfig, TestId, TestType } from './Test'
import { MetadataId, TestMetadata } from './TestMetadata'
import { TestResult } from './TestResult'

export type TestMessage =
  | AnalyzeRequest
  | AnalyzeResponse
  | StartTestsRequest
  | StartTestsResponse
  | DocumentStarted
  | DocumentFinished
  | TestStarted
  | TestFinished
  | Logged

export enum TestMethod {
  // Requests
  Analyze = 'tests.analyze',
  StartTests = 'tests.start',

  // Notifications
  RunStarted = 'tests.started',
  RunFinished = 'tests.finished',
  DocumentStarted = 'document.started',
  DocumentFinished = 'document.finished',
  TestStarted = 'test.started',
  TestFinished = 'test.finished',
  Logged = 'test.logged',
}

export enum TestErrorCode {
  UnsupportedUriProtocol = -32001, // Protocol of DocumentUris are not supported
  UnknownMetadataId = -32002, // Protocol of DocumentUris are not supported
}

// A client is responsible for asking for the server to analyze a set of document uris, including file changes.
// The server is capable of optimizing the response by the use of caching.
export const AnalyzeRequest = jsonRpcRequest(t.literal(TestMethod.Analyze), t.array(DocumentUri))
export interface AnalyzeRequest extends t.TypeOf<typeof AnalyzeRequest> {}

export const AnalyzeResponse = t.union([
  jsonRpcSuccessResponse(t.array(TestMetadata)),
  jsonRpcFailedResponse(
    t.record({
      code: t.literal(TestErrorCode.UnsupportedUriProtocol),
      message: t.String,
    }),
  ),
  UnknownJsonRpcFailedResponse,
])

export type AnalyzeResponse = t.TypeOf<typeof AnalyzeResponse>

// A client is responsible for asking the server to bootstrap a set of TestMetadata information
// ready to be run, like building a bundle etc. The server is then responsible for returning a set of
// TestRun's that have yet to be run (they can be added to a queued TestRun perhaps) that will ultimately
// contain results for the MetadataIds involved.
export const StartTestsRequest = jsonRpcRequest(
  t.literal(TestMethod.StartTests),
  t.array(MetadataId),
)

export interface StartTestsRequest extends t.TypeOf<typeof StartTestsRequest> {}

export const StartTestsResponse = t.union([
  jsonRpcSuccessResponse(t.array(t.lazy(() => TestRun))),
  UnknownJsonRpcFailedResponse,
])

export type StartTestsResponse = t.TypeOf<typeof StartTestsResponse>

export const TestRun = t.record({
  id: t.Uuid,
  environment: Environment,
  documentUris: t.array(DocumentUri),
})
export interface TestRun extends t.TypeOf<typeof TestRun> {}

export type TestRunId = Key<TestRun>
export const TestRunId = Key<TestRunId>('TestRunId')

/* Documents */
export const DocumentStarted = jsonRpcNotification(
  t.literal(TestMethod.DocumentStarted),
  t.lazy((): t.Type<DocumentRun> => DocumentRun),
)
export type DocumentStarted = t.TypeOf<typeof DocumentStarted>

export const DocumentFinished = jsonRpcNotification(
  t.literal(TestMethod.DocumentFinished),
  t.lazy((): t.Type<DocumentRun> => DocumentRun),
)
export type DocumentFinished = t.TypeOf<typeof DocumentFinished>

export const DocumentRun = t.tuple([DocumentUri, TestRunId])
export interface DocumentRun extends t.TypeOf<typeof DocumentRun> {}
/* End of Documents */

/* Tests */
export const TestStarted = jsonRpcNotification(
  t.literal(TestMethod.TestStarted),
  t.record({
    type: TestType,
    config: TestConfig,
    metadataId: MetadataId,
  }),
)
export type TestStarted = t.TypeOf<typeof TestStarted>

export const TestFinished = jsonRpcNotification(
  t.literal(TestMethod.TestFinished),
  t.tuple([TestId, TestResult]),
)

export type TestFinished = t.TypeOf<typeof TestFinished>
/* End of: Tests */

const LogType: t.Type<Log> = t.union([
  t.record({ type: t.literal('log'), message: t.String }),
  t.record({ type: t.literal('error'), message: t.String }),
  t.record({ type: t.literal('clear') }),
  t.record({ type: t.literal('info'), message: t.String }),
  t.record({ type: t.literal('debug'), message: t.String }),
  t.record({ type: t.literal('timeStart'), label: t.String, time: t.Number }),
  t.record({ type: t.literal('timeEnd'), label: t.String, time: t.Number }),
])

export const Logged = jsonRpcNotification(
  t.literal(TestMethod.Logged),
  t.record({
    log: LogType,
    timestamp: t.lazy(() => UtcTimestamp),
  }),
)
export type Logged = t.TypeOf<typeof Logged>

// Date.toISOString()
export type UtcTimestamp = NewType<string, 'UtcTimestamp'>

const utcRegex = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}\+\d{2}:\d{2}/
export const UtcTimestamp = t.refinement(t.String, (s): s is UtcTimestamp => utcRegex.test(s))

export const fromDate = (date: Date): UtcTimestamp => date.toISOString() as UtcTimestamp
export const toDate = (timestamp: UtcTimestamp): Date => new Date(Date.parse(timestamp))
