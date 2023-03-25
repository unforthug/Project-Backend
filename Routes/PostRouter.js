const express = require('express')
const router = express.Router();
const {Post,getPosts,getSinglePost,getUserPosts,SharePost} = require('../Controllers/PostController')
const {AuthMiddleware} = require('../MiddleWares/AuthMiddleware')



router.post('/',AuthMiddleware,Post)
router.get('/',getPosts)
router.get('/:id',getSinglePost)
router.get('/profile/posts',AuthMiddleware, getUserPosts)
router.post('/profile/share', SharePost)

module.exports = router;