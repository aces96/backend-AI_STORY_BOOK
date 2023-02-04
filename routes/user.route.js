const express = require('express');
const router = express.Router();
const {loginMiddleware} = require('../middlewares/login.middleware')
const {signUp, signIn} = require('../controllers/auth.controller')


router.route("/signup", loginMiddleware)
        .post(signUp)




router.route('/signin', loginMiddleware)
        .post(signIn)



module.exports = router
