const fs = require("fs/promises");
async function read(){
    try{
        const data = await fs.readFile("todos2.json",{encoding:"utf-8"});
        console.log(JSON.parse(data));
    }catch(err){
        console.log(err);
    }
}
read();