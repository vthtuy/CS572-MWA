var express = require('express');
var router = express.Router();
const COLLECTION_NAME = 'mwa';
const MongoClient = require('mongodb');

function databaseLecture(req) {
  return req.DB.collection(COLLECTION_NAME);
}

/* GET lectures listing. */
router.get('/', async function(req, res, next) {   
  const doc = await databaseLecture(req).find({}).toArray(function(err, docArray) { 
    res.json(docArray); 
  }); 
  
  // ========== ??? return undefined ???? with cursor???
  // const cursor = await databaseLecture(req).find({}); 
  // var docs = [];
  // cursor.forEach( function(err, doc) {
  //   console.dir(doc);
  //   docs.push(doc);
  // });
  // res.json(docs);
});

router.get('/:_id', async function(req, res, next) {  
  const _id = MongoClient.ObjectID(req.params._id);
  const doc = await databaseLecture(req).findOne({_id : _id}) 
  res.json({message : "saved", data : doc}); 
});

router.post('/',  async function(req, res, next) {
  const doc = req.body;
  console.log('inserting ...', doc);
  
   await databaseLecture(req).insertOne(doc, function(err, docInserted) {
     
     res.json({message : "saved", data :docInserted} );
   });
});

router.put('/', async function(req, res, next) {
  console.log('updating ...',  req.body,  req.body.id); 
  databaseLecture(req).findOne({'id' : req.body.id}, async function (err, data) { 
      // update after retrieving data to get ObjectID
      data.lecture = req.body.lecture;
      await databaseLecture(req).save(data, function(err, updated) {
      res.json({message : "saved", data : data }).status(201);
      });
      
  }); 
  
});

router.delete('/', async function(req, res, next) {
  console.log('deleting ...', req.body);
  //const query = { _id : req.params.id } ;
  const query = req.body ;
  await databaseLecture(req).remove(query, function(err, removed) {
    console.log(removed);
     res.json({message : "saved", data : removed});
  });
});

module.exports = router;
