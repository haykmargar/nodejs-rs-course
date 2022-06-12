import * as fs from 'fs';

export const list = async () => {
    const folderToRead = './files';

    if (!fs.existsSync(folderToRead)) {
        throw new Error('FS operation failed');
    }

    fs.readdir(folderToRead, (err, files) => {
        if (err) throw err;
        else files.forEach(file => console.log(file));
    });
};

await list();
