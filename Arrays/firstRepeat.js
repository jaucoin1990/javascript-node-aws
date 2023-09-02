//given an array, return the the num that repeats first

let arr = [1, 1, 55, 61, 3, 5, 6, 7, 9];


//Questions: size of array? Does a nested for loop make sense? Expect indefinite size of array.
//Will the array only contain numbers? Should I run a check? Check for nums. 


let firstDupFinder = function (arr) {
    //store numbers passed
    let numObj = {};
    let numFound = 0;

    //loop through nums
    for (let i = 0; i < arr.length-1; i++) {
        //check if num
        if (typeof arr[i] === 'number') {
            //store num in object for lower time complexity
            if(!numObj[arr[i]]) {
                numObj[arr[i]] = arr[i];
            }
            else {
                numFound += arr[i];
                return numFound;
            }
        }
    }

}

console.log(firstDupFinder(arr))

