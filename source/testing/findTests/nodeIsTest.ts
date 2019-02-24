import { isCallLikeExpression, isIdentifier, Node, Type, TypeChecker } from 'typescript'

export function nodeIsTest(node: Node, typeChecker: TypeChecker): boolean {
  if (isIdentifier(node)) {
    return false
  }

  const type = getTypeOfNode(node, typeChecker)

  if (!type || !type.isUnionOrIntersection()) {
    return false
  }

  return type.types.some(type => typeIsTest(type))
}

function getTypeOfNode(node: Node, typeChecker: TypeChecker): Type | null {
  try {
    if (isCallLikeExpression(node)) {
      const signature = typeChecker.getResolvedSignature(node)

      if (signature) {
        return typeChecker.getReturnTypeOfSignature(signature)
      }
    }

    return typeChecker.getTypeAtLocation(node)
  } catch {
    return null
  }
}

function typeIsTest(type: Type): boolean {
  const properties = type.getApparentProperties()

  return properties.some(x => {
    const name = x.getEscapedName().toString()

    return name.includes('__@TYPED_TEST@') || name.includes('__@TYPED_TEST_COLLECTION@')
  })
}
