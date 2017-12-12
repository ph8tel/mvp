var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
let languageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  translation: {
    type: String
  },
  hitCount: Number
});

let Language = mongoose.model('Language', languageSchema);

let save = (translationObject, callback) => {

  let options = {
    name: translationObject.name,
    translation: translationObject.translation,
    hitCount: 1
  };

  Language.create(options);


}
module.exports.getLanguage = function(callback, limit){
  Language.find(callback).limit(limit);
}
module.exports.save = save;
module.exports.Language = Language;