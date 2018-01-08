// SERVER

// original server vars to setup express server
/*
var express = require('express');
var app = express();
*/

// new server code using express-subdomains 18.01.07 - am
var subdomain = require('express-subdomain');
var express = require('express');
var app = express();


// Routes //

var index = require('./routes/index.js');
var arcade = require('./routes/arcade.js');

// Port //

var port = process.env.PORT || 3000;

app.use(express.static('server/public'));

// routes and server connection

app.use(subdomain('arcade', arcade));
app.use('/', index);

// server //
var server = app.listen(port,function(){
   var port = server.address().port;
   console.log('Listening on port: ',port);

});

module.exports = app;
