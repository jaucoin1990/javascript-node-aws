const { BigNumberVisitor } = require("js2py");

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);

        if(this.root === null) {
            this.root = newNode;
        } 
        else {
            let currentNode = this.root;
            while(true) {
                if(newNode.value < currentNode.value) {
                    if(currentNode.left === null) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                    else {
                        if(currentNode.right === null) {
                            currentNode.right = newNode;
                            return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    lookup(value) {
        let currentNode = this.root;
        
        while(currentNode) {
            if (currentNode.value === value) {
                return value;        
            } else if (value < currentNode.value){
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;

    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(2);
tree.insert(22);
tree.insert(25);
tree.insert(14);
console.log(tree.lookup(2));
// console.log(tree);