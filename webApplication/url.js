let http = require('http');
let fs = require('fs');
let url = require('url');

http.createServer(function(req,res){
    let weblink = url.parse(req.url,true);
    let filePath = "."+weblink.pathname;
    fs.readFile(filePath,function(err,data){
        if(err){
            res.writeHead(404,{"Content-type":"text/html"});
            return res.end("404 not Found");
        }
        res.writeHead(200,{"Content-type":"text/html"});
        res.write(data);
        res.end();
    })
}).listen(8080);