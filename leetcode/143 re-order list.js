/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

    let slow = head;
    let fast = head;
    let otherHalf = null, prev;

    if(head && head.next == null){ // if one element.
        return head;
    }

    while(fast && fast.next != null){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    if(prev){
        prev.next = null; // disconnect two halves
    }

    otherHalf = slow;

    let current = otherHalf;
    prev = null;
    while(current != null){ // reverse linked list.
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    otherHalf = prev;

    let head1 = head, head2 = otherHalf;

    /***
        [1,2]
        [4, 3]

     */
    let readFromFirst = true, result = null, last = null;
    while(head1 != null || head2 != null){
        let node;
        if(readFromFirst && head1 != null){
            node = head1;
            head1 = head1.next;
        } else if(head2 != null){
            node = head2;
            head2 = head2.next;
        }

        if(node){
            if(!result && node){
                result = node;
            } else if(node && last){
                last.next = node;
            }
        }


        last = node;
        readFromFirst = !readFromFirst;
    }

    return result;
};