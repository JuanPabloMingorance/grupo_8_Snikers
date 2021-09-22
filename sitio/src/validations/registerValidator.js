const {check,body} = require('express-validator');
const path = require('path');
const fs = require('fs');
const usuarios = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','usuarios.json'),'utf-8'));
const bcryptjs = require('bcryptjs');

module.exports = [
    check('nombre')
    .notEmpty().withMessage('El nombre es obligatorio'),
    check('apellido')
    .notEmpty().withMessage('El apellido es obligatorio'),

     body('correo')
    .custom((value,{req}) => {
        let usuario = usuarios.find(usuario => usuario.email === value);

        if(usuario){
            return false
        }else{
            return true
        }99
    }).withMessage('Email registrado'),

    check('password')
    .isLength({
        max : 6,
        min : 3
    }).withMessage('La contraseña debe tener un mínimo de 3 y un máximo de 6 caracteres'),

    body('password2')
    .custom((value,{req}) => {
        if(value !== req.body.pass){
            return false
        }
        return true
    }).withMessage('La verificación de la contraseña no coincide'),

    check('terminos')
    .isString('on').withMessage('Debes aceptar los términos y condiciones')]