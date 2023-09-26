// let http = require('http');

// var fs = require('fs');

// http.createServer(function(req,res){
//     fs.readFile("demo.txt",function(err,data){

//         if(err){
//             return console.log.error(err);
//         }
//         console.log("Async data : " + data.toString());
//         res.write(data);
//         res.end();
//     });
   
// }).listen(8080);


//Write File
/*
let http = require('http');

var fs = require('fs');

http.createServer(function(req,res){
    fs.writeFile("demo.txt","World full of text",function(err){

        if(err){
            return console.log.error(err);
        }
        res.write("Success");
        res.end();
    });
   
}).listen(8080);
*/

//Append File
/*
let http = require('http');
let fs = require('fs');

http.createServer(function(req,res){
    fs.appendFile("demo.txt","Thanks for teaching",function(err){
        if(err){
            console.log.error(err)
        }
        res.write("Appended successfully");
        res.end();
    })
}).listen(8080);
*/

//Rename File
/*
let http = require('http');

var fs = require('fs');

http.createServer(function(req,res){
    fs.rename("demo.txt","demo2.txt",function(err){

        if(err){
            return console.log.error(err);
        }
        res.write("Renamed Successfully");
        res.end();
    });
   
}).listen(8080);
*/

//Delete file
/*
let http = require('http');

var fs = require('fs');

http.createServer(function(req,res){
    fs.unlink("demo2.txt",function(err){

        if(err){
            return console.log.error(err);
        }
        res.write("Deleted Successfully");
        res.end();
    });
   
}).listen(8080);
*/

//Open file
/*
let http = require('http');

var fs = require('fs');

http.createServer(function(req,res){
    fs.open("newFile.txt","w+",function(err){

        if(err){
            return console.log.error(err);
        }
        res.write("File opened Successfully");
        res.end();
    });
   
}).listen(8080);
*/

//Check Status File
let http = require('http');

var fs = require('fs');

http.createServer(function(req,res){
    fs.stat("newFile.txt",function(err,stats){

        if(err){
            return console.log.error(err);
        }
        console.log(stats);
        res.write("Is it file : "+stats.isFile());
        res.write("Is it directory : "+stats.isDirectory());
        res.end();
    });
   
}).listen(8080);