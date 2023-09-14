const shortString = 'dude';
const longString = 'omgwdudeow';

const subStringFinder = function (shortString, longString) {

    let checker = '';
    let count = shortString.length;

    for (let i in longString) {
        if(longString[i] === shortString[0]) {
            for(let j in shortString) {
                if(shortString[j] === longString[i] && count > 0) {
                    checker = checker + longString[i];
                    i++;
                    count--;
                }
            }
        }
    }
    if (checker === shortString) {
        return true
    } else {}
    return false
}

console.log(subStringFinder(shortString, longString))