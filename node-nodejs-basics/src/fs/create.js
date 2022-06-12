import * as fs from "fs";

export const create = async () => {
    const file = './files/fresh.txt'

    fs.access(file, (err) => {
        if (err) {
            fs.writeFile(file,
                'I am fresh and young',
                (err) => {
                    if (err) throw err;
                }
            )
        } else throw new Error('FS operation failed');
    })
};

await create();
