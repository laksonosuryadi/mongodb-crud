var express = require('express');
var router = express.Router();
var booksController = require('../controllers/booksController');


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/', booksController.addBook) //Add 1 New Book to Database

router.get('/', booksController.getBooks) //Show All Books in Database

module.exports = router;
