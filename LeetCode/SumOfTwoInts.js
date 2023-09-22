// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Example 1:
// Input: a = 1, b = 2
// Output: 3

// Example 2:
// Input: a = 2, b = 3
// Output: 5


const decimalToBinary = function(num) {

    let divisions = ''
    let extraOnes;

    while (num > 1) {
        if(num % 2 === 0) {
            console.log(divisions)
            num /= 2;
            divisions = divisions.concat('1')
        } else {
            num -= 1;
            extraOnes = extraOnes + 1;
        }
    }
    return divisions;
}

console.log(decimalToBinary(10))