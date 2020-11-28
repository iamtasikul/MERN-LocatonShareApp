const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Get Request Places");
  res.json({ message: "It Not Works" });
});

module.exports = router;
