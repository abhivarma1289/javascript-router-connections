const  Router  = require("express");

const express=require('express');
const bodyParser=require('body-parser');

const dishRouter=express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('     Will Send all the Dishes to You !!');
})
.post((req,res,next)=>{
    res.end('Will add the dishe :' + req.body.name +' with details : ' + req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('PUT method cant be supported /dishes');
})
.delete((req,res,next)=>{
    res.end('Deleting all the dishes !!');
});


module.exports = dishRouter;


