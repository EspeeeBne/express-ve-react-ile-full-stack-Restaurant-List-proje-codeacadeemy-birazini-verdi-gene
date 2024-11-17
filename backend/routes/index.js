const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("burayı görüyorsan front-end'i aç kapa yap");
});

module.exports = router;
