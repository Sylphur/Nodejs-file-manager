import path from "path";
import fs from "fs";
import crypto from "crypto";

export async function calculateHash (input) {
  try {
    const destination = input.slice(5).trim();
    const relativePath = path.relative(process.cwd(), destination)
    if (!fs.existsSync(relativePath)) throw new Error('invalid input (no such file or directory)');

    const hash = crypto.createHash('sha1');
    const stream = fs.createReadStream(relativePath, {encoding: 'utf-8'})
    return new Promise ((resolve, reject) => {
      stream.on('data', (chunk) => {
        hash.update(chunk);
      })
      stream.on('end', () => {
        console.log('File hash:', hash.digest('hex'));
        resolve();
      })
      stream.on('error', (error) => {
        console.error('Operation failed: ',error.message);
        resolve();
      })
    })
  } catch (error) {
    console.error('Operation failed: ', error.message);
  }
}