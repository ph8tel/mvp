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

//static files
app.use(express.static(path.join(__dirname, '../client' )))

//routes
app.get('/', (req, res) => res.send("hi"));

app.listen(3000, () => console.log('Example app listening on port 3000!'))