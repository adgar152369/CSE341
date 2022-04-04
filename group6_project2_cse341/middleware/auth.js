const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        // add user_Data field to request object
        req.user_Data = decoded;
        next();
    }
    catch(error) {
        return res.status(401).json({
            message: 'Authentication failed. Log into your account again.',
            error: error
        });
    }
}