const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./mates.js')
const newNotes = require('./mates.js')
yargs.version("1.1.0")

yargs.command({
    command: 'add',
    describe: 'add to numbers',
    handler: function(){
            console.log('Adding a new node!')
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove to numbers',
    handler: function(){
            console.log('remove a new node!')
    }
})

console.log(process.argv);
console.log(yargs.argv);
/*const command = process.argv[2];

if(command == 'add'){
    console.log('Adding more');
}else{
    console.log('Remove more')
}*/
/*const msg = newNotes();

console.log(msg);

console.log(chalk.blue.inverse.bold('success'));

console.log(validator.isEmail('aradhya@gmail.com'));

console.log(process.argv[2]);*/