let http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.write("Welcome to NODE learning space");
    res.end("Thank you");
}).listen(8080);