const express = require("express");

const postRouter = require("./post");
const router = express.Router();

router.use("/posts", postRouter);

module.exports = router;
