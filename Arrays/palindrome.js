let num = 12345654321; 


let palindromeNum = function (num) {
    //convert num to array
    let spreadNum = [...String(num)];
    //determine half array
    let halfLen = Math.floor(spreadNum.length/2);
    //slice array in half
    let firstHalf = spreadNum.slice(0, halfLen);
    let lastHalf = spreadNum.slice(-halfLen);
    //reverse last half
    lastHalf.reverse()
    //join arrays into string to check equality
    let firstString = firstHalf.join('');
    let secondString = lastHalf.join('');
    

    if(firstString === secondString) {
        return true;
    }

}

console.log(palindromeNum(num));