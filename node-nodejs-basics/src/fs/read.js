import * as fs from 'fs';

export const read = async () => {
    const fileToRead = './files/fileToRead.txt';

    if (!fs.existsSync(fileToRead)) {
        throw new Error('FS operation failed');
    }

    fs.readFile(fileToRead, (err, data) => {
        if (err) throw err;
        else console.log(data.toString());
    });
};

await read();
