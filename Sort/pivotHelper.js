//given an array, return where the starting index value should be if the array were sorted
//input: arr, start, end

const arr = [5, 3, 6, 7, 3, 4, 9, 10, 11];


const pivotHelper = function (arr, start, end) {
    start = 0;
    end = arr.length - 1;
    let pivotCounter = 0;

    for(let i = start + 1; i < end; i++) {
        if (arr[i] < arr[start]) {
            pivotCounter += 1;
            let temp = arr[i];
            arr[i] = arr[pivotCounter];
            arr[pivotCounter] = temp;
        }
    }

    let temp = arr[start];
    arr[start] = arr[pivotCounter];
    arr[pivotCounter] = temp;

    return pivotCounter;
}

console.log(pivotHelper(arr));
console.log(arr)