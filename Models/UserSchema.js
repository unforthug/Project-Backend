const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    lastName : String ,
    firstName : String , 
    email : {
        type : String , 
        required : true , 
        unique : true
    },
    password : {
        type : String ,
        required : true,
    }, 
    urlImg : String , 
    Role : {
        type : String , 
        dr : ["user","admin"],
        default : "user"}
})

module.exports = mongoose.model('AuthUser', UserSchema)