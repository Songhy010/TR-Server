const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/',(req,res,next)=>{
    res.send({code:200,message:"ok"});
});

app.listen(port,res=>{console.log("Server Started")});