// const cities = require("./data/data.js");
// console.log(cities);


// const fs = require("fs");
// fs.writeFileSync("test.txt","Hello World")


// const path = require("path");
// const filename = path.join(__dirname, "data", "test.txt");
// console.log(filename);

const os = require("os")
const { uptime } = require("process")
const userInfo = os.userInfo();
const freeMemory = os.freemem();
const totalMemory = os.totalmem();
const Uptime = os.uptime();

console.log("User Info:", userInfo);
console.log("Free Memory:", freeMemory);
console.log("Total Memory:", totalMemory);
console.log("Uptime:", Uptime);