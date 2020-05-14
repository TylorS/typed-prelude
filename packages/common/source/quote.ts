type Step = [RegExp, string]
const STEPS: Step[] = [
  [/\\/g, '\\\\'],
  [/[\b]/g, '\\b'],
  [/\f/g, '\\f'],
  [/\n/g, '\\n'],
  [/\r/g, '\\r'],
  [/\t/g, '\\t'],
  [/\v/g, '\\v'],
  [/\0/g, '\\0'],
]

const LAST_STEP: Step = [/"/g, '\\"']

export function quote(s: string): string {
  if (s.length === 0) {
    return s
  }

  const escaped = STEPS.reduce(applyStep, s)

  return '"' + applyStep(escaped, LAST_STEP) + '"'
}

function applyStep(str: string, step: Step): string {
  return str.replace(step[0], step[1])
}
