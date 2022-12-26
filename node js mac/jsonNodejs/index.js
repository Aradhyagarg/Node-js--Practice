const fs = require("fs");
const bioData = {
    name:"ARADHYA GARG",
    age:35,
    channel: "me",
};

const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json", jsonData, (err) => {
    console.log("done");
});

fs.readFile("json1.json", "utf-8", (err, data) => {
    const originData = JSON.parse(data);
    console.log(data);
})