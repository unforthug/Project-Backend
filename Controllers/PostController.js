
const PostSchema = require('../Models/PostSchema')


const Post = async(req,res) => {
    try {
        const {id} = req.user ;
        const {title,post,user_id} = req.body ; 
        const newPost = await PostSchema.create({
            title : title , post : post , user_id : id
        })
        res.status(200).json(newPost)
        
    } catch (error) {
        return res.status(500).json({message : error})
    }
 
}

const SharePost = async(req,res)=>{

    const {id} = req.user ;

    try {
        const sharedPost = await PostSchema.create({
            title : title , post : post , user_id : id
        })
        res.status(200).json(sharedPost)

    } catch (error) {
        return res.status(500).json({message : error})
    }
}


const getPosts = async(req,res)=>{
    try {
        const posts = await PostSchema.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const getSinglePost = async(req,res)=>{

    try {
        const {id} = req.params;
        const post = await PostSchema.findById(id)
        console.log(post)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const getUserPosts = async(req,res)=>{
    const {id} = req.user ;

    try {
        const posts = await PostSchema.find({user_id : id})
        res.status(200).json(posts)

        
    } catch (error) {
        res.status(500).json({message : error})
    }
}





module.exports = {Post ,getPosts,getSinglePost,getUserPosts,SharePost};