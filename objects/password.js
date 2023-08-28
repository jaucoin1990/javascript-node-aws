let isValidPassword = function (password) {
    if(password.length >= 8 && password.includes('password') == false) {
        return true
    } else {return false}
}

console.log(isValidPassword('testing1password'))