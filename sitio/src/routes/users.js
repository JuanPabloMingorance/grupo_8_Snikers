const express = require('express');
const router = express.Router();
const {register, login,processLogin,processRegister,profile} = require('../controllers/usersController');
const loginValidator = require('../validations/loginValidator');
const registeValidator = require('../validations/registerValidator');

router.get('/register', register);
router.post('/register',registerValidator,processRegister);
router.get('/login',login);
router.post('/login',loginValidator,processLogin);
router.get('/profile',profile);

module.exports = router;

const express = require('express');
const router = express.Router();

const {register, processRegister,login,processLogin,profile, logout,update} = require('../controllers/usersController')
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');


const profileValidator = require('../validations/profileValidator');

/* /users */
router.get('/register',register);
router.post('/register',registerValidator, processRegister);
router.get('/login',login);
router.post('/login',loginValidator, processLogin);

router.get('/profile',profile);

router.get('/logout',logout);


module.exports = router;