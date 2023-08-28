//with callbacks (functions in functions), you have access to the item itself, such as this, is, and cool. First arg.
//You also have access to the index. Second arg.

testArray = ['this', 'is', 'cool']

testArray.forEach(function (item, index) {
    console.log(`At index ${index}, the item stored is ${item} `
)})