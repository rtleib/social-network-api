const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: 'Username is Required',
  },

  email: {
    type: String,
    unique: true,
    trim: true,
    required: 'Email is Required',
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address",
    ],
  },
  
});

const User = model('User', UserSchema);

module.exports = User;
