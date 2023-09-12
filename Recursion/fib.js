//Write a recursive function called fib which accepts a number
//returns the nth number in the Fibonacci sequence.
//The Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8
//Starts with 1 and 1; every number thereafter is equal to the sum of 
//the previous two numbers.

// const fib = function (num) {

//     if (num === 0) {
//         return 0;
//     }; 
//     if (num < 3) {
//         return 1;
//     };
//     let arr = [0,1,1]
//     let index = 2;

//     if (num === index) {
//         return 0;
//     }
//     index++;
//     let add = arr[arr.length-2] + arr[arr.length-1];
//     arr.concat([...add])
//     return arr
    
// };
//  console.log(fib(num))

const num = 1; //21

const fib = function (num, count=3, fibNumOne=1, fibNumTwo=1) {
    if (num <= 2) {
        return 1;
    }

    if(count === num) {
        return fibNumOne + fibNumTwo;
    }
    return fib(num, count + 1, fibNumTwo, fibNumTwo + fibNumOne)

}

console.log(fib(num));

//3 !== 6
//6, 4, fib2 = 2, fib1 = 1