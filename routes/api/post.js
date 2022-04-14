const express = require("express");
const router = express.Router();

const posts = [];

router.post("/", (req, res) => {
  const { title, description } = req.body;
  posts.push({
    title,
    description,
  });
  return res.send("done");
});

router.get("/", (req, res) => {
  return res.send({
    posts: posts,
  });
});

// Post router
module.exports = router;
