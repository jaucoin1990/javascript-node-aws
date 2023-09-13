//Write a function called power which accepts a base and an exponent. 
//The function should return the power of the base to the exponent. 
//This function should mimic the functionality of Math.pow()
// Do not worry about negative bases and exponents.

const power = function (base, exp) {
    if (exp === 1) {
        return base;
    }

    return base * power(base, exp-1)
};

console.log(power(5, 3))