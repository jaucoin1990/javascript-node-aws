class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }
    set(key, value) {
        let hash = this._hash(key);

        if (!this.data[hash]) {
            this.data[hash] = [];
        }
        this.data[hash].push([key, value])
    }
    get(key) {
        let hash = this._hash(key);
        return this.data[hash][0][1]
    }
    getKeys() {
        let keysKeys = [];
        this.data.forEach(function (item, index) {
            if(item) {
                keysKeys.push(item[0][0]);
            }
        })
        return keysKeys;
    }
}

const testing = new HashTable(50);

// testing.set('apple', 100000);
// testing.set('banana', 84);
// testing.set('watermelon', 99);
// testing.set('pear', 8777);
// testing.set('melon', 84575);
// testing.set('raspberry', 3456);

for (let i = 0; i < 101; i++) {
    let randNum = Math.floor(Math.random()*100);
    testing.set(`apple${randNum}`, randNum);

}

console.log(testing.get('apple28'));