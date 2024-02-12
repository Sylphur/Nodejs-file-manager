import fs from 'fs/promises';

export async function add (input) {
  let fileHandle;
  try {
    const fileName = input.slice(4).trim();
    fileHandle = await fs.open(fileName, 'wx');
    console.log(`File ${fileName} has been created`);
  } catch (error) {
    console.error('Operation failed: ',error.message);
  } finally {
    await fileHandle?.close();
  }
}