//Implement a function called, areThereDuplicates which accepts a variable 
//number of arguments and checks whether there are any duplicates among
//the arguments passed in. You can solve this using the frequency counter 
//pattern OR the multiple pointers pattern.


// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

// Restrictions: Time - O(n); Space - O(n)
// Bonus: Time - O(n log n); Space - O(1)

const areThereDuplicates = function () {
    let obj = {};

    for (let i of arguments) {
        if (typeof i === 'number' || typeof i === 'string') {
            if (!obj[i]) {
                obj[i] = 1;
            } else if (obj[i]) {
                return true;
            }
        }
    }
    return false;
}

console.log(areThereDuplicates(1,8,3,4, 7, 5, 100, 'a', 88, 'a'));