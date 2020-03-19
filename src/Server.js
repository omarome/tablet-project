const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 5000;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "projectcompanies"
})


connection.connect(function(error){
    if(error) {
        console.log(error);
    } else {
        console.log("connected");
    }
})

app.get("/koneasentaja", function(req, response){
    connection.query("SELECT * FROM koneasentaja", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.get("/koneautomaatioasentaja", function(req, response){
    connection.query("SELECT * FROM koneautomaatioasentaja", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.get("/koneistaja", function(req, response){
    connection.query("SELECT * FROM koneistaja", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.get("/levyseppahitsaaja", function(req, response){
    connection.query("SELECT * FROM levyseppahitsaaja", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.listen(port, () => console.log("Portti 5000 is working!"));