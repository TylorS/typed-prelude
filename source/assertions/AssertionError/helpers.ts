import { green, red } from '../../common/colors'

export function addedValue(value: string, padding: number = 0): string {
  const str = `${green('+')} `

  return str + `${padNewLine(padding, stringify(value))}\n`
}

export function removedValue(value: string, padding: number = 0): string {
  const str = `${red('-')} `

  return str + `${padNewLine(padding, stringify(value))}\n`
}

export function padNewLine(padding: number, str: string): string {
  let pad = '\n'

  for (let i = 0; i < padding; ++i) {
    pad = pad + ' '
  }

  return str.replace(/(\n)/g, pad)
}

export function stringify(x: any): string {
  if (isObject(x)) {
    try {
      return JSON.stringify(x, null, 2)
    } catch {
      if (typeof x.toString === 'function') {
        return x.toString()
      }
    }
  }

  return String(x)
}

export function isObject(x: any): x is Object {
  return !!x && typeof x === 'object'
}

export function isEmpty(x: any): boolean {
  return isObject(x) && Object.keys(x).length === 0
}
