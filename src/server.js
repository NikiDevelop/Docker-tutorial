const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Tutorial Dockerfile from Node.js")
});

app.listen(3000, function () {
    console.log("app port: 3000")
});
