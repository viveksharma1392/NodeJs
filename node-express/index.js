const express = require("express");
const  http = require("http");
const morgan = require("morgan");
const bodyparser = require("body-parser");


const app = express();
app.use(morgan("dev"));
var static_file_path = __dirname+"/public"
console.log(static_file_path)
app.use(express.static(static_file_path));
app.use(bodyparser.json());

app.all("/dishes", (req,res,next)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    next();
});

app.get("/dishes", (req,res,next)=>{
    res.end("Will send all the dishes to you!");
});

app.put("/dishes", (req,res,next)=>{
    res.statusCode = 403
    res.end("Put operaion not supported");
});

app.delete("/dishes", (req,res,next)=>{
    res.end("Deleting all the dishes");
});

app.post("/dishes", (req,res,next)=>{
    res.end("Will add dish: "+ req.body.name+
        " with details "+ req.body.description);
});

app.get("/dishes/:dishId", (req,res,next)=>{
    res.end("Will send ditails od dish: "+req.params.dishId+" to you");
});

app.post("/dishes/:dishId", (req,res,next)=>{
    res.statusCode = 403
    res.end("Post operaion not supported on dish: "+req.params.dishId);
});

app.put("/dishes/:dishId", (req,res,next)=>{
    res.end("Will update the dish: "+req.params.dishId+" with details "+ req.body.description);
});

app.delete("/dishes/:dishId", (req,res,next)=>{
    res.end("Deleting dish: "+ req.params.dishId);
});

const hostname = "localhost";
const port = 3000;
app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader("Content-type","text/html");
    res.end("<html><body><h1>Hello World!</h1></body></html>");
});

const server = http.createServer(app);

server.listen(port,  hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}`);
});