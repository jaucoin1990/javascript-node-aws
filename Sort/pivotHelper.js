//given an array, return where the starting index value should be if the array were sorted
//input: arr, start, end

const arr = [5, 3, 6, 7, 3, 4, 9, 10, 11];

const pivotHelper = function (arr, start = 0, end = arr.length - 1) {
    let pivotCounter = start;

    for (let i = start + 1; i <= end; i++) {
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

const quickSort = function (arr, start = 0, finish = arr.length - 1) {
    if (start < finish) {
        const pivotCounter = pivotHelper(arr, start, finish);
        quickSort(arr, start, pivotCounter - 1);
        quickSort(arr, pivotCounter + 1, finish);
    }
}

quickSort(arr);
console.log(arr); // Sorted array
