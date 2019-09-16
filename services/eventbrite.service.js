const axios = require('axios');
const token = require('../authentication/auth');

const baseURL = 'https://www.eventbriteapi.com/v3/events/search';
const query = '?location.address=vancovuer&location.within=10km&expand=venue';
const URL = baseURL + query;


const res = '';
axios.get(URL, { headers: { Authorization: `Bearer ${authentication.token}` } })
    .then((response) => {
        console.log(response);
        res = response;
    }, (error) => {
        console.log(error);
});