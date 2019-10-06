import { describe, given, it } from '@typed/test'
import { createDomEnv } from './createDomEnv'
import { NodeIteratorImpl } from './NodeIterator'

export const test = describe(`NodeIterator`, [
  given(`a node`, [
    it(`traverse the node tree`, ({ same }) => {
      const { document } = createDomEnv()
      const [a, b, c, d, e, f, g, h, i] = Array(9)
        .fill(null)
        .map((_, i) => {
          const el = document.createElement('div')

          el.id = `el${i}`

          return el
        })

      a.appendChild(b)
      b.appendChild(c)
      c.appendChild(d)
      b.appendChild(e)
      e.appendChild(f)
      a.appendChild(g)
      g.appendChild(h)
      a.appendChild(i)

      const iterator = new NodeIteratorImpl(a)

      same(a, iterator.nextNode())
      same(b, iterator.nextNode())
      same(c, iterator.nextNode())
      same(d, iterator.nextNode())
      same(e, iterator.nextNode())
      same(f, iterator.nextNode())
      same(g, iterator.nextNode())
      same(h, iterator.nextNode())
      same(i, iterator.nextNode())
      same(null, iterator.nextNode())
      same(i, iterator.previousNode())
      same(h, iterator.previousNode())
      same(g, iterator.previousNode())
      same(f, iterator.previousNode())
      same(e, iterator.previousNode())
      same(d, iterator.previousNode())
      same(c, iterator.previousNode())
      same(b, iterator.previousNode())
      same(a, iterator.previousNode())
      same(null, iterator.previousNode())
    }),
  ]),
])
