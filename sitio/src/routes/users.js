const express = require('express');
const router = express.Router();
const {register, login,processLogin,processRegister,profile,logout} = require('../controllers/usersController');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');

router.get('/register', register);
router.post('/register',registerValidator,processRegister);
router.get('/login',login);
router.post('/login',loginValidator,processLogin);
router.get('/profile',profile);
router.get('/logout',logout);

module.exports = router;


