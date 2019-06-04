
var express = require('express');
var router = express.Router();
var gradeService = require('../services/gradeService');

var jsonParser = express.json();

var data = [];

function save(req, res, next) {
    console.log('saving ....'); 
    gradeService.insert(req.body); 
}
function update(req, res, next) {
    console.log('updating ....'); 
    gradeService.update(req.body); 
}
function remove(req, res, next) {
    console.log('removing ....'); 
    gradeService.remove(req.body); 
}

function find(req, res, next) {
    console.log(req.query ); 
    console.log(gradeService.find({"id" : 1}));
    res.send(gradeService.find(req.query)); 
  
}
function findOne(req, res, next) {
    console.log('findOne', req.params  );  
    res.send(gradeService.findOne(req.params)); 
}

function findAll(req, res, next) { 
    res.send(gradeService.find({}));  
}
router.get('/', jsonParser, findAll);

router.get('/:id', jsonParser, findOne);
// insert
router.post('/', jsonParser, save);
//update
router.put('/', jsonParser, update);
//delete
router.delete('/', jsonParser, remove);


module.exports = router;

