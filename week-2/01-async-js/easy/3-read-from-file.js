const fs = require("fs");

const filePath = "file.txt";

// reading the file
// this is a asynchronous task.
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error while reading the file : `, err);
    return;
  }

  console.log(`File content : ${data}`);
});

// prints first as above is asnyc operation written.
console.log("hello bhaiya " + __dirname); // __dirname is the current directory path
