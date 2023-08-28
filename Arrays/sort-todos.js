const todos = [
    {
        text: 'Order cat food',
        completed: true
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
        completed: true
    },
    {
        text: 'Play vids wit da bois',
        completed: false
    }
]

//sort todos list so false is on top

let sortTodos = function (todos) {
    return todos.sort(
        function(a, b) {
            if(a.completed) {return 1}
            else if(b.completed) {return -1}
            else {return 0}
        }
    )
}
console.log(sortTodos(todos))