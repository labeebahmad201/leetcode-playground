class LinkListNode {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertNode(data){
        let current = this.head;
        while(current && current.next != null){
           current = current.next;
        }

        // when loop ends current points to the last node;
        const newNode = new LinkListNode(data);
        if(this.head === null){
            this.head = newNode
        } else {
            current.next = newNode;
        }
    }

    printLinkedList(){
        let current = this.head;
        while(current && current.next != null){
            console.log(current.data);
            console.log('-'.repeat(10));
            current = current.next;
        }
        
        if(current && current.next === null){
            console.log(current.data);
            console.log('-'.repeat(10));
        }
    }

    insertNodeAtHead(data){
        const node = new LinkListNode(data);
        node.next = this.head; 
        this.head = node; 
    }

    removeNthLastNode(n){
        if(this.head === null){
            return this.head;
        }

        let left = this.head, right = this.head, i = 0;
        while(i < n && right.next != null){
            right = right.next;
            i++;
        }

        while(right.next != null){
            right = right.next;
            left = left.next; 
        }

        if(this.head === left){
            this.head = left.next;
        } else {
            left.next = left.next.next ? left.next.next : null;
        }

        return this.head;      
    }

    find(data){
        let current = this.head;
        while(current.next != null){
            if(current.data === data){
                return current.data;
            }
            current = current.next;
        }

        if(current.data === data){
            return current.data;
        }

        return null;
    }

    remove(data){
        let current = this.head;
        let prev = null;
        while(current.next != null){
            if(current.data === data){
                if(this.head === current){
                    this.head = current.next ? current.next : null;
                }
                prev.next = current.next ? current.next : null;
            }
            prev = current;
            current = current.next;
        }

        if(current && current.data === data){
            prev.next = null;
        }
    }

}

const linkedList = new LinkedList();
linkedList.insertNode('a');
linkedList.insertNode('b');
linkedList.insertNode('c');
linkedList.insertNode('d');
linkedList.insertNode('e');
linkedList.insertNodeAtHead('f');
linkedList.insertNodeAtHead('g');
linkedList.insertNodeAtHead('h');
linkedList.insertNodeAtHead('i');
linkedList.insertNodeAtHead('j');
linkedList.insertNodeAtHead('k');
linkedList.insertNodeAtHead('l');
let head = linkedList.removeNthLastNode(1);
console.log('head', head);
linkedList.printLinkedList();
console.log('found a?', linkedList.find('a'));
console.log('found a?', linkedList.find('b'));
console.log('found a?', linkedList.find('c'));
