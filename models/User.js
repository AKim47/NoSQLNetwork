const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function(v) {
                    return /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-z\.]{2,6})$/
                }
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {

            }
        ]

    }
)

const User = model('User', UserSchema);
module.exports = User;