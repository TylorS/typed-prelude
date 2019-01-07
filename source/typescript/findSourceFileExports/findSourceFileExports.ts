import { SourceFile, SyntaxKind } from 'ts-simple-ast'
import { ascend, uniq } from '../../list'
import { ExportMetadata } from '../types'
import { findExportMetadata } from './findExportMetadata'
import { isCommonjsExportExpression } from './isCommonJsExportExpression'

export type FindSourceFileExportsOptions = {
  sourceFile: SourceFile
  commonjs?: boolean
}

export function findSourceFileExports({
  sourceFile,
  commonjs = true,
}: FindSourceFileExportsOptions): ExportMetadata[] {
  const exportMetadataList: ExportMetadata[] = []
  const nodesToCheck = [
    ...sourceFile.getExportedDeclarations(),
    ...sourceFile.getExportAssignments(),
  ]
  const allNodes = commonjs
    ? nodesToCheck.concat(
        sourceFile
          .getDescendantsOfKind(SyntaxKind.PropertyAccessExpression)
          .filter(isCommonjsExportExpression),
      )
    : nodesToCheck

  for (const node of uniq(allNodes)) {
    const exportMetadata = findExportMetadata(sourceFile, node, commonjs)

    if (exportMetadata) {
      exportMetadataList.push(exportMetadata)
    }
  }

  return exportMetadataList.sort(ascend(x => x.node.getStartLinePos()))
}
