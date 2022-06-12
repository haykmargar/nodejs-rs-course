import * as fs from 'fs';

export const remove = async () => {
    const fileToRemove = './files/fileToRemove.txt';

    if (!fs.existsSync(fileToRemove)) {
        throw new Error('FS operation failed');
    }

    fs.unlink(fileToRemove, (err) => {
        if (err) throw  err;
    });
};

await remove();
