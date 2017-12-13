const express = require('express')
const app = express()

// orm
var mongojs = require('mongojs')
var db = mongojs('beerme', ['languages']);

//core module, no npm install needed
const path = require('path')
const bodyParser = require('body-parser')

//middleware
//just a logger in case I want to run something on load
var logger = function (req, res, next) {
  console.log('logging');
  next();
}
app.use(logger);

//bodyparser from docs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

//make sure db connects
db.on('connect', function () {
  console.log('database connected')
})

//static files
app.use(express.static(path.join(__dirname, '../client' )))

//routes
app.get('/', (req, res) => {
  res.render('index', {name: 'see', translation: 'here'})
});
//alaska
app.get('/alaska', (req,res) => {
  db.languages.find({name: 'english'}, (err, docs) => {
    if (err) {console.log(err)}
    res.render('index', {name: docs[0].name, translation: docs[0].transl})
  });
});
//canadaWest
app.get('/canadaWest', (req,res) => {
  db.languages.find({name: 'english'}, (err, docs) => {
    if (err) {console.log(err)}
    res.render('index', {name: docs[0].name, translation: docs[0].transl})
  });
});
//canadaEast
app.get('/canadaEast', (req,res) => {
  db.languages.find({name: 'french'}, (err, docs) => {
    if (err) {console.log(err)}
    res.render('index', {name: docs[0].name, translation: docs[0].transl})
  });
});
//murica
app.get('/merica', (req,res) => {
  db.languages.find({name: 'english'}, (err, docs) => {
    if (err) {console.log(err)}
    res.render('index', {name: docs[0].name, translation: docs[0].transl})
  });
});
app.get('/mexico', (req,res) => {
  db.languages.find({name: 'spanish'}, (err, docs) => {
    if (err) {console.log(err)}
    res.render('index', {name: docs[0].name, translation: docs[0].transl})
  });
});


app.post('/find', (req, res) => {
  console.log(`${req.body.searchFor} was searched`);
  let translationObj = {};
  db.languages.find({name: req.body.searchFor}, function (err, docs) {
    if (err) {
      console.log(err)
    }
    console.log(docs);
    res.render('index', {name: docs[0].name, translation: docs[0].transl});
  });
  // console.log(translationObj);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))