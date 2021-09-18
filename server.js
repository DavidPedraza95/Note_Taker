  
// necessary modules
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000

// Directory and bringing information
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

// Api routes
require('./routes/data')(app);
require('./routes/view')(app);


// Having the code listen at defined port locally
app.listen(PORT, () => {
    console.log(`PORT Listening ON ${PORT}`)
});