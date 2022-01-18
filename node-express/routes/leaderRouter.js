const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route("/")
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    next();
})
.get((req,res,next)=>{
    res.end("Will send all the leaders to you!");
})
.put((req,res,next)=>{
    res.statusCode = 403
    res.end("Put operaion not supported");
})
.delete((req,res,next)=>{
    res.end("Deleting all the leaders");
})
.post((req,res,next)=>{
    res.end("Will add leader: "+ req.body.name+
        " with details "+ req.body.description);
});

leaderRouter.route("/:leaderId")
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    next();
})
.get((req,res,next)=>{
    res.end("Will send ditails of leader: "+req.params.leaderId+" to you");
})
.post((req,res,next)=>{
    res.statusCode = 403
    res.end("Post operaion not supported on leader: "+req.params.leaderId);
})
.put((req,res,next)=>{
    res.end("Will update the leader: "+req.params.leaderId+" with details "+ req.body.description);
})
.delete((req,res,next)=>{
    res.end("Deleting leader: "+ req.params.leaderId);
});

module.exports = leaderRouter;