const express = require('express');

const app = express();

const packages = require("./data/tour.js");

const fs=require('fs');

app.get("/", (req,res)=>{
    res.send("hello world!!");
});

app.get("/packages", (req,res)=>{
    const packageDes=req.query.destination;
    if(!packageDes){
        res.json(packages);
    }

    
    
});

app.get("/packages/:id",(req,res)=>{
    const packageId=parseInt(req.params.id);
    const selectedPackage= packages.find(item=>item.id === packageId);
    res.json(selectedPackage);
});

app.get("/packages/:destination",(req,res)=>{
    const packageDes=req.query.destination;
    const selectedPackage= packages.find(item=>item.destination === packageDes);
    res.json(selectedPackage);
})

app.listen(3000,()=>{
    console.log("server is running on 3000");
});