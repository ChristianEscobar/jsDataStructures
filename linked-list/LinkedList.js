const Node = require('./Node');

class LinkedList {
	constructor() {
		this.head = null;
	}

	add(data) {
		const node = new Node(data);
		if (!this.head) {
			this.head = node;
		} else {
			let temp = this.head;
			while (temp.next) {
				temp = temp.next;
			}

			temp.next = node;
		}
	}

	addFirst(data) {
		const node = new Node(data);
		if (!this.head) {
			this.head = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
	}

	addLast(data) {
		const node = new Node(data);
		if (!this.head) {
			this.head = node;
		} else {
			let temp = this.head;
			while (temp.next) {
				temp = temp.next;
			}

			temp.next = node;
		}
	}

	clear() {
		this.head = null;
	}

	contains(data) {
		if (this.head) {
			let temp = this.head;
			while (temp) {
				if (temp.data === data) {
					return true;
				}
				temp = temp.next;
			}
		}

		return false;
	}

	get(index) {
		if (this.head) {
			let counter = 0;
			let temp = this.head;
			while (temp) {
				if (counter === index) {
					return temp.data;
				}
				temp = temp.next;
				++counter;
			}
		}

		return null;
	}

	getFirst() {
		if (this.head) {
			return this.head.data;
		}

		return null;
	}

	getLast() {
		if (!this.head) {
			return null;
		}

		let temp = this.head;
		while (temp.next) {
			temp = temp.next;
		}

		return temp.data;
	}

	remove(data) {
		if (!this.head) {
			return null;
		}

		let temp = this.head;
		let prev = null;
		while (temp) {
			if (temp.data === data) {
				if (temp === this.head) {
					// Make sure to not loose the head
					this.head = temp.next;
				} else {
					prev.next = temp.next;
				}

				return;
			}
			prev = temp;
			temp = temp.next;
		}
	}

	reverse() {
		if (!this.head) {
			return null;
		}

		let cur = this.head;
		let prev = null;
		let reverseHead = null;
		let lastNodeInReverse = null;
		while (cur) {
			const node = new Node(cur.data);
			node.next = lastNodeInReverse;
			lastNodeInReverse = node;
			reverseHead = lastNodeInReverse;

			prev = cur;
			cur = cur.next;
		}

		this.head = reverseHead;
	}

	size() {
		let total = 0;
		let temp = this.head;
		while (temp) {
			total++;
			temp = temp.next;
		}

		return total;
	}

	toArray() {
		const listArray = [];

		let temp = this.head;
		while (temp) {
			listArray.push(temp.data);
			temp = temp.next;
		}

		return listArray;
	}

	print() {
		const display = [];
		let temp = this.head;
		while (temp) {
			display.push(temp.data);
			temp = temp.next;
		}

		console.log(display);
	}
}

module.exports = LinkedList;
