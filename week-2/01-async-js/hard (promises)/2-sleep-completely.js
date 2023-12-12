/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

async function sleep(milliseconds) {
    const p = await new Promise((resolve)=>{
        setTimeout(resolve , milliseconds);
    });

    // return "hello bhai"; // always returns a promise.
}

// console.log(sleep(5000));
// sleep(5000).then((res)=>{
//     console.log(res);
// })
module.exports = sleep;
