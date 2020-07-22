import { L } from 'ts-toolbelt'

export namespace TypeParams {
  export type First<A extends L.List> = L.Last<A>
  export type Second<A extends L.List> = L.Last<L.Pop<A>>
  export type Third<A extends L.List> = L.Last<L.Pop<L.Pop<A>>>
  export type Fourth<A extends L.List> = L.Last<L.Pop<L.Pop<L.Pop<A>>>>
  export type Fifth<A extends L.List> = L.Last<L.Pop<L.Pop<L.Pop<L.Pop<A>>>>>
}
