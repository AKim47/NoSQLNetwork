const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        // range 1-280 characters
    },
    createdAt: {
        type: Date,
        default: Date.now
        //Use a getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true
    },
    reactions: []
})

const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;