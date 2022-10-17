const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.current = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (this.length === 0) {
      const newNode = new ListNode(value);
      this.head = newNode;
      this.current = newNode;
      this.length++;
      return this;
    } else {
      let newNode = new ListNode(value);
      this.tail = newNode;
      this.current.next = newNode;
      this.current = newNode;
      this.length++;
      return this;
    }
  }

  dequeue() {
    const forReturn = this.head.value;
    this.head = this.head.next;
    this.length--;

    return forReturn;
  }
}

module.exports = {
  Queue,
};
