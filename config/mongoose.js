// importing mongoose library
const mongoose = require('mongoose');


// connecting to mongoose db 
// mongoose.connect('mongodb://localhost/placement-cell');
mongoose.connect('mongodb+srv://saurav:6quv8DLHe9kNsvIY@cluster0.rzv05.mongodb.net/placed?retryWrites=true&w=majority')
// mongodb+srv://saurav:6quv8DLHe9kNsvIY@cluster0.rzv05.mongodb.net/placement?retryWrites=true&w=majority

const db = mongoose.connection;


// handling error 
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// if connection succeeded 
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

// exporting module 
module.exports = db;