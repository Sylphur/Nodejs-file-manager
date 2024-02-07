import { inputHandle } from "./controllers/inputController.js";
import { getUsername } from "./services/getUsername.js";

// const fs = require('fs/promises');
// const path = require('path');
import path from "path";
import readline from "node:readline/promises";
// const readline = require('node:readline/promises');
// const { stdin: input, stdout: output } = require('node:process');
import { stdin as input, stdout as output } from "node:process";

const username = getUsername(process.argv);
let currentPath = process.cwd();

const rl = readline.createInterface({input, output});

function main () {
  rl.question(`You are currently in: ${currentPath} \n`,)
    .then((input) => {
      if (input === '.exit') rl.close();
      else {
        inputHandle(input);
        main();
      }
  })
}
main();

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
})