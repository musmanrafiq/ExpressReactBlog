const express = require("express");
const router = express.Router();
const mongoosed = require("mongoose")
const connectionString = "mongodb://127.0.0.1:27017/myblog";
const jwt = require('jsonwebtoken')
const jwtSecretKey = "dlkjdrelkjvlkjerlkjelkr";

const postSchema = new mongoosed.Schema({
    title: String,
    body: String,
    author: String,
    date: String,
    labels: []
});

const postCollObj = mongoosed.model("Post", postSchema)
const mongoose = mongoosed.connect(connectionString);

/*
    mongoose.then(() => {
        console.log("Connected to the database!");
    })
        .catch(err => {
            console.log("Cannot connect to the database!", err);
            process.exit();
        });
   */

router.get('/', async (req, res) => {
    // getting query from request
    const { query } = req;
    debugger;
    let posts = [];
    if (query.search) {
        const searchRegex = new RegExp(query.search, 'i');
        posts = await postCollObj.find({
            title: { $regex: searchRegex }
        });
    }
    else {
        posts = await postCollObj.find({});
    }
    res.json(posts);
});


router.post('/', async (req, res) => {

    const token = req.headers.authorization;
    if (token) {
        const bearerToken = token.split(' ')[1];
        const verified = jwt.verify(bearerToken, jwtSecretKey);
        console.log(verified);
    }
    console.log(token);
    await postCollObj.create(req.body);
    res.json(req.body);
});

module.exports = router;