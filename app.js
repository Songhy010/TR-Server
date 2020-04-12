const express = require('express');
const parser = require('body-parser');


const db = require('./app-util/dbconfig');
const teacherRouter = require('./app-routers/route-teacher');

const app = express();
const port = process.env.PORT || 3000;

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.get('/',(req,res,next)=>{
    res.send({code:200,message:"ok"});
});

app.use('/api/teacher',teacherRouter);

app.use((req, res, next) => {
  const err = Error("API Not found");
  err.code = 404;
  next(err);
});
  
app.use((err, req, res, next) => {
  const message = err.message || "Unexpected Error";
  const code = err.code || 500;
  const trace = err.stack || err.toString();
  const path = req.path;
  const method = req.method;
  
  res.send({
    message,
    code,
    path,
    method,
    trace
  });
});

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(port,res=>{console.log("server started")});
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});