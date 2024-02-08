import { add } from "../services/add.js";
import { cat } from "../services/cat.js";
import { cd } from "../services/cd.js";
import { compress } from "../services/compress.js";
import { cp } from "../services/cp.js";
import { decompress } from "../services/decompress.js";
import { calculateHash } from "../services/hash.js";
import { ls } from "../services/ls.js";
import { mv } from "../services/mv.js";
import { rm } from "../services/rm.js";
import { rn } from "../services/rn.js";
import { up } from "../services/up.js";
import { osController } from "./osController.js";

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
    case 'rm': {
      await rm(formattedInput)
      break;
    }
    case 'mv': {
      await mv(formattedInput)
      break;
    }
    case 'os': {
      await osController(formattedInput)
      break;
    }
    case 'hash': {
      await calculateHash(formattedInput)
      break;
    }
    case 'compress': {
      await compress(formattedInput)
      break;
    }
    case 'decompress': {
      await decompress(formattedInput)
      break;
    }
    default:
      console.log('Invalid input');
      break;
  }
}