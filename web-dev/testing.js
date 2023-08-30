// let p = document.querySelectorAll('p')

// console.log(p)



// p.forEach(function(item) {
//     if(item.textContent.toLowerCase().includes(' the ')) {
//         item.remove()
//     }
// })


let p = document.querySelectorAll('p');


p.forEach(function (item) {
    if(item.textContent.includes('the')) {item.remove()}

})
