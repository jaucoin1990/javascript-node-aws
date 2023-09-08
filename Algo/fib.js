//for a given num, return the index within the fib sequence
//may need to return multiple values

const fib = function (num) {
    let fibby = [0];
    let index = 0;
    if (fibby[index] === num) {
        return 'done'
    } else {
        if (fibby[index] === 0) {
            fibby.push(1);
            index++;
        } else {
            fibby.push(fibby[index-1] + fibby[index])
            index++;
        }
        
    }
    return fibby, index
}

console.log(fun())