// source:  https://codeburst.io/how-to-create-a-priority-queue-with-javascript-c56a970f29a8

const leftChild = (index) => (index * 2) + 1;
const rightChild = (index) => (index * 2) + 2;
const parent = (index) => Math.floor((index - 1) / 2);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getHeap() {
    return this.heap;
  }

  swap(indexOne, indexTwo) {
    const tmp = this.heap[indexTwo];
    this.heap[indexTwo] = this.heap[indexOne];
    this.heap[indexOne] = tmp;
  }

  peek() {
    return this.heap[0];
  }

  insert(element) {
    // insert new value at the end
    this.heap.push(element);

    // get index of newly inserted value
    let index = this.heap.length - 1;

    while (index !== 0 && this.heap[index] < this.heap[parent(index)]) {
      this.swap(index, parent(index));
      index = parent(index);
    }
  }

  heapify(index) {
    const left = leftChild(index);
    const right = rightChild(index);
    let largest = index;

    if (left < this.heap.length && this.heap[largest] > this.heap[left]) {
      largest = left;
    }

    if (right < this.heap.length && this.heap[largest] > this.heap[right]) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(largest, index);
      this.heapify(largest);
    }
  }

  extractMin() {
    const root = this.heap.shift();

    this.heap.unshift(this.heap[this.heap.length - 1]);
    this.heap.pop();

    this.heapify(0);

    return root;
  }
}

const myMinHeap = new MinHeap();
myMinHeap.insert(26);
myMinHeap.insert(24);
myMinHeap.insert(20);
myMinHeap.insert(18);
myMinHeap.insert(17);

console.log(myMinHeap.getHeap());
console.log(myMinHeap.extractMin());
console.log(myMinHeap.extractMin());
console.log(myMinHeap.extractMin());
console.log(myMinHeap.extractMin());
console.log(myMinHeap.extractMin());
