class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
  let carry = 0;
  let result = new ListNode();
  let head = result;
  while (l1 || l2) {
    let sum = carry;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    carry = Math.floor(sum / 10);
    result.next = new ListNode(sum % 10);
    result = result.next;
  }
  if (carry) {
    result.next = new ListNode(carry);
  }
  return head.next;
}
