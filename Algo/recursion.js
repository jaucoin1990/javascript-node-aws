//use recursive func for factorials

let num = 5;

const factorial = function(num) {

    if(num === 1) {
        return 1;
    }

    return num * factorial(num - 1)
}

let total = factorial(5);

console.log(total)