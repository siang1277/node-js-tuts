const fs = require('fs');

//reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });


//writng files
// fs.writeFile('./docs/blog1.txt', 'Hello World', () => {
//     console.log('File was written');
// })

//creating directory
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('folder removed');
    })
}

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}
