var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const upload =require("../backend/src/routes/upload");
const http=require('http');
const fileUpload = require('express-fileupload');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Use the express-fileUpload middleaware 
app.use(
  fileUpload({
      limits: {
          fileSize: 10000000, // Around 10MB
      },
      abortOnLimit: true,
  })
);
//Routes 
app.use('/file',upload)



//creation du serveur
const server=http.createServer(app);
server.listen(5000,()=>{
  console.log("app is running on port 5000");
})


//
module.exports = app;
