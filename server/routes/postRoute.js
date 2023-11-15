const express = require("express");
const router = express.Router();
const { createPost, getPosts } = require("../controller/postController");

///Create new post
router.post("/create", createPost);

//// get all posts
router.get("/all", getPosts);

module.exports = router;
