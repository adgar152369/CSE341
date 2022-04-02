const express = require('express');
const router = express.Router();

// handle incoming GET requests to /jobs
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling GET requests to /jobs'
    });
});

router.post('/', (req, res, next) => {
  const job = {
    title: req.body.title,
    description: req.body.description
  }
  res.status(200).json({
      message: 'job created',
      createdJob: job
  });
});

router.get('/:jobId', (req, res, next) => {
    const id = req.params.jobId;
    if (id === 'special') {
        res.status(200).json({
            message: 'special job ID',
            id: id
        });
    }
    else {
        res.status(200).json({
            message: 'you passed an ID'
        });
    }
});

router.patch('/:jobId', (req, res, next) => {
    res.status(200).json({
        message: 'updated job!'
    });
});

router.delete('/:jobId', (req, res, next) => {
    res.status(200).json({
        message: 'deleted job!'
    });
});

module.exports = router;
