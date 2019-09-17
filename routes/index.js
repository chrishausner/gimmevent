const express = require('express');
const router = express.Router();
const eventbrite = require('../controllers/eventbrite.controller');


router.get('/getEvent', eventbrite.getEventList);
router.get('/ping', (req,res) => {
    res.send('200');
});
router.get('/', (req, res) => {
    res.send('Available routes are: /ping and /getEvent?location= your prefered location');
    console.log(req.body);
})


module.exports = router;