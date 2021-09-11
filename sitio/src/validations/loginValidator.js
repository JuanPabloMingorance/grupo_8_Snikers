const {body} = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs')
  let usuarios = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/usuarios.json"), "utf-8")
  );


module.exports = [
    body('correo')
    .custom((value,{req}) => {
        let usuario = usuarios.find(usuario => usuario.correo === value && bcryptjs.compareSync(req.body.password,usuario.password));

        if(usuario){
            return true
        }else{
            return false
        }
    }).withMessage('Credenciales inválidas')
]