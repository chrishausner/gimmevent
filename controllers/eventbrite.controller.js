const eventbrite = require('../services/eventbrite.service');
const getEvents = eventbrite.getEvents;

const getEventList = async (req, res, next) => {
    const {location} = req.body;
    console.log(location);
    console.log(req);
    try {
        await getEvents(location)
        res.sendStatus(201)
        next()
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) && next(error);
    }
}

module.exports = {
    getEventList
}