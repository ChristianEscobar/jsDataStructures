const Bst = require('../BST');

describe('Binary Search Tree', () => {
	test('it should add a node to a tree', () => {
		const bst = new Bst();
		bst.add(1, null, null);
		console.log(bst.print());
	});
});
