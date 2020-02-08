export type Json = JsonPrimitive | JsonArray | JsonObject

export type JsonPrimitive = string | number | boolean | null

export interface JsonArray extends ReadonlyArray<Json> {}

export interface JsonObject extends Readonly<Record<string, Json>> {}
