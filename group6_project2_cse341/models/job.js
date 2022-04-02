const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  employer: String,
  description: String,
  wage: Number,
  datePosted: {
    type : Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Job', jobSchema);
