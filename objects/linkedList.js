const { addConsoleHandler } = require("selenium-webdriver/lib/logging");

class Node {
    constructor(value) {
        this.value = value
        this.next = null
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
        const newNode = new Node(value)

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        const newNode = new Node(value)
        const remainingValue = this.head;
        this.head = newNode;
        this.head.next = remainingValue;
        this.length++;

    }
    insertAtIndex(index, value) {
        let currentNodeOnward;
        let newNode = new Node(value);
        let leader = this.traverseToIndex(index - 1);
        let indexValue = this.traverseToIndex(index);

        leader.next = newNode;
        newNode.next = indexValue;
    }
    remove(index) {
        let leader = this.traverseToIndex(index - 1);
        let front = this.traverseToIndex(index + 1);
        leader.next = front;

    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    printValue() {
        let arrayOfValues = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            arrayOfValues.push(currentNode.value)
            currentNode = currentNode.next;
        }
        return arrayOfValues;
    }
    reverse(linkedList) {
        let length = linkedList.length;
        let traverse = linkedList.head;

        while (length > 0) {
            linkedList.prepend(traverse);
            traverse.next = traverse.next;
            console.log("HELLO")
            console.log(traverse.next)
            traverse = traverse.next;
            length--;

        }
        return linkedList
    }
}
    
let test = new LinkedList(10)
test.append(12)
test.append(17)
// console.log(test.reverse(test));
console.log(test.reverse(test).printValue())



