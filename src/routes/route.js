const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {    // route handler
    res.send('My first ever api!')
});

router.get('/test-you', function (req, res) {   // route handler
    res.send('My second ever api!')
});

module.exports = router;
// adding this comment for no reason