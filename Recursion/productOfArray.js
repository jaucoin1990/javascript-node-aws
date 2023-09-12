//Write a function called productOfArray which takes in an array 
//of numbers and returns the product of them all.

const arr = [1,2,3,10]

const productOfArray = function (arr) {
    var arrIndex = 0;

    const arrayRecursion = function (arr, arrIndex) {
        if(arrIndex === arr.length) {
            return 1;
        }
        return arr[arrIndex] * arrayRecursion(arr, arrIndex+1);

    };
    let answer = arrayRecursion(arr, arrIndex);
    return answer;
}
console.log(productOfArray(arr));