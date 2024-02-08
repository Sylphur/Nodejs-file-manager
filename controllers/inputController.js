import { cd } from "../services/cd.js";
import { ls } from "../services/ls.js";
import { up } from "../services/up.js";

export async function inputHandle (input) {
  const formattedInput = input.trim();
  switch (formattedInput.split(' ')[0]) {
    case 'up': {
      up();
      break;
    }
    case 'cd': {
      cd(input);
      break;
    }
    case 'ls': {
      await ls();
      break;
    }
    default:
      console.log('Invalid input');
      break;
  }
}