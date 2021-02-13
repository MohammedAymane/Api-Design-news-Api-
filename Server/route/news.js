const express = require("express");
const router = express.Router();
const News = require("../models/News");
const fs = require("fs");


router.post("/",async (req, res)=>{
    try {
        var image = req.files.image;
        image.mv("../Server/images/" + image.name, function (error, result) {
          if (error) throw error;
        });

        console.log(image)
        const news = new News({
            title: req.body.title,
            content: req.body.content,
            photos: "image/"+image.name,
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

router.get("/", async (req, res) => {
    let page = req.query.page;
    let limit = req.query.limit;
    let filter = req.query.filter;
    let sortby = req.query.sortby;
    try{
        const news = await News.find().sort().limit(parseInt(limit));
        res.send(news);
        console.log("page : "+page)
        console.log("limit : "+limit)
        console.log("field : "+filter)
        console.log("sortedby : "+sortby)
        console.log("url param : "+ req.params);
    } catch(err) {
        res.status(500).send("Error getting the news : "+err);
        console.log("Error getting the news : "+err);
    }
})

router.delete("/:id", async (req, res) =>{
    try {
        const newsDeleted = await News.findByIdAndRemove({ _id: req.params.id });
        res.send("News removed successfuly");
    } catch(err){
        console.log("Error while removing the news : "+err);
        res.send("Error while removing the news : "+err);
    }
})

module.exports = router;