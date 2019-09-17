const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const router = routes.router;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.use('/', routes);

app.listen(3000, () => console.log('App is listening on port 3000!'));

module.exports = {
    app
}