var express = require("express");
var router = express.Router();
let year = new Date().getFullYear().toString();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ Year: year });
});

module.exports = router;
