// source:  https://codeburst.io/how-to-create-a-priority-queue-with-javascript-c56a970f29a8

const leftChild = (index) => index * 2 + 1;
const rightChild = (index) => index * 2 + 2;
const parent = (index) => Math.floor((index - 1) / 2);

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  swap(indexOne, indexTwo) {
    const tmp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = tmp;
  }

  peek() {
    // the root is always the highest priority item
    return this.heap[0];
  }

  insert(element) {
    // push element to the end of the heap
    this.heap.push(element);

    // the index of the element we have just pushed
    let index = this.heap.length - 1;

    // if the element is greater than its parent:
    // swap element with its parent
    while (index !== 0 && this.heap[index] > this.heap[parent(index)]) {
      this.swap(index, parent(index));
      index = parent(index);
    }
  }

  extractMax() {
    // remove the first element from the heap
    const root = this.heap.shift();

    // put the last element to the front of the heap
    // and remove the last element from the heap as it now
    // sits at the front of the heap
    this.heap.unshift(this.heap[this.heap.length - 1]);
    this.heap.pop();

    // correctly re-position the heap
    this.heapify(0);

    return root;
  }

  heapify(index) {
    const left = leftChild(index);
    const right = rightChild(index);
    let smallest = index;

    // if the left child is bigger than the node we are looking at
    if (left < this.heap.length && this.heap[smallest] < this.heap[left]) {
      smallest = left;
    }

    // if the right child is bigger than the node we are looking at
    if (right < this.heap.length && this.heap[smallest] < this.heap[right]) {
      smallest = right;
    }

    // if the value of smallest has changed, then some swapping needs to be done
    // and this method needs to be called ag ain with the swapped element
    if (smallest !== index) {
      this.swap(smallest, index);
      this.heapify(smallest);
    }
  }

  getHeap() {
    return this.heap;
  }
}

const myMaxHeap = new MaxHeap();

myMaxHeap.insert(26);
myMaxHeap.insert(24);
myMaxHeap.insert(20);
myMaxHeap.insert(18);
myMaxHeap.insert(17);

console.log(myMaxHeap.getHeap());
console.log(myMaxHeap.extractMax());
console.log(myMaxHeap.extractMax());
console.log(myMaxHeap.extractMax());
console.log(myMaxHeap.extractMax());
console.log(myMaxHeap.extractMax());
