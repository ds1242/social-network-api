const router = require('express').Router();

const {
    getAllUser,
    createUser
} = require('../controllers/user-controllers');


router
    .route('/api')
    .get(getAllUser)
    .post(createUser);



module.exports = router;