let testArray = [1, 6, 3, 4, 5, 5, 9, 9, 8]
let targetNum = 9

var twoSum = function(nums, target) {
    let firstPointer = 0
    let secondPointer = firstPointer + 1
    let length = nums.length

    nums.forEach(function (item, index) {
        let numLookingFor = target - item //9
        if(index === firstPointer) { //0 === 0
            for(let x = secondPointer; x < length; x++) { 
                if(nums[x] === numLookingFor) { //6===9
                    console.log(`${item} + ${numLookingFor} = ${target}`)
                }
            }
        }
        firstPointer++
        secondPointer++
    })


};

twoSum(testArray, targetNum)
