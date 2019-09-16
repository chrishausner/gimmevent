const express = require('express');
const app = express();
const routes = require('./routes');

app.get('/', (req, res) => res.send('App is working'));

app.listen(3000, () => console.log('App is listening on port 3000!'));

module.exports = app;