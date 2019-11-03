const SingleNode = require('../data-nodes/SingleNode');

class Stack {
	constructor() {
		this.top = null;
	}

	push(data) {
		const newNode = new SingleNode(data);
		if (!this.top) {
			this.top = newNode;
		} else {
			newNode.next = this.top;
			this.top = newNode;
		}
	}

	pop() {
		if (!this.top) {
			return 'The stack is empty';
		}

		const returnValue = this.top.data;
		this.top = this.top.next;

		return returnValue;
	}

	peek() {
		if (!this.top) {
			return 'The stack is empty.';
		}
		return this.top.data;
	}
}

module.exports = Stack;
