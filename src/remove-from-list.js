const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
  
function removeKFromList(l, k) {
    let head = l;
    let previous = l;
    let current = l;
    while(current.next !== null) {
      if(head.next === null && head.value === k) return null;
      if(head.value === k && head.next != null) {
        head = head.next;
        previous = head;             
        current = head;           
        continue;
      }
     
      
      if(current.value === k) {
        current = current.next; 
          if(current.value === k) {
            previous.next = current.next;
            previous = current;
          } else {
          previous.next = current;
          previous = current;
          }
      } 
      else {
        previous = current;
        current = current.next;
        continue;
      }
    }

    if(current.value === k) {
      previous.next = null;
      return head;
    }

    return head;
  
}

module.exports = {
  removeKFromList
};
