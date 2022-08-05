const express = require('express');
const abc = require('../introduction/intro')
const xyz = require('../logger/logger')
const date1 = require('../util/helper')
const formatter = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    xyz.welcome()
    date1.printDate()
    date1.printMonth()
    date1.welcome2()
    formatter.trim()
    formatter.changetoLowerCase()
    formatter.changeToUpperCase()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason