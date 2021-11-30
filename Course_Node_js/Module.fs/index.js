// const fs = require('fs');
// const path = require('path')

// File System

// fs.mkdir(path.join(__dirname, 'assets'), (err) => {
//     if (err) 
//         throw err

//         console.log('Folder created');
// })

// fs.writeFile(path.join(__dirname, 'assets', 'mytext.txt'),
//         'Hello World', (err) => {
//             if (err) throw err;

//             console.log('The file was created');

//     fs.appendFile(path.join(__dirname, 'assets', 'mytext.txt'),
//             ' From append file', (err) => {
//                 if (err) throw err;

//                 console.log('File was edited');
//     })
//     fs.readFile(path.join(__dirname, 'assets', 'mytext.txt'),
//             'utf-8', (err, data) => {
//                 if (err) throw err;

//                 console.log(data);
//     })
// })


// fs.rename(path.join(__dirname, 'assets', 'mytext.txt'),
//      path.join(__dirname, 'assets', 'my.txt'),
//      (err) => {
//         if (err) throw err

//         console.log('The file was rename');
//     })
