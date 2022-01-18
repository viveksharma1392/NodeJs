const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route("/")
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    next();
})
.get((req,res,next)=>{
    res.end("Will send all the dishes to you!");
})
.put((req,res,next)=>{
    res.statusCode = 403
    res.end("Put operaion not supported");
})
.delete((req,res,next)=>{
    res.end("Deleting all the dishes");
})
.post((req,res,next)=>{
    res.end("Will add dish: "+ req.body.name+
        " with details "+ req.body.description);
});

dishRouter.route("/:dishId")
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    next();
})
.get((req,res,next)=>{
    res.end("Will send ditails od dish: "+req.params.dishId+" to you");
})
.post((req,res,next)=>{
    res.statusCode = 403
    res.end("Post operaion not supported on dish: "+req.params.dishId);
})
.put((req,res,next)=>{
    res.end("Will update the dish: "+req.params.dishId+" with details "+ req.body.description);
})
.delete((req,res,next)=>{
    res.end("Deleting dish: "+ req.params.dishId);
});

module.exports = dishRouter;