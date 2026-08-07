// const cities = require("./data/data.js");
// console.log(cities);


// const fs = require("fs");
// fs.writeFileSync("test.txt","Hello World")


// const path = require("path");
// const filename = path.join(__dirname, "data", "test.txt");
// console.log(filename);

// const os = require("os")
// const { uptime } = require("process")
// const userInfo = os.userInfo();
// const freeMemory = os.freemem();
// const totalMemory = os.totalmem();
// const Uptime = os.uptime();

// console.log("User Info:", userInfo);
// console.log("Free Memory:", freeMemory);
// console.log("Total Memory:", totalMemory);
// console.log("Uptime:", Uptime);


// const crypto = require("crypto");
// const hash = crypto
// .createHash("sha256")
// .update("My Seceret Data")
// .digest("hex");
// console.log('SHA-256:', hash);

// const uuid = crypto.randomUUID();
// console.log("UUID: ", uuid);



// const dns= require("dns");

// dns.lookup("google.com",(err,address)=>{
//     console.log(address);
// });


require("dotenv").config();
const process = require("process");
// console.log(process.argv[4]);

console.log(process.env.PORT);
