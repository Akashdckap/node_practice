let nodeMailer = require('nodemailer');

let sender = nodeMailer.createTransport({
    service:"gmail",
    auth : {
        user : "Akash Srinivasalu",
        pass : "tn05cJ3673" 
    }
});

let composerMail = {
    from: "akash.a.dckap@gmail.com",
    to: "19202411akash@gmail.com",
    subject: "Hello just checking mail by nodejs",
    html : "<h1>Hello World</h1>"
};

sender.sendMail(composerMail,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log("Mail sent successfully" + info.response);
    }
});
