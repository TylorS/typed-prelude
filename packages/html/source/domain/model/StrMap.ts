export interface StrMap<A> {
  readonly [key: string]: A
}

export type StrMapDiff<A> = RecordDiff<string, A>

export type RecordDiff<K extends PropertyKey, A> = {
  readonly removed: ReadonlyArray<readonly [K, A]>
  readonly updated: ReadonlyArray<readonly [K, A]>
}
