const fs = require("fs");
const path = require("path");

const { dirname } = require("path");
// getting the stats
// fs.stat("file.txt",(err,stats)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(stats);
//     }
// });

// reading the file
console.log(__dirname);
fs.readFile("file.txt","utf8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
// console.log("hello"); becouse the above operation is asnychronous 