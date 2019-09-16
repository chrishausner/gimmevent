const express = require('express');
const router = express.Router();
const { getEvent } = require('../controllers');
router.post('/getEvent');


module.exports = router;