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

  let position = indexOfEl(l, k);

  while (position !== -1) {
    let current = l;

    if (position === 0) {
      l = current.next;
    } else {
      let prev = null;
      let index = 0;
      while (index < position) {
        prev = current;
        current = current.next;
        index += 1;
      }
      prev.next = current.next;
    }
    position = indexOfEl(l, k);
  }
  return l;
}

function indexOfEl(l, element) {
  let current = l;
  let i = 0;
  while (current) {
    if (current.value === element) {
      return i;
    }
    current = current.next;
    i += 1;
  }
  return -1;
}

module.exports = {
  removeKFromList
};
