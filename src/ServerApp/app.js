var express = require('express');
var cors = require('cors');



const mongoosed = require("mongoose")
const connectionString = "mongodb://127.0.0.1:27017/myblog";

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

// created object of express app
var app = express();

// enabled cores globally
app.use(cors());
// middleware to process request body
app.use(express.json());


app.get('/', (req, res) => {

    var resObj = { message: 'Hi developer, welcome to bootcamp.' }
    res.json(resObj);
});



app.get('/posts', async (req, res) => {

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


app.post('/posts', async (req, res) => {

    console.log(req.body)
    await postCollObj.create(req.body);
    res.json(req.body);
});

app.listen(4400, () => {
    console.log('Server has been started on port 4400');
});
