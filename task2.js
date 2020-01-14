/*
          TASK 2
*/

const calculate = require('./task1')

const num1= 6
const num2= 4

console.log(calculate.add(num1,num2))
console.log("hasil dari Pengurangan : " + calculate.substract(num1,num2))
console.log("hasil dari Perkalian : " + calculate.multiply(num1,num2))
console.log("hasil dari Pembagian : " + calculate.divide(num1,num2))