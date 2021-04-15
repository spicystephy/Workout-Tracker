const router = require("express").Router();
const path = require("path");
const viewDir = path.join(__dirname, "../views");

router.get("/", function(req,res){
    res.sendFile(path.join(viewDir, "index.html"));
});

router.get("/stats", function(req,res){
    res.sendFile(path.join(viewDir, "stats.html"));
});

router.get("/exercise", function(req,res){
    res.sendFile(path.join(viewDir, "exercise.html"));
});

module.exports = router;