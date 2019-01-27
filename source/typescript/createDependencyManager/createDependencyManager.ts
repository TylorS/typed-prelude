import { DependencyManager, DependencyMap } from '../types'

export type CreateDependencyManagerOptions = {
  dependencyMap: DependencyMap
  dependentMap: DependencyMap
}

export function createDependencyManager({
  dependencyMap,
  dependentMap,
}: CreateDependencyManagerOptions): DependencyManager {
  function addToTree(parent: string, child: string, map: DependencyMap) {
    if (!map[parent]) {
      map[parent] = []
    }

    const values = map[parent]

    if (!values.includes(child)) {
      values.push(child)
    }
  }

  function setDependenciesOfFile(file: string, dependencies: string[]) {
    dependencyMap[file] = dependencies

    dependencies.forEach(dependency => addToTree(dependency, file, dependentMap))
  }

  function setDependentsOfFile(file: string, dependents: string[]) {
    dependentMap[file] = dependents

    dependents.forEach(dependent => addToTree(dependent, file, dependencyMap))
  }

  function getDependenciesOfFile(file: string): string[] {
    return dependencyMap[file] || []
  }

  function getDependentsOfFile(file: string): string[] {
    const dependents = dependentMap[file] || []
    const filesToProcess = dependents.slice()

    while (filesToProcess.length > 0) {
      const fileToProcess = filesToProcess.shift() as string
      const subDependents = (dependentMap[fileToProcess] || []).filter(x => !dependents.includes(x))

      if (subDependents.length > 0) {
        dependents.push(...subDependents)
        filesToProcess.push(...subDependents)
      }
    }

    return dependents
  }

  function removeFile(file: string) {
    delete dependencyMap[file]
    delete dependentMap[file]
  }

  return {
    setDependenciesOfFile,
    setDependentsOfFile,
    getDependenciesOfFile,
    getDependentsOfFile,
    removeFile,
  }
}
