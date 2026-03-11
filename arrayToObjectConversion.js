// input=[addEventListener,1,b,2,c,3]
// output=[a:1,b:2,c:3]

function arrayToObjectConversion(arr) {
const obj= {};
for (let i = 0; i < arr.length; i += 2) {
    obj[arr[i]] = arr[i + 1];
}
return obj;
}

const input = ['a', 1, 'b', 2, 'c', 3];
console.log(arrayToObjectConversion(input));