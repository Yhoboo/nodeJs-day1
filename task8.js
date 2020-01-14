const kuadrat = (n,q) =>{
  if(q>0){
    return n*kuadrat(n,q-1)
  }
  return 1
}

console.log(kuadrat(5,3))