const express = require('express');
const FoodModel = require('../models/FoodModel');
const router= require('express').Router()

router.get('/getAllFoods',(req,res)=>{
    FoodModel.find({},(err,result)=>{
        if (err){
            res.send(err);
        }else {
            res.send(result);
        }
    });
});
module.exports=router;