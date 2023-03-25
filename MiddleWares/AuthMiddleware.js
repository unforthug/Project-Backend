const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const User = require('../Models/UserSchema');

exports.AuthMiddleware = async(req,res,next)=>{

    let token ;
    if (!req?.headers?.authorization) {
        res.json({message : 'There is no token attached to the header'})
    }

    if (req?.headers?.authorization?.startsWith('Bearer')) {

        try {
            token = req.headers.authorization.split(' ')[1];
            if (token) {
                const decoded = jwt.verify(token , process.env.SECRET);
                const user = await User.findById(decoded?.id).select('-password')
                req.user = user ;
                next();
            }
        } catch (error) {
            res.json({message : "Not Authorized , token expired"})
        }
        
    }
}