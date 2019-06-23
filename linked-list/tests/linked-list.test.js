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

test('Adds new node as the first', () => {
	let result = 44;
	const linkedList = new LinkedList();
	linkedList.add(11);
	linkedList.add(22);
	linkedList.add(33);
	linkedList.addFirst(44);
	expect(linkedList.get(0)).toBe(44);
});

test('Adds new node as the last', () => {
	let result = 44;
	const linkedList = new LinkedList();
	linkedList.add(11);
	linkedList.add(22);
	linkedList.add(33);
	linkedList.addLast(44);
	expect(linkedList.get(3)).toBe(44);
});

test('Clears a list', () => {
	const linkedList = new LinkedList();
	linkedList.add(11);
	linkedList.add(22);
	linkedList.add(33);
	linkedList.add(44);
	linkedList.clear();
	expect(linkedList.size()).toBe(0);
});

test('Checks if list contains a specific value', () => {
	const linkedList = new LinkedList();
	linkedList.add(11);
	linkedList.add(22);
	linkedList.add(33);
	linkedList.add(44);
	linkedList.add(55);
	expect(linkedList.contains(33)).toBeTruthy();
});

test('Checks if list does not contain a specific value', () => {
	const linkedList = new LinkedList();
	linkedList.add(11);
	linkedList.add(22);
	linkedList.add(33);
	linkedList.add(44);
	linkedList.add(55);
	expect(linkedList.contains(77)).toBeFalsy();
});

test('Gets value from a specific index', () => {
	const linkedList = new LinkedList();
	linkedList.add(11);
	linkedList.add(22);
	linkedList.add(33);
	linkedList.add(44);
	linkedList.add(55);
	expect(linkedList.get(3)).toBe(44);
});

test('Removes node from a list', () => {
	const linkedList = new LinkedList();
	linkedList.add(11);
	linkedList.add(22);
	linkedList.add(33);
	linkedList.add(44);
	linkedList.add(55);
	linkedList.remove(22);
	expect(linkedList.contains(22)).toBeFalsy();
});

test('Gets the size of a list', () => {
	const linkedList = new LinkedList();
	linkedList.add(11);
	linkedList.add(22);
	linkedList.add(33);
	linkedList.add(44);
	linkedList.add(55);
	linkedList.add(66);
	expect(linkedList.size()).toBe(6);
});
