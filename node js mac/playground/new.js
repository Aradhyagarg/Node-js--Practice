const fs = require('fs')
/*const dataBuffer = fs.readFileSync('new.json');
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title);
const books = {
    title : 'Hi my name is aradhya',
    auther : 'Rishi'
}

const newBooks = JSON.stringify(books);
fs.writeFileSync('new.json', newBooks)
*/

const dataBuffer = fs.readFileSync('new.json')
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON)

user.name = 'Ganther'

user.age = 54;

const userJSON = JSON.stringify(user);
fs.writeFileSync('new.json', userJSON);