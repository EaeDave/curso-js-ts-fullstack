const fs = require('fs').promises;
const path = require('path');
// fs.readdir(path.resolve(__dirname))
//     .then((files) => { console.log( files )})
//     .catch((error) => { console.log( error )});

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(path.resolve(rootDir));
    walk(files, rootDir);

    async function walk(files, rootDir) {
        for (const file of files) {
            const fileFullPath = path.resolve(rootDir, file);
            const stats = await fs.stat(fileFullPath);  // Coleta dados do arquivo

            if (/\.git/g.test(fileFullPath)) continue;  // Se .git existir na string volte no loop
            if (/node_modules/g.test(fileFullPath)) continue;  // se node_modules existir na str, volte no loop
            
            if (stats.isDirectory()) {
                readdir(fileFullPath);
                continue;
            }
            
            if (!/\.js$/.test(fileFullPath)) continue;

            console.log(fileFullPath);
        }
    }
}

readdir('./');
