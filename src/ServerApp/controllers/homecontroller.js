const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {

    var resObj = { message: 'Hi developer, welcome to bootcamp.' }
    res.json(resObj);
});

module.exports = router;