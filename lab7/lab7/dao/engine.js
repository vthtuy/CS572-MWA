const express = require('express'); 
const MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://mwa:y1zXDCxniQCbcpeu@cluster0-hiuwf.mongodb.net/homework07?retryWrites=true&w=majority"
const DB_NAME = 'homework07';
const COLLECTION_NAME = 'mwa';
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
 
module.exports = {connection : connect};