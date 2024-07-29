const express = require("express");
const app=express();
const port=3000;
app.use(express.json());
app.post('/user',(req,res) =>{
    res.send(Hello,${req.body.name});
});
app.listen(port,() => {
    console.log('Server running at 3000 : Sri');
});
//http://localhost:3000/user