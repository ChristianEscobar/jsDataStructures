const LinkedList = require('./linked-list/LinkedList');

const linkedList = new LinkedList();
linkedList.add(11);
linkedList.add(22);
linkedList.add(33);
linkedList.add(44);
linkedList.add(55);

//linkedList.print();

linkedList.remove(11);
linkedList.addFirst(66);
linkedList.addLast(77);

linkedList.print();
//console.log(linkedList.size());
//console.log(linkedList.contains(33));
//console.log(linkedList.contains(100));
// console.log(linkedList.get(0));
// console.log(linkedList.get(3));
//console.log(linkedList.getFirst());
linkedList.reverse();
console.log(linkedList.toArray().join(','));
