const express = require("express");
const router = express().Router();
const News = require("../models/News");

router.post("/",async (req, res)=>{
    try {
        const news = new News({
            title: req.body.title,
            content: req.body.content,
            photos: req.body.photos,
            date: req.body.date,
            field: req.body.field
        });
        const savedNews = await news.save();
        res.send("News added successfully");
    } catch(err){
        console.log("Error while adding news : "+ err);
        res.status().send("Error while adding news : "+ err);
    }
})