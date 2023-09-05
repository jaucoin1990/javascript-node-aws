class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    enqueue(value) {
        let newNode = new Node(value);

        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        }
        else {
            this.bottom.next = newNode;
            this.bottom = newNode;
        }
        this.length++;
    }
    dequeue() {
        if(this.top === this.bottom) {
            this.bottom = null;
        }
        if(this.length > 0) {
            this.top = this.top.next;
            this.length--;
        }
    } 
}

let queue = new Queue();
queue.enqueue('Joy');
queue.enqueue('Matt');
queue.enqueue('Pavel');
queue.enqueue('Samir');
queue.dequeue();
queue.dequeue();

console.log(queue.peek());