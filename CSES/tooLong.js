//Let's consider a word too long, if its length is strictly more than 10 characters.
//All too long words should be replaced with a special abbreviation.
//This abbreviation is made like this: write down first and last letter of word 
//and between them we write the number of letters between the first and the last letters. 
//That number is in decimal system and doesn't contain any leading zeroes.
//Thus, "localization" === "l10n"; "internationalization» === "i18n".

const string = 'internationalization»';

const tooLong = function (string) {
    if (typeof string !== 'string') {
        return;
    } else if (string.length < 10) {
        return string;
    } else {
        let first = string[0];
        let last = string[string.length-1];
        let length = string.length - 2;
        return `${first}${length}${last}`
    }
};

console.log(tooLong(string))