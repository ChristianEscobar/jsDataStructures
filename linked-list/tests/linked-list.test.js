const LinkedList = require('../LinkedList');

test('Creates a new linked list', () => {
	const linkedList = new LinkedList();
	expect(linkedList.size()).toBe(0);
});

test('Adds a node to the list', () => {
	const linkedList = new LinkedList();
	linkedList.add(11);
	expect(linkedList.size()).toBe(1);
});

test('Adds a node as the first', () => {
	let result = 44;
	const linkedList = new LinkedList();
	linkedList.add(11);
	linkedList.add(22);
	linkedList.add(33);
	linkedList.addFirst(44);
	expect(linkedList.get(0)).toBe(44);
});
