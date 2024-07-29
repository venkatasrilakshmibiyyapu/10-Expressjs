const http =require("http");
const server =http.createServer(
    (req,res) => {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<html><title>ExpressJS Framework </title></head>');
        res.write('<body><h2>Hello from node.js server!! : Sri </h2></body>');
        res.write('<html>');
        res.end();
    });
    server.listen(8000,() => {
        console.log('server listening on port 8000 : Sri');
    });