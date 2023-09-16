//sort an array by moving, one at a time, the lowest value in
//the array to the front and repeating

const arr = [1, 4, 7, 3, 9, 2, 18, 53, 5];

const selectionSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }
        };
    };
};

selectionSort(arr)
console.log(arr);