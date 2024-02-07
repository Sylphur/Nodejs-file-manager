const fs = require('fs');
const path = require('path');
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const username = getUsername(process.argv);
let currentPath = __dirname;

const rl = readline.createInterface({input, output});
rl.question(`You are currently in: ${currentPath} \n`,)
.then((input) => {
  if (input === '.exit') rl.close();
  console.log('Invalid input: ', input);
})

rl.on('line', (line) => {
  if (line === '.exit') rl.close();
})
rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
})

function getUsername(args) {
  const username = args.filter((arg) => {
    return arg.includes('--username=')
  })
  if (username.length < 1) {
    console.log("Please enter a username in 'npm run start -- --username=your_username' format");
    process.exit(0);
  }
  if (username.length > 1) {
    console.log("Please enter only one username");
    process.exit(0);
  }
  const user = username[0].slice(11);
  console.log(`Welcome to the File Manager, ${user}`);
  return user;
}