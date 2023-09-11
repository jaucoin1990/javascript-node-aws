//given two strings, write func to determine if second string
//is an anagram to the first string
//return true or false


const str1 = 'hello';
const str2 = 'olehl';

const anagramFinder = function (str1, str2) {
    const strToObj = {};

//check that strings are same len and are not equal
    if(str1.length !== str2.length) {
        return false;
    } else if (str1 === '' && str2 === '') {
        return true;
    } else if (str1 === str2) {
        return false;
    }
    
//create freq counter in obj w/ str1
    for(let i of str1) {
        strToObj[i] ? strToObj[i]++ : strToObj[i] = 1;
    }
//loop str2 and lower count if char present in obj
    for(let j of str2) {
        if(strToObj[j] > 0) {
            strToObj[j]--;
        } else {
            return false;
        }
    }
//make sure obj is zeroed out
    for(let k in strToObj) {
        if(strToObj[k] > 0) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(anagramFinder(str1, str2));