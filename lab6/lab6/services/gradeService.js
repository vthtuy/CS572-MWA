var dao = require('../dao/gradeDao')

function insert(jsonInput) {
    console.log('service inserting...');
    dao.insert(jsonInput);
}

function update(jsonInput) {
    console.log('service update...');
    dao.update(jsonInput);
}

function remove(jsonInput) {
    console.log('service remove...');
    dao.remove(jsonInput);
}

function find(jsonInput) {
    console.log('service find...');
    return dao.find(jsonInput);
}
function findOne(jsonInput) {
    console.log('service findOne...');
    return dao.findOne(jsonInput);
}

module.exports = {insert : insert, update : update, remove : remove, find : find, findOne : findOne };