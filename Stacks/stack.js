class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        let newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        }
        else {
            let holder = this.top;
            this.top = newNode;
            this.top.next = holder;
        }
        this.length++;

    }
    pop() {
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        if(this.length > 0) {

            let holder = this.top.next;
            this.top = holder;
            this.length--;
        }
        
    }
}

let stack = new Stack();
stack.push(10);
stack.push(99);
stack.push(55);
stack.push(44);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack)