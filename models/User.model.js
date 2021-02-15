const { Schema, model } = require('mongoose');


const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required.'],
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    unique: true,
    lowercase: true,
    trim: true
    },
  password: String,
  fullName: String
},
{
  timestamps: true
});


module.exports = model('User', userSchema);