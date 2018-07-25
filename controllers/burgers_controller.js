var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/burgers",function(req,res){
    burger.all(function(burgerData){
        res.render("index")
    });
});

router.post("/burger/make", function (req,res){
    burger.all(function(burgerData){
        res.render("index");
    });
});


module.exports = router; 