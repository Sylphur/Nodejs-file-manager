import { up } from "../services/up.js";

export function inputHandle (input) {
  const formattedInput = input.trim();
  switch (formattedInput.split(' ')[0]) {
    case 'up': {
      up();
      // currentPath = currPathUp();
      break;
    }
    case 'cd': {
      // currentPath = currPathCd(input);
      break;
    }
    default:
      console.log('Invalid input');
      break;
  }
}