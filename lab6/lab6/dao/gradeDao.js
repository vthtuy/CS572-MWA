var Engine = require('tingodb')();
var assert = require('assert');


var db = new Engine.Db('data', {});
var collection = db.collection('batch_document_insert_collection_safe');

collection.insert([{id:'20'}
  , {id:'11'}],  {w:1}, function(err, result) {
    assert.equal(null, err);
   // console.log(result);
    collection.findOne({id:'20'}, function(err, item) {
        assert.equal(null, err);
        assert.equal('20', item.id);
    });
    collection.find({}, function(err, item) {
        console.log('all data: ', result);
    });
});

function insert(jsonInput) {
    console.log('inserting ....');
    collection.insert(jsonInput, function(err, result) {
        console.log('inserted!');
    });
}

function update(jsonInput) {
    console.log('updating...');
    collection.insert(jsonInput, function(err, result) {
        console.log('inserted!');
    });
}

function remove(jsonInput) {
    console.log(' removing...');
    collection.remove(jsonInput, function(err, result) {
        console.log('removed!');
    });
}

function find(jsonInput) {
    console.log('find executing...', jsonInput);
    collection.find(jsonInput, function(err, result) {
        console.log('DAO find!' );        

        return result.toArray(function(err, item) {
                if(err)
                    console.log(err);
                else {
                    console.log(item);
                }
            });
    });
}

function findOne(jsonInput) {
    console.log('findOne executing...', jsonInput);
    collection.findOne({}, function(err, result) {
        console.log('findOne DAO result ');
        return result.toArray(function(err, item) {
            if(err)
                console.log(err);
            else {
                console.log(item);
            }
        });
    });
}

module.exports = {insert : insert, update : update, remove : remove, find : find, findOne : findOne };