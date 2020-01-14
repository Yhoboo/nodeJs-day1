/*
            TASK 1
*/

// test pake backtick sebagai ganti '+'
const add = (num1, num2) =>{
    let result = num1 + num2
    return `hasil dari Penjumlahan : ${result}`
}

const substract = (num1, num2) =>{
    return num1-num2;
}

const multiply = (num1, num2) =>{
    return num1*num2;
}

const divide = (num1, num2) =>{
    return num1/num2;
}

module.exports = {
    add,
    substract,
    multiply,
    divide,
}