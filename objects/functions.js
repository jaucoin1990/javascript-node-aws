// var farToCel = function (far) {
//     var cel = ((far - 32) / (9 / 5))
//     return cel
// }

// var cel = farToCel(68)

// console.log(cel)

// far
// celcius = (far -  32) * 5/9
// kelvin = (far + 459.67) * 5/9

let displayAllThreeTemps = function (far) {
    let fahrenheit = far
    let celcius = (far -  32) * 5/9
    let kelvin = (far + 459.67) * 5/9

    return {
        fahrenheit: far,
        celcius: celcius,
        kelvin: kelvin
    }
}

console.log(displayAllThreeTemps(10))