import { useState, useMemo } from "react";
function Example() {
    const [count , setCount ] = useState(0);
    const setSquared = useMemo(() => {
        console.log("Counting....");
        return count*count;
    },[count]);
    
    return(
        <div>
        <p>Squared: {setSquared}</p>
        <button onClick={setCount(count + 1)}>Increased</button>
        </div>
    );
}

// async function getData() {
//   try {
//     const result = await Promise.resolve("Hello");
//     console.log(result);
//     console.log('hi Alok');
//   } catch (err) {
//     console.log(err);
//   }
// }

// getData();
// console.log('hi JS');

// let [a, b, c] = [1, 2, 3];
// [a, b, c] = [c,a,b];
// console.log([a,b,c]);

// const originalArray = [1, 2, 3];
// const newArray = [...originalArray, 4];
// console.log('Original Array:', originalArray);
// console.log('New Array:', newArray);