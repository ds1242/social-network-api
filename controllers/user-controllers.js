const { User } = require('../models');


const userController = {

    // find all users
    getAllUser(req, res) {
        User.find({})
            .populate({
                path: 'thought',
            })
            .then(dbUserFindAll => res.json(dbUserFindAll))
            .catch(err => {
                res.status(400).json(err, { message: 'something went wrong trying to find all users' });
            });
    },
    // get user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thought'
            })
            .then(dbUserFindOneData => {
                if(!dbUserFindOneData) {
                    res.status(404).json({message: 'No user found with this id' });
                    return;
                }
                res.json(dbUserFindOneData);
            })
            .catch(err => {
                res.status(400).json(err)
            });
    },
    // createUser
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserCreate => res.json(dbUserCreate))
            .catch(err => res.json(err))
    },
    // add a friend
    addFriend({ params, body }, res) {
        User.findOneAndUpdate (
            { _id: params.userId },
            { $push: { friends: body } },
            { new: true, runValidators: true }
        )
        .then(dbAddFriendData => {
            if(!dbAddFriendData) {
                res.status(404).json({ message: 'No user data to add a friend' });
                return;
            }
            res.json(dbAddFriendData)
        })
        .catch(err => res.json(err));
    },
    // update a user
    updateUser({ params, body }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true, runValidators: true }
        )
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },
    // delete a user
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if(!dbUserData) {
                    res.status(404).json({message: 'no user with that id'});
                    return;
                }
                res.json(dbUserData)
            })
            .catch(err => res.status(400).json(err))
    }
};


module.exports = userController;