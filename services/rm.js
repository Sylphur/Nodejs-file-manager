import path from "path";
import fs from "fs";
import fsp from "fs/promises";

export async function rm (input) {
  try {
    const pathToFile = input.slice(3).trim();
    if (pathToFile === undefined) throw new Error('invalid input (empty request)')

    const relativePath = path.relative(process.cwd(), pathToFile)
    if (!fs.existsSync(relativePath)) throw new Error('invalid input (no such file or directory)');

    await fsp.unlink(relativePath);
    console.log(`File ${pathToFile} has been deleted`);
  } catch (error) {
    console.error('Operation failed: ', error.message);
  }
}