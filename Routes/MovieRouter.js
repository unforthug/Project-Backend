const express = require('express')
const router = express.Router();
const {AddMovie,getMovies} = require('../Controllers/MovieController')



router.post('/',AddMovie)
router.get('/',getMovies)


module.exports = router;