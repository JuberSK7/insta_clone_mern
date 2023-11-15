const express = require("express");
const router = express.Router();
const { suggestCreate, getSuggestPost } = require("../controller/suggestController");

///Create new post
router.post("/createsuggest", suggestCreate);

//// get all posts
router.get("/allsuggets", getSuggestPost);

module.exports = router;
