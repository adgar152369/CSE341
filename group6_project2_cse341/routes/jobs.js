const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// import job model
const Job = require('../models/job');

// handle incoming GET requests to /jobs
router.get('/', (req, res, next) => {
    Job.find()
      .select('title employer _id description wage datePosted')
      .exec()
      .then(docs => {
        const response = {
          count: docs.length,
          jobs: docs
        };
        res.status(200).json(response);
      })
      .catch(err => console.log(err));
});

router.post('/', (req, res, next) => {
  const job = new Job({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    employer: req.body.employer,
    description: req.body.description,
    wage: req.body.wage,
  });
  // store in database
  job.save()
  .then(result => {
    console.log(result);
    res.status(200).json({
        message: 'job created.',
        createdJob: result
    });
  })
  .catch(err => console.log(err));
});

router.get('/:jobId', (req, res, next) => {
    const id = req.params.jobId;
    Job.findById(id)
      .exec()
      .then(doc => {
        console.log(doc);
        if (doc) {
          res.status(200).json(doc);
        }
        else {
          res.status(404).json({
            message: 'no data found'
          });
        }
      })
      .catch(err => console.log(err));
});

router.patch('/:jobId', (req, res, next) => {
  const id = req.params.jobId;
  const updateOps = {};
  // loop through request body as an array
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Job.updateOne({_id: id}, { $set: {updateOps}})
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result)
    })
    .catch(err => console.log(err));
});

router.delete('/:jobId', (req, res, next) => {
  const id = req.params.jobId;
    Job.remove({
      _id: id
    })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => console.log(err));
});

module.exports = router;

