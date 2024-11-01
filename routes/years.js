var express = require("express");
var router = express.Router();
let year = new Date().getFullYear();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ Year: year.toString() });
});

module.exports = router;
