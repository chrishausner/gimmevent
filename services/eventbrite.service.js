const axios = require('axios');
const token = require('../authentication/auth');

const baseURL = 'https://www.eventbriteapi.com/v3/events/search';



const getEvents = async (location) => {

    const query = '?location.address='+location+'&location.within=10km&expand=venue';
    const URL = baseURL + query;
    axios.get(URL, { headers: { Authorization: `Bearer ${authentication.token}` } })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
    });
};

module.exports = {
    getEvents
}