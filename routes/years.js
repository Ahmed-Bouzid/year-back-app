var express = require("express");
var router = express.Router();
const today = new Date();
const year = today.getFullYear();

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log(year);

  res.json({ Year: year.toString() });
});

module.exports = router;
