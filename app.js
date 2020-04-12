const express = require('express');
const app = express();

app.use('/',(req,res,next)=>{
    res.send({code:200,message:"ok"});
});

app.listen(3000,res=>{console.log("Server Started")});