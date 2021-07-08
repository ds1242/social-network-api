const { User } = require('../models');


const userController = {

    // find all users
    getAllUser(req, res) {
        User.find({})
            .then(dbUserFindAll => res.json(dbUserFindAll))
            .catch(err => {
                res.status(400).json(err, { message: 'something went wrong trying to find all pizzas' });
            });
    },

    // createUser
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserCreate => res.json(dbUserCreate))
            .catch(err => res.json(err))
    }
}