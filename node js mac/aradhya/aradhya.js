const fs = require("fs");

fs.writeFile('byone.txt', 'my name is aradhya', (err) => {
    console.log('files created');
});

fs.appendFile('byone.txt', ' bye aradhya', (err) => {
    console.log('files appended');
});

fs.readFile('byone.txt', "UTF-8", (err, data) => {
    console.log(data);
});

fs.rename('byone.txt', 'onces1.txt', (err) => {
    console.log("rename");
});

fs.unlink('onces1.txt', (err) => {
    console.log("delete");
});