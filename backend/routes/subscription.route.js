const express = require('express');
const router = express.Router();
const {setPayments} = require('../controllers/subscription.controller')


router.route('/subscription')
        .post(setPayments)




module.exports = router