class Node {
    constructor(value) {
        this.data = {
            value: value,
            next: null
        };
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value).data

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        const newNode = new Node(value).data
        const remainingValue = this.head;
        this.head = newNode;
        this.head.next = remainingValue;
        this.length++;

    }
    insertAtIndex(index, value) {

    }
    insertAfterFirstValue(afterValue, valueToAdd) {
        
    }
}
    
let test = new LinkedList(10)
test.append(12)
test.append(17)
test.prepend(4)
console.log(test)



