const { eventbriteService } = require('../services');
const { getEvents } = eventbriteService;

const getEventList = async (req, res, next) => {
    const {location} = req.body;
    try {
        await getEvents(location)

        res.sendStatus(201);
        next();
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) && next(error);
    }
}

module.exports = {
    getEventList
}