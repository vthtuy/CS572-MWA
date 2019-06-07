var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb');
const database = require('../dao/engine');
 

function databaseCollection(req) {
  return req.DB.collection(database.database.collection);
}

/* GET lectures listing. */
router.get('/', async function(req, res, next) {   
  const doc = await databaseCollection(req).find({}).toArray(function(err, docArray) { 
    res.json(docArray); 
  }); 
});

router.get('/:_id', async function(req, res, next) {  
  const _id = database.convertToObjectID(req.params._id);
  const doc = await databaseCollection(req).findOne({_id : _id}) 
  res.json({message : "ok", data : doc}); 
});

router.post('/',  async function(req, res, next) {
    const doc = req.body;
    console.log('inserting ...', doc);
  
    await databaseCollection(req).insertOne(doc, function(err, docInserted) {     
        res.json({message : "ok", data :docInserted.ops} );
   });
});

router.put('/', async function(req, res, next) {
  console.log('updating ...', req.body.id); 
  await databaseCollection(req).updateOne({"id" :  req.body.id}, {$set: req.body } , function(err, updated) {
        res.json({message : "saved", data : updated }).status(200);
    });
  
});

router.delete('/', async function(req, res, next) {
  console.log('deleting ...', req.body);
  //const query = { _id : req.params.id } ;
  const query = req.body ;
  await databaseCollection(req).remove(query, function(err, removed) {
    console.log(removed);
     res.json({message : "saved", data : removed});
  });
});

router.get('/nearest/:category', async function(req, res, next) {
  console.log('searching .....')
  let cat = req.params.category;
  let query = req.query;

  let critera = {category: cat, location: {$near : [ parseFloat(query.long), parseFloat(query.lat)] } };
  if (query.name) {
    critera.name = query.name;
  }

  await databaseCollection(req).find(critera ).limit(3).toArray(function(err, docArr){
        console.log('count: ', docArr.length );
        res.json(docArr);
  } );
});

module.exports = router;
