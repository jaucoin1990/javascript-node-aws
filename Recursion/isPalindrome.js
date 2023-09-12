//Write a recursive function called isPalindrome which returns true 
//if the string passed to it is a palindrome (reads the same forward and backward).
//Otherwise it returns false.

const string = 'helloolleh';

// const isPalindrome = function(string, forwardIndex=0, backwardIndex=string.length-1) {
//     if (forwardIndex === backwardIndex) {
//         return ''
//     }

//     const forward = string[forwardIndex] + isPalindrome(string, forwardIndex+1);
//     const backward = string[backwardIndex] + isPalindrome(string, forwardIndex, backwardIndex-1);

//     const answer = forward === backward ? true: false
//     return answer
// }

const isPalindrome = function (string, forwardIndex = 0, backwardIndex = string.length-1) {
    if (forwardIndex === backwardIndex || forwardIndex > backwardIndex) {
        return;
    }

    if (string[forwardIndex] !== string[backwardIndex]) {
        return false;
    }
    return true;
}

console.log(isPalindrome(string))