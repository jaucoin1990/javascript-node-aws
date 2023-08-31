//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//Note that you must do this in-place without making a copy of the array.


let nums = [0, 1, 4, 19, 0, 0, 45, 0, 0];

let moveZeroes = function(nums) {

    let zeroCounter = 0;

    nums.forEach(function (item) {
        if (item === 0) {
            zeroCounter++;
        }
    })

    let numsIndex = 0;

    while (zeroCounter > 0) {
        if (nums[numsIndex] === 0) {
            nums.splice(numsIndex, 1);
            nums.push(0);
            zeroCounter--;
        }
        else {
            numsIndex++
        }
    }
    
};


moveZeroes(nums)

console.log(nums)