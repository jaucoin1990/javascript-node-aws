let p = document.querySelectorAll('p')

console.log(p)



p.forEach(function(item) {
    if(item.textContent.toLowerCase().includes(' the ')) {
        item.remove()
    }
})