const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// DataBase Connection
mongoose.connect('mongodb://127.0.0.1/login', {useMongoClient: true}, ()=>{

    console.log('connected');
});

// App declaration
let app = express();




// MIDDLEWARE
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




// Creating a server
let PORT = process.env.PORT || 3000;
app.listen(PORT, (err)=>{
   if(err){
       console.log('Something went wrong' , err);
   }
   else{
       console.log(`Connected on port ${PORT}`);
   }
});