export type Json = JsonPrimitive | JsonArray | JsonObject

export type JsonPrimitive = string | number | boolean | null
export type JsonArray = readonly Json[]
export type JsonObject = { readonly [key: string]: Json }
