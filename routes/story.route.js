const express = require('express');
const router = express.Router();
const {generateStory} = require('../controllers/story.controller')



router.route('/generateStory')
        .post(generateStory)



module.exports = router
