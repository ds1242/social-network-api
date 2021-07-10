const { User, Thought } = require('../models');

const thoughtController = {
    // create thought and add thought to User
    createThought({ params, body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then(dbThoughtData => {
                if(!dbThoughtData) {
                    res.status(404).json({ message: 'No user thought found with this id' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
    },
    // Get all Thoughts
    getAllThought(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                res.status(400).json({ message: 'something went wrong getting thought data' })
            })
    },

    getSingleThought({ params }, res) {
        Thought.findOne({ _id: params.thoughtId })
            .then(dbSingleThought => {
                if(!dbSingleThought) {
                    res.status(404).json({ message: 'No thought found with this id' });
                    return;
                }
                res.json(dbSingleThought)
            })
            .catch(err => {
                res.status(400).json({ message: 'error trying to find a single thought' });
            });
    }

};

module.exports = thoughtController;