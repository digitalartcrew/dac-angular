var express = require("express");
var router = express.Router();
var db = require("../models");

//Index GET /api/crews/

router.get('/', function(req,res){
	db.Crew.find({}, function(err,crews){
		res.status(200).send(crews);
	});
});

//Create POST /api/crews/
router.post('/', function(req,res){
	db.Crew.create(req.body,function(err,crew){
		res.status(201).send(crew);
	});
});

//Get SHOW /api/crews/:id
router.get('/:id', function(req,res){
	db.Crew.findById(req.params.id, function(err,crew){
		res.status(200).send(crew);
	});
});

//Update PUT /api/crews/:id
router.put('/:id',function(req,res){
	db.Crew.findByIdAndUpdate(req.params.id,req.body, function(err,crew){
		 if (err) res.status(500).send({error: "Double check for error"});
		res.status(201).send(crew);
	});
});

//Delete 
router.delete('/:id', function(req,res){
	db.Crew.findByIdAndRemove(req.params.id, function(err,crew){
		res.status(200).send(crew);
	});
});

module.exports = router;
