/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const dummyNode = new ListNode(0);
  dummyNode.next = head;
  let slowPointer = dummyNode;
  let fastPointer = dummyNode;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer === fastPointer) {
      return true;
    }
  }

  return false;
};
