const Movies = require('../Models/MovieSchema')


const AddMovie = async(req,res) => {
    try {
        const {title,descreption,urlImg , rating} = req.body ; 
        const newMovie = await Movies.create({
            title : title , descreption : descreption , urlImg : urlImg , rating : rating 
        })
        res.status(200).json(newMovie)
        
    } catch (error) {
        return res.status(500).json({message : error})
    }
 
}

const getMovies = async(req,res)=>{
    try {
        const movies = await Movies.find()
        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json({message : error})
    }
}

module.exports = {AddMovie,getMovies};