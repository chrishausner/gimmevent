const express = require('express');
const router = express.Router();
const { eventbrite } = require('../controllers');

router.get('/getEvent', eventbrite.getEventList);
router.get('/ping', (req,res) => {
    res.statusCode(200)
});


module.exports = router;