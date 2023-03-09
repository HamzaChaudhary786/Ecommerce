
const cors = require('cors');
const express = require ('express');


const app =express();

 app.use(cors())
 
const port= process.env.PORT || 3001;


const apiData = require('./apidata.json')
app.get("/",(req , res)=>{
    res.send("API");
});



app.get("/shopping",(req , res) =>{
    res.send(apiData);

});

app.listen(port , ()=>{
console.log("api data")
});