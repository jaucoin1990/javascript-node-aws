class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        let node = new Node(value);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }
    pop() {
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
        this.length--;
    }
    shift () {
        this.head.next.prev = null;
        this.head = this.head.next;
        this.length--;

    }
    unshift (value) {
        let node = new Node (value);
        let currentHead = this.head;
        currentHead.prev = node;
        this.head = node;
        node.next = currentHead;
        this.length++;
    }
    get(index) {
        let current = this.head;
        for(let i = 0; i < this.length; i++) {
            if (i === index) {
                console.log(current.value);
                break;
            }
            current = current.next;
        }
    }
    set(index, value) {
        let current = this.head;
        for(let i = 0; i < this.length; i++) {
            if (i === index) {
                current.value = value;
                break;
            }
            current = current.next;
        }

    }
    insert (index, value) {
        let node = new Node(value);
        let current = this.head;

        for (let i = 0; i < this.length; i++) {
            if(i === index) {
                let remainder = current;
                current = 
            }
        }
    }
        
}

let list = new DoublyLinkedList();

list.push(10);
list.push(20);
list.push(30);
list.unshift(5);
list.set(1, 21)

console.log(list);