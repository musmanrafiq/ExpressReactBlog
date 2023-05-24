var express = require('express');
var cors = require('cors');

// created object of express app
var app = express();
// enabled cores globally
app.use(cors());
// middleware to process request body
app.use(express.json());

// configuring routes
app.use("/", require('./controllers/homecontroller'));
app.use("/auth", require('./controllers/authcontroller'));
app.use("/posts", require("./controllers/postcontroller"));

app.listen(4400, () => {
    console.log('Server has been started on port 4400');
});
