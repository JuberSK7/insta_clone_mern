const Post = require('../models/postModel');


 const createPost = async(req, res) => {
    try {
        const {image, discription, likes} = req.body;
        const post = new Post({image, discription, likes});
        await post.save()
        res.status(201).json(post)
    } catch (error) {
        
    res.status(500).json({error: 'Post is not Create !!'})
    }
}

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({error: "Posts is not fetched !!"})
    }
}


module.exports = {createPost, getPosts}
