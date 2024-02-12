import fs from "fs";
import path from "path";

export async function cat (input) {
  try {
    const destination = input.slice(4);
    const relativePath = path.relative(process.cwd(), destination);
    const stream = fs.createReadStream(relativePath, {encoding: 'utf-8'});
    return new Promise ((resolve, reject) => {
      let result = '';
      stream.on('data', (chunk) => {
        result += chunk;
      })
      stream.on('end', () => {
        console.log(result);
        resolve();
      })
      stream.on('error', (error) => {
        console.error('Operation failed: ',error.message);
        resolve();
      })
    })
  } catch (error) {
    console.error('Operation failed: ',error.message);
  }
} 