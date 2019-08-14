import { NodeFilter, NodeFilterImplementation } from './NodeFilter'
import { INodeFilter } from './types'

export class NodeIteratorImpl implements NodeIterator {
  public pointerBeforeReferenceNode: boolean = true
  public referenceNode: Node = this.root

  constructor(
    public readonly root: Node,
    public readonly whatToShow: NodeFilter = NodeFilter.SHOW_ALL,
    public readonly filter: INodeFilter = new NodeFilterImplementation([whatToShow], true),
  ) {}

  public previousNode = (): Node | null => {
    const before = this.pointerBeforeReferenceNode
    this.pointerBeforeReferenceNode = true

    let node: Node | null = this.referenceNode

    if (!before && this.matches(node)) {
      return node
    }

    do {
      if (node === this.root) {
        return null
      }

      if (node!.previousSibling) {
        node = node!.previousSibling

        while (node.lastChild) {
          node = node.lastChild
        }

        continue
      }

      node = node!.parentNode
    } while (!this.matches(node!))

    if (node) {
      this.referenceNode = node
    }

    this.pointerBeforeReferenceNode = true

    return node
  }

  public nextNode = (): Node | null => {
    const before = this.pointerBeforeReferenceNode
    this.pointerBeforeReferenceNode = false

    let node: Node | null = this.referenceNode
    if (before && this.matches(node)) {
      return node
    }

    do {
      if (node!.firstChild) {
        node = node!.firstChild
        continue
      }

      do {
        if (node === this.root) {
          return null
        }
        if (node!.nextSibling) {
          break
        }

        node = node!.parentNode
      } while (node)

      node = node!.nextSibling
    } while (!this.matches(node!))

    if (node) {
      this.referenceNode = node
    }

    this.pointerBeforeReferenceNode = false

    return node
  }

  public detach = () => {
    // Deprecated. Is a no-op in browser
  }

  private matches = (node: Node) => {
    if (!node) {
      return false
    }

    return ((this.whatToShow >> node.nodeType) & 1) === 1 && this.filter.acceptNode(node)
  }
}
