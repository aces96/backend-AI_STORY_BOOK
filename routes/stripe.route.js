const express = require('express');
const router = express.Router();
const {paymentSheet} = require('../controllers/stripe.controller')


router.route('/payment-sheet')
        .post(paymentSheet)


module.exports = router