const { request } = require('express');
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     logger.welcome()

//     res.send('My second ever api!')
// });

// router.get('/students', function (req, res) {
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })

// router.get('/student-details/:name', function(req, res){
//     /*
//     params is an attribute inside request that contains 
//     dynamic values.
//     This value comes from the request url in the form of an 
//     object where key is the variable defined in code 
//     and value is what is sent in the request
//     */

//     let requestParams = req.params

//     // JSON strigify function helps to print an entire object
//     // We can use any ways to print an object in Javascript, JSON stringify is one of them
//     console.log("This is the request "+ JSON.stringify(requestParams))
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)

//     res.send('Dummy response')
// })

router.get('/GET/movies', function (req, res) {

    let movie = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    res.send(movie)
})


router.get('/GET/movies/:indexNumber', function (req, res) {
    let movieArray = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let index = (req.params.indexNumber - 1)
    if (index < movieArray.length) {
        let movie = movieArray[index]
        res.send(movie)

    } else if (index > movieArray.length) {
        res.send("Please Enter Valid Number")
    }

})


router.get('/GET/films', function (req, res) {

    const data = [{
        id: 1,
        name: "The Shining",
    }, {
        id: 2,
        name: "Incendies"
    }, {
        id: 3,
        name: "Rang de Basanti"
    }, {
        id: 4,
        name: "Finding Nemo"
    }]

    res.send(data)

})


router.get('/GET/films/:filmId', function (req, res) {

    const data = [{
        id: 1,
        name: "The Shining",
    }, {
        id: 2,
        name: "Incendies"
    }, {
        id: 3,
        name: "Rang de Basanti"
    }, {
        id: 4,
        name: "Finding Nemo"
    }]


    let index = req.params.filmId - 1
    if (index < data.length) {
       var movie = data[index]
    

    } else {
        res.send("Please Enter Valid Number")
    }
    res.send(movie)


})


module.exports = router;