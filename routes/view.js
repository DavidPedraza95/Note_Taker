  
// Bringing in directory and path module
const path = require("path");

// Getting the information form the database for the requested directories
function view (app) {
    
    app.get("/notes", (req, res) => 
    res.sendFile(path.join(__dirname,"../public/notes.html")));

    app.get("*", (req, res) => 
    res.sendFile(path.join(__dirname,"../public/index.html")));
};

// Exporting file
module.exports = view;