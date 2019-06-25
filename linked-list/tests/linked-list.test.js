const LinkedList = require('../LinkedList');

describe('Linked List', () => {
	test('Create new', () => {
		const linkedList = new LinkedList();
		expect(linkedList.size()).toBe(0);
	});

	test('Add node', () => {
		const linkedList = new LinkedList();
		linkedList.add(11);
		expect(linkedList.size()).toBe(1);
	});

	test('Add node as first', () => {
		let result = 44;
		const linkedList = new LinkedList();
		linkedList.add(11);
		linkedList.add(22);
		linkedList.add(33);
		linkedList.addFirst(44);
		expect(linkedList.get(0)).toBe(44);
	});

	test('Add node as last', () => {
		let result = 44;
		const linkedList = new LinkedList();
		linkedList.add(11);
		linkedList.add(22);
		linkedList.add(33);
		linkedList.addLast(44);
		expect(linkedList.get(3)).toBe(44);
	});

	test('Clear list', () => {
		const linkedList = new LinkedList();
		linkedList.add(11);
		linkedList.add(22);
		linkedList.add(33);
		linkedList.add(44);
		linkedList.clear();
		expect(linkedList.size()).toBe(0);
	});

	test('Contains a specific value', () => {
		const linkedList = new LinkedList();
		linkedList.add(11);
		linkedList.add(22);
		linkedList.add(33);
		linkedList.add(44);
		linkedList.add(55);
		expect(linkedList.contains(33)).toBeTruthy();
	});

	test('Does not contain a specific value', () => {
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

	test('Removes node', () => {
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

	test('Gets the first node in the list', () => {
		const linkedList = new LinkedList();
		linkedList.add(11);
		linkedList.add(22);
		linkedList.add(33);
		linkedList.add(44);
		linkedList.add(55);
		linkedList.add(66);
		expect(linkedList.getFirst()).toBe(11);
	});

	test('Gets the last node in the list', () => {
		const linkedList = new LinkedList();
		linkedList.add(11);
		linkedList.add(22);
		linkedList.add(33);
		linkedList.add(44);
		linkedList.add(55);
		linkedList.add(66);
		expect(linkedList.getLast()).toBe(66);
	});

	test('Reverses a list', () => {
		const result = '66,55,44,33,22,11';
		const linkedList = new LinkedList();
		linkedList.add(11);
		linkedList.add(22);
		linkedList.add(33);
		linkedList.add(44);
		linkedList.add(55);
		linkedList.add(66);
		linkedList.reverse();
		expect(linkedList.toArray().join(',')).toBe(result);
	});
});
