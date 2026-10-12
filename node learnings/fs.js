const fs = require("fs")

// check if folder exists or not then create folder

if( !fs.existsSync('docs')){
    fs.mkdir('./docs', (err) => {
        if (err){
            console.log(err);
        }
        else{
            console.log('folder created');
        }
    })
}
else{
    console.log('folder already exists');
}

// create a file and write data into it

fs.writeFile('./docs/test.txt', 'hello world', (err) => {
    if (err){
        console.log(err)
    }
    else{
        console.log('file created and written')
    }
})

// read data from file
if(fs.existsSync('./docs/test.txt')){
    fs.readFile('./docs/test.txt', 'utf-8', (err, data) => {
        if (err){
            console.log(err)
        }
        else{
            console.log(data)
        }
    })
}

// delete file

if(fs.existsSync('./docs/test.txt')){
    fs.unlink('./docs/test.txt', (err) => {
        if (err) {
            console.log(err)
        }
        else{
            console.log('file deleted')
        }
    })
}

// delete folder

if(fs.existsSync('./docs')){
    fs.rmdir('./docs', (err) => {
        if (err) {
            console.log(err)
        }
        else{
            console.log('folder deleted')
        }
    })
}
else{
    console.log('folder does not exist')
}