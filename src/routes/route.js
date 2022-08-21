const express = require ('express');

const router = express.Router();

const authorController=require("../controllers/authorController")
const bookController=require("../controllers/bookController")
const publisherController=require("../controllers/publisherController")


router.post("/createAuthor",authorController.createAuthor)
router.get("/getAllAuthors",authorController.getAllAuthorDetails)


router.post("/createPublisher",publisherController.createPublisher)
router.get("/getAllPublishers",publisherController.getAllPublishers)


router.post("/createBooks",bookController.createBooks)
router.get("/getAllBookDetails",bookController.getAllBookDetails)


router.put("/booksByPut",bookController.booksByPut)

router.put("/authorRating",bookController.authorRating)  // Price Increase By 10



module.exports = router;






// const express = require('express');
// const router = express.Router();

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

// module.exports = router;