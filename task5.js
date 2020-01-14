var input = [10,20,30]

const nilai = input.reduce((accumulator, currentVal)=>{
  var nilai = accumulator+currentVal
  return nilai
})

const ratarata = nilai/input.length

console.log(ratarata)