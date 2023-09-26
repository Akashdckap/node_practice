/*
let mysql = require('mysql');
let connection = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"welcome",
    database:"vjtechno",
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected");
    // let val = "insert into students (id,student_name,student_city) values (1,'Tamil','Srilanka')"
    connection.query("create table marks (student_id int, grade varchar(255))",function(err){
        if (err) throw err;
        console.log("Table created");
    })
})
*/

// Insert value multiple values
/*
let mysql = require('mysql');
let connection = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"welcome",
    database:"vjtechno",
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected");
    let val = "insert into students (id,student_name,student_city) values ?";//if single inserted without use questionmark give datas
    let values = [
        [2,"Telugu","Andhra"],
        [3,"Kannada","Karnataka"],
        [4,"Urudu","Dubai"],
    ];
    connection.query(val,[values],function(err){
        if (err) throw err;
        console.log("values inserted");
    })
})

*/

// fetch query
/*
let mysql = require('mysql');
let connection = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"welcome",
    database:"vjtechno",
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected");
    let val = "select * from students";
  
    connection.query(val,function(err,result){
        if (err) throw err;
        console.log(result);
    })
});
*/

//Conditional query
/*
let mysql = require('mysql');
let connection = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"welcome",
    database:"vjtechno",
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected");
    let val = "select * from students where student_name = 'Telugu'";
  
    connection.query(val,function(err,result){
        if (err) throw err;
        console.log(result);
    });

    let val2 = "select * from marks";
  
    connection.query(val2,function(err,result){
        if (err) throw err;
        console.log(result);
    })
})
*/

//Join
/*
let mysql = require('mysql');
let connection = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"welcome",
    database:"vjtechno",
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected");

    let val = "select student_name as name, grade as grade from students join marks on students.id=marks.student_id";
  
    connection.query(val,function(err,result){
        if (err) throw err;
        console.log(result);
    })
});
*/


//Unique matching ids
/*
let mysql = require('mysql');
let connection = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"welcome",
    database:"vjtechno",
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected");

    let val = "select student_name as name, grade as grade from students right join marks on students.id=marks.student_id";
  
    connection.query(val,function(err,result){
        if (err) throw err;
        console.log(result);
    })
});
*/

//Update values
/*
let mysql = require('mysql');
let connection = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"welcome",
    database:"vjtechno",
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected");

    let val = "update students set student_city = 'Trichy' where student_city = 'Karnataka'";
  
    connection.query(val,function(err,result){
        if (err) throw err;
        console.log(result);
    })
});
*/

//GroupBy
/*
let mysql = require('mysql');
let connection = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"welcome",
    database:"vjtechno",
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected");

    let val = "select grade,count(student_id) from marks group by grade";

    connection.query(val,function(err,result){
        if (err) throw err;
        console.log(result);
    })
});
*/

//order by
/*
let mysql = require('mysql');
let connection = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"welcome",
    database:"vjtechno",
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected");

    let val = "select grade,count(student_id) from marks group by grade order by count(student_id) asc";
  
    connection.query(val,function(err,result){
        if (err) throw err;
        console.log(result);
    })
})
*/

//Delete
/*
let mysql = require('mysql');
let connection = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"welcome",
    database:"vjtechno",
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected");

    let val = "Delete from students where id > 3";
  
    connection.query(val,function(err,result){
        if (err) throw err;
        console.log(result);
    })
});
*/

//Drop
let mysql = require('mysql');
let connection = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"welcome",
    database:"vjtechno",
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected");

    let val = "drop table marks";
  
    connection.query(val,function(err,result){
        if (err) throw err;
        console.log(result);
    })
})