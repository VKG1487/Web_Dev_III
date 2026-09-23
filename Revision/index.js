// const os = require('os');
// console.log('Operating System Information:');
// console.log(`Platform: ${os.platform()}`);
// console.log(`Architecture: ${os.arch()}`);      
// console.log(`CPU Cores: ${os.cpus().length}`);
// console.log(`Total Memory: ${os.totalmem()} bytes`);
// console.log(`Free Memory: ${os.freemem()} bytes`);

const path = require('path');
const filePath = path.join(__dirname, 'public', 'index.html');
console.log(`File Path: ${filePath}`);


// path.format(pathObject) Cover krke aana hai !!