//Write a function expect that helps developers test their code. 
//It should take in any value val and return an object with the following two functions.

//toBe(val) accepts another value and returns true if the two values === each other. 
//If they are not equal, it should throw an error "Not Equal".

//notToBe(val) accepts another value and returns true if the two values !== each other. 
//If they are equal, it should throw an error "Equal".

let value = 10;

let fn = function (value) {
    return {
        value: value,
        toBe: function (otherValue) {
            if (value === otherValue) {
                return true;
            }
            
            return 'Not Equal';
        },
        notToBe: function (otherValue) {
            if (value != otherValue) {
                return true;
            }
            return 'Equal';
        }
    }
}

console.log(fn(10).notToBe([10,2, 'hello']))