//Given an integer numRows, return the first numRows of Pascal's triangle.
//Input: numRows = 5
//Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

const pascal = function (numRows) {
    const pascalArray = [];

    for (let i = 1; i <= numRows; i++) {
        if (i === 1) {
            pascalArray.push([1]);
        } else if (i === 2) {
            pascalArray.push([1,1]);
        } else {
            const newArray = new Array(i).fill(1);
            pascalArray.push(newArray);

            for(let j = 0; j < i; j++) {

            }
        }
    }
    return pascalArray;
}

console.log(pascal(3))


//take -1 index of pascalArray
//iterate and add 