var express = require('express');
var cors = require('cors');

// created object of express app
var app = express();

// enabled cores globally
app.use(cors());

app.get('/', (req, res) => {

    var resObj = { message: 'Hi developer, welcome to bootcamp.' }
    res.json(resObj);
});


app.get('/posts', (req, res) => {

    var posts = [
        {
            id: 1,
            title: 'I Love Food',
            body: 'Food is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            author: 'Bootcamp',
            date: Date.now().toString(),
            labels: [
                'Food', 'Good'
            ],
            detailsLink: 'abaocsfjlff'
        },
        {
            id: 2,
            title: 'I Love Food',
            body: 'Food is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            author: 'Bootcamp',
            date: Date.now().toString(),
            labels: [
                'Food', 'Good'
            ],
            detailsLink: 'abaocsfjlff'
        },
        {
            id: 2,
            title: 'Todays class',
            body: 'Food is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            author: 'Bootcamp',
            date: Date.now().toString(),
            labels: [
                'Food', 'Good'
            ],
            detailsLink: 'abaocsfjlff'
        }
    ];

    res.json(posts);
});


app.listen(4400, () => {
    console.log('Server has been started on port 4400');
});
