const router = require('express').Router();


const {
    createThought,
    getAllThought,
    getSingleThought,
    deleteThought,
    updateThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controllers');

// get all thoughts
router
    .route('/')
    .get(getAllThought);
// post thought
router
    .route('/:userId')
    .post(createThought);
    
// get thought by Id and update thought by Id
router
    .route('/:thoughtId')  
    .get(getSingleThought)
    .put(updateThought);

// delete thought and remove it from user
router
    .route('/:userId/:thoughtId')
    .delete(deleteThought);
    
// post and delete reaction
router
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)

module.exports = router;