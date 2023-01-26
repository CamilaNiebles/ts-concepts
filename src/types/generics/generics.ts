class Queue<T> {
  data: Array<T> = []

  push(item: T) {
    this.data.push(item)
  }
  pop() {
    return this.data.shift()
  }
}

const queue = new Queue<number>()
queue.push(123)
