const express = require("express");
const bodyParser = require("body-parser");

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route("/")
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    next();
})
.get((req,res,next)=>{
    res.end("Will send all the promotions to you!");
})
.put((req,res,next)=>{
    res.statusCode = 403
    res.end("Put operaion not supported");
})
.delete((req,res,next)=>{
    res.end("Deleting all the promotions");
})
.post((req,res,next)=>{
    res.end("Will add promo: "+ req.body.name+
        " with details "+ req.body.description);
});

promoRouter.route("/:promoId")
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    next();
})
.get((req,res,next)=>{
    res.end("Will send ditails of promo: "+req.params.promoId+" to you");
})
.post((req,res,next)=>{
    res.statusCode = 403
    res.end("Post operaion not supported on promo: "+req.params.promoId);
})
.put((req,res,next)=>{
    res.end("Will update the promo: "+req.params.promoId+" with details "+ req.body.description);
})
.delete((req,res,next)=>{
    res.end("Deleting promo: "+ req.params.promoId);
});

module.exports = promoRouter;