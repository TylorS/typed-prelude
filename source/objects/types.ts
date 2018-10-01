export type Prop<T, K extends PropertyKey> = K extends keyof T ? T[K] : undefined
export type Path<T, Keys extends PropertyKey[]> = Keys extends []
  ? T
  : Keys extends [keyof T]
    ? Prop<T, Keys[0]>
    : Keys extends [PropertyKey, PropertyKey]
      ? Prop<Prop<T, Keys[0]>, Keys[1]>
      : Keys extends [PropertyKey, PropertyKey, PropertyKey]
        ? Prop<Prop<Prop<T, Keys[0]>, Keys[1]>, Keys[2]>
        : Keys extends [PropertyKey, PropertyKey, PropertyKey, PropertyKey]
          ? Prop<Prop<Prop<Prop<T, Keys[0]>, Keys[1]>, Keys[2]>, Keys[3]>
          : Keys extends [PropertyKey, PropertyKey, PropertyKey, PropertyKey, PropertyKey]
            ? Prop<Prop<Prop<Prop<Prop<T, Keys[0]>, Keys[1]>, Keys[2]>, Keys[3]>, Keys[4]>
            : undefined
