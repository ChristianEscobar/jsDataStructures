const LinkedList = require('./linked-list/LinkedList');
const Bst = require('./bst/BST');
const Stack = require('./stack-linked-list/Stack');

const stack = new Stack();
stack.push(12);
stack.push(21);
stack.push(41);
stack.pop();
stack.push(1);
stack.push(12);
stack.push(18);
stack.push(20);
stack.push(31);
stack.push(51);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
//stack.pop();
//stack.pop();
//stack.pop();
console.log(stack.peek());

// const bst = new Bst();
// bst.add(7);
// bst.add(5);
// bst.add(10);
// bst.add(2);
// bst.add(8);
// bst.add(11);
// bst.print();
// const linkedList = new LinkedList();
// linkedList.add(11);
// linkedList.add(22);
// linkedList.add(33);
// linkedList.add(44);
// linkedList.add(55);

// //linkedList.print();

// linkedList.remove(11);
// linkedList.addFirst(66);
// linkedList.addLast(77);

// linkedList.print();
// //console.log(linkedList.size());
// //console.log(linkedList.contains(33));
// //console.log(linkedList.contains(100));
// // console.log(linkedList.get(0));
// // console.log(linkedList.get(3));
// //console.log(linkedList.getFirst());
// linkedList.reverse();
// console.log(linkedList.toArray().join(','));
