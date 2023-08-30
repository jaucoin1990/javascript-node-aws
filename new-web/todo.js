const todos = [
    {
        text: 'Order cat food',
        completed: false
    },
    {
        text: 'Clean kitchen',
        completed: false
    },
    {
        text: 'Cook dinner',
        completed: true
    },
    {
        text: 'Pick up groceries',
        completed: false
    },
    {
        text: 'Play vids wit da bois',
        completed: true
    }
]

//you have two todos left
//list each todo in a p tag

// let button = document.querySelector('button')
// button.addEventListener('click', function () {
//     console.log('you clicked the button')
// })

// let input = document.querySelector('#input')
// let p = document.createElement('p').textContent
// let body = document.querySelector('body')


// input.addEventListener('input', function(e) {
//     p.textContent = e.target.value
//     console.log(p.textContent)
//     body.appendChild(p)
//     // console.log(p.textContent)
// })


//add a note about the number of todos left
//add all false todos



todos.forEach(function (item) {
    let element = document.createElement('p')
    let locat = document.querySelector('body')
    if(item.completed === false) {
        element.textContent = item.text;
        locat.appendChild(element)

    }
})