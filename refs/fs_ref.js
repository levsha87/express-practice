import fs from "fs";
import path from "path";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if(err) throw err;
//     console.log("Folder created");
// })

// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'Hello friends', err => {
//     if(err) throw err;
//     console.log('File created');
//
//     fs.appendFile(path.join(__dirname, 'notes', 'mynotes.txt'), ' I want to see you!!!', err => {
//         if (err) throw err;
//         console.log('Add data');
//
//         fs.readFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'utf-8', (err, data) => {
//             if (err) throw err;
//             console.log(data);
//         })
//     });
// });

fs.rename(path.join(__dirname, 'notes', 'mynotes.txt'), path.join(__dirname, 'notes', 'notes.txt'), err => {
    if (err) throw err;
    console.log('file renamed');
})
