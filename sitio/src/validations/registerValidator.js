const {check,body} = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');

module.exports = [
    check('nombre')
    .notEmpty().withMessage('El nombre es obligatorio'),
    check('apellido')
    .notEmpty().withMessage('El apellido es obligatorio'),

     body('correo')
    .custom((value,{req}) => {
        return db.User.findOne({
            where : {
                correo : value
            }
        }).then(user => {
            if(user){
                return Promise.reject()
            }
        })
    }).withMessage('El email ya está registrado'),

    check('password')
    .isLength({
        max : 6,
        min : 3
    }).withMessage('La contraseña debe tener un mínimo de 3 y un máximo de 6 caracteres'),

    body('password2')
    .custom((value,{req}) => {
        if(value !== req.body.password){
            return false
        }
        return true
    }).withMessage('La verificación de la contraseña no coincide'),

    check('terminos')
    .isString('on').withMessage('Debes aceptar los términos y condiciones')]