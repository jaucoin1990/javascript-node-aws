class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    } 
    push (value) {
        const node = new Node (value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.length++;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
            this.length++;
        }

    }
    pop () {
        let current = this.head;
        let prev = current;

        while (current.next) {
            prev = current;
            current = current.next;
        }

        prev.next = null;
        this.tail = prev;
        this.length--;
    }
    unshift (value) {
        let temp = this.head;
        this.head = new Node(value);
        this.head.next = temp;
        this.length++;
    }
    shift () {
        this.head = this.head.next;
        this.length--;
    }
    get (index) {
        let current = this.head;

        for (let i = 0; i < this.length; i++) {
            if (i === index) {
                console.log(current.value);
            }
            current = current.next;
        }
    }
    set (index, value) {
        let current = this.head;

        for (let i = 0; i < this.length; i++) {
            if (i === index) {
                current.value = value;
            }
            current = current.next;
        }
    }
    insert (index, value) {
        const node = new Node (value);
        let current = this.head;
        let prev = current;

        for(let i = 0; i < this.length; i++) {
            if (i === index) {
                this.length++;
                let temp = current;
                prev.next = node;
                node.next = temp;
                break;
            }
            prev = current;
            current = current.next;
        }
    }
    remove (index) {
        let current = this.head;
        let prev = current;

        for(let i = 0; i < this.length; i++) {
            if (i === index) {
                this.length--;
                prev.next = current.next;
                break;
            }
            prev = current;
            current = current.next;
        }
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;

        }

    }
}

let list = new LinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.reverse();
list.get(1)
list.get(2)
// console.log(list)