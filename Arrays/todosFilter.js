const todos = [
    {
        text: 'Order cat food',
        completed: true
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

//get list of todos that are false

let todosFunc = function (todos) {
return todos.filter((todoItem =>
    !todoItem.completed
))}

console.log(todosFunc(todos))