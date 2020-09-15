const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 5000;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "projectcompanies_2"
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

app.get("/planmeca", function(req, response){
    connection.query("SELECT * FROM koneasentaja WHERE id = 1", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.get("/metso", function(req, response){
    connection.query("SELECT * FROM koneasentaja WHERE id = 2", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.get("/mesvac", function(req, response){
    connection.query("SELECT * FROM koneasentaja WHERE id = 3", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.get("/hilti", function(req, response){
    connection.query("SELECT * FROM koneasentaja WHERE id = 4", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.get("/helenservice", function(req, response){
    connection.query("SELECT * FROM koneasentaja WHERE id = 5", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.get("/abb", function(req, response){
    connection.query("SELECT * FROM koneistaja WHERE id = 1", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.get("/amak", function(req, response){
    connection.query("SELECT * FROM koneistaja WHERE id = 2", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.get("/hellmaninkonepaja", function(req, response){
    connection.query("SELECT * FROM koneistaja WHERE id = 3", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.get("/isevat", function(req, response){
    connection.query("SELECT * FROM koneistaja WHERE id = 4", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.get("/cncenter", function(req, response){
    connection.query("SELECT * FROM koneistaja WHERE id = 5", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.get("/planmecak", function(req, response){
    connection.query("SELECT * FROM koneistaja WHERE id = 6", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.get("/erikkila", function(req, response){
    connection.query("SELECT * FROM levyseppahitsaaja WHERE id = 1", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})
app.get("/hitsitalo", function(req, response){
    connection.query("SELECT * FROM levyseppahitsaaja WHERE id = 2", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.get("/levanto", function(req, response){
    connection.query("SELECT * FROM levyseppahitsaaja WHERE id = 3", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.get("/konepajamakelin", function(req, response){
    connection.query("SELECT * FROM levyseppahitsaaja WHERE id = 4", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.get("/temet", function(req, response){
    connection.query("SELECT * FROM levyseppahitsaaja WHERE id = 5", function(error, results){
        if(error) {
            response.send(error);
        } else {
            return response.json({
                data: results
            })
        }
    });
})

app.listen(port, () => console.log("Portti 3000 is working!"));