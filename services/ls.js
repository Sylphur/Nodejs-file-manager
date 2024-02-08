import fs from "fs/promises";

export async function ls () {
   try {
    await fs.readdir(process.cwd(), {withFileTypes: true})
    .then((files) => {
        const res = [];
        files.forEach((file) => {
            file.isDirectory() 
            ? res.push({Name: file.name, Type: 'directory'}) 
            : res.push({Name: file.name, Type: 'file'})
        })
        res.sort((a, b) => {
            return (b.Type < a.Type) - (a.Type < b.Type) || (b.Name < a.Name) - (a.Name < b.Name)
        })
        console.table(res);
    })
   } catch (error) {
    console.error('Operation failed: ', error.message);
   } 
}