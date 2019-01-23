var express = require('express');
var fs = require('fs');
var path = require('path');

var data = require('../data.json');

var router = express.Router();

router.post('/jobs', function(req, res) {
    var newData = data;
    newData.jobs.push({
        ...req.body.job,
        id : Math.floor(Date.now() /  1000)
    });

    fs.writeFileSync(path.resolve(__dirname,"../data.json"), JSON.stringify(newData));

   res.status(200).send("succeful");
})

router.post('/review', function(req, res) {
    var data = req.body.review;

    res.send("succeful").status(200);
})

router.post('/auth', function(req, res) {
     var user = req.body.user;

     if (user.email === data.admin.email && user.password === data.admin.password) {
        res.status(200).send({ success: true })
     } else {
        res.status(401).send({ success: false })
     }
})

module.exports = router;