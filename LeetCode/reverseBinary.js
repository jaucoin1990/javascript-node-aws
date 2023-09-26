// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents 
// the unsigned integer 43261596, so return 964176192 which its binary representation 
// is 00111001011110000010100101000000.

const num = 43261596;

const reverseBinary = function (num) {
    let newNum = "";

    for (let i = 0; i < 32; i ++ ) {
        if (num & 1) {
            newNum += 1
        } else {
            newNum += 0;
        }

        num = num >>> 1;
    }
    return parseInt(newNum, 2);
}

console.log(reverseBinary(num))