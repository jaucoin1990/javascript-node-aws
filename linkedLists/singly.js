class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class singlyLinked {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
            this.length += 1;
        } else {
            this.tail.next = node;
            this.tail = node;
            this.length += 1;
        }
        return this;
    }
    pop() {
        let current = this.head;
        let prev = current;

        while(current.next) {
            prev = current;
            current = current.next;
        }
        prev.next = null;
        this.tail = prev;
        this.length -= 1;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

const list = new singlyLinked();
list.push("hello")
list.push("hey")
list.push("hola")
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
// console.log(list);