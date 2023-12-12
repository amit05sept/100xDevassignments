const fs = require("fs");
// writing inside a file.

const contentToWrite = " i am writing this specific line from Js file. ";

// this will erase all the data from the file
// and then write the file

fs.writeFile(filePath, contentToWrite, "utf8", (err) => {
  if (err) {
    console.error(`Error while writng the file : ${err}`);
  } else {
    console.log(`File has been written successfully!!`);
  }
});
