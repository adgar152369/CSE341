const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  employer: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  wage: {
    type: Number,
    required: true
  },
  datePosted: {
    type : Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Job', jobSchema);
