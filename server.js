let express = require('express');


let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.static('public'));


app.listen(PORT, (err)=>{
   if(err){
       console.log('Something went wrong' , err);
   }
   else{
       console.log(`Connected on port ${PORT}`);
   }
});