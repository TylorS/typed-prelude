import { uniq } from '../../list'
import { DependencyManager, DependencyMap } from '../types'

export type CreateDependencyManagerOptions = {
  dependencyMap: DependencyMap
  dependentMap: DependencyMap
}

export function createDependencyManager({
  dependencyMap,
  dependentMap,
}: CreateDependencyManagerOptions): DependencyManager {
  function addDependent(parent: string, child: string) {
    if (!dependentMap[parent]) {
      dependentMap[parent] = []
    }

    dependentMap[parent].push(child)
  }

  function setDependenciesOfFile(file: string, dependencies: string[]) {
    dependencyMap[file] = dependencies

    dependencies.forEach(dependent => addDependent(dependent, file))
  }

  function getDependenciesOfFile(file: string): string[] {
    return dependencyMap[file] || []
  }

  function getDependentsOfFile(file: string): string[] {
    const dependents = dependentMap[file] || []
    const filesToProcess = dependents.slice()

    while (filesToProcess.length > 0) {
      const fileToProcess = filesToProcess.shift() as string
      const subDependents = dependentMap[fileToProcess] || [].filter(x => !dependents.includes(x))

      if (subDependents.length > 0) {
        dependents.push(...subDependents)
        filesToProcess.push(...subDependents)
      }
    }

    return uniq(dependents)
  }

  function removeFile(file: string) {
    delete dependencyMap[file]
    delete dependentMap[file]
  }

  return {
    setDependenciesOfFile,
    getDependenciesOfFile,
    getDependentsOfFile,
    removeFile,
  }
}
