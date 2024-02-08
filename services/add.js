import fs from 'fs/promises';

export async function add (input) {
    let fileHandle;
    try {
        const fileName = input.slice(4).trim();
        fileHandle = await fs.open(fileName, 'wx');
    } catch (error) {
        console.error('Operation failed: ',error.message);
    } finally {
        await fileHandle?.close();
    }
}