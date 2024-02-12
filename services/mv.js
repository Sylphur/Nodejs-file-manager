import path from "path";
import fs from "fs";
import fsp from "fs/promises";
import stream from "stream/promises";

export async function mv (input) {
  try {
    const pathToFile = input.split(' ')[1];
    const pathToCopyFile = input.split(' ')[2];
    if (pathToFile === undefined || pathToCopyFile === undefined) throw new Error('invalid input')

    const relativePathToFile = path.relative(process.cwd(), pathToFile);
    const relativePathToCopyFile = path.relative(process.cwd(), pathToCopyFile);
    if (!fs.existsSync(relativePathToFile 
      || !fs.existsSync(relativePathToCopyFile))) 
    throw new Error('invalid input (no such file or directory)');

    const fileName = path.basename(pathToFile);
    const readableStream = fs.createReadStream(relativePathToFile, {'encoding': 'utf-8'});
    const writableStreamFile = await fsp.open(path.join(relativePathToCopyFile, fileName), 'wx');
    const writableStream = writableStreamFile.createWriteStream(writableStreamFile);
    await stream.pipeline(readableStream, writableStream);
    await fsp.unlink(relativePathToFile);
    console.log('Done!');
  } catch (error) {
    console.error('Operation failed: ',error.message);
  }
}