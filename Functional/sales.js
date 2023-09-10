let product = {
    item: 'couch', 
    price: 45,
}


// let createSalesFunction = function(discount) {
//     return function(product) {
//         return product.price - (product.price * discount)
//     }
// }

// let smallSale = createSalesFunction(.15)
// console.log(smallSale(product))








const salesFunctionCreate = function (salesTax) {
    return function (product) {
        return product.price - (product.price * salesTax)
    }
}

const smallSale = salesFunctionCreate(.15);
console.log(smallSale(product));

