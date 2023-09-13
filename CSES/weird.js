//Consider an algorithm that takes as input a positive integer n
//If n is even, the algorithm divides it by two, and if n
//is odd, the algorithm multiplies it by three and adds one. The algorithm repeats this, until n
//is one. For example, the sequence for n=3

//3→10→5→16→8→4→2→1


const num = 3;

const func = function(num) {
    let string = [];

    const weird = function (num) {
        string.push(num)
        if (num === 1) {
            return;
        }
        
        if (num % 2 === 0) {
            weird(num/2);
        }
        else if (num % 2 !== 0) {
            weird((num * 3)+ 1)
        }
    }
    weird(num)
    return string;
}
console.log(func(num))