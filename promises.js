let promise = new Promise (function (resolve, reject) {
    console.log('I am an alert in promise');
    reject("sysntax err");
})

function step1() {
    return Promise.resolve(100);
}

console.log('hello');

// setTimeout(() => {
//     console.log('hello in 2 sec');
// }, 2000);

console.log('how are you');
promise.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
});

async function name1() {
    const res = await step1();
    console.log(res);
}

name1();
