/* For you to use this, follow the instructions listed below:
1) Open the folder where this project is located and open Powershell window there
2) Enter: npm start <- this will start the server
3) Go to your web browser and enter: localhost:3000 <- this will bring you to the HTML page
4) Enjoy!
*/

// Using Node.js modules (the MySQL and Express.js module)
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    next();
  });

// Putting HTML file into localhost  
app.get("/", (req, res, next) => {
	res.sendFile(__dirname+"/index.html");
});

// This is 2.1 - I unfortunately was not able to connect to the database for some reason and insert clients
// this is how the code for 2.1 of the assignment is supposed to look like
/*
// Connecting to the database
app.use(bodyParser.json());
var con = mysql.createConnection({
  	host: "localhost",
	user: "root",
	password: "Rachana11",
	database: "veeraiclients"
});

// Adding the email and phone number fields to the database
app.post("/add-client",(req,res) => {

  var email = req.body.email;
  var pNumber = req.body.pNumber;  

  con.connect(function(err) {  
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO clients (email, pNumber) VALUES ('"+email+"', '"+pNumber+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Client added");
    res.end();
  });
});
*/

// 1.1: REST API endpoint that accepts one parameter (values of either "Foo" or "Bar") and returns False if its 
// value is incorrect.
app.post("/api/foo-bar", (req, res, next) => {
    var id = req.body.id;
    var message;
    if (id == "Foo" || id == "Bar") {
        message = "True";
    } else {
        message = "False";
    }
    res.send({
    	result: message
    });
});

  module.exports = app;