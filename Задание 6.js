let arr = [2, 2, 1, 5, 5];
let check= true
for (i= 0; i< arr.length; i++) {
  if (arr[0] !== arr[1]){
    check = false
  }
}
console.log(check)