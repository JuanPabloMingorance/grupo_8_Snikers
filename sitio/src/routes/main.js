const express = require('express');
const router = express.Router();
const {index, search, admin} = require('../controllers/mainController')

router.get('/',index);
router.get('/search',search);
router.get('/admin',admin);

module.exports = router;
