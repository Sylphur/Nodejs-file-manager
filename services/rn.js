import path from "path";
import fs from "fs";
import fsp from "fs/promises";

export async function rn (input) {
  try {
    const pathToFile = input.split(' ')[1];
    if (pathToFile === undefined) throw new Error('invalid input (empty request)')

    const relativePathToFile = path.relative(process.cwd(), pathToFile);
    const newFilename = input.split(' ')[2];
    const newPathToFile = path.join(path.dirname(pathToFile), newFilename);

    if (!fs.existsSync(relativePathToFile)) throw new Error('invalid input (no such file or directory)');
    if (fs.existsSync(newPathToFile)) throw new Error('invalid input (file or directory is already exists)')

    await fsp.rename(pathToFile, newPathToFile);
    console.log(`File ${pathToFile} have been renamed to ${newPathToFile} `);
  } catch (error) {
    console.error('Operation failed: ', error.message);
  }
  
}