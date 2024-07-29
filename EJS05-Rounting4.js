var myexpress=require("express");
var app=myexpress();
var port=8000;
app.get('/',(req,res)=>{
    res.send("Hello world from expressjs:Sri")
});
app.get('/home',(req,res)=>
    {
        res.send("Display from home Page:Sri")
    });
app.get('/about',(req,res)=>
        {
            res.send("Display from about Page:Sri")
        });
app.get('/contact',(req,res)=>
        {
               res.send("Display from contact Page:Sri")
        });
app.listen(port,()=>{
    console.log("Running on port 8000")
});
//type in terminal npm install express
// type in browser http://localhost:8000/
//................. http://localhost:8000/about
//................. http://localhost:8000/contact
//stop the process after output using control+c
