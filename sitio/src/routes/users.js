const express = require('express');
const router = express.Router();
const {register, login,processLogin,processRegister,profile} = require('../controllers/usersController');
const loginValidator = require('../validations/loginValidator');

router.get('/register', register);
router.post('/register',processRegister);
router.get('/login',login);
router.post('/login',loginValidator,processLogin);
router.get('/profile',profile);

module.exports = router;

