//Write a recursive function called reverse which accepts a string and returns a new string in reverse.

const string = 'hello';

const reverse = function (string, index=string.length-1) {
    if (index === 0) {
        return string[index]
    }
    return string[index] + reverse(string, index-1)

}

console.log(reverse(string))