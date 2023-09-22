//add two numbers without using the + or - opperators

const numOne = 3;
const numTwo = 3;

const binarySum = function (numOne, numTwo) {

    while (numTwo !== 0) {
        let carry = numOne & numTwo; //determine where a 1 exists in both binary values (will need to carry this to a zero value)
        numOne ^= numTwo; //xor will return 1 where 1 & 0 exist and 0 elsewhere
        numTwo = carry << 1; //carry the carry value until it gets to 0 slot

    }
    return numOne;
}

console.log(binarySum(numOne, numTwo));
