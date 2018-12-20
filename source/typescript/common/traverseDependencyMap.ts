import { SourceFile } from 'ts-simple-ast'
import { DependencyMap, DependencyMapValue } from '../types'

export function traverseDependencyMap(
  fn: (input: DependencyMapValue) => boolean | void,
  sourceFile: SourceFile,
  dependencyMap: DependencyMap,
): void {
  const needsProccessing: DependencyMapValue[] = [dependencyMap.get(sourceFile.getFilePath())!]

  while (needsProccessing.length > 0) {
    const value = needsProccessing.shift() as DependencyMapValue
    const shouldStop = fn(value) === false

    if (shouldStop) {
      break
    }

    needsProccessing.push(
      ...value.dependencies.map(dep => dependencyMap.get(dep.resolvedFilePath)!),
    )
  }
}
