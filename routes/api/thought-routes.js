const router = require('express').Router();


const {
    createThought,
    getAllThought,
    getSingleThought
} = require('../../controllers/thought-controllers');

// get all thoughts
router
    .route('/')
    .get(getAllThought);
    
// post thought 
router
    .route('/:userId')
    .post(createThought);

// get thought by id
router
    .route('/:userId/:thoughtId')
    .get(getSingleThought)

module.exports = router;