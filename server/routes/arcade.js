// arcade server route - arcade.aaronrmcgrath.com

var express = require('express');
var arcadeRouter = express.Router();
var path = require('path');


arcadeRouter.get('/', function (request, response) {
  console.log('host: ',request.headers.host,' hostname: ', request.headers.hostname);
  console.log('Made it to arcarde.aaronrmcgrath.com');
  var joinedpath = path.join(__dirname, '../public/assets/views/routes/arcade/arcadeindex.html');
  console.log(joinedpath);
  response.sendFile(joinedpath);
});

arcadeRouter.get('/ClassicTennisGame', function (request, response) {
  console.log('host: ',request.headers.host,' hostname: ', request.headers.hostname);
  console.log('requested: arcarde.aaronrmcgrath.com/ClassicTennisGame');
  var joinedpath = path.join(__dirname, '../public/assets/views/routes/arcade/ClassicArcadeTennisGame.html');
  console.log(joinedpath);
  response.sendFile(joinedpath);
});

arcadeRouter.get('/*', function(request, response){
    response.redirect('/');
});

module.exports = arcadeRouter;
