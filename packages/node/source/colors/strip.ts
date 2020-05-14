const ESCAPES_REGEX = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g

export function strip(str: string) {
  return str.replace(ESCAPES_REGEX, '')
}
