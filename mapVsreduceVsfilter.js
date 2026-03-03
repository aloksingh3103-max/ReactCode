let arr = [25, 23, 21];
let a = arr.map((value, index,array) => {
    console.log(value,index,array);
    return value + 1;
})
console.log(a);