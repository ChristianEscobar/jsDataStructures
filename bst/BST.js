const Node = require('./Node');

class Bst {
	constructor() {
		this.root = null;
	}

	add(data) {
		const traverse = function(data, curNode) {
			if (data < curNode.data) {
				if (!curNode.left) {
					const newNode = new Node(data);
					curNode.left = newNode;
					return;
				} else {
					// Go left
					return traverse(data, curNode.left);
				}
			} else if (data > curNode.data) {
				if (!curNode.right) {
					const newNode = new Node(data);
					curNode.right = newNode;
					return;
				} else {
					// Go right
					return traverse(data, curNode.right);
				}
			}
		};

		if (!this.root) {
			const node = new Node(data, null, null);
			this.root = node;
		} else {
			traverse(data, this.root);
		}
	}

	print() {
		console.log(JSON.parse(JSON.stringify(this.root)));
	}
}

module.exports = Bst;
