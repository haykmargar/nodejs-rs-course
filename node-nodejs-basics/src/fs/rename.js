import * as fs from 'fs';

export const rename = async () => {
    const properFile = './files/properFileName.md';
    const wrongFileName = './files/wrongFileName.txt';

    if (fs.existsSync(properFile) || !fs.existsSync(wrongFileName)) {
        throw new Error('FS operation failed');
    }

    fs.rename(wrongFileName, properFile, (err) => {
        if (err) throw  err;
    });
};

await rename();
