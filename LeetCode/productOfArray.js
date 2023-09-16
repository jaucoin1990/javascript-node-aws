//[1,2,3,4] -> [24,12,8,6]
//determine product and then divide each array el

const arr = [1,-1,3,4,5];

const productOfArray = function (arr) {

    let productOfArrayMinusZeros = 1;
    let zeros = [];

    for (let i in arr) {
        if (arr[i] !== 0) {
            productOfArrayMinusZeros *= arr[i];
        }
        else {
            zeros.push(i);
        }
    }

    if (zeros.length === 1) {
        for (let j in arr) {
            if (j === zeros[0]) {
                arr[j] = productOfArrayMinusZeros;
            }
            else {
                arr[j] = 0;
            }
        }
    }

    if (zeros.length > 1) {
        for (let k in arr) {
            arr[k] = 0;
        }
    }

    if (zeros.length === 0) {
        for (let l in arr) {
            arr[l] = productOfArrayMinusZeros / arr[l]
        }
    }

}

productOfArray(arr)
console.log(arr)