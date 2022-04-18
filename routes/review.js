let express = require('express');
let reviewController = require('../controllers/review');

let router = express.Router();

router.get('/', reviewController.getReview);

module.exports = router;