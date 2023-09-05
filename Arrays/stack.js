class Stack {
    constructor(size) {
        this.data = new Array(size);
    }
    peek() {
        return this.data[this.data.length-1];
    }
    push(value) {
        this.data.push(value);
    }
    pop() {
        this.data.pop();
    }
}