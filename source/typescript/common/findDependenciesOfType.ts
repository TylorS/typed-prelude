import { SourceFile } from 'ts-simple-ast'
import { chain, reduceBy } from '../../list'
import { Dependency, DependencyMap, DependencyMapValue, DependencyType } from '../types'

export function findDependenciesOfType(
  dependencyValues: DependencyMap,
  type: DependencyType,
): Record<string, Dependency[]> {
  const flattenedDependencies = chain(
    ({ sourceFile, dependencies }: DependencyMapValue) =>
      dependencies.map(dependency => ({ dependency, sourceFile })),
    Array.from(dependencyValues.values()),
  ).filter((x: { dependency: Dependency; sourceFile: SourceFile }) => x.dependency.type === type)

  return reduceBy(
    (acc, x) => acc.concat(x.dependency),
    [] as Dependency[],
    x => x.sourceFile.getFilePath(),
    flattenedDependencies,
  )
}
