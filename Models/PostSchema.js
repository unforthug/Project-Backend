const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title : String ,
    post : String ,
    user_id : String , 
})

module.exports = mongoose.model('UserPost', PostSchema)