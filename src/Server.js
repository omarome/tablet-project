const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 5000;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: ""
})


connection.connect(function(error){
    if(error){
        console.log(error);
    } else {
        console.log("connected");
    }
})


app.listen(port, () => console.log("Portti 5000 is working!"));