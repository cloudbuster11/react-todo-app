const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide an Email!'],
    unique: [true, 'Email exists.'],
  },
  password: {
    type: String,
    required: [true, 'Please provide an Password!'],
    unique: [false],
  },
});

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;
