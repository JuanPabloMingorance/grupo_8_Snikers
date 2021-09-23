const express = require('express');
const router = express.Router();
const {index, search, admin,cart,cartEntrega,cartPago,cartFinal} = require('../controllers/mainController')
const adminCheck = require('../middlewares/adminUserCheck')
router.get('/',index);
router.get('/search',search);
router.get('/admin',adminCheck,admin);
router.get('/cart',cart);
router.get('/cartEntrega',cartEntrega);
router.get('/cartPago',cartPago);
router.get('/cartFinal',cartFinal);

module.exports = router;
