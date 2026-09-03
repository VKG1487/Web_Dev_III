// const express = require('express');

// const app = express();

// const packages = require("./data/tour.js");

// app.get("/", (req,res)=>{
//     res.send("hello world!!");
// });

// app.get("/packages", (req,res)=>{
//     const packageDes=req.query.destination;
//     if(!packageDes){
//         res.json(packages);
//     }

    
    
// });

// app.get("/packages/:id",(req,res)=>{
//     const packageId=parseInt(req.params.id);
//     const selectedPackage= packages.find(item=>item.id === packageId);
//     res.json(selectedPackage);
// });

// app.get("/packages/:destination",(req,res)=>{
//     const packageDes=req.query.destination;
//     const selectedPackage= packages.find(item=>item.destination === packageDes);
//     res.json(selectedPackage);
// })

// app.listen(3000,()=>{
//     console.log("serer is running on 3000");
// });

const express = require("express");

const app = express();

// client -> Request -> Middleware1 -> Middleware2 -> Middleware3 -> Response -> client

// const middleware1 = (req, res, next) => {
//   console.log("Middleware 1");
//   next();
// }

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
}

// app.use(logger);

const checkAge = (req, res, next) => {
  const age = 6;
  if(age<18){
    return res.status(403).json({nessage:"You are not allowed to access this recourse" });
  }
  next();
};

app.use(logger);
app.use(checkAge);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// const tourRoute = require("./routes/tourRoute");

// app.use(express.json());

// Tour routes
app.use("/api", tourRoute);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
