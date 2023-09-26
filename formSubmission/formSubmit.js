let http = require("http");
let fs = require("fs");
let formidable = require("formidable");

http.createServer(function(req,res){
    if(req.url == "/"){
        res.writeHead(200,{"Content-type":"text/html"});
        res.write('<form action = "./biodata" method="post" enctype="multipart/form-data">');
        res.write('<h1>Welcome to DCKAP</h1>');
        res.write('Name <input type="text" name="username"><br>');
        res.write('D.O.B <input type="date" name="dob"><br>');
        res.write('Qualification <input type="text" name="qualification"><br>');
        res.write('Email id <input type="email" name="email"><br>');
        res.write('Phone number <input type="number" name="phoneNo"><br>');
        res.write('upload your Resume <input type="file" name="uploadfile"><br>');
        res.write('<input type="submit">');
        res.end();
    }
    else if(req.url == "/biodata"){
        let form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            res.write('<h1>Name :' + fields.username + '</h1>');
            res.write('<h1>D.O.B :' + fields.dob + '</h1>');
            res.write('<h1>Qualification :' + fields.qualification + '</h1>');
            res.write('<h1>Email id :' + fields.email + '</h1>');
            res.write('<h1>Phone Number :' + fields.phoneNo + '</h1>');

            let oldpath = files.uploadfile.path;
            let newpath = "C:/home/dckap/Desktop/Learning_Node/formSubmission"+files.uploadfile.name;
            fs.rename(oldpath,newpath,function(err){
                {
                if(err) throw err;
                res.write('h1>Your File Location</h1><br>');
                res.write('<h1>oldpath :' + oldpath + '</h1><br>');
                res.write('<h1>newpath :' + newpath + '</h1><br>');
                res.end("<h1>Thanks for your interest in DCKAP technologies | Your form submitted successfullly</h1>");
                }
            });

        });
    }
    else{
        res.end('<h1>404 PAGE NOT FOUND</h1>')
    }
}).listen(8080);