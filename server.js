const express = require("express");
const path = require("path");


// Sets up the Express App
// =============================================================
const app = express();
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];

app.get("/api/reservations", function(req, res) {
    return.json(characters);
}