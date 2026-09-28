// const os = require('os');
// console.log('Operating System Information:');
// console.log(`Platform: ${os.platform()}`);
// console.log(`Architecture: ${os.arch()}`);      
// console.log(`CPU Cores: ${os.cpus().length}`);
// console.log(`Total Memory: ${os.totalmem()} bytes`);
// console.log(`Free Memory: ${os.freemem()} bytes`);

// const path = require('path');
// const filePath = path.join(__dirname, 'public', 'index.html');
// console.log(`File Path: ${filePath}`);


// path.format(pathObject) Cover krke aana hai !!

// const fs = require('fs');
// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File content:');
//     console.log(data);
// });

// const logEntry= `[${new Date().toISOString()}] - User accessed the application.`;
// fs.appendFile('access.log', logEntry + '\n', (err) => {
//     if (err) throw err;
//     console.log('Access log updated.');
// });

// fs.unlink('oldfile.txt', (err) => {
//     if (err && err.code !== "ENOENT") throw err;
//     console.log('Old file deleted successfully.');
// });


// const crypto = require("crypto");

// const hash= crypto
//     .createHash('sha256')
//     .update('my secret data')
//     .digest('hex');
// console.log('SHA-256:', hash)
// console.log(crypto.randomUUID());
// console.log('UUID: ', uuid);

// const hash = crypto
//   .createHash("sha256")
//   .update("my secret data")
//   .digest("hex");
// console.log("SHA-256:", hash);

// const dns= require('dns');
// dns.lookup('www.example.com', (err, address, family) => {
//     if (err,address) {
//         console.error('DNS lookup error:', err);
//         return;
//     }
//     console.log('DNS lookup successful:');
//     console.log(`Address: ${address}`);
//     console.log(`Family: ${family}`);
// });