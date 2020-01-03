export namespace JsonRpcError {
  // Defined by JSON RPC
  export const ParseError = -32700 as const
  export const InvalidRequest = -32600 as const
  export const MethodNotFound = -32601 as const
  export const InvalidParams = -32602 as const
  export const InternalError = -32603 as const
  export const serverErrorStart = -32099 as const
  export const serverErrorEnd = -32000 as const
  export const ServerNotInitialized = -32002 as const
  export const UnknownErrorCode = -32001 as const
}
