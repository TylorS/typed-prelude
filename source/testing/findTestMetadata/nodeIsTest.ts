import { isCallLikeExpression, Node, Type, TypeChecker } from 'typescript'

export function nodeIsTest(node: Node, typeChecker: TypeChecker): boolean {
  const type = getTypeOfNode(node, typeChecker)

  if (!type) {
    return false
  }

  if (type.isUnionOrIntersection()) {
    return type.types.some(type => typeIsTest(type))
  }

  return typeIsTest(type)
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

    return name.startsWith('__@TYPED_TEST@') || name.startsWith('__@TYPED_TEST_COLLECTION@')
  })
}
