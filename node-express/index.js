const express = require("express");
const  http = require("http");
const morgan = require("morgan");
const bodyparser = require("body-parser");

const dishRouter = require("./routes/dishRouter");
const promoRouter = require("./routes/promoRouter");
const leaderRouter = require("./routes/leaderRouter");

const app = express();
app.use(morgan("dev"));
var static_file_path = __dirname+"/public"
console.log(static_file_path)
app.use(express.static(static_file_path));
app.use(bodyparser.json());

app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leaders", leaderRouter);


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