// this is how we make modules.
// we create a seperate files and put related finctions/ functionality there together like packages in JAVA.
// use require() in the file in which you want to use modules/functions of this file.

const addition = (value1, value2) => {
    return value1 + value2
}
const subtraction = (value1, value2) => {
    return value1 - value2
}
const multiplication = (value1, value2) => {
    return value1 * value2
}
const division = (value1, value2) => {
    return value1 / value2
}
const power = (value, power) => {
    let result = value
    for(let i=1 ; i<power ; i++){
        result *= value
    }
    return result
}
const square = (value) => {
    return value*value
}

// we can not use functions outside the module because its encapusalted.

// so we have to define that what functions we have to make open/public so other files/modules can also use that.

// one way to export modules
/*
    module.exports.add = addition
    module.exports.sub = subtraction
    or
    exports.add = addition
    exports.sub = subtraction

    // .add is the label we must mention.
    // because in main file we will use it as calc.ass
*/

// another way...
module.exports = {
    // label are name by which it will be accsessible in other files.
    add: addition,
    sub: subtraction,
    mul: multiplication,
    div: division,
    sqrt: square,
    pow: power,
}

// another way...
// exports.add = function addition(val1, val2){
//      return val1 + val2;
//}

// now we can use it in other files