/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let current = head;

    let size = 0;
    while(current != null){
        current = current.next;
        size++;
    }

    current = head;
    let position = 0; // current position
    let prev;
    while(current != null){
        if(size-position === n){
            if(prev){
                prev.next = current?.next || null;
            } else {
                head = head.next;
            }
        }
        prev = current;
        position++;
        current = current.next;
    }

      
    return head;
};