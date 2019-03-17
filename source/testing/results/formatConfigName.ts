import { bold } from '@typed/common/colors'

const DEFAULT_TEST_NAMES = ['describe', 'given', 'it']

export function formatConfigName(
  name: string,
  namesToReplace: string[] = DEFAULT_TEST_NAMES,
): string {
  return bold(replaceRegexes(name, namesToReplace))
}

function replaceRegexes(name: string, namesToReplace: string[]): string {
  return namesToReplace.reduce(replaceRegex, name)
}

function replaceRegex(name: string, nameToReplace: string): string {
  return name.replace(createStartingRegex(nameToReplace), '')
}

function createStartingRegex(name: string): RegExp {
  return new RegExp(`^${name}`, 'i')
}
