import React from 'react';
import {useState} from 'react';

function LunchQueue  ({students, sandwiches})  {
    const [result, setResult] = useState(null);

    const countStudents = () => {
        let queue = [...students];
        let stack = [...sandwiches];
        let attempts = 0;

        while (queue.length && attempts < queue.length) {
            if (queue[0] === stack[0] ) {
                queue.shift();
                stack.shift();
                attempts = 0;
            } else {
                queue.push(queue.shift());
                attempts++;
            }
        }
        return setResult(queue.length);
    }

    return (
        <div>
            <button onClick={countStudents}>Count Student unable to eat</button>
            {result !== null && <p>Student not eat: {result}</p>}
        </div>
    );
}

export default LunchQueue;