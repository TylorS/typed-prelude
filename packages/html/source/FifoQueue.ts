import { Maybe } from '@typed/maybe'

export class FifoQueue<A> {
  private queuables: A[] = [] // the queue

  enqueue(queueable: A) {
    this.queuables.push(queueable)
  }

  dequeue(): Maybe<A> {
    return Maybe.of(this.queuables.shift())
  }

  peek(): Maybe<A> {
    return Maybe.of(this.queuables[0])
  }

  remove(f: (value: A) => boolean) {
    for (let i = 0; i < this.queuables.length; ++i) {
      if (f(this.queuables[i])) {
        this.queuables.splice(i, 1)
        --i
      }
    }
  }

  some(f: (value: A) => boolean) {
    return this.queuables.some(f)
  }
}
