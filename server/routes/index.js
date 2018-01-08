var express = require("express");
var router = express.Router();
var path = require("path");
var vhost = require("vhost");


router.get('/',function (request,response){
    console.log('host: ',request.headers.host,' hostname: ', request.headers.hostname);
    var joinedpath = path.join(__dirname, '../public/assets/views/index.html');
    console.log(joinedpath);
    response.sendFile(joinedpath);
});

router.get('/*', function(request, response){
    response.redirect('/');
});

module.exports = router;
