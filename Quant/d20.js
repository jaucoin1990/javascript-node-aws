
let obj = {}

for (let i = 0; i < 10000; i++) {
    const diceRoll = Math.floor((Math.random() * 20) + 1);
    if (!obj[diceRoll]) {
        obj[diceRoll] = 1;
    }
    else {
        obj[diceRoll]++;
    }
}

console.log(obj)
