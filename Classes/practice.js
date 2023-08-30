//Creating a new Class

class ArrayManager {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index]
        
    }
    push(data) {
        this.data[this.length] = data;
        this.length++
        return this.length
    }
    pop() {
        delete this.data[this.length-1]
    }
    delete(index) {
        delete this.data[index]
        this.length--
        this.reIndex(index)

    }
    reIndex(index) {
        let len = this.length - 1
        for(let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
    }

}

const arr = new ArrayManager();
arr.push('hi')
arr.push('hello')
arr.push('hola')
arr.push('bienvenedos')
arr.push('hey')
arr.push('sup')
arr.push('wassup')
arr.pop()
arr.delete(2)
console.log(arr)