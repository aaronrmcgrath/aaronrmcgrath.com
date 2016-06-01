// SERVER

var express = requre('express');
var app = express();

// Routes //

var index = require('/routes/index.js');

// Port //

var port = process.env.PORT || 3000;

app.use(express.static('server/public'));

// routes and server connection

app.use("/", index);

// server //
var server = app.listen(port,function(){
   var port = server.address().port;
   console.log('Listening on port: ',port);

});

module.exports = app;
