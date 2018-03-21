var express = require('express'); 
var router = express.Router(); 
var bodyPaser = require('body-parser'); 
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Post = require('./Post');

router.post('/post', function (req, res) {
    Post.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        }, 
        function (err, post) {
            if (err) return res.status(500).send("There was a problem adding post to the database.");
            res.status(200).send(post);
        });
});

router.get('/post', function (req, res) {
    Post.find({}, function (err, posts) {
        if (err) return res.status(500).send("There was a problem finding the posts.");
        res.status(200).send(posts);
    });
});


module.exports = router;