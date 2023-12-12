/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
"use strict";

function wait(n) {
    return new Promise((resolve)=>{
        setTimeout(resolve,n*1000);
    });
}
// wait(3).then((res)=>{
// console.log(res);
// })

module.exports = wait;
