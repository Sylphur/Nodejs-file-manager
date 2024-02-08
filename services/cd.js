import fs from "fs";
import path from "path";

export function cd (input) {
    try {
        const destination = input.slice(3);
        const relativePath = path.relative(process.cwd(), destination)
        if (fs.existsSync(relativePath)) process.chdir(relativePath); //async exists is deprecated
        else console.error('Operation failed: invalid path')
    } catch (error) {
        console.error('Operation failed: ',error.message);
    }
}