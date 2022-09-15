function solution(head, k) {
  if (head == null) return null;
  var current = head;
  var next = null;
  var prev = null;

  var count = 0;
  /* Reverse first k nodes of linked list */
  // get size

  var size = 0;
  while (current) {
    size++;
    current = current.next;
  }
  current = head;

  while (count < k && current != null) {
    if (size >= k) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      count++;
    } else {
      prev = current;
      current = next;
      count++;
    }
  }

  /* next is now a pointer to (k+1)th node. Recursively call for the list starting from current. And make rest of the list as next of first node */
  if (next != null) {
    head.next = solution(next, k);
  }

  // prev is now head of input list
  return prev;
}

module.exports = { solution };
