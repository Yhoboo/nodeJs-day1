/*  
            TASK 3
*/

const people = [
    { name: "Steve", friend: true },
    { name: "Dan", friend: false },
    { name: "Bart", friend: true },
    { name: "Sarah", friend: false },
    { name: "Michelle", friend: false },
    { name: "Holly", friend: true }
]

// versi ES5
var hasilFilterES5 = people.filter(function(people){
    return people.friend === true
})

// versi ES6
var hasilFilterES6 = people.filter(people => people.friend === true)

console.log(hasilFilterES5)
console.log(hasilFilterES6)

   