var express = require("express");
var router = express.Router();

var dashboardController =
require("../controllers/dashboardController");

router.get("/casaUsuarios", function(req, res){
    dashboardController.casaUsuarios(req, res);
});

module.exports = router;