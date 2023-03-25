const {validationResult} = require('express-validator')
const User = require('../Models/UserSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Register = async(req,res) => {
    try {
        // Validation from the req
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(402).json({errors : errors.mapped()})
        }
        // Verify the existence of the account
        const {lastName,firstName,urlImg,email,password,Role} = req.body ; 
        const found = await User.findOne({email});

        if(found){
            return res.status(401).json({message : " You have Already registred ! "})
        }

        // Creation
        // Crypt

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        // Save data to DB

        const newUser = await User.create({
            lastName,firstName, urlImg , email , password : hashedPassword , Role
        })

        res.status(200).json(newUser)


    } catch (error) {
        return res.status(500).json({message : error})
    }
}

const Login = async(req,res)=>{
    try {
                // Validation from the req
                const errors = validationResult(req);
                if(!errors.isEmpty()){
                    return res.status(402).json({errors : errors.mapped()})
                }
                // Check Email
                const {email,password} = req.body ;
                const found = await User.findOne({email})

                if(!found){
                    return res.status(402).json({message : "You have to register !"})
                }
                //Check Password

                const isMatched = await bcrypt.compare(password,found.password);

                if(!isMatched){
                    return res.status(402).json({message : "Wrong Email or Password , Try Again"})
                }

                // Generate a key = token

                const token = await jwt.sign({id : found._id}, process.env.Secret,{expiresIn : "30d"})
                res.status(200).json({found , token})
        
    } catch (error) {
        return res.status(500).json({message : error})
    }
}

const upUser = async(req,res) =>{
    try {
        const data = req.body ;
        console.log(data)
        const id = req.headers;  
        console.log(id)
        const updatedUser = await User.findOne({id : id._id}).updateOne({
            lastName : req.body.lastName,
            firstName : req.body.firstName,
            urlImg : req.body.urlImg ,
            email : req.body.email ,
        })
    } catch (error) {
        return res.status(500).json({message : error})
    }
}

// const AddPostUser = async(req,res)=>{
//     try {
//         const {id} = req.params ; 
//         const ReqUser = await User.findById({id})
//         const addPostToUser = await User.updateOne
//     } catch (error) {
        
//     }
// }

module.exports = {Register,Login,upUser}