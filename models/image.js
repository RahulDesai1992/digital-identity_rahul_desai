'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//  schema
const  Imageschema = new Schema({
    rapidID :String,
    img: { data: Buffer, contentType: String }
});

mongoose.Promise = global.Promise;

// connect to mongo
mongoose.connect('mongodb://localhost:27017/digitalId', { useMongoClient: true });

// our model
module.exports = mongoose.model('img', ImageSchema); 


