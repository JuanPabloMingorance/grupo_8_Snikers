const {check, body} = require('express-validator');
const users = require('../data/users.json');
const bcrypt = require('bcryptjs'); 

module.exports = [
    check('nombre')
    .notEmpty().withMessage('El nombre es obligatorio'),

    body('password')
    .custom((value,{req}) => {
        if(value != ""){
            let user = users.find(user => user.email === req.body.email && bcrypt.compareSync(value, user.pass))
            if(user){
                return true
            }else{
                return false
            }
        }
        return true
    }).withMessage('Contraseña incorrecta'),

    check('password2')
    .custom((value,{req}) => {
        if(value != ""){
            
            if(value.length >= 3 && value.length <= 6){
                return true
            }else{
                return false
            }
        }
        return true
    }).withMessage('La contraseña debe tener un mínimo de 3 y un máximo de 6 caracteres'),

  

]