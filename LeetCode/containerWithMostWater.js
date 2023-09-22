// You are given an integer array height of length n. 
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

const heights = [1,8,6,2,5,4,8,3,7];

const container = function (heights) {
    let maxContainer = 0;
    let indicesOfMaxContainer = [];

    let i = 0;
    let j = i + 1;
    
    while (i < heights.length-1) {
        if (j === heights.length) {
            i++;
            j = i + 1;
        }
        
        let currentContainer = Math.min(heights[i], heights[j]) * (j - i);

        if (currentContainer > maxContainer) {
            maxContainer = currentContainer;
            indicesOfMaxContainer = [i, j]
        }
        j++;
    }
    return maxContainer;
}

console.log(container(heights));