const express = require('express'); 
const MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://mwa:y1zXDCxniQCbcpeu@cluster0-hiuwf.mongodb.net/mwa?retryWrites=true&w=majority"
const DB_NAME = 'mwa';
const COLLECTION_NAME = 'geo';
const client = new MongoClient(url, { useNewUrlParser: true });
const app = express()
let DB = null;

// keep connection on request object

async function connect(req, res, next) {
    try {
        if (DB) {
            req.DB = DB;
        } else {
            await client.connect();
            DB = client.db(DB_NAME);
            req.DB = DB;
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

function convertToObjectID(objectID) {
    return MongoClient.ObjectID(objectID);
}

module.exports = {connection : connect, convertToObjectID : convertToObjectID, database : {collection: COLLECTION_NAME} };