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
        
        if(current.next === null){
            console.log(current.data);
            console.log('-'.repeat(10));
        }
    }

    insertNodeAtHead(data){
        const node = new LinkListNode(data);
        node.next = this.head; 
        this.head = node; 
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
linkedList.printLinkedList();

