const fs = require('fs');

// create a readable stream from a file
const readStream = fs.createReadStream('./docs/hugefile.txt', { encoding: 'utf-8' });

const writeStream = fs.createWriteStream('./docs/hugefile copy.txt', { encoding: 'utf-8' });

// listen for the 'data' event to read chunks of data from the stream
readStream.on('data', (chunk) => {
    writeStream.write('--- new chunk ---\n');
    writeStream.write(chunk);
    console.log('--- new chunk ---');
    console.log(chunk);
})

// if we only want to read and write the data without any processing, we can use the pipe method to pipe the readable stream to the writable stream

readStream.pipe(writeStream);

/* write data to a file using a writable stream

const writeStream = fs.createWriteStream('./docs/hugefile copy.txt', { encoding: 'utf-8' });

writeStream.write('hello world\n');

*/