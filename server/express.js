const express = require('express')
const app = express()

//core module, no npm install needed
const path = require('path')
const bodyParser = require('body-parser')

//middleware
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

//static files
//app.use(express.static(path.join(__dirname, '../client' )))

//routes
app.get('/', (req, res) => {
  res.render('index', {title: 'american', translation: 'beer'})
});

app.post('/languages/find', (req, res) => {
  console.log(`${req.body.searchFor} was searched`);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))