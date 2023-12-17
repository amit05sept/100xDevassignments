const fs = require("fs").promises;
// reading the file

const filePath = "file.txt";
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error while reading the file : `, err);
    return;
  }
  //   console.log(`${data}`);

  let contentToWrite = data.replace(/\s+/g, " ").trim();
  //   console.log(contentToWrite);

  
// writing inside a file.

// this will erase all the data from the file
// and then write the file

  fs.writeFile(filePath, contentToWrite, "utf8", (err) => {
    if (err) {
      console.error(`Error while writng the file : ${err}`);
    } else {
      console.log(`File has been written successfully!!`);
    }
  });
});

