var express = require("express");
var router = express.Router();
var db = require("../models");

//Index GET /api/Blogs/

router.get('/', function(req,res){
	db.Blog.find({}, function(err,blogs){
		res.status(200).send(blogs);
	});
});

//Create POST /api/Blogs/
router.post('/', function(req,res){
	db.Blog.create(req.body,function(err,blog){
		res.status(201).send(blog);
	});
});

//Get SHOW /api/Blogs/:id
router.get('/:id', function(req,res){
	db.Blog.findById(req.params.id, function(err,blog){
		res.status(200).send(blog);
	});
});

//Update PUT /api/Blogs/:id
router.put('/:id',function(req,res){
	db.Blog.findByIdAndUpdate(req.params.id,req.body, function(err,blog){
		 if (err) res.status(500).send({error: "Double check for error"});
		res.status(201).send(blog);
	});
});

//Delete 
router.delete('/:id', function(req,res){
	db.Blog.findByIdAndRemove(req.params.id, function(err,blog){
		res.status(200).send(blog);
	});
});

module.exports = router;
