// Utility type that can help let you control how TypeScript does inference
export type NoInfer<A> = A & { [K in keyof A]: A[K] }
