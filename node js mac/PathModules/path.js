const path = require('path');

console.log(path.dirname('C:/Users/Aradhya/Desktop/node1/PathModules/path.js'));

console.log(path.extname('C:/Users/Aradhya/Desktop/node1/PathModules/path.js'));

console.log(path.basename('C:/Users/Aradhya/Desktop/node1/PathModules/path.js'));

const myPath = path.parse('C:/Users/Aradhya/Desktop/node1/PathModules/path.js');
console.log(myPath.name);
