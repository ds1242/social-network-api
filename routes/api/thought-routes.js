const router = require('express').Router();


const {
    createThought,
    getAllThought,
    getSingleThought,
    deleteThought
} = require('../../controllers/thought-controllers');

// get all thoughts
router
    .route('/')
    .get(getAllThought);

router
    .route('/:userId')
    .post(createThought);
    
// post thought 
router
    .route('/:thoughtId')  
    .get(getSingleThought);

// get thought by id
router
    .route('/:userId/:thoughtId')
    .delete(deleteThought);
    
    

module.exports = router;