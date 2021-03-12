const express = require('express');
const Post = require('../models/Post');
const router = express.Router();
//routes

router.get('/post', (req, res) => {
    res.send("post")
});

//gets all posts
router.get('/', (req,res)=>{
    try{
        const posts = await.find();
        res.json(posts);
    } catch(err){
        res.json({message:err});
    }
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
});

//get specific post
router.get('/:postid', async (req,res)=>{
   const post = await Post.findById(req.params.postId);
   res.json(post);
});

//submits post
router.post('/', async (req,res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
    .exec()
    .then(data => {
        res.json(data);

    })
    .catch(err => {
        res.json({message:err});
    });
});

module.exports=router;