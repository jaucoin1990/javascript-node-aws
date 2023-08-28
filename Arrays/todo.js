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

//Create function to remove a todo by text value IF it's in the array

let removeTodo = function (array, title) {
    let indexOfItem = 0
    let todoTitle = array.find(function (item, index) {
        indexOfItem = index
        return item.text === title
    })
    return indexOfItem
}
console.log(todos)
let newIndex = removeTodo(todos, 'Play vids wit da bois')
todos.splice(newIndex, 1)

console.log(todos)
