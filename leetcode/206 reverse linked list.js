

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = head, prev = null;
    while(current != null){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    head = prev;

    return head;
};