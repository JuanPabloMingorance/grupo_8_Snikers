const db = require('../database/models');
const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator');


module.exports = {
    register: (req, res) => {
        return res.render('register', {
            title: "Registro",
        })
    },

    processRegister: (req, res) => {
        const { nombre, apellido, correo, password } = req.body;
        let errors = validationResult(req);
        if (errors.isEmpty()) {

        db.User.create({
            nombre: nombre.trim(),
            apellido: apellido.trim(),
            correo: correo.trim(),
            password: bcryptjs.hashSync(password, 10),
            rol_id: 2
        })
            .then(user => {

                req.session.userLogin = {
                    id: user.id,
                    nombre: user.nombre,
                    rol: user.rol_id
                }
                return res.redirect('/');
            })
            .catch(error => console.log(error))
        }else{
            return res.render('register', {
                title: "Registro",
                errores: errors.mapped(),
                old : req.body
            })
        }
    },

    login: (req, res) => {
        return res.render('login', {
            title: "Login"
        });
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {

            const { correo, remember } = req.body;

            db.User.findOne({
                where: {
                    correo
                }
            })
                .then(user => {
                    req.session.userLogin = {
                        id: user.id,
                        nombre: user.nombre,
                        rol: user.rol_id
                    }

                    if (remember) {
                        res.cookie('usuarioRemember', req.session.userLogin, { maxAge: 1000 * 60 })
                    }
                    return res.redirect('/')
                })


        } else {
            return res.render('login', {
                errores: errors.mapped()
            })
        }

    },

    profile: (req, res) => {
        db.User.findByPk(req.session.userLogin.id)
            .then(usuario => {
                return res.render('profile', {
                    title: 'Perfil de usuario',
                    usuario
                })
            })
            .catch(error=> console.log(error))
    },
    update : (req,res) => {
        const {nombre,apellido,password } = req.body;
        let errors = validationResult(req);
        if (errors.isEmpty()) {

        db.User.findByPk(req.params.id)
            .then(usuario => {
                console.log(usuario)
                db.User.update(
                    {
                        nombre,
                        apellido,
                        password : password.trim().length > 0 ? bcryptjs.hashSync(password ,10): usuario.password
                    },
                    {
                        where : {
                            id : req.params.id
                        }
                    }
                ).then( () => {
                    req.session.userLogin.nombre = nombre;
                    res.locals.userLogin = req.session.userLogin
                    return res.redirect('/')
                })
            })
            .catch(error => console.log(error))
        }else{
            db.User.findByPk(req.session.userLogin.id)
            .then(usuario => {
                return res.render('profile', {
                    title: 'Perfil de usuario',
                    usuario,
                    errores : errors.mapped()
                })
            })
            .catch(error=> console.log(error))
        }
        },
    logout: (req, res) => {
        req.session.destroy();
        res.cookie('usuarioRemember', null, { maxAge: -1 })
        return res.redirect('/')
    }
};

