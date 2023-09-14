//Given two arrays, create a function that let's a user know (true/false) 
//whether these two arrays contain any common items

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'a', 'i'];


let complimentFinder = function (array1, array2) {
    let map = {};
    let confirm = false;

    array1.forEach(function (item) {
        map[item] = true;
    })

    array2.forEach(function (item) {
        if(map[item]) {
            confirm = true;
        }
        
    })
    return confirm
}

console.log(complimentFinder(array1, array2))