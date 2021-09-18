// Requiring file writing and routing
const fs = require("fs");
const path = require("path");

// Retrieving information from a specific api
function data (app) {

app.get("/api/notes", (req, res) => 
res.sendFile(path.join(__dirname, "../db/db.json")));

    // Writing information for the note and storing it in the database
    app.post("/api/notes", (req, res) => {

        let newNote = {
            id:Math.random() * 10000000,
            title:req.body.title,
            text:req.body.text
        };

        let note = JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"),"utf-8"));
        note.push(newNote);
        fs.writeFileSync("./db/db.json",JSON.stringify(note));
        res.json(note);
    });
};

// Exporting file data
module.exports = data;