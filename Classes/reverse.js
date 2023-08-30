let str = 'hi my name is jeremy';

let reverse = function (str) {
    let reverseString = '';
    for (let i = str.length-1; i >= 0 ; i--) {
        reverseString = reverseString.concat(str[i])
    }
    return reverseString;
}

let reverse2 = function (str) {
    return [...str].reverse().join("") //spread operator
}

console.log(reverse2(str));
