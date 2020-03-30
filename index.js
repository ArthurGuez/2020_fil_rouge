var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./mydb.db3');

var app = express();

// Parsing
app.use(express.urlencoded({
    extended: false
}));

app.post('/', (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;
        // Create Table  
        db.serialize(function() {  
            db.run("CREATE TABLE IF NOT EXISTS Users (Name TEXT, Email TEXT), Subject TEXT, Message Text");  
            // Insert into Table 
            db.run(`INSERT into Users(Name, Email, Subject, Message) VALUES ('${name}','${email}', '${subject}','${message}')`);   
        });  
});

