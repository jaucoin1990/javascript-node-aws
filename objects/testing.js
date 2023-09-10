//create func called same that returns if every value in arr1 has a corresponding
//squared value in arr2
//every value must be accounted for, and the freq must be the same

const arr1 = [1,2,3,2];
const arr2 = [1,4,9];

const same = (arr1, arr2) => {
    //create object with squared value/false from arr1
    const arrToObj = {};
    let answer;

    if (arr1.length !== arr2.length) {
        answer = false;
        return answer;
    }

    for (let i of arr1) {
        const sq = Math.pow(i, 2);

        if (arrToObj[sq] === undefined){
            arrToObj[sq] = 1;
        } else {
            arrToObj[sq] = arrToObj[sq] + 1;
        }
        
    }
    //search for those values from arr2 in the obj
    for (let j of arr2) {
        if(arrToObj[j] === undefined) {
            answer = false;
        }
        else if (arrToObj[j]) {
            arrToObj[j]--;
        }
    }
    for (let k in arrToObj) {
        // console.log(arrToObj[k])
        // console.log(arrToObj[k] > 0)
        if(arrToObj[k] > 0) {
            answer = false;
            return answer;
        }
        else {
            answer = true;
        }
    }
    return answer
}

console.log(same(arr1,arr2))