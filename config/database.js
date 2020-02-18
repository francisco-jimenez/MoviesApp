//Set up mongoose connection
const MongoClient = require('mongodb').MongoClient;

const mongoose = require('mongoose');
const mongoDBURL = 'mongodb+srv://admin:admin@cluster0-og4sl.gcp.mongodb.net/test?retryWrites=true&w=majority';
// const client = new MongoClient(mongoDBURL, { useNewUrlParser: true });
mongoose.connect(mongoDBURL);
mongoose.Promise = global.Promise;
module.exports = mongoose;
