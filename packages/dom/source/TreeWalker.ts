import { NodeFilter, NodeFilterImplementation } from './NodeFilter'
import { NodeIteratorImpl } from './NodeIterator'
import { INodeFilter } from './types'

export class TreeWalkerImpl extends NodeIteratorImpl implements TreeWalker {
  constructor(
    public readonly root: Node,
    public readonly whatToShow: NodeFilter = NodeFilter.SHOW_ALL,
    public readonly filter: INodeFilter = new NodeFilterImplementation([whatToShow], true),
  ) {
    super(root, whatToShow, filter)
  }

  get currentNode() {
    return this.referenceNode
  }

  set currentNode(node: Node) {
    this.referenceNode = node
  }

  public parentNode = () => this.setIfExists(this.referenceNode.parentNode)

  public firstChild = () => this.setIfExists(this.referenceNode.firstChild)

  public lastChild = () => this.setIfExists(this.referenceNode.lastChild)

  public nextSibling = () => this.setIfExists(this.referenceNode.nextSibling)

  public previousSibling = () => this.setIfExists(this.referenceNode.previousSibling)

  private setIfExists = (node: Node | null) => {
    if (node) {
      this.referenceNode = node
    }

    return node
  }
}
