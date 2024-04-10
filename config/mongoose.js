const mongoose = require('mongoose');
const url = 'mongodb+srv://kreya:sDY2eopx2qf8ZTQT@cluster0.y3ra6bz.mongodb.net/Issue_traker';
// mongoose.connect('url') 
mongoose.connect(url);
const db=mongoose.connection;

//If any Error then Getting this Line
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  //Exports db
