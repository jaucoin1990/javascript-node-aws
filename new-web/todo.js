const todos = [
    {
        text: 'Order cat food',
        completed: false
    },
    {
        text: 'Clean kitchen',
        completed: true
    },
    {
        text: 'Cook dinner',
        completed: false
    },
    {
        text: 'Pick up groceries',
        completed: true
    },
    {
        text: 'Play vids wit da bois',
        completed: false
    }
]

//you have two todos left
//list each todo in a p tag

let button = document.querySelector('button')
button.addEventListener('click', function () {
    console.log('you clicked the button')
})

let input = document.querySelector('#input')
let p = document.createElement('p').textContent
let body = document.querySelector('body')


input.addEventListener('input', function(e) {
    p.textContent = e.target.value
    console.log(p.textContent)
    body.appendChild(p)
    // console.log(p.textContent)
})
