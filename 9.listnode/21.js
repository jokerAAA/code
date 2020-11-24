/**
 * 
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  }
  var res = new ListNode(null);
  var temp = res;
  while(l1 && l2) {
    if (l1.val > l2.val) {
      temp.next = l2;
      l2 = l2.next
    } else {
      temp.next = l1;
      l1 = l1.next;
    }
    temp = temp.next; // temp指针也要移动
  }
  if (l1 || l2) {
    temp.next = l1 || l2;
  }
  return res.next;
};