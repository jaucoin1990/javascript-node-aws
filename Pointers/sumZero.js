//write func that accepts a sorted array of ints
//return first pair that sums to 0

const arr = [-4, -2, -1, 0, 4, 5, 9];

const sumZero = function (arr) {
    //pointers to exit while loop
    let p1 = 0;
    let p2 = arr.length-1;
    //while loop
    while (p1 < p2) {

        if (arr[p1] + arr[p2] === 0) {
            return [arr[p1], arr[p2]];
        }
        else if ((arr[p1] * -1) > arr[p2]) {
            p1++;
        } else {
            p2--;
        }
    }
}

console.log(sumZero(arr))