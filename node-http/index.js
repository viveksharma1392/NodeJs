const http = require("http");
const path = require("path");
const file = require("fs");


const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res)=>{
    console.log("Request for "+req.url+" by method "+req.method);

    if(req.method=="GET"){
        var fileUrl;
        if(req.url=='/'){
            console.log("requesting index.html")
            fileUrl = "/index.html";
        }
        else fileUrl=req.url;

        var filePath = path.resolve("./public"+fileUrl)
        console.log("Filepath:: "+filePath)
        const fileExt = path.extname(filePath)
        console.log("File extension "+fileExt)
        if(fileExt=='.html'){
            file.exists(filePath, (exists)=>{
                if(!exists){
                    res.statusCode = 404;
                    res.setHeader("Content-Type","text/html");
                    res.end("<html><body><h1> Error 404: "+ fileUrl +" not found</h1></body></html>");
                    return;
                }
                else{
                    res.statusCode = 200;
                    res.setHeader("Content-Type","text/html");
                    console.log("Creating read stream for file ::"+filePath);
                    file.createReadStream(filePath).pipe(res);
                }
            })
        }
        else{
            res.statusCode = 404;
            res.setHeader("Content-Type","text/html");
            res.end("<html><body><h1> Error 404: "+ fileUrl +" not HTML</h1></body></html>");
            return;
        }
    }
    else{
        res.statusCode = 404;
        res.setHeader("Content-Type","text/html");
        res.end("<html><body><h1> Error 404: "+ req.method +" not supported</h1></body></html>");
        return;
    }
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`)
});

