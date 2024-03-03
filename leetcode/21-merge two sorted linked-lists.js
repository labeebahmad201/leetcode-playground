/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head1 = list1;
    let head2 = list2;
    let merged = null;
    let last = null;

    if(!head1){
        return head2;
    }

    if(!head2){
        return head1;
    }

    while(!!head1 && !!head2){
        if(head1.val <= head2.val){
            if(!last){
                merged = head1;
            } else {
                last.next = head1;
            }
            last = head1;
            head1 = head1.next;            
        } else if (head1.val > head2.val){
            if(!last){
                merged = head2;
            } else {
                last.next = head2;
            }
            last = head2;
            head2 = head2.next;
        }

    }

    if(!head1 && !!head2){
        last.next = head2;
    } else if(!!head1 && !head2){
        last.next = head1;
    }

    return merged;
};

