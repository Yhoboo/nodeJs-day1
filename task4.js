/*
            TASK 4
*/

var nameArr=["john","JACOB","jinGleHeiMer","schmidt"];

const nameMap = nameArr.map((x)=>{
    let capitalize = x.toLowerCase().replace(x.charAt(0),x.charAt(0).toUpperCase())
    return capitalize
})

console.log(nameMap)