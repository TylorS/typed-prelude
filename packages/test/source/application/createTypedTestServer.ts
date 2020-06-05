import { ChannelEffects, createChannel, HookEnv, provideChannel } from '@typed/hooks'
import { DecodeFailure } from '@typed/io'
import { ConnectionEnv, createServer, Id } from '@typed/json-rpc'
import {
  AnalyzeRequest,
  AnalyzeResponse,
  DocumentUri,
  StartTestsRequest,
  StartTestsResponse,
  TestMetadata,
  TestMethod,
  TestRun,
} from '../domain'
import { TypedServerChannel } from './TypedServerChannel'

const TypedTestChannel = createChannel(function* () {
  return {
    testMetadataByConnectionId: new Map<Id, Map<DocumentUri, ReadonlyArray<TestMetadata>>>(),
    testRunsByConnectionId: new Map<Id, Map<DocumentUri, ReadonlyArray<TestMetadata>>>(),
  }
})

type TypeTestOptions = {
  readonly environment: readonly EnvironmentPlugin[]
}

type EnvironmentPlugin = {
  readonly startTests: (
    testMetadata: readonly TestMetadata[],
  ) => ChannelEffects<ConnectionEnv, TestRun>
}

export function* createTypedTestServer({}: TypeTestOptions) {
  const server = yield* createServer(TypedServerChannel)

  yield* provideChannel(TypedTestChannel)

  yield* server.registerRequest(TestMethod.Analyze, analyzeDocuments)
  yield* server.registerRequest(TestMethod.StartTests, startTests)

  return server
}

function* analyzeDocuments(
  request: AnalyzeRequest,
): ChannelEffects<ConnectionEnv & HookEnv & DecodeFailure, AnalyzeResponse> {
  const analyzeRequest: AnalyzeRequest = yield* AnalyzeRequest.decode(request)
  const documentUris = analyzeRequest.params
  // TODO
  // validate documentUris are understood
  // use a virtual filesystem with TypeScript
  // Statically analyze for TestMetadata
}

function* startTests(
  request: StartTestsRequest,
): ChannelEffects<ConnectionEnv & HookEnv, StartTestsResponse> {
  // TODO
}
