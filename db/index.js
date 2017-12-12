var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');


// Connection URL
var url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  console.log(Object.keys(db) );
  assert.equal(null, err);
  console.log("Connected successfully to server");


  insertLanguages(db, function(){
    db.close();
  })
});

var createCapped = function (db, callback) {
  db.createCollection("languages", { "capped": true, "size": 1000000, "max": 50000},
    function (err, results) {
      console.log("Collection created");
      callback();
      // body...
    }
  );
};
var insertLanguages = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('languages');
  // Insert some documents
  collection.insertMany([
    {name: 'English', translation: 'Beer me!'}, {name : 'Spanish', translation: 'Cerveza por favor'}, {name: 'French', translation: 'Give me a beer frenchie!'}, {name: 'Alaskan', translation: 'Give me a beer, I am cold'}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(4, result.result.n);
    assert.equal(4, result.ops.length);
    console.log("Inserted 4 languages into the collection");
    callback(result);
  });
}

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher');
// let languageSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   translation: {
//     type: String
//   },
//   hitCount: Number
// });

// let Language = mongoose.model('Language', languageSchema);

// let save = (translationObject, callback) => {

//   let options = {
//     name: translationObject.name,
//     translation: translationObject.translation,
//     hitCount: 1
//   };

//   Language.create(options);


// }
// module.exports.getLanguage = function(callback, limit){
//   Language.find(callback).limit(limit);
// }
// module.exports.save = save;
// module.exports.Language = Language;