function recursive(n){
  if(n>0){
    return n * recursive(n-1)
  }else{
    return 1
  }
}

console.log(recursive(5))