const myexpress=require("express");
const app=myexpress();
const port=3000;
app.get('/search',(req,res)=>{
    const query =req.query.q;
    res.send(`Search query: ${query}`);
});
app.listen(port,()=>{
    console.log(" Server Running  at port 3000")
});
//http://localhost:3000/search?q=hello