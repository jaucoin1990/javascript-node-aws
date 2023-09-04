class Node {
    constructor(value) {
        this.value = value
        this.previous; 
        this.next = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            previous: null,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value)

        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head; // Set the next of the new node to the old head
        this.head.previous = newNode; // Update the previous of the old head to the new node
        this.head = newNode; // Update the head to be the new node
        this.length++;

    }
    insertAtIndex(index, value) {
        if (index < 0 || index > this.length) {
            console.error("Invalid index");
            return;
        }
    
        const newNode = new Node(value);
    
        if (index === 0) {
            // Insert at the beginning (prepend)
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        } else if (index === this.length) {
            // Insert at the end (append)
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            // Insert at a specific index
            let leader = this.traverseToIndex(index - 1);
            let indexValue = leader.next;
    
            newNode.previous = leader;
            leader.next = newNode;
            newNode.next = indexValue;
            indexValue.previous = newNode;
        }
    
        this.length++;
    }
    remove(index) {
        let leader = this.traverseToIndex(index - 1);
        let front = this.traverseToIndex(index + 1);
        front.previous = leader;
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
}
    
let test = new DoublyLinkedList(10)
test.append(12)
test.append(99)
test.prepend(4)
test.insertAtIndex(2, 45)

console.log(test.printValue())