const myexpress=require("express");
const app=myexpress();
const port=3000;
app.get('/user/:id',(req,res)=>{
    res.send(`User ID: ${req.params.id}`);
});
app.listen(port,()=>{
    console.log(" Server Running  at port 3000")
});
//http://localhost:3000/user/123