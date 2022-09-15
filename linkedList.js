// User defined class node
class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(value) {
    this.head = new ListNode(value, this.head);
    this.size++;
  }

  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  insertLast(value) {
    let node = new ListNode(value);
    let current;

    if (!this.head) {
      thise.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}

const l = new LinkedList();
l.insertFirst(4);
l.insertFirst(3);
l.insertFirst(2);
l.insertFirst(1);
l.insertLast(5);
l.printListData();

function solution(l, k) {
  var current = l;
  var ahead = l;
  if (k <= 1) {
    //only one item in list or empty
    return current;
  }
}

function reverse(l) {
  var current = l;
  var next = (prev = null);
  while (current) {
    next = current.next; //save next
    current.next = prev; //reverse
    prev = current; // advance prev
    current = next; //advance current
  }
  console.log(prev);
  return prev;
}

// reverse(l);
