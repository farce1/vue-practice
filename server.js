let express = require('express');

// App declaration
let app = express();




// MIDDLEWARE

app.use(express.static('public'));





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