const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Thought text is required',
            validate: [({ length }) => length <= 280, 'text must be between 1 and 280 characters']
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions: {
            reactions: [ReactionSchema]
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;