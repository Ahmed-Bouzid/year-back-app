var express = require("express");
var router = express.Router();
let year = new Date().getFullYear();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // console.log(year, year.toString(), typeof year.toString());

  res.json({ year: year.toString() });
});

module.exports = router;
