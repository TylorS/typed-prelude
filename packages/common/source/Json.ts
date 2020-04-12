export type Json = JsonPrimitive | JsonArray | JsonObject

export type JsonPrimitive = string | number | boolean | null

export interface JsonArray extends Array<Json> {}

export interface JsonObject extends Record<string, Json> {}
