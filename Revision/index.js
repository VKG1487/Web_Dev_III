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

require('dotenv').config();
// const process = require('process');
// console.log(process.env.PORT);
// console.log(process.argv);

const students = [
    {id : 1, name: 'Alice', age: 20},
    {id : 2, name: 'Bob', age: 22},
    {id : 3, name: 'Charlie', age: 21}
]


const port = process.env.PORT || 3000;
const http = require('http');

http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!\n');
        return;
    }else if (req.method === 'GET' && req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Page\n');
    }else if (req.method === 'GET' && req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Contact Page\n');
    }else if (req.method === 'GET' && req.url === '/services') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Services Page\n');
    }else if (req.method === 'GET' && req.url === '/students') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(students));
    }else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found\n');
    }
}).listen(port, () => {
    console.log('Server running at http://localhost:' + port);
});