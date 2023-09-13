var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  function nestedEvenSum (obj1) {

    var evenSum = 0;

    const nestedRec = function (obj) {
        for(let i in obj) {
            if (typeof obj[i] === 'object') {
                nestedRec(obj[i])
            }
            if (typeof obj[i] === 'number') {
                evenSum += obj[i];
            }
        }
    }
    nestedRec(obj1);
    return evenSum;
}

  
console.log(nestedEvenSum(obj1));

