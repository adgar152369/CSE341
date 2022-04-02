const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling GET requests to /user'
    });
});
// user can register
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'user can register'
    });
});

router.post('/login', (req, res, next) => {
    res.status(200).json({
        message: 'user has logged in'
    });
});
// update the user
router.patch('/:userId', (req, res, next) => {
    res.status(200).json({
        message: 'updated the user!',
        userId: req.params.userId
    });
});

router.delete('/:userId', (req, res, next) => {
    res.status(200).json({
        message: 'deleted user!',
        userId: req.params.userId
    });
});

module.exports = router;
