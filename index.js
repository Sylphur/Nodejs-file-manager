import { inputHandle } from "./controllers/inputController.js";
import { getUsername } from "./utils/getUsername.js";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const username = getUsername(process.argv);

const rl = readline.createInterface({input, output});

(function main () {
  rl.question(`You are currently in: ${process.cwd()} \n`,)
    .then(async (input) => {
      if (input === '.exit') rl.close();
      else {
        await inputHandle(input);
        main();
      }
  })
})();

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
})