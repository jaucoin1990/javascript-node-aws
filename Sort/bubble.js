const arr = [10, 1, 4, 2, 6, 9, 13, 15, 4, 6];

const bubbleSort = function (arr) {
    for(let i = arr.length; i > 0; i--) {

        var cont = true;

        for(let j = 0; j < i-1; j++) {
            if (arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                cont = false;
            }
        }
        if(cont = true) {
            break;
        }

    }
};

bubbleSort(arr)
console.log(arr)