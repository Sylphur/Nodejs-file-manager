import path from "path";
import fs from "fs";
import fsp from "fs/promises";
import { createBrotliCompress } from "zlib";
import stream from "stream/promises";

export async function compress (input) {
  try {
    const pathToFile = input.split(' ')[1];
    const pathToDestination = input.split(' ')[2];
    if (pathToFile === undefined || pathToDestination === undefined) throw new Error('invalid input')

    const relativePathToFile = path.relative(process.cwd(), pathToFile);
    const relativePathToDestination = path.relative(process.cwd(), pathToDestination);
    if (!fs.existsSync(relativePathToFile 
      || !fs.existsSync(relativePathToDestination))) 
    throw new Error('invalid input (no such file or directory)');

    const fileName = path.win32.basename(pathToFile);
    const brotliFileName = `${fileName}.br`;
    const targetFilePath = path.join(pathToDestination, brotliFileName);
    if (fs.existsSync(path.join(relativePathToDestination, fileName))) throw new Error('invalid input (target file is already exists)');
    
    const readableStream = fs.createReadStream(relativePathToFile, {'encoding': 'utf-8'});

    const writableStreamFile = await fsp.open(targetFilePath, 'wx');
    const writableStream = writableStreamFile.createWriteStream(targetFilePath);
    const brotli = createBrotliCompress();

    await stream.pipeline(readableStream, brotli, writableStream);
    console.log('Compress is done!');
  } catch (error) {
    console.error('Operation failed: ',error.message);
  }
}