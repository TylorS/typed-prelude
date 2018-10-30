const start = (n: number) => `\u001b[${n}m`
const end = (n: number) => `\u001b[${n}m`

const modifier = (modifiers: [number, number]) => (str: string): string =>
  start(modifiers[0]) + str + end(modifiers[1])

const codes = {
  foreground: {
    black: [30, 39] as [30, 39],
    red: [31, 39] as [31, 39],
    green: [32, 39] as [32, 39],
    yellow: [33, 39] as [33, 39],
    blue: [34, 39] as [34, 39],
    magenta: [35, 39] as [35, 39],
    cyan: [36, 39] as [36, 39],
    white: [37, 39] as [37, 39],
    gray: [90, 39] as [90, 39],
  },
  background: {
    black: [40, 49] as [40, 49],
    red: [41, 49] as [41, 49],
    green: [42, 49] as [42, 49],
    yellow: [43, 49] as [43, 49],
    blue: [44, 49] as [44, 49],
    magenta: [45, 49] as [45, 49],
    cyan: [46, 49] as [46, 49],
    white: [47, 49] as [47, 49],
  },
  modifier: {
    reset: [0, 0] as [0, 0],
    bold: [1, 22] as [1, 22],
    dim: [2, 22] as [2, 22],
    italic: [3, 23] as [3, 23],
    underline: [4, 24] as [4, 24],
    inverse: [7, 27] as [7, 27],
    hidden: [8, 28] as [8, 28],
    strikethrough: [9, 29] as [9, 29],
  },
}

export const black = modifier(codes.foreground.black)
export const red = modifier(codes.foreground.red)
export const green = modifier(codes.foreground.green)
export const yellow = modifier(codes.foreground.yellow)
export const blue = modifier(codes.foreground.blue)
export const magenta = modifier(codes.foreground.magenta)
export const cyan = modifier(codes.foreground.cyan)
export const gray = modifier(codes.foreground.gray)
export const white = modifier(codes.foreground.white)

export const bgBlack = modifier(codes.background.black)
export const bgRed = modifier(codes.background.red)
export const bgGreen = modifier(codes.background.green)
export const bgYellow = modifier(codes.background.yellow)
export const bgBlue = modifier(codes.background.blue)
export const bgMagenta = modifier(codes.background.magenta)
export const bgCyan = modifier(codes.background.cyan)
export const bgWhite = modifier(codes.background.white)

export const reset = modifier(codes.modifier.reset)
export const bold = modifier(codes.modifier.bold)
export const dim = modifier(codes.modifier.dim)
export const italic = modifier(codes.modifier.italic)
export const underline = modifier(codes.modifier.underline)
export const inverse = modifier(codes.modifier.inverse)
export const hidden = modifier(codes.modifier.hidden)
export const strikethrough = modifier(codes.modifier.strikethrough)

export function strip(str: string) {
  return str.replace(
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
    '',
  )
}
