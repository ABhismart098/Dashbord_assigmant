// models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  profileImage: {type: String},
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: Number, required: true },
  designation: { type: String, required: true },
  gender: { type: String, required: true },
  course: [String],
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Employee', employeeSchema);
