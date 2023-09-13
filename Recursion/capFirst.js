//Write a recursive function called capitalizeFirst. Given an array of strings, 
//capitalize the first letter of each string in the array.

const arrOfStrings = ['hello', 'dog', 'cat', 'puppy', 'kitty'];

const capitalizeFirst = function (arrOfStrings, index=0) {
    const newArr = [];
    if (index === arrOfStrings.length) {
        return newArr;
    }
    newArr.push((arrOfStrings[index][0].toUpperCase() + arrOfStrings[index].slice(1)));
    newArr.push(...capitalizeFirst(arrOfStrings, index + 1));
    return newArr;
};

console.log(capitalizeFirst(arrOfStrings))