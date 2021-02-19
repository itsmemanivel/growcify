const express = require('express');
const app = express();
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

app.use(express.static('views'));
app.use('**', express.static('views'));

app.listen(3000, (req, res) =>{
    console.log('server on port 3000');
});