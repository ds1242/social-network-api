const router = require('express').Router();


const {
    createThought,
    getAllThought
} = require('../../controllers/thought-controllers');

router
    .route('/')
    .get(getAllThought);
    
    
router.route('/:userId').post(createThought);


module.exports = router;