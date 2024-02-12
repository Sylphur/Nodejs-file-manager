import path from "path";
import fs from "fs";
import fsp from "fs/promises";
import { createBrotliDecompress } from "zlib";
import stream from "stream/promises";

export async function decompress (input) {
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
    const fileNameExtension = path.extname(fileName);
    const brotliFileName = fileName.slice(0, -3);
    const targetFilePath = path.join(pathToDestination, brotliFileName);

    if (fs.existsSync(targetFilePath)) throw new Error('invalid input (target file is already exists)');
    if (fileNameExtension !== '.br') throw new Error('invalid input (target file must be compressed and have .br extension)');
    
    const readableStream = fs.createReadStream(relativePathToFile);
    const writableStreamFile = await fsp.open(targetFilePath, 'wx');
    const writableStream = writableStreamFile.createWriteStream(targetFilePath);
    const brotli = createBrotliDecompress();

    await stream.pipeline(readableStream, brotli, writableStream);
    console.log('Decompress is done!');
  } catch (error) {
    console.error('Operation failed: ',error.message);
  }
}