const express = require("express");
const app = express();
const dotenv = require("dotenv");


const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    console.log(req.headers);
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.method);
    res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

