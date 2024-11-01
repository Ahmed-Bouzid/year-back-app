var express = require("express");
var router = express.Router();
let year = new Date().getFullYear().toString();
console.log(typeof year);

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ Year: year });
});

module.exports = router;
