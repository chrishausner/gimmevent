const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.get('/', (req, res) => res.send('App is working'));

app.use('/getEvent', router);
app.use('ping', router);

app.listen(3000, () => console.log('App is listening on port 3000!'));

module.exports = app;