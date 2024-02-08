import { cd } from "../services/cd.js";
import { up } from "../services/up.js";

export function inputHandle (input) {
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
    default:
      console.log('Invalid input');
      break;
  }
}