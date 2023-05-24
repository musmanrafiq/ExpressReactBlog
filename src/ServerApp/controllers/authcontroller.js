const express = require("express");
const jwt = require("jsonwebtoken");
const jwtSecretKey = "dlkjdrelkjvlkjerlkjelkr";

const router = express.Router();

// all endpoints related to authentication

// login endpoint
router.post('/login', (req, res) => {

    const { email, password } = req.body;

    // login to check if user exists in the database
    // with required role


    const userExists = email === "u@gmail" && password === "123456";

    if (userExists) {
        const token = jwt.sign({ email }, jwtSecretKey, {
            expiresIn: '2h'
        })

        const successRes = {
            success: true,
            data: {
                email,
                token
            }
        }
        res.json(successRes);
    }
    res.json({ success: false, message: 'User does not exist' });
})


module.exports = router;