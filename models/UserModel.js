const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'Please input your first name']
        },
        lastName: {
            type: String,
            required: [true, 'Please input your last name']
        },
        email: {
            type: String,
            required: [true, 'Please input your valid email address'],
            unique: true
        },
        password: {
            type: String
        },
        userRole: {
            type: String,
            enum: ['admin', 'student', 'tutor', 'none'],
            default: 'none'
        },
        isTutor: {
            type: Boolean,
            default: false
        },
        isAdmin: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

// Create and export user model
module.exports = mongoose.model('User', UserSchema);
