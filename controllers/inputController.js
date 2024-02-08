import { add } from "../services/add.js";
import { cat } from "../services/cat.js";
import { cd } from "../services/cd.js";
import { cp } from "../services/cp.js";
import { ls } from "../services/ls.js";
import { rn } from "../services/rn.js";
import { up } from "../services/up.js";

export async function inputHandle (input) {
  const formattedInput = input.trim();
  switch (formattedInput.split(' ')[0]) {
    case 'up': {
      up();
      break;
    }
    case 'cd': {
      cd(formattedInput);
      break;
    }
    case 'ls': {
      await ls();
      break;
    }
    case 'cat': {
      await cat(formattedInput)
      break;
    }
    case 'add': {
      await add(formattedInput)
      break;
    }
    case 'rn': {
      await rn(input)
      break;
    }
    case 'cp': {
      await cp(input)
      break;
    }
    default:
      console.log('Invalid input');
      break;
  }
}