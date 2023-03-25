const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema({
    title : String ,
    descreption : String ,
    urlImg : String , 
    rating : Number , 
})

module.exports = mongoose.model('MovieCard', MovieSchema)