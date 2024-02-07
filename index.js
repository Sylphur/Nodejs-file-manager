const fs = require('fs');
const path = require('path');
const readline = require('node:readline/promises');
const username = getUsername(process.argv);
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({input, output});
rl.question('Write something \n')
.then((answer) => {
  console.log(`Thanks for ${answer}`);
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