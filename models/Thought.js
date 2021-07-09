const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        reaction: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody:{
            type: String,
            required: 'reaction text is required',
            validate: [({ length }) => length <= 280, 'text must be between 1 and 280 characters']
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
    }
    },
    {
        toJSON: {
            getters: true
        }
    }
);


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

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;