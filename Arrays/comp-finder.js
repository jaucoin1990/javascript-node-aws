//Given two arrays, create a function that let's a user know (true/false) 
//whether these two arrays contain any common items

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'a', 'i'];

let compFinder = function (array1, array2) {
    isMatch = false;
    array1.forEach(function(item1, index) {
        array2.find(function (item2) {
            if(item1 === item2) {
                isMatch = true;
                
            } 
        })
    })
    return isMatch;
}

console.log(compFinder(array1, array2))