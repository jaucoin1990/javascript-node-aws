//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

const s = ")[]{}";

const validParens = function (s) {

    if (s[0] === ")" || s[0] === "]" || s[0] === "}") {
        return false;
    }
    let prev;

    for(let i of s) {
        if (prev === "(" && i !== ")" ) return false;
        if (prev === "[" && i !== "]" ) return false;
        if (prev === "{" && i !== "}" ) return false;
        prev = i;
    }
    return true;
}

console.log(validParens(s));