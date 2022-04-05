const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/auth');

const Admin = require('../models/admin');

router.get('/', (req, res, next) => {
    Admin.find()
        .select('firstName lastName company _id email')
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
        });
});
// user can register (create new user)
router.post('/signup', (req, res, next) => {
    Admin.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user >= 1) {
                return res.status(409).json({
                    message: 'email already exists'
                });
            }
            else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    }
                    else {
                        const user = new Admin({
                            _id: new mongoose.Types.ObjectId(),
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            position: req.body.position,
                            company: req.body.company,
                            email: req.body.email,
                            password: hash
                        });
                        user.save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: 'user created'
                                })
                            })
                            .catch(err => console.log(err))
                    }

                });
            }
        })

});

router.post('/login', (req, res, next) => {
    Admin.find({ email: req.body.email})
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'no account found. Sign up.'
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'authentication failed'
                    });
                }
                if (result) {
                    // DO NOT SEND PASSWORD W/ TOKEN
                    const token = jwt.sign({
                        email: user[0].email,
                        userId: user[0]._id
                    }, process.env.JWT_KEY, {
                        expiresIn: "1h"
                    });

                    return res.status(200).json({
                        message: 'Authentication successful',
                        token: token,
                        userID: user[0]._id
                    })
                }
                return res.status(401).json({
                    message: 'login failed'
                });
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error:err
            });
        });
});

// update the user
router.patch('/:userId', (req, res, next) => {
    res.status(200).json({
        message: 'updated the user!',
        userId: req.params.userId
    });
});

router.delete('/:userId', checkAuth, (req, res, next) => {
    Admin.remove({_id: req.params.userId})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'User deleted'
            });
        })
        .catch(err => console.log(err))
});

module.exports = router;
