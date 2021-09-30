const{ check, body } = require('express-validator');

module.exports = [

    check('nombre')
    .notEmpty().withMessage('El nombre es obligatorio'),

    check('marca')
    .notEmpty().withMessage('Se requiere una marca'),
   
    check('descripcion')
    .notEmpty().withMessage('Se requiere una descripción'),


    check('precio')
    .notEmpty().withMessage('Debes indicar el precio').bail()
    .isInt().withMessage('Debe ser un número'),

    check('stock')
    .notEmpty().withMessage('Debes indicar el stock').bail()
    .isInt().withMessage('Debe ser un número'),


    check('categoria')
    .notEmpty().withMessage('Debes indicar la categoria'),
  

    check('seccion')
    .notEmpty()
    .withMessage('Indica la seccion'),

    body('imagen')
    .custom((value,{req}) => {
        return req.file  ? true : false
    }).withMessage('Debes agregar una imagen')

]




