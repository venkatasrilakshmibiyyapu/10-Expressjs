var express=require("express")
var app =express();
 var port=8000;
 app.get("/",(req,res)=>
{
    res.send("Hello World from ExpressJS:SRI")
});
app.listen(port,()=>{
    console.log("Running on port 8000")
})
//to run this program type in terminal
// npm install express
//nodemon EJS01-Express.js
// got to browser and type http://localhost:8000/