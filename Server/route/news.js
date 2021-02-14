const express = require("express");
const router = express.Router();
const News = require("../models/News");
const fs = require("fs");



router.post("/",async (req, res)=>{
    try {
        var image = req.files.image;
        image.mv("./images/" + image.name, function (error, result) {
          if (error) throw error;
        });
        var parsedData = JSON.parse(req.body.data);
        const news = new News({
            title: parsedData.title,
            content: parsedData.content,
            photos: "./images/" + image.name,
            date: parsedData.date,
            field: parsedData.field
        });
        const savedNews = await news.save();
        res.send("News added successfully");
    } catch(err){
        console.log("Error while adding news : "+ err);
        res.status().send("Error while adding news : "+ err);
    }
})

router.get("/", async (req, res) => {
    let page = (req.query.page)-1;
    if(!(req.query.page)){
        page = 0;
    }
    let limit = req.query.limit;
    if(!limit){
        limit = 10;
    }
    let filter = req.query.filter;
    let sortby = req.query.sortby;
    try{
        var news
        if(filter) {
            news = await News.find({field: filter}).sort(sortby);
            news = news.slice(page*10,page*10+limit);
        }else{
            news = await News.find().sort(sortby);
            news = news.slice(page*10,page*10+limit);
        }
        res.send(news);
    } catch(err) {
        res.status(500).send("Error getting the news : "+err);
        console.log("Error getting the news : "+err);
    }
})

router.delete("/:id", async (req, res) =>{
    try {
        const imageLocation = await News.findOne({ _id: req.params.id });
        try {
            fs.unlinkSync(imageLocation.photos);
            //Image removed
          } catch (err) {
            console.error("Error while removing the image : "+err);
          }
        const newsDeleted = await News.findByIdAndRemove({ _id: req.params.id });
        res.send("News removed successfuly");
    } catch(err){
        console.log("Error while removing the news : "+err);
        res.send("Error while removing the news : "+err);
    }
})


router.put("/:id", async (req ,res) =>{
    try{
        var image = req.files.image;
        image.mv("./Server/images/" + image.name, function (error, result) {
          if (error) throw error;
        });
        var parsedData = JSON.parse(req.body.data);
        const updatedNews = {
            title: parsedData.title,
            content: parsedData.content,
            photos: "./Server/images/" + image.name,
            date: parsedData.date,
            field: parsedData.field
        };
        const newsUpdated = await News.findOneAndUpdate({ _id: req.params.id },updatedNews)
        res.send("News updated successfuly");
    } catch(err){
        res.send("Error while updating the news : "+err)
        console.log("Error while updating the news : "+err)
    };
})



router.get("/:id", async (req, res) =>{
    try {

        let page = (req.query.page)-1;
        if(!(req.query.page)){
            page = 0;
        }
        let limit = req.query.limit;
        if(!limit){
            limit = 10;
        }
        let filter = req.query.filter;
        let sortby = req.query.sortby;


        var newsById;
        if(req.params.id=="first"){

            try{
                var news
                if(filter) {
                    news = await News.find({field: filter}).sort(sortby);
                    news = news.slice(page*10,page*10+limit);
                }else{
                    news = await News.find().sort(sortby);
                    news = news.slice(page*10,page*10+limit);
                }
                res.send(news[0]);
            } catch(err) {
                res.status(500).send("Error getting the first news : "+err);
                console.log("Error getting the first news : "+err);
            }


        }else if(req.params.id=="last"){

            try{
                var news
                if(filter) {
                    news = await News.find({field: filter}).sort(sortby);
                    news = news.slice(page*10,page*10+limit);
                }else{
                    news = await News.find().sort(sortby);
                    news = news.slice(page*10,page*10+limit);
                }
                res.send(news[news.length-1]);
            } catch(err) {
                res.status(500).send("Error getting the last news : "+err);
                console.log("Error getting the last news : "+err);
            }


        }else if(req.params.id=="count"){

            try{
                const news = await News.find();
                res.send(news.length);
            } catch(err) {
                res.status(500).send("Error getting the number of news : "+err);
                console.log("Error getting the number of news :"+err);
            }

        }else{
            newsById = await News.findOne({ _id: req.params.id });
            res.send(newsById);
        }
    } catch(err){
        console.log("Error while getting the news by id : "+err);
        res.send("Error while getting the news by id : "+err);
    }
})



module.exports = router;