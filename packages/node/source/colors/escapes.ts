export const start = (n: number) => `\u001b[${n}m`

export const end = (n: number) => `\u001b[${n}m`

export const modifier = (modifiers: readonly [number, number]) => (str: string): string =>
  start(modifiers[0]) + str + end(modifiers[1])
