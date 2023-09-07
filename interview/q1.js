//write a func that accepts a string as an arg
//func should cap ONLY every other letter
//func should then return converted string

let str = 'hello'

let stringConverter = function (str) {
    let convertedString = ''
    if(typeof str === 'string') {
        for(let i = 0; i < str.length; i++) {
            if(i % 2 !== 0) {
                let newLetter = str[i].toUpperCase();
                convertedString = convertedString + newLetter;
            } else {
                convertedString = convertedString + str[i];

            }
        }     
    } else {
        convertedString =  'that is no string, sir or madam'}

    return convertedString;
}

console.log(stringConverter(str));


