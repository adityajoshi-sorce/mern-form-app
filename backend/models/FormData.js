const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  dob: Date,
  address: String,
  mobile: String
});

module.exports = mongoose.model('FormData', formSchema);
